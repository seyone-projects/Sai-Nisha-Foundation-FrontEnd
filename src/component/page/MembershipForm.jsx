import React, { useState, useRef, useEffect } from 'react';
import { Container, Paper, Box, Typography, TextField, Grid, Button, Avatar, IconButton, Divider, Stepper, Step, StepLabel, Chip, Alert, Dialog, DialogTitle, DialogContent, DialogActions, InputAdornment } from '@mui/material';
import { PhotoCamera, NavigateNext, NavigateBefore, CheckCircleOutline, Phone, Email, LocationOn, CloudUpload as UploadIcon, CreditCard, CheckCircle, Lock, Visibility, VisibilityOff } from '@mui/icons-material';
import Footer from './Footer';
const steps = ['Personal Details', 'Profile Photo', 'Review & Confirm'];
const C = { maroon: '#0c0909', gold: '#E59834', teal: '#008B9B', green: '#43882B', navy: '#093154', lightBg: '#F4F7F9' };
const PW = 'sainisha@01';
const STRIPES = Object.values(C).slice(0, 5);
const btnNavy = { backgroundColor: C.navy, '&:hover': { backgroundColor: '#124a7c' } };
function useHtml2Canvas() {
  const [ready, setReady] = useState(!!window.html2canvas);
  useEffect(() => {
    if (window.html2canvas) return setReady(true);
    const s = document.createElement('script');
    s.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
    s.async = true; s.onload = () => setReady(true);
    document.body.appendChild(s);
  }, []);
  return ready;
}
function ImageBox({ label, preview, onUpload, color, editable = true, w = 320, h = 200 }) {
  const id = `img-${label.replace(/\s+/g, '-').toLowerCase()}`;
  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={1}>
      <Chip label={label} size="small" sx={{ bgcolor: color, color: '#fff', fontWeight: 700, letterSpacing: 1 }} />
      <Box sx={{ width: w, height: h, borderRadius: '12px', overflow: 'hidden', position: 'relative', border: preview ? `2px solid ${color}` : '2px dashed #aac0d8', backgroundColor: preview ? '#000' : '#f4f7fb', boxShadow: preview ? `0 8px 24px ${color}26` : 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {preview ? <Box component="img" src={preview} alt={label} sx={{ width: '100%', height: '100%', objectFit: 'contain' }} /> : <Box display="flex" flexDirection="column" alignItems="center" gap={1}><CreditCard sx={{ fontSize: 40, color: '#aac0d8' }} /><Typography variant="caption" color="text.secondary">Click to upload {label}</Typography></Box>}
        {editable && <label htmlFor={id}><input accept="image/*" id={id} type="file" style={{ display: 'none' }} onChange={onUpload} /><IconButton component="span" size="small" sx={{ position: 'absolute', bottom: 8, right: 8, bgcolor: C.navy, color: '#fff', boxShadow: 2, '&:hover': { bgcolor: '#124a7c' } }}><UploadIcon fontSize="small" /></IconButton></label>}
        {editable && preview && <CheckCircle sx={{ position: 'absolute', top: 8, right: 8, color: '#22c55e', fontSize: 22, bgcolor: '#fff', borderRadius: '50%' }} />}
      </Box>
      {editable && preview && <Typography variant="caption" color="success.main" fontWeight={600}>✓ {label} uploaded</Typography>}
    </Box>
  );
}
export default function MembershipForm() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({ name: '', mobileNo: '', dob: '', gender: 'Male', membershipId: '' });
  const [profilePreview, setProfilePreview] = useState(null);
  const [aadhaarFrontPreview, setAadhaarFrontPreview] = useState(null); const [aadhaarBackPreview, setAadhaarBackPreview] = useState(null);
  const [submitting, setSubmitting] = useState(false); const [submitted, setSubmitted] = useState(false);
  const cardRef = useRef(null); const html2canvasReady = useHtml2Canvas();
  const [pwOpen, setPwOpen] = useState(false); const [pwInput, setPwInput] = useState('');
  const [showPw, setShowPw] = useState(false); const [pwError, setPwError] = useState('');
  const formatDate = (d) => d ? d.split('-').reverse().join('/') : '';
  const generateID = () => {
    const yr = new Date().getFullYear(), last = localStorage.getItem('last_sainisha_id');
    if (!last || last === 'undefined' || last.includes('NaN')) return `SN${yr}001`;
    const m = last.match(/\d{3}$/);
    return `SN${yr}${String(parseInt(m ? m[0] : '0', 10) + 1).padStart(3, '0')}`;
  };
  const handleInputChange = (e) => setFormData(p => ({ ...p, [e.target.name]: e.target.value }));
  const handleImageChange = (setter) => (e) => { const f = e.target.files[0]; if (f) setter(URL.createObjectURL(f)); };
  const handleNext = () => {
    if (activeStep === 0) {
      if (!formData.name || !formData.mobileNo || !formData.dob) return alert('Please fill out all required fields.');
      if (formData.mobileNo.length !== 10) return alert('Please enter a valid 10-digit mobile number.');
      if (!aadhaarFrontPreview || !aadhaarBackPreview) return alert('Please upload both front and back images of your Aadhaar card.');
    }
    if (activeStep === 1 && !formData.membershipId) {
      const id = generateID();
      setFormData(p => ({ ...p, membershipId: id }));
      localStorage.setItem('last_sainisha_id', id);
    }
    setActiveStep(p => p + 1);
  };
  const handleBack = () => setActiveStep(p => p - 1);
  const handleRequestDownload = (e) => { e.preventDefault(); setPwInput(''); setPwError(''); setShowPw(false); setPwOpen(true); };
  const handleClosePw = () => !submitting && setPwOpen(false);
  const generateAndDownloadCard = async () => {
    if (!html2canvasReady || !window.html2canvas) return setPwError('Still preparing the download tool, please try again in a moment.');
    setSubmitting(true);
    try {
      const existing = JSON.parse(localStorage.getItem('sainisha_members') || '[]');
      existing.push({ ...formData, savedAt: new Date().toISOString() });
      localStorage.setItem('sainisha_members', JSON.stringify(existing));
      const canvas = await window.html2canvas(cardRef.current, { scale: 3, useCORS: true, backgroundColor: '#ffffff' });
      const link = document.createElement('a');
      link.download = `${formData.membershipId || 'membership-card'}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
      setSubmitted(true); setPwOpen(false);
    } catch (err) {
      console.error(err); setPwError('Something went wrong while generating the card image. Please try again.');
    } finally { setSubmitting(false); }
  };
  const handleVerifyPw = () => pwInput !== PW ? setPwError('Incorrect password. Please try again.') : (setPwError(''), generateAndDownloadCard());
  const handlePwKeyDown = (e) => e.key === 'Enter' && (e.preventDefault(), handleVerifyPw());
  const cardFields = [
    { label: 'Name', value: formData.name?.toUpperCase() },
    { label: 'Mobile No', value: formData.mobileNo },
    { label: 'Date Of Birth', value: formatDate(formData.dob) },
    { label: 'Gender', value: formData.gender },
    { label: 'ID No', value: formData.membershipId, highlight: true },
  ];
  const Step0 = (
    <Box sx={{ minHeight: 220 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}><TextField label="Full Name" name="name" fullWidth required value={formData.name} onChange={handleInputChange} placeholder="Enter full name" /></Grid>
        <Grid item xs={12}><TextField label="Mobile Number" name="mobileNo" fullWidth required inputProps={{ maxLength: 10 }} value={formData.mobileNo} onChange={handleInputChange} placeholder="Enter 10-digit mobile number" /></Grid>
        <Grid item xs={12}><TextField label="Date of Birth" name="dob" type="date" fullWidth required InputLabelProps={{ shrink: true }} value={formData.dob} onChange={handleInputChange} /></Grid>
        <Grid item xs={12}><TextField label="Gender" name="gender" select fullWidth SelectProps={{ native: true }} value={formData.gender} onChange={handleInputChange}><option value="Male">Male</option><option value="Female">Female</option><option value="Other">Other</option></TextField></Grid>
        <Grid item xs={12}>
          <Box sx={{ p: 2.5, borderRadius: 2, border: '1px solid #dde6ef', background: '#f8fbff' }}>
            <Box display="flex" alignItems="center" gap={1} mb={2}><CreditCard sx={{ color: C.navy, fontSize: 20 }} /><Typography fontWeight={700} color={C.navy}>Aadhaar Card Upload</Typography></Box>
            <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} gap={3} justifyContent="center">
              <ImageBox label="Aadhaar Front" preview={aadhaarFrontPreview} onUpload={handleImageChange(setAadhaarFrontPreview)} color={C.navy} />
              <ImageBox label="Aadhaar Back" preview={aadhaarBackPreview} onUpload={handleImageChange(setAadhaarBackPreview)} color={C.gold} />
            </Box>
            {(!aadhaarFrontPreview || !aadhaarBackPreview) && <Typography variant="caption" color="text.secondary" display="block" textAlign="center" mt={1.5}>Both front and back images are required to proceed.</Typography>}
            {aadhaarFrontPreview && aadhaarBackPreview && <Alert severity="success" icon={<CheckCircleOutline />} sx={{ mt: 2, borderRadius: 2 }}>Both Aadhaar card images uploaded successfully.</Alert>}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
  const Step1 = (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" sx={{ minHeight: 220 }}>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>Profile Photo</Typography>
      <Box position="relative">
        <Avatar src={profilePreview} variant="rounded" sx={{ width: 160, height: 180, borderRadius: 2, boxShadow: 2, border: '1px solid', borderColor: 'divider', backgroundColor: '#f5f5f5' }}>{!profilePreview && <PhotoCamera sx={{ fontSize: 40, color: 'text.disabled' }} />}</Avatar>
        <label htmlFor="profile-photo-upload"><input accept="image/*" id="profile-photo-upload" type="file" style={{ display: 'none' }} onChange={handleImageChange(setProfilePreview)} /><IconButton color="primary" component="span" sx={{ position: 'absolute', bottom: -10, right: -10, backgroundColor: 'background.paper', boxShadow: 2, '&:hover': { backgroundColor: '#f0f0f0' } }}><UploadIcon /></IconButton></label>
      </Box>
      <Typography variant="caption" color="text.secondary" sx={{ mt: 2 }}>Upload a clear passport-size photograph</Typography>
    </Box>
  );
  const Step2 = (
    <Box display="flex" flexDirection="column" alignItems="center" sx={{ minHeight: 340, width: '100%', overflowX: 'auto', py: 2 }}>
      <Paper ref={cardRef} elevation={6} sx={{ width: 600, height: 380, borderRadius: '20px', overflow: 'hidden', position: 'relative', backgroundColor: '#fff', border: '1px solid rgba(9,49,84,0.2)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: `linear-gradient(145deg, #ffffff 0%, ${C.lightBg} 100%)`, p: '24px 24px 12px 24px', boxShadow: '0 20px 40px rgba(9,49,84,0.08)', boxSizing: 'border-box' }}>
        {['top', 'bottom'].map(pos => <Box key={pos} sx={{ position: 'absolute', [pos]: 0, left: 0, right: 0, height: 10, display: 'flex', zIndex: 5 }}>{STRIPES.map((c, i) => <Box key={i} sx={{ flex: 1, bgcolor: c }} />)}</Box>)}
        {['left', 'right'].map(pos => <Box key={pos} sx={{ position: 'absolute', top: 10, bottom: 10, [pos]: 0, width: 10, display: 'flex', flexDirection: 'column', zIndex: 5 }}>{STRIPES.map((c, i) => <Box key={i} sx={{ flex: 1, bgcolor: c }} />)}</Box>)}
        <Box sx={{ position: 'absolute', top: -40, left: -40, width: 200, height: 200, borderRadius: '50%', bgcolor: C.teal, opacity: 0.06, zIndex: 0 }} />
        <Box sx={{ position: 'absolute', bottom: 20, right: -50, width: 250, height: 250, borderRadius: '50%', bgcolor: C.maroon, opacity: 0.04, zIndex: 0 }} />
        <Box display="flex" justifyContent="space-between" alignItems="center" width="100%" sx={{ zIndex: 1, mt: 0.5 }}>
          <Box component="img" src="/src/component/page/image/Sainisha-removebg-preview.png" alt="Logo" sx={{ width: 250, height: 90, objectFit: 'contain', display: 'block' }} />
          <Box display="flex" flexDirection="column" gap={0.4}>
            {[[Phone, '+91 99622 90875'], [Email, 'hello@sainisha.in']].map(([Icon, text]) => <Box key={text} display="flex" alignItems="center" gap={1}><Icon sx={{ fontSize: 10, color: '#fff', bgcolor: C.navy, borderRadius: '50%', p: '2px' }} /><Typography sx={{ fontSize: '0.95rem', fontWeight: 700, color: C.navy }}>{text}</Typography></Box>)}
          </Box>
        </Box>
        <Box width="100%" textAlign="center" my={1} sx={{ zIndex: 1 }}><Typography variant="subtitle1" sx={{ fontWeight: 800, color: C.navy, display: 'inline-block', borderBottom: `3px solid ${C.gold}`, pb: '2px', letterSpacing: '2px', fontSize: '1.15rem' }}>SAI NISHA MEMBERSHIP CARD</Typography></Box>
        <Grid container spacing={2} alignItems="center" sx={{ mb: 1, px: 1, zIndex: 1, width: '100%', ml: 0 }}>
          <Grid item xs={7.5} marginLeft={6} sx={{ pl: '0px !important' }}>
            <Box display="flex" flexDirection="column" gap={1}>
              {cardFields.map(({ label, value, highlight }) => <Box key={label} display="flex" alignItems="center"><Typography sx={{ width: 110, minWidth: 110, fontWeight: 800, color: C.navy, fontSize: '0.9rem' }}>{label}</Typography><Typography sx={{ fontWeight: 800, color: C.gold, mr: 1.5, fontSize: '0.9rem' }}>:</Typography><Typography sx={{ fontWeight: 700, color: highlight ? C.maroon : '#111', fontSize: '0.9rem', letterSpacing: highlight ? '0.5px' : 0, textTransform: highlight ? 'uppercase' : 'none' }}>{value || '---'}</Typography></Box>)}
            </Box>
          </Grid>
          <Grid item xs={4.5} display="flex" justifyContent="center" marginLeft={10} sx={{ pr: '0px !important' }}>
            <Box sx={{ width: 115, height: 135, borderRadius: '12px', border: `2px solid ${C.navy}`, overflow: 'hidden', boxShadow: '0px 6px 15px rgba(9,49,84,0.12)', backgroundColor: '#fafafa' }}><Box component="img" src={profilePreview || 'https://via.placeholder.com/115x135?text=No+Photo'} alt="Member" sx={{ width: '100%', height: '100%', objectFit: 'cover' }} /></Box>
          </Grid>
        </Grid>
        <Box display="flex" alignItems="center" justifyContent="center" gap={0.5} sx={{ borderTop: '1.5px solid rgba(9,49,84,0.15)', pt: 1, pb: 0.5, width: '100%', zIndex: 1 }}><LocationOn sx={{ color: C.gold, fontSize: 14 }} /><Typography sx={{ fontSize: '0.80rem', fontWeight: 700, color: C.navy, textAlign: 'center', lineHeight: 1.3 }}>10, Thiruvallur Street, Shanthi Nagar, Irumbuliyur, East Tambaram, Chennai - 600059</Typography></Box>
      </Paper>
      <Box sx={{ mt: 4, width: '100%' }}>
        <Box display="flex" alignItems="center" gap={1} mb={2} justifyContent="center"><CreditCard sx={{ color: C.navy }} /><Typography variant="subtitle1" fontWeight={800} color={C.navy} letterSpacing={1}>AADHAAR CARD (UPLOADED)</Typography></Box>
        <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} gap={3} justifyContent="center">
          <ImageBox label="Front" preview={aadhaarFrontPreview} color={C.navy} editable={false} />
          <ImageBox label="Back" preview={aadhaarBackPreview} color={C.gold} editable={false} />
        </Box>
        <Typography variant="caption" color="text.secondary" display="block" textAlign="center" mt={1.5}>* Aadhaar card images are stored securely and used only for identity verification.</Typography>
      </Box>
      <Box display="flex" alignItems="center" gap={1} sx={{ mt: 3 }}><CheckCircleOutline color="success" /><Typography variant="body2" color="success.main">Everything looks ready for card registration.</Typography></Box>
      {submitted && <Alert severity="success" sx={{ mt: 2, borderRadius: 2 }}>Card generated and downloaded successfully! Saved locally on this device.</Alert>}
    </Box>
  );
  return (
    <Container maxWidth="md" sx={{ mt: 5, mb: 5 }}>
      <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>
        <Box display="flex" justifyContent="center" mb={3}><Box component="img" src="/src/component/page/image/ngo-removebg-preview.png" alt="Sai Nisha Foundation Logo" sx={{ width: '100%', maxWidth: 320, height: 'auto', objectFit: 'contain' }} /></Box>
        <Typography variant="h6" align="center" fontWeight="bold" sx={{ mb: 3, letterSpacing: 1, color: C.navy }}>LIFE MEMBERSHIP APPLICATION FORM</Typography>
        <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>{steps.map(l => <Step key={l}><StepLabel>{l}</StepLabel></Step>)}</Stepper>
        <Divider sx={{ mb: 4 }} />
        <form onSubmit={handleRequestDownload}>
          {activeStep === 0 && Step0}
          {activeStep === 1 && Step1}
          {activeStep === 2 && Step2}
          <Box display="flex" justifyContent="space-between" sx={{ mt: 4 }}>
            <Button disabled={activeStep === 0} onClick={handleBack} startIcon={<NavigateBefore />} variant="outlined" sx={{ color: C.navy, borderColor: C.navy }}>Back</Button>
            {activeStep < steps.length - 1
              ? <Button variant="contained" onClick={handleNext} endIcon={<NavigateNext />} sx={btnNavy}>Next</Button>
              : <Button type="submit" variant="contained" size="large" startIcon={<Lock fontSize="small" />} sx={{ px: 4, fontWeight: 'bold', boxShadow: 3, ...btnNavy }}>Generate & Download Membership Card</Button>}
          </Box>
        </form>
      </Paper>
      <Dialog open={pwOpen} onClose={handleClosePw} maxWidth="xs" fullWidth PaperProps={{ sx: { borderRadius: 3, p: 1 } }}>
        <DialogTitle sx={{ display: 'flex', alignItems: 'center', gap: 1, fontWeight: 700, color: C.navy }}><Lock sx={{ color: C.navy }} /> Enter Password to Download</DialogTitle>
        <DialogContent>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>Please enter the authorized password to generate and download this membership card.</Typography>
          <TextField autoFocus fullWidth label="Password" type={showPw ? 'text' : 'password'} value={pwInput} onChange={(e) => { setPwInput(e.target.value); setPwError(''); }} onKeyDown={handlePwKeyDown} error={!!pwError} helperText={pwError || ' '} disabled={submitting} InputProps={{ endAdornment: <InputAdornment position="end"><IconButton onClick={() => setShowPw(p => !p)} edge="end" size="small">{showPw ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}</IconButton></InputAdornment> }} />
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button onClick={handleClosePw} disabled={submitting}>Cancel</Button>
          <Button onClick={handleVerifyPw} variant="contained" disabled={submitting || !pwInput} sx={btnNavy}>{submitting ? 'Generating...' : 'Confirm & Download'}</Button>
        </DialogActions>
      </Dialog>
      <Box sx={{ position: 'relative', zIndex: 2, '& *': { fontSize: '15px !important' }, '& svg': { fontSize: '1.20rem !important' }, width: '97vw', ml: 'calc(50% - 50vw)', mr: 'calc(50% - 50vw)', mb: 0, pb: 0 }}><Footer /></Box>
    </Container>
  );
}
