import React, { useState, useRef } from 'react';
import {
  Container, Paper, Box, Typography, TextField, Grid, Button,
  Avatar, IconButton, Divider, Stepper, Step, StepLabel, Chip, Alert
} from '@mui/material';
import {
  PhotoCamera, NavigateNext, NavigateBefore, CheckCircleOutline,
  Phone, Email, LocationOn, CloudUpload as UploadIcon,
  CreditCard, CheckCircle
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

// ─── Aadhaar Upload Box ───────────────────────────────────────────────────────
function AadhaarUploadBox({ label, preview, onUpload, chipColor }) {
  const inputId = `aadhaar-${label.replace(/\s+/g, '-').toLowerCase()}`;
  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={1}>
      <Chip
        label={label}
        size="small"
        sx={{ bgcolor: chipColor, color: '#fff', fontWeight: 700, letterSpacing: 1 }}
      />
      <Box
        sx={{
          width: 320,
          height: 200,
          borderRadius: '12px',
          border: preview ? `2px solid ${BRAND_COLORS.navy}` : '2px dashed #aac0d8',
          overflow: 'hidden',
          backgroundColor: preview ? '#000' : '#f4f7fb',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          boxShadow: preview ? '0 8px 24px rgba(9,49,84,0.15)' : 'none',
          transition: 'all 0.2s',
        }}
      >
        {preview ? (
          <Box
            component="img"
            src={preview}
            alt={label}
            sx={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        ) : (
          <Box display="flex" flexDirection="column" alignItems="center" gap={1}>
            <CreditCard sx={{ fontSize: 40, color: '#aac0d8' }} />
            <Typography variant="caption" color="text.secondary" textAlign="center">
              Click to upload {label}
            </Typography>
          </Box>
        )}

        {/* Overlay upload button */}
        <label htmlFor={inputId}>
          <input
            accept="image/*"
            id={inputId}
            type="file"
            style={{ display: 'none' }}
            onChange={onUpload}
          />
          <IconButton
            component="span"
            size="small"
            sx={{
              position: 'absolute',
              bottom: 8,
              right: 8,
              bgcolor: BRAND_COLORS.navy,
              color: '#fff',
              boxShadow: 2,
              '&:hover': { bgcolor: '#124a7c' },
            }}
          >
            <UploadIcon fontSize="small" />
          </IconButton>
        </label>

        {/* Verified tick */}
        {preview && (
          <CheckCircle
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              color: '#22c55e',
              fontSize: 22,
              bgcolor: '#fff',
              borderRadius: '50%',
            }}
          />
        )}
      </Box>
      {preview && (
        <Typography variant="caption" color="success.main" fontWeight={600}>
          ✓ {label} uploaded
        </Typography>
      )}
    </Box>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function MembershipForm() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '', mobileNo: '', dob: '', gender: 'Male', membershipId: ''
  });
  const [profilePreview, setProfilePreview]         = useState(null);
  const [aadhaarFrontPreview, setAadhaarFrontPreview] = useState(null);
  const [aadhaarBackPreview, setAadhaarBackPreview]   = useState(null);
  const cardRef = useRef(null);

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const [y, m, day] = dateStr.split('-');
    return `${day}/${m}/${y}`;
  };

  const generateID = () => {
    const yr = new Date().getFullYear();
    const lastId = localStorage.getItem('last_sainisha_id');
    if (!lastId || lastId === 'undefined' || lastId.includes('NaN')) return `SN${yr}001`;
    const match = lastId.match(/\d{3}$/);
    const next = parseInt(match ? match[0] : '0', 10) + 1;
    return `SN${yr}${String(next).padStart(3, '0')}`;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (setter) => (e) => {
    const file = e.target.files[0];
    if (file) setter(URL.createObjectURL(file));
  };

  const handleNext = () => {
    if (activeStep === 0) {
      if (!formData.name || !formData.mobileNo || !formData.dob) {
        alert('Please fill out all required fields.');
        return;
      }
      if (formData.mobileNo.length !== 10) {
        alert('Please enter a valid 10-digit mobile number.');
        return;
      }
      if (!aadhaarFrontPreview || !aadhaarBackPreview) {
        alert('Please upload both front and back images of your Aadhaar card.');
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
          gender: formData.gender,
          membershipId: formData.membershipId,
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
  return (
    <Container maxWidth="md" sx={{ mt: 5, mb: 5 }}>
      <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>

        {/* Logo */}
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

          {/* ── STEP 1: Personal Details + Aadhaar Upload ────────────────── */}
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

                <Grid item xs={12}>
                  <TextField label="Gender" name="gender" select variant="outlined" fullWidth
                    SelectProps={{ native: true }} value={formData.gender} onChange={handleInputChange}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </TextField>
                </Grid>

                {/* ── Aadhaar Upload ── */}
                <Grid item xs={12}>
                  <Box
                    sx={{
                      p: 2.5, borderRadius: 2,
                      border: '1px solid #dde6ef',
                      background: '#f8fbff',
                    }}
                  >
                    <Box display="flex" alignItems="center" gap={1} mb={2}>
                      <CreditCard sx={{ color: BRAND_COLORS.navy, fontSize: 20 }} />
                      <Typography variant="body1" fontWeight={700} color={BRAND_COLORS.navy}>
                        Aadhaar Card Upload
                      </Typography>
                    </Box>

                    <Box
                      display="flex"
                      flexDirection={{ xs: 'column', sm: 'row' }}
                      gap={3}
                      justifyContent="center"
                      alignItems="flex-start"
                    >
                      <AadhaarUploadBox
                        label="Aadhaar Front"
                        preview={aadhaarFrontPreview}
                        onUpload={handleImageChange(setAadhaarFrontPreview)}
                        chipColor={BRAND_COLORS.navy}
                      />
                      <AadhaarUploadBox
                        label="Aadhaar Back"
                        preview={aadhaarBackPreview}
                        onUpload={handleImageChange(setAadhaarBackPreview)}
                        chipColor={BRAND_COLORS.gold}
                      />
                    </Box>

                    {(!aadhaarFrontPreview || !aadhaarBackPreview) && (
                      <Typography variant="caption" color="text.secondary"
                        display="block" textAlign="center" mt={1.5}>
                        Both front and back images are required to proceed.
                      </Typography>
                    )}

                    {aadhaarFrontPreview && aadhaarBackPreview && (
                      <Alert severity="success" icon={<CheckCircleOutline />}
                        sx={{ mt: 2, borderRadius: 2 }}>
                        Both Aadhaar card images uploaded successfully.
                      </Alert>
                    )}
                  </Box>
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
                  sx={{
                    width: 160, height: 180, borderRadius: 2, boxShadow: 2,
                    border: '1px solid', borderColor: 'divider', backgroundColor: '#f5f5f5'
                  }}>
                  {!profilePreview && <PhotoCamera sx={{ fontSize: 40, color: 'text.disabled' }} />}
                </Avatar>
                <label htmlFor="profile-photo-upload">
                  <input accept="image/*" id="profile-photo-upload" type="file"
                    style={{ display: 'none' }} onChange={handleImageChange(setProfilePreview)} />
                  <IconButton color="primary" component="span"
                    sx={{
                      position: 'absolute', bottom: -10, right: -10,
                      backgroundColor: 'background.paper', boxShadow: 2,
                      '&:hover': { backgroundColor: '#f0f0f0' }
                    }}>
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

              {/* ── Membership Card ── */}
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

                {['top', 'bottom'].map(pos => (
                  <Box key={pos} sx={{ position: 'absolute', [pos]: 0, left: 0, right: 0, height: '10px', display: 'flex', zIndex: 5 }}>
                    {Object.values(BRAND_COLORS).slice(0, 5).map((c, i) => (
                      <Box key={i} sx={{ flex: 1, bgcolor: c }} />
                    ))}
                  </Box>
                ))}
                {['left', 'right'].map(pos => (
                  <Box key={pos} sx={{ position: 'absolute', top: '10px', bottom: '10px', [pos]: 0, width: '10px', display: 'flex', flexDirection: 'column', zIndex: 5 }}>
                    {Object.values(BRAND_COLORS).slice(0, 5).map((c, i) => (
                      <Box key={i} sx={{ flex: 1, bgcolor: c }} />
                    ))}
                  </Box>
                ))}

                <Box sx={{ position: 'absolute', top: '-40px', left: '-40px', width: '200px', height: '200px', borderRadius: '50%', bgcolor: BRAND_COLORS.teal, opacity: 0.06, pointerEvents: 'none', zIndex: 0 }} />
                <Box sx={{ position: 'absolute', bottom: '20px', right: '-50px', width: '250px', height: '250px', borderRadius: '50%', bgcolor: BRAND_COLORS.maroon, opacity: 0.04, pointerEvents: 'none', zIndex: 0 }} />

                <Box display="flex" justifyContent="space-between" alignItems="center" width="100%" sx={{ zIndex: 1, mt: 0.5 }}>
                  <Avatar src="/src/component/page/image/Sainisha-removebg-preview.png"
                    alt="Logo" variant="square"
                    sx={{ width: 250, height: 70, objectFit: 'contain' }} />
                  <Box display="flex" flexDirection="column" gap={0.4} alignItems="flex-start">
                    <Box display="flex" alignItems="center" gap={1}>
                      <Phone sx={{ fontSize: 10, color: '#fff', bgcolor: BRAND_COLORS.navy, borderRadius: '50%', p: '2px' }} />
                      <Typography sx={{ fontSize: '0.95rem', fontWeight: 700, color: BRAND_COLORS.navy }}>+91 99622 90875</Typography>
                    </Box>
                    <Box display="flex" alignItems="center" gap={1}>
                      <Email sx={{ fontSize: 10, color: '#fff', bgcolor: BRAND_COLORS.navy, borderRadius: '50%', p: '2px' }} />
                      <Typography sx={{ fontSize: '0.95rem', fontWeight: 700, color: BRAND_COLORS.navy }}>hello@sainisha.in</Typography>
                    </Box>
                  </Box>
                </Box>

                <Box width="100%" textAlign="center" my={1} sx={{ zIndex: 1 }}>
                  <Typography variant="subtitle1" sx={{
                    fontWeight: 800, color: BRAND_COLORS.navy,
                    display: 'inline-block', borderBottom: `3px solid ${BRAND_COLORS.gold}`,
                    pb: '2px', letterSpacing: '2px', fontSize: '1.15rem'
                  }}>
                    SAI NISHA MEMBERSHIP CARD
                  </Typography>
                </Box>

                <Grid container spacing={2} alignItems="center"
                  sx={{ mb: 1, px: 1, zIndex: 1, width: '100%', ml: 0 }}>
                  <Grid item xs={7.5} marginLeft={6} sx={{ pl: '0px !important' }}>
                    <Box display="flex" flexDirection="column" gap={1}>
                      {[
                        { label: 'Name',        value: formData.name?.toUpperCase() },
                        { label: 'Mobile No',   value: formData.mobileNo },
                        { label: 'Date Of Birth', value: formatDate(formData.dob) },
                        { label: 'Gender',      value: formData.gender },
                        { label: 'ID No',       value: formData.membershipId, highlight: true }
                      ].map(({ label, value, highlight }) => (
                        <Box key={label} display="flex" alignItems="center">
                          <Typography sx={{ width: '110px', minWidth: '110px', fontWeight: 800, color: BRAND_COLORS.navy, fontSize: '0.9rem' }}>{label}</Typography>
                          <Typography sx={{ fontWeight: 800, color: BRAND_COLORS.gold, mr: 1.5, fontSize: '0.9rem' }}>:</Typography>
                          <Typography sx={{ fontWeight: 700, color: highlight ? BRAND_COLORS.maroon : '#111', fontSize: '0.9rem', letterSpacing: highlight ? '0.5px' : 0, textTransform: highlight ? 'uppercase' : 'none' }}>
                            {value || '---'}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Grid>

                  <Grid item xs={4.5} display="flex" justifyContent="center" marginLeft={10} sx={{ pr: '0px !important' }}>
                    <Box sx={{
                      width: '115px', height: '135px', borderRadius: '12px',
                      border: `2px solid ${BRAND_COLORS.navy}`, overflow: 'hidden',
                      boxShadow: '0px 6px 15px rgba(9,49,84,0.12)', backgroundColor: '#fafafa'
                    }}>
                      <Box component="img"
                        src={profilePreview || 'https://via.placeholder.com/115x135?text=No+Photo'}
                        alt="Member" sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </Box>
                  </Grid>
                </Grid>

                <Box display="flex" alignItems="center" justifyContent="center" gap={0.5}
                  sx={{ borderTop: `1.5px solid rgba(9,49,84,0.15)`, pt: 1, pb: 0.5, width: '100%', zIndex: 1 }}>
                  <LocationOn sx={{ color: BRAND_COLORS.gold, fontSize: 14 }} />
                  <Typography sx={{ fontSize: '0.80rem', fontWeight: 700, color: BRAND_COLORS.navy, textAlign: 'center', lineHeight: 1.3 }}>
                    10, Thiruvallur Street, Shanthi Nagar, Irumbuliyur, East Tambaram, Chennai - 600059
                  </Typography>
                </Box>
              </Paper>

              {/* ── Aadhaar Uploaded Images Preview ── */}
              <Box sx={{ mt: 4, width: '100%' }}>
                <Box display="flex" alignItems="center" gap={1} mb={2} justifyContent="center">
                  <CreditCard sx={{ color: BRAND_COLORS.navy }} />
                  <Typography variant="subtitle1" fontWeight={800} color={BRAND_COLORS.navy} letterSpacing={1}>
                    AADHAAR CARD (UPLOADED)
                  </Typography>
                </Box>

                <Box
                  display="flex"
                  flexDirection={{ xs: 'column', sm: 'row' }}
                  gap={3}
                  justifyContent="center"
                  alignItems="flex-start"
                >
                  {/* Front */}
                  <Box display="flex" flexDirection="column" alignItems="center" gap={1}>
                    <Chip label="Front" size="small"
                      sx={{ bgcolor: BRAND_COLORS.navy, color: '#fff', fontWeight: 700, letterSpacing: 1 }} />
                    <Box
                      sx={{
                        width: 320, height: 200, borderRadius: '12px',
                        border: `2px solid ${BRAND_COLORS.navy}`, overflow: 'hidden',
                        boxShadow: '0 8px 24px rgba(9,49,84,0.15)', backgroundColor: '#000',
                      }}
                    >
                      <Box
                        component="img"
                        src={aadhaarFrontPreview}
                        alt="Aadhaar Front"
                        sx={{ width: '100%', height: '100%', objectFit: 'contain' }}
                      />
                    </Box>
                  </Box>

                  {/* Back */}
                  <Box display="flex" flexDirection="column" alignItems="center" gap={1}>
                    <Chip label="Back" size="small"
                      sx={{ bgcolor: BRAND_COLORS.gold, color: '#fff', fontWeight: 700, letterSpacing: 1 }} />
                    <Box
                      sx={{
                        width: 320, height: 200, borderRadius: '12px',
                        border: `2px solid ${BRAND_COLORS.gold}`, overflow: 'hidden',
                        boxShadow: '0 8px 24px rgba(229,152,52,0.15)', backgroundColor: '#000',
                      }}
                    >
                      <Box
                        component="img"
                        src={aadhaarBackPreview}
                        alt="Aadhaar Back"
                        sx={{ width: '100%', height: '100%', objectFit: 'contain' }}
                      />
                    </Box>
                  </Box>
                </Box>

                <Typography variant="caption" color="text.secondary" display="block" textAlign="center" mt={1.5}>
                  * Aadhaar card images are stored securely and used only for identity verification.
                </Typography>
              </Box>

              <Box display="flex" alignItems="center" gap={1} sx={{ mt: 3 }}>
                <CheckCircleOutline color="success" />
                <Typography variant="body2" fontWeight="medium" color="success.main">
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
                sx={{
                  px: 4, fontWeight: 'bold', boxShadow: 3,
                  backgroundColor: BRAND_COLORS.navy, '&:hover': { backgroundColor: '#124a7c' }
                }}>
                Generate & Download Membership Card
              </Button>
            )}
          </Box>
        </form>
      </Paper>
    </Container>
  );
}
