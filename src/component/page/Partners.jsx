import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  keyframes,
  useMediaQuery,
  CssBaseline,
  Grid,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "./Footer";
import img1 from "../page/image/DSC06299.jpg";
import img2 from "../page/image/DSC06390.jpg";
import img3 from "../page/image/DSC06321.jpg";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/900.css";

const gold = "#D68910";

const theme = createTheme({
  typography: {
    fontFamily: `"Poppins", sans-serif`,
    h2: { fontWeight: 900 },
    h4: { fontWeight: 800 },
  },
});

const orbit = keyframes`
  from { transform: rotate(0deg) translateX(var(--radius)) rotate(0deg); }
  to { transform: rotate(360deg) translateX(var(--radius)) rotate(-360deg); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

function FullPageVideoBackground() {
  return (
    <Box sx={{ position: "fixed", inset: 0, zIndex: -2, bgcolor: "#111827" }}>
      <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(17,24,39,0.85), rgba(17,24,39,0.95))" }} />
    </Box>

  );
}

const PartnerCard = ({ img, partner, onHover, onLeave, delay, isMobile, isPaused }) => {
  return (
    <Box
      onMouseEnter={() => onHover(partner)}
      onMouseLeave={onLeave}
      onClick={() => onHover(partner)}
      sx={{
        position: "absolute",
        top: "50%", 
        left: "50%",
        "--radius": isMobile ? "100px" : "180px",
        margin: isMobile ? "-50px 0 0 -50px" : "-70px 0 0 -70px",
        animation: `${orbit} 20s linear infinite`,
        animationDelay: delay,
        animationPlayState: isPaused ? "paused" : "running",
        zIndex: 1,
        cursor: "pointer",
        transition: "transform 0.3s ease",
        "&:hover": { zIndex: 10 },
      }}
    >
      <Box
        component="img"
        src={img}
        sx={{
          width: { xs: 100, md: 140 },
          height: { xs: 100, md: 140 },
          borderRadius: "50%",
          border: `3px solid ${gold}`,
          objectFit: "cover",
          boxShadow: `0 0 25px ${gold}44`,
          transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
          "&:hover": { 
            transform: "scale(1.1)",
            borderColor: "#fff",
            boxShadow: `0 0 40px ${gold}`,
          },
        }}
      />
    </Box>
  );
};

export default function Partners() {
  const isMobile = useMediaQuery("(max-width:900px)");
  const [isPaused, setIsPaused] = useState(false);
  
  const partnersData = [
    { 
        img: img1, 
        name: "Kalaimamani Thiru Dhina", 
        desc: "A legendary Music Director in the Indian film industry, known for his soul-stirring compositions and decades of contribution to cinematic excellence.", 
        delay: "0s" 
    },
    { 
        img: img2, 
        name: "R. Kannan", 
        desc: "A massive director recognized for his unique storytelling and blockbuster hits. His vision brings grand narratives to life on the silver screen.", 
        delay: "-6.6s" 
    },
    { 
        img: img3, 
        name: "Jagan Purushottam", 
        desc: "One of the finest actors of the generation, bringing depth and authenticity to every character he portrays with remarkable versatility.", 
        delay: "-13.3s" 
    },
  ];

  const [activePartner, setActivePartner] = useState(partnersData[0]);

  const handleHover = (partner) => {
    setActivePartner(partner);
    setIsPaused(true);
  };

  const handleLeave = () => {
    setIsPaused(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <FullPageVideoBackground />

      <Box sx={{ position: "relative", zIndex: 2, minHeight: "70vh", py: { xs: 5, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography 
            variant={isMobile ? "h4" : "h2"} 
            sx={{ color: "#fff", textAlign: "center", mb: { xs: 2, md: 8 }, letterSpacing: 2 }}
          >
            OUR <span style={{ color: gold }}>PARTNERS</span>
          </Typography>

          <Grid container spacing={4} alignItems="center" justifyContent="center">
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  height: { xs: 300, md: 500 },
                  width: "100%",
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "visible",
                }}
              >
                <Box sx={{ 
                    width: { xs: 60, md: 80 }, height: { xs: 60, md: 80 }, 
                    borderRadius: '50%', 
                    border: `1px dashed ${gold}`, 
                    position: 'absolute',
                    opacity: 0.3,
                    zIndex: 0
                }} />

                {partnersData.map((partner, index) => (
                  <PartnerCard 
                    key={index}
                    img={partner.img} 
                    partner={partner} 
                    onHover={handleHover} 
                    onLeave={handleLeave}
                    delay={partner.delay} 
                    isMobile={isMobile}
                    isPaused={isPaused}
                  />
                ))}
              </Box>
            </Grid>

            {/* RIGHT/BOTTOM SIDE: CONTENT DISPLAY */}
            <Grid item xs={12} md={6}>
              <Box 
                key={activePartner.name} 
                sx={{ 
                  animation: `${fadeIn} 0.6s ease-out`,
                  padding: { xs: 3, md: 5 },
                  borderLeft: { md: `4px solid ${gold}` },
                  borderTop: { xs: `4px solid ${gold}`, md: "none" },
                  bgcolor: "rgba(255,255,255,0.03)",
                  backdropFilter: "blur(10px)",
                  borderRadius: { xs: "20px", md: "0 20px 20px 0" },
                  textAlign: { xs: "center", md: "left" }
                }}
              >
                <Typography variant="overline" sx={{ color: gold, fontSize: "1rem", fontWeight: "bold", display: "block" }}>
                  Associate Spotlight
                </Typography>
                <Typography variant={isMobile ? "h4" : "h3"} sx={{ color: "white", mb: 2, fontWeight: 900 }}>
                  {activePartner.name}
                </Typography>
                <Typography variant="body1" sx={{ color: "#ccc", lineHeight: 1.8, fontSize: "1.1rem" }}>
                  {activePartner.desc}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        component="a"
        href="https://wa.me/919962290875"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          width: 60,
          height: 60,
          bgcolor: "#25D366",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
          zIndex: 9999,
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "scale(1.1)",
            bgcolor: "#1ebe5d",
          },
        }}
      >
        <WhatsAppIcon sx={{ color: "#fff", fontSize: 32 }} />
      </Box>

      <Box sx={{ width: "100%", "& *": { color: "#ffffff !important" } }}>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}