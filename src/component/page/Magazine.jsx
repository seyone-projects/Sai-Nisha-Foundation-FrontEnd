import React from 'react';
import { Box, Typography, Container, Grid, Stack, IconButton } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import CloudIcon from '@mui/icons-material/Cloud';
import LanguageIcon from '@mui/icons-material/Language';

const Magazine = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4, bgcolor: '#f4f4f4', minHeight: '100vh' }}>
      <Box
        sx={{
          position: 'relative',
          bgcolor: 'white',
          boxShadow: 3,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          aspectRatio: '1 / 1.414',
        }}
      >
        {/* Top Section: Green Header & Text */}
        <Box
          sx={{
            bgcolor: '#4a6741',
            color: 'white',
            p: 4,
            pt: 6,
            clipPath: 'polygon(0 0, 100% 0, 100% 70%, 0 100%)',
            zIndex: 2,
          }}
        >
          <Typography variant="h1" sx={{ fontWeight: 800, letterSpacing: 4, mb: 0 }}>
           Our New  Magazine
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Typography variant="caption" sx={{ letterSpacing: 2, opacity: 0.8 }}>
              THE FOUNDATION
            </Typography>
            <Box sx={{ flexGrow: 1, height: '1px', bgcolor: 'rgba(255,255,255,0.3)', ml: 2 }} />
          </Box>
          <Typography variant="body2" sx={{ maxWidth: '70%', fontSize: '0.7rem', lineHeight: 1.6, opacity: 0.9 }}>
           SAI NISHA FOUNDATION
          </Typography>

          <Stack direction="row" spacing={1} sx={{ mt: 3 }}>
            {[SettingsIcon, CloudIcon, LanguageIcon].map((Icon, index) => (
              <IconButton key={index} size="small" sx={{ border: '1px solid white', color: 'white', p: 0.5 }}>
                <Icon fontSize="inherit" />
              </IconButton>
            ))}
          </Stack>
        </Box>

        {/* Middle Section: Diagonal Image Grid */}
        <Box sx={{ flexGrow: 1, position: 'relative', mt: -5 }}>
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '20%',
              height: '40%',
              backgroundImage: 'url(https://images.unsplash.com/photo-1518843875459-f738682238a6?auto=format&fit=crop&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              clipPath: 'polygon(0 15%, 100% 65%, 100% 100%, 0 100%)',
              zIndex: 1,
            }}
          />

          {/* Right Image (Woman) */}
          <Box
            sx={{
              position: 'absolute',
              top: '5%',
              right: 0,
              width: '65%',
              height: '85%',
              backgroundImage: 'url(https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              clipPath: 'polygon(0 35%, 100% 0, 100% 100%, 25% 100%)',
              border: '10px solid white',
            }}
          >
            {/* White Diagonal Lines Overlay */}
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255,255,255,0.3) 41px, rgba(255,255,255,0.3) 42px)',
              }}
            />
          </Box>
        </Box>

        {/* Bottom Section: Footer Text */}
        <Box sx={{ p: 4, textAlign: 'right', bgcolor: 'white' }}>
          <Typography  sx={{ fontWeight: 'bold', color: '#4a6741', mb: 0 }}>
            |||
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 'bold', letterSpacing: 2 }}>
            NEW MAGAZINE
          </Typography>
          <Typography variant="caption" color="text.secondary" sx={{ display: 'block', maxWidth: '300px', ml: 'auto' }}>
            This is first event for the inaugration for sai nisha foundation
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Magazine;