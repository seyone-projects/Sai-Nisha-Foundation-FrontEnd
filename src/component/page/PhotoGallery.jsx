import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Divider,
  CssBaseline,
  useMediaQuery,
  Grid,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "./Footer";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";
import heroImage from "../page/image/volunteers 2.png";
import ngoImage1 from "../page/image/award 2.jpg";
import ngoImage2 from "../page/image/award 1.jpg";
import ngoImage3 from "../page/image/award 3.jpg";
import ngoImage4 from "../page/image/DSC05916.jpg";
import ngoImage5 from "../page/image/DSC06299.jpg";
import ngoImage6 from "../page/image/DSC06390.jpg";
import ngoImage7 from "../page/image/DSC06321.jpg";
import ngoImage8 from "../page/image/DSC06093.jpg";
import ngoImage9 from "../page/image/DSC05856.jpg";
import ngoImage10 from "../page/image/DSC05886.jpg";
import ngoImage11 from "../page/image/DSC06458.jpg";
import ngoImage12 from "../page/image/DSC06154.jpg";
import ngoImage13 from "../page/image/DSC06329.jpg";
import ngoImage14 from "../page/image/DSC06118.jpg";

const darkBg = "#121212";
const gold = "#FFC107";
const whiteText = "#FFFFFF";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: gold },
    text: {
      primary: "#FFFFFF",
      secondary: "rgba(255, 255, 255, 0.7)",
    },
  },
  typography: {
    fontFamily: `"Poppins", "Roboto", "Helvetica", "Arial", sans-serif`,
    h1: { fontWeight: 900, textTransform: "uppercase", letterSpacing: "8px" },
    h2: { fontWeight: 800 },
  },
});
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const OppositeSection = ({ title, img1, img2, isMobile, index }) => {
  const isFromRight = Math.floor(index / 2) % 2 === 0;
  const startX = isFromRight ? 120 : -120;

  const itemVariants = {
    hidden: { opacity: 0, x: startX, scale: 0.95 },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <Box sx={{ bgcolor: "#000", py: isMobile ? 8 : 12, overflow: "hidden" }}>
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <Grid container spacing={6} alignItems="center">
            
            {/* TEXT CONTENT */}
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Typography
                  variant={isMobile ? "h5" : "h4"}
                  sx={{ color: gold, mb: 2, fontWeight: 800 }}
                >
                  {title}
                </Typography>
                <Divider
                  sx={{ borderColor: gold, width: "80px", borderWidth: 2 }}
                />
              </motion.div>
            </Grid>

            {/* IMAGES GRID */}
            <Grid item xs={12} md={6}>
              <Grid container spacing={3}>
                {[img1, img2].map((img, imgIdx) => (
                  <Grid item xs={12} sm={6} key={imgIdx}>
                    <motion.div 
                        variants={itemVariants}
                        whileHover={{ scale: 1.03 }} 
                        style={{ willChange: "transform" }}
                    >
                      <Box
                        component="img"
                        src={img}
                        alt={title}
                        sx={{
                          width: "100%",
                          height: isMobile ? 250 : 320,
                          objectFit: "cover",
                          borderRadius: 3, 
                          filter: "brightness(0.9)",
                          boxShadow: "0px 15px 40px rgba(0,0,0,0.6)",
                          display: "block"
                        }}
                      />
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default function PhotoGallery() {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [heroIndex, setHeroIndex] = useState(0);

  const heroImages = [heroImage, ngoImage5, ngoImage6, ngoImage7, ngoImage8];

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const sections = [
    { title: "Events listed", img1: ngoImage1, img2: ngoImage2 },
    { title: "Moments That Matter Most", img1: ngoImage3, img2: ngoImage4 },
    { title: "Standing Strong Together", img1: ngoImage5, img2: ngoImage6 },
    { title: "Hope in Difficult Times", img1: ngoImage7, img2: ngoImage8 },
    { title: "Empowering Communities", img1: ngoImage9, img2: ngoImage10 },
    { title: "A Brighter Future", img1: ngoImage11, img2: ngoImage12 },
    { title: "Helping Hands", img1: ngoImage13, img2: ngoImage14 },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* WhatsApp FAB */}
      <Box sx={{ position: "fixed", bottom: 20, right: 20, zIndex: 9999 }}>
        <Button
          component="a"
          href="https://wa.me/919962290875"
          target="_blank"
          sx={{
            minWidth: 0,
            width: 56,
            height: 56,
            borderRadius: "50%",
            backgroundColor: "#25D366",
            color: "#fff",
            boxShadow: "0px 4px 15px rgba(37, 211, 102, 0.4)",
            "&:hover": { backgroundColor: "#1EBE5D", transform: "scale(1.1)" },
          }}
        >
          <WhatsAppIcon />
        </Button>
      </Box>

      <Box sx={{ backgroundColor: darkBg, color: whiteText, overflowX: "hidden" }}>
        
        {/* HERO SECTION */}
        <Box
          sx={{
            height: "100vh",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center"
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={heroIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `url(${heroImages[heroIndex]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                zIndex: 0
              }}
            />
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            style={{ zIndex: 1, padding: "0 20px" }}
          >
            <Typography 
              variant={isMobile ? "h3" : "h2"} 
              sx={{ 
                fontWeight: 900, 
                letterSpacing: "4px",
                textShadow: "0px 4px 20px rgba(0,0,0,0.9)" 
              }}
            >
              SAI NISHA FOUNDATION
            </Typography>
            <Typography variant="h6" sx={{ color: gold, mt: 2, fontWeight: 300, letterSpacing: 2 }}>
                BUILDING HOPE, CHANGING LIVES
            </Typography>
          </motion.div>
        </Box>

        {/* DYNAMIC SECTIONS */}
        {sections.map((section, index) => (
          <OppositeSection
            key={index}
            index={index}
            title={section.title}
            img1={section.img1}
            img2={section.img2}
            isMobile={isMobile}
          />
        ))}

        {/* FOOTER WRAPPER */}
        <Box sx={{ bgcolor: "#050B18", borderTop: `1px solid ${gold}33` }}>
          <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  );
}