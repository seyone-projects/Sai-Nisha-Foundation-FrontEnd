import React, { useState } from 'react';
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
  Divider
} from '@mui/material';
import {
  AppRegistration as FormIcon,
  CloudUpload as UploadIcon,
  PhotoCamera
} from '@mui/icons-material';

export default function MembershipForm() {
  const [formData, setFormData] = useState({
    name: '',
    mobileNo: '',
    dob: '',
  });
  const [profilePreview, setProfilePreview] = useState(null);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Membership Data:', formData);
    // Add your API submission logic here
    alert('Membership Application Submitted Successfully!');
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5, mb: 5 }}>
      <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>
        
        {/* Form Header */}
        <Box display="flex" alignItems="center" justifyContent="center" gap={1} mb={1}>
          <FormIcon color="primary" sx={{ fontSize: 32 }} />
          <Typography  variant="h4" component="h1" fontWeight="bold" color="primary.main">
            SAI NISHA FOUNDATION
          </Typography>
        </Box>
        <Typography variant="subtitle1" align="center" color="text.secondary" gutterBottom>
          CARRYING HIS LIGHT FORWARD
        </Typography>
        
        <Typography variant="h6" align="center" fontWeight="bold" sx={{ mt: 2, mb: 4, letterSpacing: 1 }}>
          LIFE MEMBERSHIP APPLICATION FORM
        </Typography>
        
        <Divider sx={{ mb: 4 }} />

        {/* Form Body */}
        <form onSubmit={handleSubmit}>
          <Grid container spacing={4}>
            
            {/* Left/Main Section: Text Inputs */}
            <Grid item xs={12} md={8}>
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
            </Grid>

            {/* Right Section: Profile Photo Upload */}
            <Grid item xs={12} md={4} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
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
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12} sx={{ mt: 2 }}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                sx={{
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  borderRadius: 2,
                  boxShadow: 3
                }}
              >
                Submit & Generate Membership Card
              </Button>
            </Grid>

          </Grid>
        </form>
      </Paper>
    </Container>
  );
}