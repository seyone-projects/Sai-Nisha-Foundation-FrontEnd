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

/* IMAGES */
import heroImage from "../page/image/volunteers 2.png";
import ngoImage2 from "../page/image/DSC05759.jpg";
import ngoImage3 from "../page/image/DSC05657.jpg";
import ngoImage5 from "../page/image/DSC05856.jpg";
import ngoImage6 from "../page/image/DSC06023.jpg";
import ngoImage7 from "../page/image/DSC06227.jpg";
import ngoImage8 from "../page/image/DSC06390.jpg";
import ngoImage9 from "../page/image/DSC06321.jpg";
import ngoImage10 from "../page/image/DSC05766.jpg";
import ngoImage11 from "../page/image/DSC05797.jpg";

/* CONSTANTS */
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

/* ANIMATIONS */
const letterAnim = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const imageReveal = {
  hidden: { clipPath: "inset(100% 0 0 0)", opacity: 0 },
  visible: {
    clipPath: "inset(0% 0 0 0)",
    opacity: 1,
    transition: { duration: 1.2, ease: "circOut" },
  },
};

/* HERO IMAGES */
const heroImages = [heroImage, ngoImage5, ngoImage6, ngoImage7, ngoImage8];

/* REUSABLE SECTION COMPONENT */
const OppositeSection = ({ title, img1, img2, isMobile }) => (
  <Box sx={{ bgcolor: "#000", py: isMobile ? 8 : 12 }}>
    <Container>
      <Grid container spacing={6} alignItems="center">
        
        {/* LEFT CONTENT */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
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

        {/* RIGHT IMAGES */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={3}>
            {[img1, img2].map((img, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={imageReveal}
                >
                  <Box
                    component="img"
                    src={img}
                    sx={{
                      width: "100%",
                      height: isMobile ? 250 : 320,
                      objectFit: "cover",
                      borderRadius: 2,
                      filter: "brightness(0.8) contrast(1.2)",
                    }}
                  />
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default function PhotoGallery() {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const sections = [
    { title: "Events listed", img1: ngoImage3, img2: ngoImage2 },
    { title: "Moments That Matter Most", img1: ngoImage5, img2: ngoImage6 },
    { title: "Standing Strong Together", img1: ngoImage7, img2: ngoImage8 },
    { title: "Hope in Difficult Times", img1: ngoImage9, img2: ngoImage10 },
    { title: "Hope in Difficult Times", img1: ngoImage11, img2: ngoImage3 },
    { title: "Hope in Difficult Times", img1: ngoImage2, img2: ngoImage3 },
    { title: "Hope in Difficult Times", img1: ngoImage2, img2: ngoImage3 },
    { title: "Hope in Difficult Times", img1: ngoImage2, img2: ngoImage3 },
    { title: "Moments That Matter Most", img1: ngoImage2, img2: ngoImage3 },
    { title: "Standing Strong Together", img1: ngoImage3, img2: ngoImage2 },
    { title: "Hope in Difficult Times", img1: ngoImage2, img2: ngoImage3 },
    { title: "Hope in Difficult Times", img1: ngoImage2, img2: ngoImage3 },
    { title: "Hope in Difficult Times", img1: ngoImage2, img2: ngoImage3 },
    { title: "Hope in Difficult Times", img1: ngoImage2, img2: ngoImage3 },
    { title: "Hope in Difficult Times", img1: ngoImage2, img2: ngoImage3 },
    { title: "Moments That Matter Most", img1: ngoImage2, img2: ngoImage3 },
    { title: "Standing Strong Together", img1: ngoImage3, img2: ngoImage2 },
    { title: "Hope in Difficult Times", img1: ngoImage2, img2: ngoImage3 },
    { title: "Hope in Difficult Times", img1: ngoImage2, img2: ngoImage3 },
    { title: "Hope in Difficult Times", img1: ngoImage2, img2: ngoImage3 },
    { title: "Hope in Difficult Times", img1: ngoImage2, img2: ngoImage3 },
    { title: "Hope in Difficult Times", img1: ngoImage2, img2: ngoImage3 },
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
            "&:hover": { backgroundColor: "#1EBE5D", transform: "scale(1.1)" },
          }}
        >
          <WhatsAppIcon />
        </Button>
      </Box>

      <Box sx={{ backgroundColor: darkBg, color: whiteText }}>
        
        {/* HERO SECTION */}
        <Box
          sx={{
            height: "100vh",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={heroIndex}
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.35 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2.5 }}
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `url(${heroImages[heroIndex]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </AnimatePresence>
    <Typography variant="h2" sx={{ fontWeight: 900, mb: 4 }}>
             SAI NISHA FOUNDATION
    </Typography>
        </Box>

        {/* DYNAMIC SECTIONS */}
        {sections.map((section, index) => (
          <OppositeSection
            key={index}
            title={section.title}
            img1={section.img1}
            img2={section.img2}
            isMobile={isMobile}
          />
        ))}

        <Box sx={{ bgcolor: "#050B18", "& *": { color: "#fff !important" } }}>
               <Footer />
             </Box>
      </Box>
    </ThemeProvider>
  );
}
