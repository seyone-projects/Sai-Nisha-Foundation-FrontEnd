import React from 'react';
import LogoImage from '../page/image/ngo.jpeg'; 
import CoverPhoto from '../page/image/ngo 3.avif';
import Footer from './Footer'; 

import { 
  Card, 
  CardMedia, 
  Typography, 
  Box, 
  Button 
} from '@mui/material';

const NewsAndPublication = () => {
  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh', 
      bgcolor: '#f0f2f5' 
    }}>
      
      {/* Main Content Area */}
      <Box sx={{ flex: 1, p: 4, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Card sx={{ 
          maxWidth: 380, 
          borderRadius: '24px', 
          boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
          bgcolor: 'white',
          p: 1.5 
        }}>
          
          {/* Header Green Section */}
          <Box sx={{ 
            bgcolor: '#a3d133', 
            p: 3, 
            borderRadius: '16px 16px 0 0',
            position: 'relative'
          }}>
            <Box 
              component="img" 
              src={LogoImage} 
              alt="Smile Foundation"
              sx={{ height: 28, mb: 1 }} 
            />
            
            <Typography variant="h3" sx={{ 
              color: 'white', 
              fontWeight: 900, 
              textTransform: 'lowercase', 
              letterSpacing: -1.5,
              lineHeight: 1
            }}>
              Events magazine
            </Typography>
            
            <Typography sx={{ 
              textAlign: 'right', 
              color: 'white', 
              fontSize: '0.7rem', 
              fontWeight: 'bold',
              mt: 0.5 
            }}>
              FEB 1 / 2026
            </Typography>
          </Box>

          {/* Main Image with Title Overlay */}
          <Box sx={{ position: 'relative' }}>
            <CardMedia
              component="img"
              image={CoverPhoto}
              alt="Cover"
              sx={{ height: 300, objectFit: 'cover' }}
            />
        
            {/* Curved Footer Section (Visual element on the card) */}
            <Box sx={{ 
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              bgcolor: '#78bc34', 
              p: 2, 
              color: 'white',
              borderBottomRightRadius: '50px'
            }}>
            </Box>
          </Box>

          {/* Action Button Section */}
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <Button 
              variant="contained" 
              disableElevation
              sx={{ 
                bgcolor: '#8cc63f', 
                '&:hover': { bgcolor: '#78a835' },
                borderRadius: '10px',
                px: 4,
                py: 1.2,
                fontWeight: 900,
                fontSize: '0.85rem',
                textTransform: 'uppercase'
              }}
            >
              View the SAI NISHA FOUNDATION
            </Button>
          </Box>
        </Card>
      </Box>
  
 <Box sx={{ bgcolor: "#020617", borderTop: '1px solid rgba(255,255,255,0.05)', "& *": { color: "#fff !important" } }}>
        <Footer />
      </Box>
      
    </Box>
  );
};

export default NewsAndPublication;