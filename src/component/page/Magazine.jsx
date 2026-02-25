import React from 'react';
import { Box, Typography, Container, Stack, IconButton, Grid } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import CloudIcon from '@mui/icons-material/Cloud';
import LanguageIcon from '@mui/icons-material/Language';
import LeftImage from '../page/image/notify.jpeg';
import MainImage from '../page/image/notify.jpeg';
import Footer from '../page/Footer';

const Magazine = () => {
  return (
    <Box 
      sx={{ 
        bgcolor: '#0f172a', 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column',
        backgroundImage: 'radial-gradient(circle at 50% 50%, #1e293b 0%, #0f172a 100%)'
      }}
    >
      <Container 
        maxWidth="lg" 
        sx={{ 
          py: { xs: 4, md: 6 }, 
          flexGrow: 1, 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center' 
        }}
      >
        <Box
          sx={{
            position: 'relative',
            bgcolor: '#fcfaf7', 
            boxShadow: '0px 50px 100px rgba(0,0,0,0.5)',
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            maxWidth: '850px',
            border: '1px solid rgba(255,255,255,0.1)',
            overflow: 'hidden'
          }}
        >
          {/* Top Section */}
          <Box
            sx={{
              bgcolor: '#1a2a3a', 
              color: 'white',
              p: { xs: 4, md: 7 },
              pb: { xs: 8, md: 15 },
              clipPath: 'polygon(0 0, 100% 0, 100% 88%, 0 100%)',
              zIndex: 10,
            }}
          >
            <Typography 
              variant="h1" 
              sx={{ 
                fontWeight: 900, 
                letterSpacing: -2, 
                fontSize: { xs: '2.5rem', md: '4rem' },
                textTransform: 'uppercase',
                lineHeight: 0.9,
                mb: 2
              }}
            >
              Our New <br /> 
              <span style={{ color: '#d4af37' }}>Magazine</span>
            </Typography>
            
            <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
              <Typography variant="overline" sx={{ letterSpacing: 5, fontWeight: 800, color: '#d4af37' }}>
                SAI NISHA FOUNDATION
              </Typography>
              <Box sx={{ flexGrow: 1, height: '2px', bgcolor: '#d4af37', opacity: 0.3 }} />
            </Stack>

            <Typography variant="body2" sx={{ letterSpacing: 2, fontWeight: 400, opacity: 0.7 }}>
              THE PRIME FOUNDATION
            </Typography>
          </Box>

          {/* Image Section */}
          <Box sx={{ position: 'relative', mt: { xs: -4, md: -8 }, px: { xs: 2, md: 0 } }}>
            {/* Background Decorative Image */}
            <Box
              sx={{
                position: 'absolute',
                top: '10%',
                left: 0,
                width: '40%',
                height: '75%',
                backgroundImage: `url(${LeftImage})`, 
                backgroundSize: 'cover',
                clipPath: 'polygon(0 15%, 100% 0, 100% 85%, 0 100%)',
                filter: 'sepia(40%) contrast(1.2)',
                zIndex: 1,
                display: { xs: 'none', md: 'block' },
                border: '8px solid white'
              }}
            />

            {/* Hero Image */}
            <Box
              sx={{
                position: 'relative',
                mt: 4,
                ml: 'auto',
                width: { xs: '100%', md: '85%' },
                height: { xs: '300px', md: '450px' }, // Tightened height
                backgroundImage: `url(${MainImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                zIndex: 2,
                boxShadow: '-20px 20px 40px rgba(0,0,0,0.15)',
                borderLeft: { md: '12px solid #fcfaf7' },
                clipPath: { md: 'polygon(10% 0, 100% 0, 100% 100%, 0 100%)', xs: 'none' }
              }}
            />
          </Box>

          {/* Content Section */}
          <Box sx={{ p: { xs: 4, md: 6 }, bgcolor: '#fcfaf7' }}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={10}>
                <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                  {[SettingsIcon, CloudIcon, LanguageIcon].map((Icon, i) => (
                    <IconButton key={i} size="small" sx={{ color: '#1a2a3a', border: '1px solid #1a2a3a' }}>
                      <Icon fontSize="small" />
                    </IconButton>
                  ))}
                </Stack>
                <Typography variant="h4" sx={{ fontWeight: 800, color: '#1a2a3a', mb: 2, fontSize: {xs: '1.5rem', md: '2rem'} }}>
                  INSPIRING GLOBAL CHANGE
                </Typography>
                <Typography variant="body1" sx={{ color: '#4b5563', lineHeight: 1.6, borderLeft: '4px solid #d4af37', pl: 3 }}>
                  This inaugural edition marks the beginning of the Sai Nisha Foundation's journey. 
                  We explore the intersection of community, growth, and sustainable impact.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>

      {/* Footer Area */}
      <Box sx={{ width: "100%", "& *": { color: "#ffffff !important" } }}>
        <Footer />
      </Box>
    </Box>
  );
};

export default Magazine;