import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import {
  Container,
  Paper,
  Box,
  Typography,
  TextField,
  Grid,
  Button,
  Avatar,
  IconButton,
  Divider,
  Stepper,
  Step,
  StepLabel
} from '@mui/material';
import {
  PhotoCamera,
  NavigateNext,
  NavigateBefore,
  CheckCircleOutline,
  Phone,
  Email,
  Language,
  LocationOn,
  CloudUpload as UploadIcon
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

// --- Verhoeff Algorithm Implementation for Aadhaar Validation ---
const d = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 0, 6, 7, 8, 9, 5],
  [2, 3, 4, 0, 1, 7, 8, 9, 5, 6],
  [3, 4, 0, 1, 2, 8, 9, 5, 6, 7],
  [4, 0, 1, 2, 3, 9, 5, 6, 7, 8],
  [5, 9, 8, 7, 6, 0, 4, 3, 2, 1],
  [6, 5, 9, 8, 7, 1, 0, 4, 3, 2],
  [7, 6, 5, 9, 8, 2, 1, 0, 4, 3],
  [8, 7, 6, 5, 9, 3, 2, 1, 0, 4],
  [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
];

const p = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 5, 7, 6, 2, 8, 3, 0, 9, 4],
  [5, 8, 0, 3, 7, 9, 1, 4, 6, 2],
  [8, 9, 1, 6, 0, 4, 3, 5, 2, 7],
  [9, 4, 5, 3, 1, 2, 6, 8, 7, 0],
  [4, 2, 8, 6, 5, 7, 3, 9, 0, 1],
  [2, 7, 9, 3, 8, 0, 6, 4, 1, 5],
  [7, 0, 4, 6, 9, 1, 3, 5, 8, 2]
];

const inv = [0, 4, 3, 2, 1, 5, 6, 7, 8, 9];

const validateAadhaar = (aadhaarString) => {
  const cleanString = aadhaarString.replace(/\s+/g, '');
  if (cleanString.length !== 12 || !/^\d+$/.test(cleanString)) {
    return false;
  }
  
  // Checking first digit cannot be 0 or 1
  if (cleanString[0] === '0' || cleanString[0] === '1') {
    return false;
  }

  let c = 0;
  const invertedArray = cleanString.split('').map(Number).reverse();

  for (let i = 0; i < invertedArray.length; i++) {
    c = d[c][p[i % 8][invertedArray[i]]];
  }

  return c === 0;
};

export default function MembershipForm() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    mobileNo: '',
    dob: '',
    aadhaarNo: '', 
    membershipId: '' 
  });
  const [profilePreview, setProfilePreview] = useState(null);
  
  const cardRef = useRef(null);

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const [year, month, day] = dateStr.split('-');
    return `${day}/${month}/${year}`;
  };

  // Helper to visually segment entry to standard 4-4-4 format
  const formatAadhaarDisplay = (val) => {
    const clean = val.replace(/\s+/g, '').replace(/\D/g, '');
    const matches = clean.match(/\d{4,12}/g);
    const match = (matches && matches[0]) || clean;
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length > 0) {
      return parts.join(' ');
    } else {
      return clean;
    }
  };

  const generateID = () => {
    const currentYear = new Date().getFullYear();
    const lastId = localStorage.getItem('last_sainisha_id');
    
    if (!lastId || lastId === 'undefined' || lastId.includes('NaN')) {
      return { newId: `SN${currentYear}001`, nextIdNumber: 1 };
    }
    
    // Extracts the last 3 numeric digits representing the incrementing sequential count
    const match = lastId.match(/\d{3}$/);
    const numericPart = match ? match[0] : '0';
    const nextIdNumber = parseInt(numericPart, 10) + 1;
    
    const paddedNumber = String(nextIdNumber).padStart(3, '0');
    const newId = `SN${currentYear}${paddedNumber}`;

    return { newId, nextIdNumber };
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'aadhaarNo') {
      setFormData((prev) => ({
        ...prev,
        [name]: formatAadhaarDisplay(value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePreview(URL.createObjectURL(file));
    }
  };

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
      // Added Validation Rule Step Rejection check
      if (!validateAadhaar(formData.aadhaarNo)) {
        alert('Invalid Aadhaar Number. Please verify digits and try again.');
        return;
      }
    }

    if (activeStep === 1 && !formData.membershipId) {
      const { newId } = generateID();
      setFormData(prev => ({ ...prev, membershipId: newId }));
    }

    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.membershipId) {
      alert('Error: ID generation failed. Please go back and try again.');
      return;
    }

    localStorage.setItem('last_sainisha_id', formData.membershipId);

    if (cardRef.current) {
      try {
        const canvas = await html2canvas(cardRef.current, {
          useCORS: true, 
          allowTaint: true,
          scale: 3, 
          backgroundColor: '#ffffff',
          logging: false,
          windowWidth: 600, 
          windowHeight: 380
        });
        
        const imgData = canvas.toDataURL('image/png');
        const downloadLink = document.createElement('a');
        downloadLink.download = `SNF_Membership_${formData.membershipId || 'Card'}.png`;
        downloadLink.href = imgData;
        downloadLink.click();
        
        alert(`Success! Application ID ${formData.membershipId} Generated & Downloaded Successfully.`);
      } catch (error) {
        console.error('Error rendering ID card image assets:', error);
        alert('Could not download your membership card image asset automatically. Please try again.');
      }
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5, mb: 5 }}>
      <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>
        
       <Box 
          display="flex" 
          justifyContent="center" 
          mb={3} 
          sx={{ backgroundColor: 'transparent' }} 
        >
          <Box
            component="img"
            src="/src/component/page/image/ngo-removebg-preview.png"
            alt="Sai Nisha Foundation Logo"
            sx={{
              width: '100%',
              maxWidth: 320,
              height: 'auto',        
              objectFit: 'contain',  
              backgroundColor: 'transparent', 
            }}
          />
        </Box>
        
        <Typography variant="h6" align="center" fontWeight="bold" sx={{ mb: 3, letterSpacing: 1, color: BRAND_COLORS.navy }}>
          LIFE MEMBERSHIP APPLICATION FORM
        </Typography>
        
        <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <Divider sx={{ mb: 4 }} />

        <form onSubmit={handleSubmit}>
          
          {/* STEP 1: Personal Details */}
          {activeStep === 0 && (
            <Box sx={{ minHeight: '220px'}}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    label="Full Name"
                    name="name"
                    variant="outlined"
                    fullWidth
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter full name"
                  />
                </Grid>
                
                <Grid item xs={12}>
                  <TextField
                    label="Mobile Number"
                    name="mobileNo"
                    variant="outlined"
                    fullWidth
                    required
                    inputProps={{ maxLength: 10 }}
                    value={formData.mobileNo}
                    onChange={handleInputChange}
                    placeholder="Enter 10-digit mobile number"
                  />
                </Grid>
                
                <Grid item xs={12}>
                  <TextField
                    label="Date of Birth"
                    name="dob"
                    type="date"
                    variant="outlined"
                    fullWidth
                    required
                    InputLabelProps={{ shrink: true }}
                    value={formData.dob}
                    onChange={handleInputChange}
                  />
                </Grid>

                {/* Added Aadhaar Entry Input Field component */}
                <Grid item xs={12}>
                  <TextField
                    label="Aadhaar Number"
                    name="aadhaarNo"
                    variant="outlined"
                    fullWidth
                    required
                    inputProps={{ maxLength: 14 }} 
                    value={formData.aadhaarNo}
                    onChange={handleInputChange}
                    placeholder="Enter 12-digit Aadhaar number"
                  />
                </Grid>
              </Grid>
            </Box>
          )}

          {/* STEP 2: Profile Photo */}
          {activeStep === 1 && (
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" sx={{ minHeight: '220px' }}>
              <Typography variant="body2" fontWeight="medium" color="text.secondary" sx={{ mb: 2 }}>
                Profile Photo
              </Typography>
              <Box position="relative">
                <Avatar
                  src={profilePreview}
                  variant="rounded"
                  sx={{
                    width: 160,
                    height: 180,
                    borderRadius: 2,
                    boxShadow: 2,
                    border: '1px solid',
                    borderColor: 'divider',
                    backgroundColor: '#f5f5f5'
                  }}
                >
                  {!profilePreview && <PhotoCamera sx={{ fontSize: 40, color: 'text.disabled' }} />}
                </Avatar>
                
                <label htmlFor="icon-button-file">
                  <input
                    accept="image/*"
                    id="icon-button-file"
                    type="file"
                    style={{ display: 'none' }}
                    onChange={handleImageChange}
                  />
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                    sx={{
                      position: 'absolute',
                      bottom: -10,
                      right: -10,
                      backgroundColor: 'background.paper',
                      boxShadow: 2,
                      '&:hover': { backgroundColor: '#f0f0f0' }
                    }}
                  >
                    <UploadIcon />
                  </IconButton>
                </label>
              </Box>
              <Typography variant="caption" color="text.secondary" sx={{ mt: 2, textAlign: 'center' }}>
                Upload a clear passport-size photograph
              </Typography>
            </Box>
          )}

          {/* STEP 3: Identity Card Design Layout Preview */}
          {activeStep === 2 && (
            <Box 
              display="flex" 
              flexDirection="column" 
              alignItems="center" 
              sx={{ 
                minHeight: '340px',
                width: '100%',
                overflowX: 'auto', 
                py: 2
              }}
            >
              
              <Paper 
                ref={cardRef}
                elevation={6} 
                sx={{ 
                  width: '600px', 
                  height: '380px',
                  borderRadius: '20px', 
                  overflow: 'hidden',
                  position: 'relative',
                  backgroundColor: '#ffffff',
                  border: `1px solid rgba(9, 49, 84, 0.2)`,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  background: `linear-gradient(145deg, #ffffff 0%, ${BRAND_COLORS.lightBg} 100%)`,
                  p: '24px 24px 12px 24px',
                  boxShadow: '0 20px 40px rgba(9, 49, 84, 0.08)',
                  boxSizing: 'border-box'
                }}
              >
                {/* Top Border Ribbon */}
                <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: '10px', display: 'flex', zIndex: 5 }}>
                  <Box sx={{ flex: 1, bgcolor: BRAND_COLORS.maroon }} />
                  <Box sx={{ flex: 1, bgcolor: BRAND_COLORS.gold }} />
                  <Box sx={{ flex: 1, bgcolor: BRAND_COLORS.teal }} />
                  <Box sx={{ flex: 1, bgcolor: BRAND_COLORS.green }} />
                  <Box sx={{ flex: 1, bgcolor: BRAND_COLORS.navy }} />
                </Box>

                {/* Bottom Border Ribbon */}
                <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '10px', display: 'flex', zIndex: 5 }}>
                  <Box sx={{ flex: 1, bgcolor: BRAND_COLORS.maroon }} />
                  <Box sx={{ flex: 1, bgcolor: BRAND_COLORS.gold }} />
                  <Box sx={{ flex: 1, bgcolor: BRAND_COLORS.teal }} />
                  <Box sx={{ flex: 1, bgcolor: BRAND_COLORS.green }} />
                  <Box sx={{ flex: 1, bgcolor: BRAND_COLORS.navy }} />
                </Box>

                {/* Left Border Ribbon */}
                <Box sx={{ position: 'absolute', top: '10px', bottom: '10px', left: 0, width: '10px', display: 'flex', flexDirection: 'column', zIndex: 5 }}>
                  <Box sx={{ flex: 1, bgcolor: BRAND_COLORS.maroon }} />
                  <Box sx={{ flex: 1, bgcolor: BRAND_COLORS.gold }} />
                  <Box sx={{ flex: 1, bgcolor: BRAND_COLORS.teal }} />
                  <Box sx={{ flex: 1, bgcolor: BRAND_COLORS.green }} />
                  <Box sx={{ flex: 1, bgcolor: BRAND_COLORS.navy }} />
                </Box>

                {/* Right Border Ribbon */}
                <Box sx={{ position: 'absolute', top: '10px', bottom: '10px', right: 0, width: '10px', display: 'flex', flexDirection: 'column', zIndex: 5 }}>
                  <Box sx={{ flex: 1, bgcolor: BRAND_COLORS.maroon }} />
                  <Box sx={{ flex: 1, bgcolor: BRAND_COLORS.gold }} />
                  <Box sx={{ flex: 1, bgcolor: BRAND_COLORS.teal }} />
                  <Box sx={{ flex: 1, bgcolor: BRAND_COLORS.green }} />
                  <Box sx={{ flex: 1, bgcolor: BRAND_COLORS.navy }} />
                </Box>

                {/* Background Geometric Abstract Vectors */}
                <Box sx={{ position: 'absolute', top: '-40px', left: '-40px', width: '200px', height: '200px', borderRadius: '50%', bgcolor: BRAND_COLORS.teal, opacity: 0.06, pointerEvents: 'none', zIndex: 0 }} />
                <Box sx={{ position: 'absolute', bottom: '20px', right: '-50px', width: '250px', height: '250px', borderRadius: '50%', bgcolor: BRAND_COLORS.maroon, opacity: 0.04, pointerEvents: 'none', zIndex: 0 }} />
                <Box sx={{ position: 'absolute', top: '40%', right: '35%', width: '120px', height: '120px', borderRadius: '50%', bgcolor: BRAND_COLORS.gold, opacity: 0.03, pointerEvents: 'none', zIndex: 0 }} />

                {/* Identity Card Top Section Header */}
                <Box display="flex" justifyContent="space-between" alignItems="center" width="100%" sx={{ zIndex: 1, mt: 0.5 }}>
                  <Box display="flex" alignItems="center">
                    <Avatar 
                      src="/src/component/page/image/Sainisha-removebg-preview.png" 
                      alt="Sai Nisha Foundation Logo" 
                      variant="square"
                      sx={{ width: 250, height: 70, objectFit: 'contain' }} 
                    />
                  </Box>

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

                {/* Main Identity Banner Header Text */}
                <Box width="100%" textAlign="center" my={1} sx={{ zIndex: 1 }}>
                  <Typography 
                    variant="subtitle1" 
                    sx={{ 
                      top: 20,
                      fontWeight: 800,
                      color: BRAND_COLORS.navy, 
                      display: 'inline-block', 
                      borderBottom: `3px solid ${BRAND_COLORS.gold}`, 
                      pb: '2px',
                      letterSpacing: '2px',
                      fontSize: '1.15rem'
                    }}
                  >
                    SAI NISHA MEMBERSHIP CARD
                  </Typography>
                </Box>

                {/* Identity Card Profile Data Layout Wrapper */}
                <Grid container spacing={2} alignItems="center" sx={{ mb: 1, px: 1, zIndex: 1, width: '100%', ml: 0 }}>
                  <Grid item xs={7.5} marginLeft={6} sx={{ pl: '0px !important' }}>
                    <Box display="flex" flexDirection="column" gap={1}>
                      <Box display="flex" alignItems="center">
                        <Typography sx={{ width: '110px', minWidth: '110px', fontWeight: 800, color: BRAND_COLORS.navy, fontSize: '0.9rem' }}>Name</Typography>
                        <Typography sx={{ fontWeight: 800, color: BRAND_COLORS.gold, mr: 1.5, fontSize: '0.9rem' }}>:</Typography>
                        <Typography sx={{ fontWeight: 700, color: '#111', fontSize: '0.9rem', textTransform: 'uppercase' }}>{formData.name || '---'}</Typography>
                      </Box>
                      <Box display="flex" alignItems="center">
                        <Typography sx={{ width: '110px', minWidth: '110px', fontWeight: 800, color: BRAND_COLORS.navy, fontSize: '0.9rem' }}>Mobile No</Typography>
                        <Typography sx={{ fontWeight: 800, color: BRAND_COLORS.gold, mr: 1.5, fontSize: '0.9rem' }}>:</Typography>
                        <Typography sx={{ fontWeight: 700, color: '#111', fontSize: '0.9rem' }}>{formData.mobileNo || '---'}</Typography>
                      </Box>
                      <Box display="flex" alignItems="center">
                        <Typography sx={{ width: '110px', minWidth: '110px', fontWeight: 800, color: BRAND_COLORS.navy, fontSize: '0.9rem' }}>Date Of Birth</Typography>
                        <Typography sx={{ fontWeight: 800, color: BRAND_COLORS.gold, mr: 1.5, fontSize: '0.9rem' }}>:</Typography>
                        <Typography sx={{ fontWeight: 700, color: '#111', fontSize: '0.9rem' }}>{formatDate(formData.dob) || '---'}</Typography>
                      </Box>
                      
                      {/* Integrated Aadhaar Data Display row onto the card preview */}
                      <Box display="flex" alignItems="center">
                        <Typography sx={{ width: '110px', minWidth: '110px', fontWeight: 800, color: BRAND_COLORS.navy, fontSize: '0.9rem' }}>Aadhaar No</Typography>
                        <Typography sx={{ fontWeight: 800, color: BRAND_COLORS.gold, mr: 1.5, fontSize: '0.9rem' }}>:</Typography>
                        <Typography sx={{ fontWeight: 700, color: '#111', fontSize: '0.9rem' }}>{formData.aadhaarNo || '---'}</Typography>
                      </Box>

                      <Box display="flex" alignItems="center">
                        <Typography sx={{ width: '110px', minWidth: '110px', fontWeight: 800, color: BRAND_COLORS.navy, fontSize: '0.9rem' }}>ID No</Typography>
                        <Typography sx={{ fontWeight: 800, color: BRAND_COLORS.gold, mr: 1.5, fontSize: '0.9rem' }}>:</Typography>
                        <Typography sx={{ fontWeight: 800, color: BRAND_COLORS.maroon, fontSize: '0.9rem', letterSpacing: '0.5px', textTransform: 'uppercase' }}>{formData.membershipId || '---'}</Typography>
                      </Box>
                    </Box>
                  </Grid>

                  {/* Profile Image Column */}
                  <Grid item xs={4.5} display="flex" justifyContent="center" marginLeft={10} sx={{ pr: '0px !important' }}>
                    <Box 
                      sx={{ 
                        width: '115px', 
                        height: '135px', 
                        borderRadius: '12px', 
                        border: `2px solid ${BRAND_COLORS.navy}`, 
                        overflow: 'hidden',
                        boxShadow: '0px 6px 15px rgba(9,49,84,0.12)',
                        backgroundColor: '#fafafa',
                        position: 'relative'
                      }}
                    >
                      <Box 
                        component="img"
                        src={profilePreview || "https://via.placeholder.com/115x135?text=No+Photo"}
                        alt="Member Profile"
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                      />
                    </Box>
                  </Grid>
                </Grid>

                {/* Footer Address */}
                <Box 
                  display="flex" 
                  alignItems="center" 
                  justifyContent="center" 
                  gap={0.5} 
                  sx={{ 
                    borderTop: `1.5px solid rgba(9, 49, 84, 0.15)`, 
                    pt: 1, 
                    pb: 0.5,
                    width: '100%',
                    zIndex: 1
                  }}
                >
                  <LocationOn sx={{ color: BRAND_COLORS.gold, fontSize: 14 }} />
                  <Typography sx={{ fontSize: '0.80rem', fontWeight: 700, color: BRAND_COLORS.navy, textAlign: 'center', lineHeight: 1.3 }}>
                    10, Thiruvallur Street, Shanthi Nagar, Irumbuliyur, East Tambaram, Chennai - 600059
                  </Typography>
                </Box>

              </Paper>

              <Box display="flex" alignItems="center" gap={1} sx={{ mt: 3, color: 'success.main' }}>
                <CheckCircleOutline />
                <Typography variant="body2" fontWeight="medium">Everything looks ready for card registration.</Typography>
              </Box>
            </Box>
          )}

          {/* Navigation Action Buttons Controls */}
          <Box display="flex" justifyContent="space-between" sx={{ mt: 4 }}>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              startIcon={<NavigateBefore />}
              variant="outlined"
              sx={{ color: BRAND_COLORS.navy, borderColor: BRAND_COLORS.navy }}
            >
              Back
            </Button>
            
            {activeStep < steps.length - 1 ? (
              <Button
                variant="contained"
                onClick={handleNext}
                endIcon={<NavigateNext />}
                sx={{ backgroundColor: BRAND_COLORS.navy, '&:hover': { backgroundColor: '#124a7c' } }}
              >
                Next
              </Button>
            ) : (
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{
                  px: 4,
                  fontWeight: 'bold',
                  boxShadow: 3,
                  backgroundColor: BRAND_COLORS.navy,
                  '&:hover': {
                    backgroundColor: '#124a7c'
                  }
                }}
              >
                Generate & Download Membership Card
              </Button>
            )}
          </Box>

        </form>
      </Paper>
    </Container>
  );
}