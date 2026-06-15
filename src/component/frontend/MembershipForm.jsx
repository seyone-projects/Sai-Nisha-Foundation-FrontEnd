import React, { useState, useRef } from 'react';
import {
  Container, Paper, Box, Typography, TextField, Grid, Button,
  Avatar, IconButton, Divider, Stepper, Step, StepLabel,
  CircularProgress, Alert, Chip
} from '@mui/material';
import {
  PhotoCamera, NavigateNext, NavigateBefore, CheckCircleOutline,
  Phone, Email, LocationOn, CloudUpload as UploadIcon,
  VerifiedUser, Cancel as CancelIcon
} from '@mui/icons-material';

const steps = ['Personal Details', 'Profile Photo', 'Review & Confirm'];

const BRAND_COLORS = {
  maroon: '#0c0909',
  gold: '#E59834',
  teal: '#008B9B',
  green: '#43882B',
  navy: '#093154',
  lightBg: '#F4F7F9'
};

// ─── Verhoeff Algorithm for Aadhaar Validation ───────────────────────────────
const d = [
  [0,1,2,3,4,5,6,7,8,9],[1,2,3,4,0,6,7,8,9,5],[2,3,4,0,1,7,8,9,5,6],
  [3,4,0,1,2,8,9,5,6,7],[4,0,1,2,3,9,5,6,7,8],[5,9,8,7,6,0,4,3,2,1],
  [6,5,9,8,7,1,0,4,3,2],[7,6,5,9,8,2,1,0,4,3],[8,7,6,5,9,3,2,1,0,4],
  [9,8,7,6,5,4,3,2,1,0]
];
const p = [
  [0,1,2,3,4,5,6,7,8,9],[1,5,7,6,2,8,3,0,9,4],[5,8,0,3,7,9,1,4,6,2],
  [8,9,1,6,0,4,3,5,2,7],[9,4,5,3,1,2,6,8,7,0],[4,2,8,6,5,7,3,9,0,1],
  [2,7,9,3,8,0,6,4,1,5],[7,0,4,6,9,1,3,5,8,2]
];

const validateAadhaar = (aadhaarString) => {
  const clean = aadhaarString.replace(/\s+/g, '');
  if (clean.length !== 12 || !/^\d+$/.test(clean)) return false;
  if (clean[0] === '0' || clean[0] === '1') return false;
  let c = 0;
  clean.split('').map(Number).reverse().forEach((n, i) => {
    c = d[c][p[i % 8][n]];
  });
  return c === 0;
};

const formatAadhaarDisplay = (val) => {
  const clean = val.replace(/\D/g, '').slice(0, 12);
  return clean.match(/.{1,4}/g)?.join(' ') || clean;
};

// ─── OTP Box Component ────────────────────────────────────────────────────────
function OTPInput({ otp, setOtp, disabled }) {
  const refs = useRef([]);

  const handleChange = (val, idx) => {
    if (!/^\d?$/.test(val)) return;
    const next = [...otp];
    next[idx] = val;
    setOtp(next);
    if (val && idx < 5) refs.current[idx + 1]?.focus();
  };

  const handleKeyDown = (e, idx) => {
    if (e.key === 'Backspace' && !otp[idx] && idx > 0) {
      refs.current[idx - 1]?.focus();
    }
  };

  return (
    <Box display="flex" gap={1} justifyContent="center" my={2}>
      {otp.map((digit, i) => (
        <input
          key={i}
          ref={el => refs.current[i] = el}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={digit}
          disabled={disabled}
          onChange={e => handleChange(e.target.value, i)}
          onKeyDown={e => handleKeyDown(e, i)}
          style={{
            width: 44, height: 50, textAlign: 'center', fontSize: 20,
            fontWeight: 700, border: `2px solid ${digit ? '#093154' : '#ccc'}`,
            borderRadius: 8, outline: 'none', background: digit ? '#ebf0ff' : '#fff'
          }}
        />
      ))}
    </Box>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function MembershipForm() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '', mobileNo: '', dob: '', aadhaarNo: '', membershipId: ''
  });
  const [profilePreview, setProfilePreview] = useState(null);
  const cardRef = useRef(null);

  // ── Aadhaar OTP Verification State ──
  const [aadhaarStatus, setAadhaarStatus]   = useState('idle');
  // idle | sending | otp_sent | verifying | verified | failed
  const [refId, setRefId]                   = useState('');
  const [otp, setOtp]                       = useState(['','','','','','']);
  const [otpError, setOtpError]             = useState('');
  const [aadhaarApiError, setAadhaarApiError] = useState('');
  const [resendTimer, setResendTimer]       = useState(0);
  const timerRef                            = useRef(null);

  const startTimer = () => {
    setResendTimer(30);
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setResendTimer(t => {
        if (t <= 1) { clearInterval(timerRef.current); return 0; }
        return t - 1;
      });
    }, 1000);
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const [y, m, day] = dateStr.split('-');
    return `${day}/${m}/${y}`;
  };

  const generateID = () => {
    const yr = new Date().getFullYear();
    const lastId = localStorage.getItem('last_sainisha_id');
    if (!lastId || lastId === 'undefined' || lastId.includes('NaN')) {
      return `SN${yr}001`;
    }
    const match = lastId.match(/\d{3}$/);
    const next = parseInt(match ? match[0] : '0', 10) + 1;
    return `SN${yr}${String(next).padStart(3, '0')}`;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'aadhaarNo') {
      // Reset verification if user edits Aadhaar
      setAadhaarStatus('idle');
      setOtp(['','','','','','']);
      setRefId('');
      setOtpError('');
      setAadhaarApiError('');
      setFormData(prev => ({ ...prev, aadhaarNo: formatAadhaarDisplay(value) }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setProfilePreview(URL.createObjectURL(file));
  };

  // ── Step 1: Send OTP ──────────────────────────────────────────────────────
  const handleSendOtp = async () => {
    setAadhaarApiError('');
    const clean = formData.aadhaarNo.replace(/\s/g, '');

    if (!validateAadhaar(clean)) {
      setAadhaarApiError('Invalid Aadhaar number. Please check and try again.');
      return;
    }

    setAadhaarStatus('sending');
    try {
      const res = await fetch('http://localhost:5000/api/aadhaar/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ aadhaarNumber: clean })
      });
      const data = await res.json();
      if (data.success) {
        setRefId(data.ref_id);
        setAadhaarStatus('otp_sent');
        startTimer();
      } else {
        setAadhaarApiError(data.message || 'Failed to send OTP.');
        setAadhaarStatus('idle');
      }
    } catch {
      setAadhaarApiError('Cannot connect to server. Make sure backend is running on port 5000.');
      setAadhaarStatus('idle');
    }
  };

  // ── Step 2: Verify OTP ────────────────────────────────────────────────────
  const handleVerifyOtp = async () => {
    const otpStr = otp.join('');
    if (otpStr.length !== 6) {
      setOtpError('Please enter all 6 digits.');
      return;
    }
    setOtpError('');
    setAadhaarStatus('verifying');
    try {
      const res = await fetch('http://localhost:5000/api/aadhaar/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          refId,
          otp: otpStr,
          aadhaarNumber: formData.aadhaarNo.replace(/\s/g, '')
        })
      });
      const data = await res.json();
      if (data.success) {
        setAadhaarStatus('verified');
        clearInterval(timerRef.current);
      } else {
        setOtpError(data.message || 'Incorrect OTP. Try again.');
        setAadhaarStatus('otp_sent');
      }
    } catch {
      setOtpError('Cannot connect to server.');
      setAadhaarStatus('otp_sent');
    }
  };

  const handleResetOtp = () => {
    setAadhaarStatus('idle');
    setOtp(['','','','','','']);
    setRefId('');
    setOtpError('');
    setAadhaarApiError('');
    clearInterval(timerRef.current);
  };

  // ── Navigation ────────────────────────────────────────────────────────────
  const handleNext = () => {
    if (activeStep === 0) {
      if (!formData.name || !formData.mobileNo || !formData.dob || !formData.aadhaarNo) {
        alert('Please fill out all required fields.');
        return;
      }
      if (formData.mobileNo.length !== 10) {
        alert('Please enter a valid 10-digit mobile number.');
        return;
      }
      if (aadhaarStatus !== 'verified') {
        alert('Please verify your Aadhaar number with OTP before proceeding.');
        return;
      }
    }
    if (activeStep === 1 && !formData.membershipId) {
      const newId = generateID();
      setFormData(prev => ({ ...prev, membershipId: newId }));
      localStorage.setItem('last_sainisha_id', newId);
    }
    setActiveStep(prev => prev + 1);
  };

  const handleBack = () => setActiveStep(prev => prev - 1);

  // ── Submit ────────────────────────────────────────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/members/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          mobileNo: formData.mobileNo,
          dob: formData.dob,
          aadhaarLast4: formData.aadhaarNo.replace(/\s/g, '').slice(-4),
          membershipId: formData.membershipId,
          aadhaarVerified: true
        })
      });
      const result = await res.json();
      if (result.success) {
        alert('Registration Successful! Saved in MongoDB.');
      } else {
        alert('Database error: ' + result.error);
      }
    } catch {
      alert('Could not connect to backend server. Make sure it is running!');
    }
  };

  // ── Aadhaar Verification UI Block ─────────────────────────────────────────
  const renderAadhaarVerification = () => {
    if (aadhaarStatus === 'verified') {
      return (
        <Alert
          icon={<VerifiedUser />}
          severity="success"
          sx={{ mt: 1, borderRadius: 2 }}
          action={
            <Button size="small" color="inherit" onClick={handleResetOtp}>
              Change
            </Button>
          }
        >
          Aadhaar verified successfully ✓
        </Alert>
      );
    }

    if (aadhaarStatus === 'idle') {
      return (
        <>
          {aadhaarApiError && (
            <Alert severity="error" sx={{ mt: 1, mb: 1 }}>{aadhaarApiError}</Alert>
          )}
          <Button
            variant="outlined"
            fullWidth
            sx={{ mt: 1, color: BRAND_COLORS.navy, borderColor: BRAND_COLORS.navy, fontWeight: 600 }}
            onClick={handleSendOtp}
            disabled={formData.aadhaarNo.replace(/\s/g,'').length !== 12}
          >
            Send OTP to Verify Aadhaar
          </Button>
          {formData.aadhaarNo.replace(/\s/g,'').length < 12 && (
            <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5, display: 'block' }}>
              Enter 12-digit Aadhaar number above to enable OTP
            </Typography>
          )}
        </>
      );
    }

    if (aadhaarStatus === 'sending') {
      return (
        <Box display="flex" alignItems="center" gap={1} mt={1}>
          <CircularProgress size={18} />
          <Typography variant="body2" color="text.secondary">Sending OTP to registered mobile…</Typography>
        </Box>
      );
    }

    if (aadhaarStatus === 'otp_sent' || aadhaarStatus === 'verifying') {
      return (
        <Box mt={2} p={2} sx={{ background: '#f0f9ff', borderRadius: 2, border: '1px solid #bae6fd' }}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="body2" fontWeight={600} color={BRAND_COLORS.navy}>
              📱 OTP sent to Aadhaar-registered mobile
            </Typography>
            <IconButton size="small" onClick={handleResetOtp} title="Cancel">
              <CancelIcon fontSize="small" />
            </IconButton>
          </Box>

          <OTPInput
            otp={otp}
            setOtp={(val) => { setOtp(val); setOtpError(''); }}
            disabled={aadhaarStatus === 'verifying'}
          />

          {otpError && (
            <Alert severity="error" sx={{ mb: 1, py: 0 }}>{otpError}</Alert>
          )}

          <Button
            variant="contained"
            fullWidth
            onClick={handleVerifyOtp}
            disabled={aadhaarStatus === 'verifying' || otp.join('').length !== 6}
            sx={{ bgcolor: BRAND_COLORS.navy, '&:hover': { bgcolor: '#124a7c' }, fontWeight: 600 }}
          >
            {aadhaarStatus === 'verifying'
              ? <><CircularProgress size={16} color="inherit" sx={{ mr: 1 }} /> Verifying…</>
              : 'Verify OTP'}
          </Button>

          <Box mt={1} textAlign="center">
            {resendTimer > 0 ? (
              <Typography variant="caption" color="text.secondary">
                Resend OTP in <strong>{resendTimer}s</strong>
              </Typography>
            ) : (
              <Button size="small" onClick={handleSendOtp} sx={{ color: BRAND_COLORS.navy }}>
                Resend OTP
              </Button>
            )}
          </Box>
        </Box>
      );
    }
  };

  // ─────────────────────────────────────────────────────────────────────────
  return (
    <Container maxWidth="md" sx={{ mt: 5, mb: 5 }}>
      <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>

        <Box display="flex" justifyContent="center" mb={3}>
          <Box
            component="img"
            src="/src/component/page/image/ngo-removebg-preview.png"
            alt="Sai Nisha Foundation Logo"
            sx={{ width: '100%', maxWidth: 320, height: 'auto', objectFit: 'contain' }}
          />
        </Box>

        <Typography variant="h6" align="center" fontWeight="bold"
          sx={{ mb: 3, letterSpacing: 1, color: BRAND_COLORS.navy }}>
          LIFE MEMBERSHIP APPLICATION FORM
        </Typography>

        <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
          {steps.map(label => (
            <Step key={label}><StepLabel>{label}</StepLabel></Step>
          ))}
        </Stepper>

        <Divider sx={{ mb: 4 }} />

        <form onSubmit={handleSubmit}>

          {/* ── STEP 1: Personal Details + Aadhaar Verification ─────────── */}
          {activeStep === 0 && (
            <Box sx={{ minHeight: '220px' }}>
              <Grid container spacing={3}>

                <Grid item xs={12}>
                  <TextField label="Full Name" name="name" variant="outlined" fullWidth required
                    value={formData.name} onChange={handleInputChange} placeholder="Enter full name" />
                </Grid>

                <Grid item xs={12}>
                  <TextField label="Mobile Number" name="mobileNo" variant="outlined" fullWidth required
                    inputProps={{ maxLength: 10 }} value={formData.mobileNo} onChange={handleInputChange}
                    placeholder="Enter 10-digit mobile number" />
                </Grid>

                <Grid item xs={12}>
                  <TextField label="Date of Birth" name="dob" type="date" variant="outlined" fullWidth required
                    InputLabelProps={{ shrink: true }} value={formData.dob} onChange={handleInputChange} />
                </Grid>

                {/* ── Aadhaar Field + Verify Status Chip ── */}
                <Grid item xs={12}>
                  <Box display="flex" alignItems="center" gap={1} mb={0.5}>
                    <Typography variant="body2" fontWeight={600} color={BRAND_COLORS.navy}>
                      Aadhaar Number
                    </Typography>
                    {aadhaarStatus === 'verified' && (
                      <Chip label="Verified ✓" size="small" color="success" icon={<VerifiedUser />} />
                    )}
                  </Box>
                  <TextField
                    name="aadhaarNo"
                    variant="outlined"
                    fullWidth
                    required
                    inputProps={{ maxLength: 14 }}
                    value={formData.aadhaarNo}
                    onChange={handleInputChange}
                    placeholder="Enter 12-digit Aadhaar number"
                    disabled={aadhaarStatus === 'verified'}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        ...(aadhaarStatus === 'verified' && {
                          borderColor: 'success.main',
                          '& fieldset': { borderColor: 'success.main' }
                        })
                      }
                    }}
                  />

                  {/* ── Verification UI ── */}
                  {renderAadhaarVerification()}
                </Grid>

              </Grid>
            </Box>
          )}

          {/* ── STEP 2: Profile Photo ────────────────────────────────────── */}
          {activeStep === 1 && (
            <Box display="flex" flexDirection="column" alignItems="center"
              justifyContent="center" sx={{ minHeight: '220px' }}>
              <Typography variant="body2" fontWeight="medium" color="text.secondary" sx={{ mb: 2 }}>
                Profile Photo
              </Typography>
              <Box position="relative">
                <Avatar src={profilePreview} variant="rounded"
                  sx={{ width: 160, height: 180, borderRadius: 2, boxShadow: 2,
                    border: '1px solid', borderColor: 'divider', backgroundColor: '#f5f5f5' }}>
                  {!profilePreview && <PhotoCamera sx={{ fontSize: 40, color: 'text.disabled' }} />}
                </Avatar>
                <label htmlFor="icon-button-file">
                  <input accept="image/*" id="icon-button-file" type="file"
                    style={{ display: 'none' }} onChange={handleImageChange} />
                  <IconButton color="primary" component="span"
                    sx={{ position: 'absolute', bottom: -10, right: -10,
                      backgroundColor: 'background.paper', boxShadow: 2,
                      '&:hover': { backgroundColor: '#f0f0f0' } }}>
                    <UploadIcon />
                  </IconButton>
                </label>
              </Box>
              <Typography variant="caption" color="text.secondary" sx={{ mt: 2, textAlign: 'center' }}>
                Upload a clear passport-size photograph
              </Typography>
            </Box>
          )}

          {/* ── STEP 3: Review & Card Preview ───────────────────────────── */}
          {activeStep === 2 && (
            <Box display="flex" flexDirection="column" alignItems="center"
              sx={{ minHeight: '340px', width: '100%', overflowX: 'auto', py: 2 }}>

              <Paper ref={cardRef} elevation={6}
                sx={{
                  width: '600px', height: '380px', borderRadius: '20px', overflow: 'hidden',
                  position: 'relative', backgroundColor: '#ffffff',
                  border: `1px solid rgba(9, 49, 84, 0.2)`, display: 'flex',
                  flexDirection: 'column', justifyContent: 'space-between',
                  background: `linear-gradient(145deg, #ffffff 0%, ${BRAND_COLORS.lightBg} 100%)`,
                  p: '24px 24px 12px 24px', boxShadow: '0 20px 40px rgba(9, 49, 84, 0.08)',
                  boxSizing: 'border-box'
                }}>

                {/* Border Ribbons */}
                {['top','bottom'].map(pos => (
                  <Box key={pos} sx={{ position:'absolute', [pos]:0, left:0, right:0, height:'10px', display:'flex', zIndex:5 }}>
                    {Object.values(BRAND_COLORS).slice(0,5).map((c,i) => (
                      <Box key={i} sx={{ flex:1, bgcolor: c }} />
                    ))}
                  </Box>
                ))}
                {['left','right'].map(pos => (
                  <Box key={pos} sx={{ position:'absolute', top:'10px', bottom:'10px', [pos]:0, width:'10px', display:'flex', flexDirection:'column', zIndex:5 }}>
                    {Object.values(BRAND_COLORS).slice(0,5).map((c,i) => (
                      <Box key={i} sx={{ flex:1, bgcolor: c }} />
                    ))}
                  </Box>
                ))}

                {/* Background circles */}
                <Box sx={{ position:'absolute', top:'-40px', left:'-40px', width:'200px', height:'200px', borderRadius:'50%', bgcolor: BRAND_COLORS.teal, opacity:0.06, pointerEvents:'none', zIndex:0 }} />
                <Box sx={{ position:'absolute', bottom:'20px', right:'-50px', width:'250px', height:'250px', borderRadius:'50%', bgcolor: BRAND_COLORS.maroon, opacity:0.04, pointerEvents:'none', zIndex:0 }} />

                {/* Header */}
                <Box display="flex" justifyContent="space-between" alignItems="center" width="100%" sx={{ zIndex:1, mt:0.5 }}>
                  <Avatar src="/src/component/page/image/Sainisha-removebg-preview.png"
                    alt="Logo" variant="square"
                    sx={{ width:250, height:70, objectFit:'contain' }} />
                  <Box display="flex" flexDirection="column" gap={0.4} alignItems="flex-start">
                    <Box display="flex" alignItems="center" gap={1}>
                      <Phone sx={{ fontSize:10, color:'#fff', bgcolor: BRAND_COLORS.navy, borderRadius:'50%', p:'2px' }} />
                      <Typography sx={{ fontSize:'0.95rem', fontWeight:700, color: BRAND_COLORS.navy }}>+91 99622 90875</Typography>
                    </Box>
                    <Box display="flex" alignItems="center" gap={1}>
                      <Email sx={{ fontSize:10, color:'#fff', bgcolor: BRAND_COLORS.navy, borderRadius:'50%', p:'2px' }} />
                      <Typography sx={{ fontSize:'0.95rem', fontWeight:700, color: BRAND_COLORS.navy }}>hello@sainisha.in</Typography>
                    </Box>
                  </Box>
                </Box>

                {/* Title */}
                <Box width="100%" textAlign="center" my={1} sx={{ zIndex:1 }}>
                  <Typography variant="subtitle1" sx={{
                    fontWeight:800, color: BRAND_COLORS.navy,
                    display:'inline-block', borderBottom:`3px solid ${BRAND_COLORS.gold}`,
                    pb:'2px', letterSpacing:'2px', fontSize:'1.15rem'
                  }}>
                    SAI NISHA MEMBERSHIP CARD
                  </Typography>
                </Box>

                {/* Data + Photo */}
                <Grid container spacing={2} alignItems="center"
                  sx={{ mb:1, px:1, zIndex:1, width:'100%', ml:0 }}>
                  <Grid item xs={7.5} marginLeft={6} sx={{ pl:'0px !important' }}>
                    <Box display="flex" flexDirection="column" gap={1}>
                      {[
                        { label:'Name', value: formData.name?.toUpperCase() },
                        { label:'Mobile No', value: formData.mobileNo },
                        { label:'Date Of Birth', value: formatDate(formData.dob) },
                        { label:'Aadhaar No', value: `XXXX XXXX ${formData.aadhaarNo.replace(/\s/g,'').slice(-4)}` },
                        { label:'ID No', value: formData.membershipId, highlight: true }
                      ].map(({ label, value, highlight }) => (
                        <Box key={label} display="flex" alignItems="center">
                          <Typography sx={{ width:'110px', minWidth:'110px', fontWeight:800, color: BRAND_COLORS.navy, fontSize:'0.9rem' }}>{label}</Typography>
                          <Typography sx={{ fontWeight:800, color: BRAND_COLORS.gold, mr:1.5, fontSize:'0.9rem' }}>:</Typography>
                          <Typography sx={{ fontWeight:700, color: highlight ? BRAND_COLORS.maroon : '#111', fontSize:'0.9rem', letterSpacing: highlight ? '0.5px' : 0, textTransform: highlight ? 'uppercase' : 'none' }}>
                            {value || '---'}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Grid>

                  <Grid item xs={4.5} display="flex" justifyContent="center" marginLeft={10} sx={{ pr:'0px !important' }}>
                    <Box sx={{
                      width:'115px', height:'135px', borderRadius:'12px',
                      border:`2px solid ${BRAND_COLORS.navy}`, overflow:'hidden',
                      boxShadow:'0px 6px 15px rgba(9,49,84,0.12)', backgroundColor:'#fafafa'
                    }}>
                      <Box component="img"
                        src={profilePreview || 'https://via.placeholder.com/115x135?text=No+Photo'}
                        alt="Member" sx={{ width:'100%', height:'100%', objectFit:'cover' }} />
                    </Box>
                  </Grid>
                </Grid>

                {/* Footer */}
                <Box display="flex" alignItems="center" justifyContent="center" gap={0.5}
                  sx={{ borderTop:`1.5px solid rgba(9,49,84,0.15)`, pt:1, pb:0.5, width:'100%', zIndex:1 }}>
                  <LocationOn sx={{ color: BRAND_COLORS.gold, fontSize:14 }} />
                  <Typography sx={{ fontSize:'0.80rem', fontWeight:700, color: BRAND_COLORS.navy, textAlign:'center', lineHeight:1.3 }}>
                    10, Thiruvallur Street, Shanthi Nagar, Irumbuliyur, East Tambaram, Chennai - 600059
                  </Typography>
                </Box>
              </Paper>

              {/* Verified badge on review */}
              <Box display="flex" alignItems="center" gap={1} sx={{ mt: 2 }}>
                <VerifiedUser color="success" />
                <Typography variant="body2" fontWeight={600} color="success.main">
                  Aadhaar identity verified via UIDAI OTP
                </Typography>
              </Box>

              <Box display="flex" alignItems="center" gap={1} sx={{ mt: 1, color: 'success.main' }}>
                <CheckCircleOutline />
                <Typography variant="body2" fontWeight="medium">
                  Everything looks ready for card registration.
                </Typography>
              </Box>
            </Box>
          )}

          {/* ── Navigation Buttons ───────────────────────────────────────── */}
          <Box display="flex" justifyContent="space-between" sx={{ mt: 4 }}>
            <Button disabled={activeStep === 0} onClick={handleBack}
              startIcon={<NavigateBefore />} variant="outlined"
              sx={{ color: BRAND_COLORS.navy, borderColor: BRAND_COLORS.navy }}>
              Back
            </Button>

            {activeStep < steps.length - 1 ? (
              <Button variant="contained" onClick={handleNext} endIcon={<NavigateNext />}
                sx={{ backgroundColor: BRAND_COLORS.navy, '&:hover': { backgroundColor: '#124a7c' } }}>
                Next
              </Button>
            ) : (
              <Button type="submit" variant="contained" size="large"
                sx={{ px:4, fontWeight:'bold', boxShadow:3,
                  backgroundColor: BRAND_COLORS.navy, '&:hover': { backgroundColor: '#124a7c' } }}>
                Generate & Download Membership Card
              </Button>
            )}
          </Box>
        </form>
      </Paper>
    </Container>
  );
}
