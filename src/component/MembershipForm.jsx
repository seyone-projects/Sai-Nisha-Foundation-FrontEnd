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

// Brand Color Palette perfectly matched to your logo ribbon strip
const BRAND_COLORS = {
  maroon: '#7A1A1C',
  gold: '#E59834',
  teal: '#008B9B',
  green: '#43882B',
  navy: '#093154',
  lightBg: '#F4F7F9'
};

export default function MembershipForm() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    mobileNo: '',
    dob: '',
    membershipId: '' 
  });
  const [profilePreview, setProfilePreview] = useState(null);
  
  const cardRef = useRef(null);

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const [year, month, day] = dateStr.split('-');
    return `${day}/${month}/${year}`;
  };

  const generateID = () => {
    const lastId = localStorage.getItem('last_sainisha_id') || '123455'; 
    const nextIdNumber = parseInt(lastId, 10) + 1;
    return { newId: String(nextIdNumber), nextIdNumber };
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePreview(URL.createObjectURL(file));
    }
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
    localStorage.setItem('last_sainisha_id', formData.membershipId);

    if (cardRef.current) {
      try {
        // Target capturing options optimized for high-fidelity assets representation
        const canvas = await html2canvas(cardRef.current, {
          useCORS: true, 
          allowTaint: true,
          scale: 3, // Multiplies resolution for crisp rendering
          backgroundColor: '#ffffff',
          logging: false,
          windowWidth: 600, // Forces static resolution footprint during image rendering compilation
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
  sx={{ backgroundColor: 'transparent' }} // Ensures the container has no background
>
  <Box
    component="img"
    src="/src/component/page/image/ngo-removebg-preview.png"
    alt="Sai Nisha Foundation Logo"
    sx={{
      width: '100%',
      maxWidth: 320,
      height: 'auto',        // Maintains the aspect ratio so the logo doesn't distort
      objectFit: 'contain',  // Forces the entire logo to be visible inside the box
      backgroundColor: 'transparent', // Removes any background color from the image element
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
            <Box sx={{ minHeight: '220px' }}>
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

          {/* STEP 3: Premium Identity Card Design Layout Preview */}
          {activeStep === 2 && (
            <Box 
              display="flex" 
              flexDirection="column" 
              alignItems="center" 
              sx={{ 
                minHeight: '340px',
                width: '100%',
                overflowX: 'auto', // Allows scrolling on small screens without breaking card snapshot width
                py: 2
              }}
            >
              
              {/* --- START OF TARGET IDENTITY CARD BLOCK --- */}
              <Paper 
                ref={cardRef}
                elevation={6} 
                sx={{ 
                  width: '600px', // Explicit fixed width ensures flawless rendering execution across all viewports
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
                {/* Visual Decorative Multi-Color Ribbon Accent Bars Framing All Four Sides */}
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

                {/* Background Geometric Abstract Vectors (Safe html2canvas structural opacity) */}
                <Box 
                  sx={{ 
                    position: 'absolute', top: '-40px', left: '-40px', width: '200px', height: '200px', 
                    borderRadius: '50%', bgcolor: BRAND_COLORS.teal, opacity: 0.06,
                    pointerEvents: 'none', zIndex: 0 
                  }} 
                />
                <Box 
                  sx={{ 
                    position: 'absolute', bottom: '20px', right: '-50px', width: '250px', height: '250px', 
                    borderRadius: '50%', bgcolor: BRAND_COLORS.maroon, opacity: 0.04,
                    pointerEvents: 'none', zIndex: 0 
                  }} 
                />
                <Box 
                  sx={{ 
                    position: 'absolute', top: '40%', right: '35%', width: '120px', height: '120px', 
                    borderRadius: '50%', bgcolor: BRAND_COLORS.gold, opacity: 0.03,
                    pointerEvents: 'none', zIndex: 0 
                  }} 
                />

                {/* Identity Card Top Section Header */}
                <Box display="flex" justifyContent="space-between" alignItems="center" width="100%" sx={{ zIndex: 1, mt: 0.5 }}>
                  {/* NGO Brand Container */}
                  <Box display="flex" alignItems="center">
                    <Avatar 
                      src="/src/component/page/image/ngo.jpeg" 
                      alt="Sai Nisha Foundation Logo" 
                      variant="square"
                      sx={{ width: 150, height: 50, objectFit: 'contain' }} 
                    />
                  </Box>

                  {/* Right Header Contact Info Block */}
                  <Box display="flex" flexDirection="column" gap={0.4} alignItems="flex-start">
                    <Box display="flex" alignItems="center" gap={1}>
                      <Phone sx={{ fontSize: 10, color: '#fff', bgcolor: BRAND_COLORS.navy, borderRadius: '50%', p: '2px' }} />
                      <Typography sx={{ fontSize: '0.72rem', fontWeight: 700, color: BRAND_COLORS.navy }}>+91 99622 90875</Typography>
                    </Box>
                    <Box display="flex" alignItems="center" gap={1}>
                      <Email sx={{ fontSize: 10, color: '#fff', bgcolor: BRAND_COLORS.navy, borderRadius: '50%', p: '2px' }} />
                      <Typography sx={{ fontSize: '0.72rem', fontWeight: 700, color: BRAND_COLORS.navy }}>hello@sainisha.in</Typography>
                    </Box>
                    <Box display="flex" alignItems="center" gap={1}>
                      <Language sx={{ fontSize: 10, color: '#fff', bgcolor: BRAND_COLORS.navy, borderRadius: '50%', p: '2px' }} />
                      <Typography sx={{ fontSize: '0.72rem', fontWeight: 700, color: BRAND_COLORS.navy }}>www.sainisha.in</Typography>
                    </Box>
                  </Box>
                </Box>

                {/* Main Identity Banner Header Text */}
                <Box width="100%" textAlign="center" my={1} sx={{ zIndex: 1 }}>
                  <Typography 
                    variant="subtitle1" 
                    sx={{ 
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
                  {/* Left Column Profile Data Setup */}
                  <Grid item xs={7.5} marginLeft={6} sx={{ pl: '0px !important' }}>
                    <Box display="flex" flexDirection="column" gap={1.2}>
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
                      <Box display="flex" alignItems="center">
                        <Typography sx={{ width: '110px', minWidth: '110px', fontWeight: 800, color: BRAND_COLORS.navy, fontSize: '0.9rem' }}>ID No</Typography>
                        <Typography sx={{ fontWeight: 800, color: BRAND_COLORS.gold, mr: 1.5, fontSize: '0.9rem' }}>:</Typography>
                        <Typography sx={{ fontWeight: 800, color: BRAND_COLORS.maroon, fontSize: '1rem', letterSpacing: '0.5px' }}>{formData.membershipId || '---'}</Typography>
                      </Box>
                    </Box>
                  </Grid>

                  {/* Right Column Profile Framed Image Holder */}
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

                {/* Identity Card Address Bottom Footer Bar Accent */}
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
                  <Typography sx={{ fontSize: '0.75rem', fontWeight: 700, color: BRAND_COLORS.navy, textAlign: 'center', lineHeight: 1.3 }}>
                    10, Thiruvallur Street, Shanthi Nagar, Irumbuliyur, East Tambaram, Chennai - 600059
                  </Typography>
                </Box>

              </Paper>
              {/* --- END OF TARGET IDENTITY CARD BLOCK --- */}

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