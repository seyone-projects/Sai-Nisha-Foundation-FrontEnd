import React from 'react';
import { Box, Typography, Container, Stack, IconButton, Grid,   CssBaseline, } from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SettingsIcon from '@mui/icons-material/Settings';
import CloudIcon from '@mui/icons-material/Cloud';
import LanguageIcon from '@mui/icons-material/Language';
import LeftImage from '../page/image/notify.jpeg';
import MainImage from '../page/image/notify.jpeg';
import Footer from '../page/Footer';

const theme = createTheme({
  palette: {
    primary: { main: "#0B1F3A" },      
    secondary: { main: "#FFC107" }, 
    background: { default: "#0A192F" },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

const Magazine = () => {
  return (
       <ThemeProvider theme={theme}>
          <CssBaseline />
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
        maxWidth={false} 
        disableGutters
        sx={{ 
          flexGrow: 1, 
          display: 'flex', 
          flexDirection: 'column'
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
            border: 'none', 
            overflow: 'hidden'
          }}
        >
          {/* Top Section */}
          <Box
            sx={{
              bgcolor: '#1a2a3a', 
              color: 'white',
              p: { xs: 4, md: 7 },
              pt: { xs: 6, md: 8 }, 
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
                fontSize: { xs: '2.5rem', md: '5rem' },
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
          <Box sx={{ position: 'relative', mt: { xs: -4, md: -8 } }}>
            <Box
              sx={{
                position: 'absolute',
                top: '10%',
                left: 0,
                width: '35%',
                height: '75%',
                backgroundImage: `url(${LeftImage})`, 
                backgroundSize: 'cover',
                clipPath: 'polygon(0 15%, 100% 0, 100% 85%, 0 100%)',
                filter: 'sepia(40%) contrast(1.2)',
                zIndex: 1,
                display: { xs: 'none', md: 'block' },
                border: '8px solid white',
                borderLeft: 'none'
              }}
            />

            {/* Hero Image */}
            <Box
              sx={{
                position: 'relative',
                mt: 4,
                ml: 'auto',
                width: { xs: '100%', md: '75%' },
                height: { xs: '350px', md: '550px' }, 
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
          <Box sx={{ p: { xs: 4, md: 8 }, bgcolor: '#fcfaf7' }}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={8}>
                <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                  {[SettingsIcon, CloudIcon, LanguageIcon].map((Icon, i) => (
                    <IconButton key={i} size="small" sx={{ color: '#1a2a3a', border: '1px solid #1a2a3a' }}>
                      <Icon fontSize="small" />
                    </IconButton>
                  ))}
                </Stack>
                <Typography variant="h4" sx={{ fontWeight: 800, color: '#1a2a3a', mb: 2, fontSize: {xs: '1.8rem', md: '2.5rem'} }}>
                  INSPIRING GLOBAL CHANGE
                </Typography>
                <Typography variant="body1" sx={{ color: '#4b5563', lineHeight: 1.8, borderLeft: '6px solid #d4af37', pl: 3, fontSize: '1.1rem' }}>
                  This inaugural edition marks the beginning of the Sai Nisha Foundation's journey. 
                  We explore the intersection of community, growth, and sustainable impact.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>

      {/* Footer */}
      <Box sx={{ width: "100%", "& *": { color: "#ffffff !important" } }}>
        <Footer />
      </Box>
    </Box>
        </ThemeProvider>
  );
};

export default Magazine;