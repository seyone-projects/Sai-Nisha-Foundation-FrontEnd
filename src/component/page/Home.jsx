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
  IconButton,
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

/* IMAGES */
import heroImage from "../page/image/volunteers 2.png";
import ngoImage5 from "../page/image/image4.png.png";
import ngoImage6 from "../page/image/home.jpg";
import ngoImage7 from "../page/image/home1.jpg";
import ngoImage8 from "../page/image/home3.jpg";
import ngoImage1 from "../page/image/ladies.png";
import ngoImage2 from "../page/image/newborn.png";
import ngoImage3 from "../page/image/baby.png";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const darkBg = "#121212";
const gold = "#FFC107";
const whiteText = "#FFFFFF";

const theme = createTheme({
  palette: { mode: 'dark' },
  typography: {
    fontFamily: `"Poppins", "Roboto", "Helvetica", "Arial", sans-serif`,
    h1: { fontWeight: 900, textTransform: 'uppercase', letterSpacing: '8px' },
    h2: { fontWeight: 800 },
  },
});

// New Video-Style Animation Variants
const staggerContainer = {
  initial: {},
  animate: { transition: { staggerChildren: 0.1 } }
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
      <Box sx={{ position: "fixed", bottom: 20, right: 20, zIndex: 9999 }}>
        <Button
          component="a" href="https://wa.me/919962290875" target="_blank"
          sx={{ minWidth: 0, width: 56, height: 56, borderRadius: "50%", backgroundColor: "#25D366", color: "#fff", boxShadow: "0 10px 30px rgba(0,0,0,0.5)", "&:hover": { backgroundColor: "#1EBE5D", transform: "scale(1.1)" } }}
        >
          <WhatsAppIcon sx={{ fontSize: 30 }} />
        </Button>
      </Box>

      <Box sx={{ backgroundColor: darkBg, color: whiteText, overflowX: "hidden" }}>
        
        {/* HERO SECTION - KINETIC TYPOGRAPHY EFFECT */}
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

          <Container sx={{ position: "relative", zIndex: 2, textAlign: "center" }}>
            <motion.div variants={staggerContainer} initial="initial" animate="animate">
              {/* Animated Gold Header */}
              <Box sx={{ overflow: 'hidden', display: 'flex', justifyContent: 'center', mb: 1 }}>
                {"SAI NISHA FOUNDATION".split("").map((char, i) => (
                  <motion.span key={i} variants={letterAnim} style={{ display: 'inline-block' }}>
                    <Typography variant={isMobile ? "h6" : "h5"} sx={{ color: gold, mr: char === " " ? 2 : 0.5 }}>
                      {char}
                    </Typography>
                  </motion.span>
                ))}
              </Box>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1.5 }}>
                <Typography variant="h6" sx={{ fontStyle: 'italic', mb: 4, opacity: 0.8 }}>
                  "Reliving the moments of joy, talent, and meaningful connections"
                </Typography>
                <Box sx={{ width: '80px', height: '4px', bgcolor: gold, margin: '0 auto', mb: 4 }} />
                
                <Typography variant="overline" sx={{ letterSpacing: 8, display: 'block', mb: 2, color: gold }}>
                  Care Moments
                </Typography>
                <Typography variant={isMobile ? "h4" : "h2"} sx={{ mb: 6, fontWeight: 900 }}>
                  Captured Emotions
                </Typography>
                
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: gold, color: '#000', fontWeight: 900, px: 6, py: 2,
                      borderRadius: '0px', // Bold sharp edges from the video
                      fontSize: '1rem',
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

        {/* GOALS SECTION - GRID REVEAL EFFECT */}
        <Box sx={{ py: 15, bgcolor: '#0a0a0a' }}>
          <Container>
            <Typography variant="h4" textAlign="center" sx={{ color: gold, mb: 10, letterSpacing: 4 }}>
              OUR GOALS
            </Typography>
            <Grid container spacing={6}>
              {testimonials.map((goal, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ y: -15, boxShadow: `0px 10px 30px ${gold}33` }}
                  >
                    <Card sx={{ bgcolor: '#1a1a1a', color: '#fff', height: '100%', borderRadius: 0, borderLeft: `2px solid ${gold}` }}>
                      <CardContent sx={{ p: 5 }}>
                        <Typography variant="body1" lineHeight={2} sx={{ opacity: 0.7 }}>
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

        {/* OPPOSITE REACTION 1 - LEFT REVEAL */}
        <Box sx={{ bgcolor: '#000', py: 15 }}>
          <Container>
            <Grid container spacing={8} alignItems="center" direction={isMobile ? "column" : "row"}>
              <Grid item xs={12} md={6}>
                <motion.div 
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >
                  <Typography variant="h4" sx={{ color: gold, mb: 2, fontWeight: 800 }}>
                    When Joy Turns Into Fear
                  </Typography>
                  <Divider sx={{ borderColor: gold, width: '100px', mb: 4, borderWidth: 2 }} />
                  <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 2, opacity: 0.6 }}>
                    Every day, a mother struggles to reach timely medical care. <br />
                    A newborn waits for life-saving NICU admission. <br />
                    We bridge that gap.
                  </Typography>
                </motion.div>
              </Grid>

              <Grid item xs={12} md={6}>
                <motion.div initial="hidden" whileInView="visible" variants={imageClipReveal}>
                  <motion.img
                    src={ngoImage3}
                    style={{ width: "500px", borderRadius: '4px', filter: 'brightness(0.8) contrast(1.2)' }}
                    whileHover={{ scale: 1.05, filter: 'brightness(1)' }}
                  />
                </motion.div>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* OPPOSITE REACTION 2 - RIGHT REVEAL (REVERSED) */}
        <Box sx={{ bgcolor: '#0a0a0a', py: 15 }}>
          <Container>
            <Grid container spacing={8} alignItems="center" direction={isMobile ? "column-reverse" : "row"}>
              <Grid item xs={12} md={6}>
                <motion.div initial="hidden" whileInView="visible" variants={imageClipReveal}>
                  <motion.img
                    src={ngoImage2}
                    style={{ width: "500px", borderRadius: '4px', filter: 'grayscale(40%)' }}
                    whileHover={{ scale: 1.05, filter: 'grayscale(0%)' }}
                  />
                </motion.div>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <motion.div 
                   initial={{ opacity: 0, x: 100 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ duration: 1 }}
                >
                  <Typography variant="h4" sx={{ color: gold, mb: 2, fontWeight: 800 }}>
                    Our Core Work
                  </Typography>
                  <Divider sx={{ borderColor: gold, width: '100px', mb: 4, borderWidth: 2 }} />
                  <Typography variant="body1" sx={{ fontSize: '1.2rem', lineHeight: 2.2 }}>
                    • Supporting mothers <strong>when it matters most</strong><br />
                    • Helping newborns fight <strong>their very first battle</strong><br />
                    • Extending compassion to those often unseen
                  </Typography>
                </motion.div>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* VIDEO STYLE FINAL BANNER */}
        <Box 
          component={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          sx={{ 
            py: 10, 
            textAlign: "center", 
            background: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${ngoImage6})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed', // Parallax effect
            borderTop: `2px solid ${gold}`,
            borderBottom: `2px solid ${gold}`
          }}
        >
           <Container maxWidth="md">
             <Typography variant="h4" sx={{ fontStyle: 'italic', color: gold, fontWeight: 300 }}>
                "Sai Nisha Foundation stands beside life, when it needs support the most."
             </Typography>
           </Container>
        </Box>

        <Footer />
      </Box>
    </ThemeProvider>
  );
}