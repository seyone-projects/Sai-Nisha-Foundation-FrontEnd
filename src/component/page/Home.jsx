import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Container,
  Card,
  CardMedia,
  CardContent,
  useMediaQuery,
  Divider,
  CssBaseline,
   IconButton,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { motion ,AnimatePresence } from "framer-motion";
import Footer from "./Footer";


import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";


/* IMAGES */
import heroImage from "../page/image/volunteers 2.png";
import ngoImage5 from "../page/image/volunteer-work-with-food.jpg";
import ngoImage6 from "../page/image/education photo 2.jpg";
import ngoImage7 from "../page/image/education photo 1.jpg";
import ngoImage8 from "../page/image/kids education - 2.jpg";

import ngoImage1 from "../page/image/ladies.png";
import ngoImage2 from "../page/image/newborn.png";
import ngoImage3 from "../page/image/baby.png";
import ngoImage4 from "../page/image/kids education - 2.jpg";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";


const creamBg = "#F7F4EC";
const navyText = "#1F2F3F";
const olive = "#7C8F29";
const gold = "#D68910";
const mutedText = "#5F6F7E";


const theme = createTheme({
  typography: {
    fontFamily: `"Poppins", "Roboto", "Helvetica", "Arial", sans-serif`,
    h2: { fontWeight: 900 },
    h4: { fontWeight: 800 },
    h5: { fontWeight: 700 },
    body1: { fontWeight: 400 },
    body2: { fontWeight: 400 },
  },
});


const fadeUp = {
  hidden: { opacity: 0, y: 70 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -90 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 90 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

/* HERO IMAGES ARRAY (ONLY ADDITION) */
const heroImages = [
  heroImage,
  ngoImage5,
  ngoImage6,
  ngoImage7,
  ngoImage8,
];

function BubblesBackground() {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0, 
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {[...Array(35)].map((_, i) => {
        const size = Math.random() * 18 + 6;
        const randomLeft = Math.random() * 100;
        const duration = Math.random() * 12 + 8;
        const delay = Math.random() * 15;
        
      
        const isGold = i % 2 === 0;
        const color = isGold ? "rgba(214, 137, 16, 0.5)" : "rgba(255, 230, 0, 0.4)";
        const glow = isGold ? "rgba(214, 137, 16, 0.3)" : "rgba(255, 230, 0, 0.2)";

        return (
          <Box
            key={i}
            sx={{
              position: "absolute",
              bottom: "-20px",
              left: `${randomLeft}%`,
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: color,
              borderRadius: "50%",
              boxShadow: `0 0 12px 3px ${glow}`,
              opacity: 0,
              animation: `floatUp ${duration}s linear infinite`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}

      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          15% { opacity: 0.7; }
          85% { opacity: 0.6; }
          100% { transform: translateY(-450vh) scale(1.3); opacity: 0; }
        }
      `}</style>
    </Box>
  );
}

export default function Home() {
  const isMobile = useMediaQuery("(max-width:600px)");

   /* HERO AUTO SCROLL LOGIC */
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

   /* ================= TESTIMONIAL LOGIC (ADDED) ================= */
const testimonials = [
  {
    text:
      "Our goal is to ensure that every mother and newborn receives timely, compassionate, and reliable medical support during the most critical moments of life. By stepping in when families feel most vulnerable, we aim to reduce preventable risks and offer reassurance, care, and dignity at every stage of childbirth.",
  },
  {
    text:
      "We strive to expand our reach by building strong and lasting partnerships with hospitals, doctors, and healthcare providers across underserved and rural regions. Through collaboration and trust, we aim to bridge gaps in access to care and bring life-saving support closer to those who need it the most.",
  },
  {
    text:
      "Our long-term vision is to create a sustainable and responsive support system where no family has to face pregnancy-related or newborn emergencies alone. By fostering community involvement, awareness, and continuous support, we work towards a future where every life is protected and valued.",
  },
];


  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const prevTestimonial = () => {
    setActiveTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };
  /* ============================================================= */

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

       <Box
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          zIndex: 9999,
        }}
      >
        <Button
          component="a"
          href="https://wa.me/919962290875"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            minWidth: 0,
            width: 56,
            height: 56,
            borderRadius: "50%",
            backgroundColor: "#25D366",
            color: "#fff",
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
            "&:hover": {
              backgroundColor: "#1EBE5D",
              transform: "scale(1.1)",
            },
          }}
        >
          <WhatsAppIcon sx={{ fontSize: 30 }} />
        </Button>
      </Box>


      <Box sx={{ position: "relative", backgroundColor: creamBg, overflowX: "hidden" }}>
        
        <BubblesBackground />

        {/* ================= HERO ================= */}
          <Box
          sx={{
            height: isMobile ? "65vh" : "100vh",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* AUTO SLIDING BACKGROUND */}
          <AnimatePresence>
            <motion.div
              key={heroIndex}
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.4 }}
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `url(${heroImages[heroIndex]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </AnimatePresence>

          <Container sx={{ position: "relative", zIndex: 2, height: "100%" }}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <Typography
                  variant={isMobile ? "h4" : "h2"}
                  sx={{
                    background: `linear-gradient(90deg, ${navyText}, ${olive})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  SAI NISHA FOUNDATION
                </Typography>

                <Typography mt={2} fontStyle="italic" color={mutedText}>
                  Standing beside life,{" "}
                  <span style={{ color: gold, fontWeight: 700 }}>
                    when it needs support the most
                  </span>
                  .
                </Typography>

                <Box mt={5}>
                  <Button
                    size="large"
                    sx={{
                      px: 6,
                      py: 1.6,
                      borderRadius: 50,
                      background: `linear-gradient(90deg, ${olive}, ${gold})`,
                      fontWeight: 800,
                    }}
                  >
                    Join as Volunteer
                  </Button>
                </Box>
              </motion.div>
            </Box>
          </Container>
        </Box>

        {/* ================= TESTIMONIALS  ================= */}
   <Box
  sx={{
    py: 12,
    background:
      "linear-gradient(135deg, #e6ece3 0%, #f4f8f2 100%)",
  }}
>
  <Container maxWidth="md">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Typography
        variant="h5"
        textAlign="center"
        fontWeight={800}
        mb={6}
        sx={{
          letterSpacing: 1,
          color: "#406e2e",
        }}
      >
        Our Goals
      </Typography>
    </motion.div>

    <Box sx={{ position: "relative" }}>
      <motion.div
        key={activeTestimonial}
        initial={{ opacity: 0, x: 60, scale: 0.95 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: -60 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Card
  sx={{
    px: { xs: 3, md: 5 },
    py: { xs: 4, md: 5 },
    borderRadius: 6,
    backdropFilter: "blur(12px)",
    background:
      "linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(238, 250, 243, 0.9))",
    boxShadow:
      "0 25px 70px rgba(75, 110, 46, 0.25)",
    position: "relative",
    overflow: "hidden",
  }}
>

          {/* Decorative gradient glow */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at top left, rgba(90,70,200,0.15), transparent 60%)",
              pointerEvents: "none",
            }}
          />

          <CardContent>
  <motion.div
    animate={{ scale: [1, 1.05, 1] }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <Typography
      textAlign="center"
      lineHeight={1.9}
      sx={{
        fontSize: { xs: "1rem", md: "1.05rem" },
        color: "#4A4A4A",
        fontStyle: "italic",
      }}
    >
      <Box
        component="span"
        sx={{
          color: "#2e6e3c",
          fontWeight: 700,
          background:
            "linear-gradient(120deg, #acc84666 0%, transparent 100%)",
          px: 0.5,
          borderRadius: 1,
        }}
      >
        {testimonials[activeTestimonial].text}
      </Box>
    </Typography>
  </motion.div>
</CardContent>

        </Card>
      </motion.div>

      {/* LEFT BUTTON */}
      <IconButton
        onClick={prevTestimonial}
        sx={{
          position: "absolute",
          top: "50%",
          left: { xs: -10, md: -30 },
          transform: "translateY(-50%)",
          backgroundColor: "#ffffff",
          boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
          "&:hover": {
            backgroundColor: "#acc846",
            color: "#fff",
            transform: "translateY(-50%) scale(1.1)",
          },
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>

      {/* RIGHT BUTTON */}
      <IconButton
        onClick={nextTestimonial}
        sx={{
          position: "absolute",
          top: "50%",
          right: { xs: -10, md: -30 },
          transform: "translateY(-50%)",
          backgroundColor: "#ffffff",
          boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
          "&:hover": {
            backgroundColor: "#c8bb46",
            color: "#fff",
            transform: "translateY(-50%) scale(1.1)",
          },
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  </Container>
</Box>


        {/* ================= STORY ================= */}
        <Container sx={{ py: { xs: 6, md: 12 }, position: "relative", zIndex: 2 }}>
          <Grid container spacing={{ xs: 4, md: 7 }} alignItems="center">
            <Grid item size={{ xs: 12, md: 7 }}>
              <motion.div
                variants={fadeLeft}
                initial="hidden"
                whileInView="visible"
              >
                <Typography variant="h4" fontWeight={800} color={navyText}>
                  When Joy Turns Into Fear, 
                </Typography>
                <Divider sx={{ my: 3 }} />
                <Typography color={mutedText} lineHeight={2}>
                  Support Must Arrive Fast:
                  <br /><br />
                  • Supporting mothers{" "}
                  <span style={{ color: olive, fontWeight: 600 }}>
                    when it matters most
                  </span>
                  <br />
                  • The final weeks of pregnancy.{" "}
                  <span style={{ color: gold, fontWeight: 600 }}>
                    their very first battle
                  </span>
                  <br />
                  • The first hours after birth.
                  <br /><br />
                  These are the moments when life is most fragile.
                </Typography>
              </motion.div>
            </Grid>
            <Grid item size={{ xs: 12, md: 5 }} sx={{ textAlign: { xs: "center", md: "right" } }}>
              <motion.img
                src={ngoImage3}
                style={{
                  width: "100%",
                  maxWidth: "490px",
                  borderRadius: 24,
                  boxShadow: "0 35px 90px rgba(0,0,0,0.3)",
                }}
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                whileHover={{ scale: 1.08 }}
              />
            </Grid>
          </Grid>
        </Container>

        {/* ================= WHY WE EXIST ================= */}
        <Container sx={{ py: { xs: 6, md: 12 }, position: "relative", zIndex: 2 }}>
          <Grid container spacing={{ xs: 4, md: 7 }} alignItems="center">
            <Grid item size={{ xs: 12, md: 5 }} sx={{ textAlign: { xs: "center", md: "left" } }}>
              <motion.img
                src={ngoImage1}
                style={{
                  width: "100%",
                  maxWidth: "450px",
                  borderRadius: 24,
                  boxShadow: "0 35px 90px rgba(0,0,0,0.3)",
                }}
                variants={fadeLeft}
                initial="hidden"
                whileInView="visible"
                whileHover={{ scale: 1.08 }}
              />
            </Grid>
            <Grid item size={{ xs: 12, md: 7 }}>
              <motion.div
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
              >
                <Typography variant="h4" fontWeight={800} color={navyText}>
                  Why We Exist
                </Typography>
                <Divider sx={{ my: 3 }} />
                <Typography color={mutedText} lineHeight={2}>
                  Every day:
                  <br /><br />
                  • A mother struggles to reach{" "}
                  <span style={{ color: olive, fontWeight: 600 }}>
                    timely medical care
                  </span>
                  <br />
                  • A newborn waits for{" "}
                  <span style={{ color: gold, fontWeight: 600 }}>
                    life-saving NICU admission
                  </span>
                  <br />
                  • Decisions are delayed — not due to lack of treatment, but lack of support
                  <br /><br />
                  In these moments,{" "}
                  <strong style={{ color: navyText }}>
                    even a small delay can change everything
                  </strong>.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>
        </Container>

        {/* ================= CORE WORK ================= */}
        <Container sx={{ py: { xs: 6, md: 10 }, position: "relative", zIndex: 2 }}>
          <Grid container spacing={{ xs: 4, md: 7 }} alignItems="center">
            <Grid item size={{ xs: 12, md: 7 }}>
              <motion.div
                variants={fadeLeft}
                initial="hidden"
                whileInView="visible"
              >
                <Typography variant="h4" fontWeight={800} color={navyText}>
                  Our Core Work
                </Typography>
                <Divider sx={{ my: 3 }} />
                <Typography color={mutedText} lineHeight={2}>
                  Every day:
                  <br /><br />
                  • Supporting mothers{" "}
                  <span style={{ color: olive, fontWeight: 600 }}>
                    when it matters most
                  </span>
                  <br />
                  • Helping newborns fight{" "}
                  <span style={{ color: gold, fontWeight: 600 }}>
                    their very first battle
                  </span>
                  <br />
                  • Extending compassion to those often left unseen
                  <br /><br />
                  In these situation,{" "}
                  <strong style={{ color: navyText }}>
                    even a small portion can change everything
                  </strong>.
                </Typography>
              </motion.div>
            </Grid>
            <Grid item size={{ xs: 12, md: 5 }} sx={{ textAlign: { xs: "center", md: "right" } }}>
              <motion.img
                src={ngoImage2}
                style={{
                  width: "100%",
                  maxWidth: "450px",
                  borderRadius: 24,
                  boxShadow: "0 35px 90px rgba(0,0,0,0.3)",
                }}
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                whileHover={{ scale: 1.08 }}
              />
            </Grid>
          </Grid>
        </Container>

        <Box
          sx={{
            py: 1,
            p: 1,
            borderRadius: 15,
            background: `linear-gradient(90deg, ${olive}, ${gold})`,
            textAlign: "center",
            position: "relative",
            zIndex: 2,
          }}
        >
      <motion.div  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
  <Typography fontWeight={600} color="#1a1a1a" >
    <span style={{ color: "#2E7D32" }} >
      From a child’s first breath…
    </span>{" "}
    <span style={{ color: "#efcb00" }}>
      to a family’s first relief…
    </span>
    <br />
    <strong style={{ color: "#2E7D32" }}>
      Sai Nisha Foundation stands beside life
    </strong>
    <span style={{ color: "#291905" }}>
      , when it needs support the most.
    </span>
  </Typography>
</motion.div>
        </Box>

        <Footer />
      </Box>
    </ThemeProvider>
  );
}