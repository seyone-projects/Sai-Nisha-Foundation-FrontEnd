import React, { useState, useEffect } from 'react';
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
  AppRegistration as FormIcon,
  CloudUpload as UploadIcon,
  PhotoCamera,
  NavigateNext,
  NavigateBefore,
  CheckCircleOutline
} from '@mui/icons-material';

const steps = ['Personal Details', 'Profile Photo', 'Review & Confirm'];

export default function MembershipForm() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    mobileNo: '',
    dob: '',
    membershipId: '' // New field for ID
  });
  const [profilePreview, setProfilePreview] = useState(null);

  // Helper function to generate the next ID
  const generateID = () => {
    // 1. Get the last used number from localStorage, or start at 0
    const lastId = localStorage.getItem('last_sainisha_id') || '0';
    const nextIdNumber = parseInt(lastId, 10) + 1;
    
    // 2. Format it: Pad with zeros (e.g., 1 becomes 001)
    const paddedNumber = String(nextIdNumber).padStart(3, '0');
    const newId = `sainisha${paddedNumber}`;
    
    return { newId, nextIdNumber };
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

    // GENERATION LOGIC: 
    // If we are moving from Step 2 (Photo) to Step 3 (Review), 
    // generate the ID if we haven't already.
    if (activeStep === 1 && !formData.membershipId) {
      const { newId } = generateID();
      setFormData(prev => ({ ...prev, membershipId: newId }));
    }

    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // On final successful submission, save the ID count to localStorage
    const numericPart = formData.membershipId.replace('sainisha', '');
    localStorage.setItem('last_sainisha_id', parseInt(numericPart, 10));

    console.log('Final Membership Data:', formData);
    alert(`Success! Application ${formData.membershipId} Submitted.`);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5, mb: 5, ml: 0, mr: 'auto' }}>
      <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>
        
        <Box display="flex" alignItems="center" justifyContent="center" gap={1} mb={1}>
          <FormIcon color="primary" sx={{ fontSize: 32 }} />
          <Typography variant="h4" component="h1" fontWeight="bold" color="primary.main">
            SAI NISHA FOUNDATION
          </Typography>
        </Box>
        <Typography variant="subtitle1" align="center" color="text.secondary" gutterBottom>
          CARRYING HIS LIGHT FORWARD
        </Typography>
        
        <Typography variant="h6" align="center" fontWeight="bold" sx={{ mt: 2, mb: 3, letterSpacing: 1 }}>
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
              <Typography variant="caption" color="text.secondary" sx={{ mt: 2, textAlign: 'center' , maxHeight: 300}}>
                Upload a clear passport-size photograph
              </Typography>
            </Box>
          )}

          {/* STEP 3: Review and Confirm (Updated with ID) */}
          {activeStep === 2 && (
            <Box sx={{ minHeight: '220px' }}>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom color="primary">
                Please review your summary before generation:
              </Typography>
              <Grid container spacing={2} sx={{ mt: 1, p: 2, bgcolor: '#f9f9f9', borderRadius: 2 }}>
                <Grid item xs={8}>
                  {/* ID DISPLAYED HERE */}
                  <Typography variant="body1" color="primary" fontWeight="bold">
                    ID: {formData.membershipId}
                  </Typography>
                  <Divider sx={{ my: 1 }} />
                  <Typography variant="body1"><strong>Name:</strong> {formData.name}</Typography>
                  <Typography variant="body1" sx={{ mt: 1 }}><strong>Mobile No:</strong> {formData.mobileNo}</Typography>
                  <Typography variant="body1" sx={{ mt: 1 }}><strong>Date of Birth:</strong> {formData.dob}</Typography>
                </Grid>
                <Grid item xs={4} display="flex" justifyContent="center">
                  <Avatar src={profilePreview} variant="rounded" sx={{ width: 80, height: 90, border: '1px solid #ccc' }} />
                </Grid>
              </Grid>
              <Box display="flex" alignItems="center" gap={1} sx={{ mt: 2, color: 'success.main' }}>
                <CheckCircleOutline />
                <Typography variant="body2">Everything looks ready for card registration.</Typography>
              </Box>
            </Box>
          )}

          {/* Navigation Action Buttons */}
          <Box display="flex" justifyContent="space-between" sx={{ mt: 4 }}>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              startIcon={<NavigateBefore />}
              variant="outlined"
            >
              Back
            </Button>
            
            {activeStep < steps.length - 1 ? (
              <Button
                variant="contained"
                onClick={handleNext}
                endIcon={<NavigateNext />}
              >
                Next
              </Button>
            ) : (
              <Button
                type="submit"
                variant="contained"
                color="success"
                size="large"
                sx={{
                  px: 4,
                  fontWeight: 'bold',
                  boxShadow: 3
                }}
              >
                Submit & Generate Membership Card
              </Button>
            )}
          </Box>

        </form>
      </Paper>
    </Container>
  );
}