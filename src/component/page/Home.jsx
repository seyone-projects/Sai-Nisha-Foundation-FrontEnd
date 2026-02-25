import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Card,
  CardContent,
  useMediaQuery,
  Divider,
  CssBaseline,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "./Footer";
import Grid from '@mui/material/Grid';
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";
import heroImage from "../page/image/volunteers 2.png";
import ngoImage5 from "../page/image/image4.png.png";
import ngoImage6 from "../page/image/home.jpg";
import ngoImage7 from "../page/image/home1.jpg";
import ngoImage8 from "../page/image/home3.jpg";
import ngoImage2 from "../page/image/newborn.png";
import ngoImage3 from "../page/image/baby.png";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const darkBg = "#121212";
const gold = "#FFC107";
const whiteText = "#FFFFFF";

const theme = createTheme({
  palette: { 
    mode: 'dark',
    primary: { main: gold },
    text: {
      primary: "#FFFFFF",
      secondary: "rgba(255, 255, 255, 0.7)",
    }
  },
  typography: {
    fontFamily: `"Poppins", "Roboto", "Helvetica", "Arial", sans-serif`,
    h1: { fontWeight: 900, textTransform: 'uppercase', letterSpacing: '8px' },
    h2: { fontWeight: 800 },
  },
});

const staggerContainer = {
  initial: {},
  animate: { transition: { staggerChildren: 0.05 } }
};

const letterAnim = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const imageClipReveal = {
  hidden: { clipPath: "inset(0 100% 0 0)", opacity: 0 },
  visible: { 
    clipPath: "inset(0 0% 0 0)", 
    opacity: 1, 
    transition: { duration: 1.2, ease: "circOut" } 
  }
};

const heroImages = [heroImage, ngoImage5, ngoImage6, ngoImage7, ngoImage8];

export default function Home() {
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(max-width:960px)");
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const testimonials = [
    { text: "Our goal is to ensure that every mother and newborn receives timely support during critical moments." },
    { text: "We strive to expand our reach by building strong partnerships with healthcare providers." },
    { text: "Our vision is a sustainable support system where no family faces emergencies alone." },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      {/* WhatsApp FAB */}
      <Box sx={{ position: "fixed", bottom: isMobile ? 15 : 20, right: isMobile ? 15 : 20, zIndex: 9999 }}>
        <Button
          component="a" href="https://wa.me/919962290875" target="_blank"
          sx={{ 
            minWidth: 0, width: isMobile ? 50 : 56, height: isMobile ? 50 : 56, 
            borderRadius: "50%", backgroundColor: "#25D366", color: "#fff", 
            boxShadow: "0 10px 30px rgba(0,0,0,0.5)", 
            "&:hover": { backgroundColor: "#1EBE5D", transform: "scale(1.1)" } 
          }}
        >
          <WhatsAppIcon sx={{ fontSize: isMobile ? 24 : 30 }} />
        </Button>
      </Box>

      <Box sx={{ backgroundColor: darkBg, color: whiteText, overflowX: "hidden" }}>
        
        {/* HERO SECTION */}
        <Box sx={{ height: "100vh", position: "relative", overflow: "hidden", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={heroIndex}
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.35 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2.5, ease: "linear" }}
              style={{
                position: "absolute", inset: 0,
                backgroundImage: `url(${heroImages[heroIndex]})`,
                backgroundSize: "cover", backgroundPosition: "center",
                zIndex: 1
              }}
            />
          </AnimatePresence>

          <Container sx={{ position: "relative", zIndex: 2, textAlign: "center", px: 3 }}>
            <motion.div variants={staggerContainer} initial="initial" animate="animate">
              
              {/* Animated Gold Header */}
              <Box sx={{ overflow: 'hidden', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', mb: 2 }}>
                {"SAI NISHA FOUNDATION".split("").map((char, i) => (
                  <motion.span key={i} variants={letterAnim} style={{ display: 'inline-block' }}>
                    <Typography 
                      variant={isMobile ? "body2" : "h5"} 
                      sx={{ 
                        color: gold, 
                        fontWeight: 700,
                        letterSpacing: isMobile ? '2px' : '4px',
                        mr: char === " " ? (isMobile ? 1 : 2) : 0.2 
                      }}
                    >
                      {char}
                    </Typography>
                  </motion.span>
                ))}
              </Box>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 1.5 }}>
                <Typography variant={isMobile ? "body2" : "h6"} sx={{ fontStyle: 'italic', mb: isMobile ? 2 : 4, opacity: 0.8, fontSize: isMobile ? '0.85rem' : '1.25rem' }}>
                  "Reliving the moments of joy, talent, and meaningful connections"
                </Typography>
                <Box sx={{ width: '60px', height: '3px', bgcolor: gold, margin: '0 auto', mb: isMobile ? 3 : 4 }} />
                
                <Typography variant="overline" sx={{ letterSpacing: isMobile ? 4 : 8, display: 'block', mb: 1, color: gold, fontSize: isMobile ? '0.6rem' : '0.75rem' }}>
                  Care Moments
                </Typography>
                <Typography variant={isMobile ? "h4" : "h2"} sx={{ mb: isMobile ? 4 : 6, fontWeight: 900 }}>
                  Captured Emotions
                </Typography>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: gold, color: '#000', fontWeight: 900, 
                      px: isMobile ? 4 : 6, py: isMobile ? 1.5 : 2,
                      borderRadius: '0px', 
                      fontSize: isMobile ? '0.8rem' : '1rem',
                      '&:hover': { bgcolor: '#fff' }
                    }}
                  >
                    Join as Volunteer
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </Container>
        </Box>

        {/* GOALS SECTION */}
        <Box sx={{ py: isMobile ? 8 : 15, bgcolor: '#0a0a0a' }}>
          <Container>
            <Typography variant={isMobile ? "h5" : "h4"} textAlign="center" sx={{ color: gold, mb: isMobile ? 6 : 10, letterSpacing: isMobile ? 2 : 4, fontWeight: 700 }}>
              OUR GOALS
            </Typography>
            <Grid container spacing={isMobile ? 3 : 6}>
              {testimonials.map((goal, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={!isMobile ? { y: -15, boxShadow: `0px 10px 30px ${gold}33` } : {}}
                  >
                    <Card sx={{ bgcolor: '#1a1a1a', color: '#fff', height: '100%', borderRadius: 0, borderLeft: `2px solid ${gold}` }}>
                      <CardContent sx={{ p: isMobile ? 3 : 5 }}>
                        <Typography variant="body1" lineHeight={1.8} sx={{ opacity: 0.7, fontSize: isMobile ? '0.9rem' : '1rem' }}>
                          {goal.text}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* OPPOSITE REACTION 1 */}
        <Box sx={{ bgcolor: '#000', py: isMobile ? 8 : 15 }}>
          <Container>
            <Grid container spacing={isMobile ? 4 : 8} alignItems="center">
              <Grid item xs={12} md={6}>
                <motion.div 
                  initial={{ opacity: 0, x: isMobile ? 0 : -100, y: isMobile ? 20 : 0 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <Typography variant={isMobile ? "h5" : "h4"} sx={{ color: gold, mb: 2, fontWeight: 800 }}>
                    When Joy Turns Into Fear
                  </Typography>
                  <Divider sx={{ borderColor: gold, width: '80px', mb: 3, borderWidth: 2 }} />
                  <Typography variant="body1" sx={{ fontSize: isMobile ? '0.95rem' : '1.1rem', lineHeight: 1.8, opacity: 0.6 }}>
                    Every day, a mother struggles to reach timely medical care. <br />
                    A newborn waits for life-saving NICU admission. <br />
                    We bridge that gap.
                  </Typography>
                </motion.div>
              </Grid>

              <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
                <motion.div initial="hidden" whileInView="visible" variants={imageClipReveal}>
                  <Box
                    component="img"
                    src={ngoImage3}
                    sx={{ 
                      width: "100%", 
                      maxWidth: "500px", 
                      borderRadius: '4px', 
                      filter: 'brightness(0.8) contrast(1.2)',
                      height: isMobile ? '300px' : 'auto',
                      objectFit: 'cover'
                    }}
                  />
                </motion.div>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* OPPOSITE REACTION 2 */}
        <Box sx={{ bgcolor: '#0a0a0a', py: isMobile ? 8 : 15 }}>
          <Container>
            <Grid container spacing={isMobile ? 4 : 8} alignItems="center" direction={isMobile ? "column-reverse" : "row"}>
              <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
                <motion.div initial="hidden" whileInView="visible" variants={imageClipReveal}>
                  <Box
                    component="img"
                    src={ngoImage2}
                    sx={{ 
                      width: "100%", 
                      maxWidth: "500px", 
                      borderRadius: '4px', 
                      filter: 'grayscale(40%)',
                      height: isMobile ? '300px' : 'auto',
                      objectFit: 'cover'
                    }}
                  />
                </motion.div>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <motion.div 
                   initial={{ opacity: 0, x: isMobile ? 0 : 100, y: isMobile ? 20 : 0 }}
                   whileInView={{ opacity: 1, x: 0, y: 0 }}
                   transition={{ duration: 0.8 }}
                >
                  <Typography variant={isMobile ? "h5" : "h4"} sx={{ color: gold, mb: 2, fontWeight: 800 }}>
                    Our Core Work
                  </Typography>
                  <Divider sx={{ borderColor: gold, width: '80px', mb: 3, borderWidth: 2 }} />
                  <Typography variant="body1" sx={{ fontSize: isMobile ? '1rem' : '1.2rem', lineHeight: 2 }}>
                    • Supporting mothers <strong>when it matters most</strong><br />
                    • Helping newborns fight <strong>their first battle</strong><br />
                    • Extending compassion to the unseen
                  </Typography>
                </motion.div>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* FINAL BANNER */}
        <Box 
          component={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          sx={{ 
            py: isMobile ? 6 : 10, 
            textAlign: "center", 
            background: `linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url(${ngoImage6})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: isMobile ? 'scroll' : 'fixed', 
            borderTop: `1px solid ${gold}`,
            borderBottom: `1px solid ${gold}`,
            px: 2
          }}
        >
          <Container maxWidth="md">
            <Typography variant={isMobile ? "h6" : "h4"} sx={{ fontStyle: 'italic', color: gold, fontWeight: 300, lineHeight: 1.6 }}>
              "Sai Nisha Foundation stands beside life, when it needs support the most."
            </Typography>
          </Container>
        </Box>


        <Box sx={{ color: "#FFFFFF" }}>
          <Footer />
        </Box>

      </Box>
    </ThemeProvider>
  );
}