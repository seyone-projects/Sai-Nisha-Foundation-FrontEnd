import React from "react";
import {
  Box,
  Button,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Container,
  keyframes,
  useMediaQuery,
  CssBaseline,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "./Footer";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";
import serviceImg1 from "./image/ngo 3.avif";

const gold = "#D68910";
const lightMuted = "#CBD5E1"; 

const theme = createTheme({
  typography: {
    fontFamily: `"Poppins", sans-serif`,
    h2: { fontWeight: 900 },
    h4: { fontWeight: 800 },
    h5: { fontWeight: 700 },
    h6: { fontWeight: 600 },
  },
});

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
`;

const spotlightMove = keyframes`
  0% { transform: translate(-20%, -20%); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translate(120%, 120%); opacity: 0; }
`;

function FullPageVideoBackground() {
  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        zIndex: -2,
        overflow: "hidden",
      }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "brightness(0.35) contrast(1.15)",
        }}
      >
        <source src="/animation eeee.mp4" type="video/mp4" />
      </video>
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, #05070a 0%, #0f172a 50%, #1e293b 100%)",
          opacity: 0.85,
        }}
      />
    </Box>
  );
}

function BubblesBackground() {
  return (
    <Box sx={{ position: "fixed", inset: 0, zIndex: -1, pointerEvents: "none" }}>
      {[...Array(20)].map((_, i) => (
        <Box
          key={i}
          sx={{
            position: "absolute",
            bottom: "-50px",
            left: `${Math.random() * 100}%`,
            width: 10 + Math.random() * 20,
            height: 10 + Math.random() * 20,
            borderRadius: "50%",
            background: "rgba(214,137,16,0.3)",
            animation: `floatUp ${12 + Math.random() * 10}s linear infinite`,
          }}
        />
      ))}
      <style>{`
        @keyframes floatUp {
          from { transform: translateY(0); opacity: 0; }
          20% { opacity: .6; }
          to { transform: translateY(-450vh); opacity: 0; }
        }
      `}</style>
    </Box>
  );
}

export default function Newsandpublication() {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <FullPageVideoBackground />
      <BubblesBackground />

      {/* WHATSAPP */}
      <Button
        component="a"
        href="https://wa.me/919962290875"
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          width: 56,
          height: 56,
          borderRadius: "50%",
          bgcolor: "#25D366",
          color: "#fff",
          zIndex: 9999,
          '&:hover': { bgcolor: "#128C7E" }
        }}
      >
        <WhatsAppIcon />
      </Button>

      <Box sx={{ position: "relative", zIndex: 2, minHeight: "100vh", display: 'flex', flexDirection: 'column' }}>
        <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 }, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

          {/* HERO SECTION */}
          <Box
            sx={{
              position: "relative",
              backgroundColor: "rgba(17,24,39,0.4)",
              backdropFilter: "blur(4px)",
              borderRadius: 4,
              py: { xs: 4, md: 6 },
              mb: 6,
              textAlign: "center",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.1)"
            }}
          >
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background: "radial-gradient(circle, rgba(214,137,16,0.2), transparent)",
                animation: `${spotlightMove} 4s infinite`,
              }}
            />

            <Typography
              variant={isMobile ? "h4" : "h2"}
              sx={{
                color: "#fff",
                textTransform: "uppercase",
                animation: `${fadeIn} 1s ease-out`,
                letterSpacing: 2
              }}
            >
              Our <span style={{ color: gold }}> Magazine</span>
            </Typography>

            <Typography sx={{ color: "rgba(255,255,255,0.7)", mt: 2, letterSpacing: 4 }}>
              EXPLORE • PARTICIPATE • GROW
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Card
              sx={{
                maxWidth: 400,
                width: '100%',
                background: "rgba(15, 23, 42, 0.8)",
                backdropFilter: "blur(20px)",
                borderRadius: 8,
                border: "1px solid rgba(255,255,255,0.15)",
                color: "#fff",
                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.7)",
                animation: `${slideUp} 1s ease-out forwards`,
                overflow: 'hidden',
                transition: "transform 0.4s ease",
                '&:hover': { transform: 'scale(1.02)' }
              }}
            >
              <CardMedia
                component="img"
                height="320"
                image={serviceImg1}
                alt="Sai Nisha Foundation Magazine"
                sx={{ objectFit: 'cover' }}
              />
              
              <Box sx={{ 
                height: 0, 
                position: 'relative', 
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '100px',
                  background: 'linear-gradient(to top, rgba(15, 23, 42, 1), transparent)'
                }
              }} />

              <CardContent sx={{ textAlign: "center", p: 4 }}>
                <Typography variant="h5" sx={{ color: gold, mb: 2, fontWeight: 800, textTransform: 'uppercase' }}>
                  SAI NISHA FOUNDATION
                </Typography>
                <Typography sx={{ color: lightMuted, fontSize: '1rem', lineHeight: 1.6, mb: 3 }}>
                  Dive into our latest publication covering our impact, stories of hope, and upcoming community initiatives.
                </Typography>
                
                <Button 
                  variant="contained" 
                  fullWidth
                  sx={{ 
                    bgcolor: gold, 
                    color: '#000', 
                    fontWeight: 900,
                    py: 1.5,
                    borderRadius: 2,
                    '&:hover': { bgcolor: '#b3720d' }
                  }}
                >
                  View  Magazine
                </Button>
              </CardContent>
            </Card>
          </Box>

        </Container>

        {/* FOOTER */}
        <Box sx={{ 
          width: "100%", 
          mt: 4,
          bgcolor: 'rgba(0,0,0,0.5)',
          "& *": { color: "#ffffff !important" } 
        }}>
          <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  );
}