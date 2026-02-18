import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Container,
  CssBaseline,
  useMediaQuery,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { motion, AnimatePresence } from "framer-motion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Footer from "./Footer";

/* IMAGE IMPORTS */
import eventImg1 from "../page/image/DSC05916.jpg";
import eventImg4 from "../page/image/DSC06321.jpg";
import eventImg8 from "../page/image/DSC06093.jpg";
import eventImg12 from "../page/image/DSC06023.jpg";
import eventImg3 from "../page/image/DSC06390.jpg";

const cinematicNavy = "#0B121E";
const cinematicGold = "#F2A900";

const theme = createTheme({
  typography: {
    fontFamily: `"Poppins", "Roboto", "Helvetica", "Arial", sans-serif`,
    h2: { fontWeight: 900 },
    h4: { fontWeight: 800 },
    h5: { fontWeight: 700 },
    h6: { fontWeight: 600 },
  },
});

const BG_IMAGES = [eventImg1, eventImg4, eventImg8, eventImg12, eventImg3];

// --- ANIMATION VARIANTS ---
const fadeDown = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardItemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// --- SHADER BACKGROUND ---
function GlobalShaderBackground() {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        overflow: "hidden",
        background: cinematicNavy,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "200%",
          height: "200%",
          top: "-50%",
          left: "-50%",
          background: `radial-gradient(circle at 50% 50%, ${cinematicNavy} 0%, #162435 50%, ${cinematicNavy} 100%)`,
          animation: "meshRotate 20s linear infinite",
          opacity: 0.8,
        }}
      />
      {[...Array(3)].map((_, i) => (
        <Box
          key={i}
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background: `linear-gradient(${45 + i * 30}deg, transparent 0%, rgba(242,169,0,0.05) 50%, transparent 100%)`,
            animation: `waveMove ${10 + i * 5}s infinite alternate ease-in-out`,
            mixBlendMode: "screen",
          }}
        />
      ))}
      <style>{`
        @keyframes meshRotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes waveMove { 0% { transform: translateY(-10%) translateX(-5%); } 100% { transform: translateY(10%) translateX(5%); } }
      `}</style>
    </Box>
  );
}

// --- HERO BACKGROUND SLIDER ---
function CinematicHeroBackground() {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % BG_IMAGES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ position: "absolute", inset: 0, zIndex: 1, overflow: "hidden" }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={bgIndex}
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 0.4, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 3, ease: "easeInOut" }}
          style={{
            width: "100%",
            height: "100%",
            backgroundImage: `url(${BG_IMAGES[bgIndex]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "absolute",
          }}
        />
      </AnimatePresence>
      <Box sx={{ position: "absolute", inset: 0, background: `linear-gradient(to bottom, transparent, ${cinematicNavy})`, zIndex: 2 }} />
    </Box>
  );
}

export default function Careers() {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalShaderBackground />

      {/* WHATSAPP FLOAT */}
      <Box sx={{ position: "fixed", bottom: 20, right: 20, zIndex: 9999 }}>
        <IconButton
          component="a"
          href="https://wa.me/919962290875"
          target="_blank"
          sx={{
            width: 56,
            height: 56,
            backgroundColor: "#25D366",
            color: "#fff",
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
            "&:hover": { backgroundColor: "#1EBE5D", transform: "scale(1.1)" },
          }}
        >
          <WhatsAppIcon sx={{ fontSize: 30 }} />
        </IconButton>
      </Box>

      <Box sx={{ position: "relative", zIndex: 2 }}>
        
        {/* HERO SECTION */}
        <Box
          sx={{
            height: { xs: "60vh", md: "80vh" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
            mb: 8,
          }}
        >
          <CinematicHeroBackground />
          <Container maxWidth="lg" sx={{ position: "relative", zIndex: 10, textAlign: "center" }}>
            <motion.div variants={fadeDown} initial="hidden" animate="visible">
              <Typography
                variant={isMobile ? "h2" : "h1"}
                sx={{
                  color: "#fff",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: { xs: 2, md: 8 },
                  textShadow: "0 10px 30px rgba(0,0,0,0.8)",
                }}
              >
                Our <span style={{ color: cinematicGold }}>Careers</span>
              </Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.7)", mt: 3, fontSize: 20, letterSpacing: 2 }}>
                EXPLORE • PARTICIPATE • GROW
              </Typography>
            </motion.div>
          </Container>
        </Box>

        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Typography
            variant="h4"
            fontWeight={800}
            textAlign="center"
            sx={{ mb: 6, color: "#fff" }}
          >
            Join us get Involved view openings
          </Typography>

          {/* JOB CARDS */}
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Grid container spacing={4} justifyContent="center" alignItems="stretch">
              <Grid item xs={12} sm={6} md={4} display="flex" justifyContent="center">
                <JobCard
                  title="Internship"
                  location="Tambaram, Chennai"
                  desc="Part of one of India’s largest youth-run NGOs. Learn real-world skills."
                  type="Internship"
                  date="09/08/2025"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} display="flex" justifyContent="center">
                <JobCard
                  title="Content Writer"
                  location="Tambaram, Chennai"
                  desc="Create engaging content that connects our mission with hearts."
                  type="Full time"
                  date="12/08/2025"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} display="flex" justifyContent="center">
                <JobCard
                  title="Business Development"
                  location="Tambaram, Chennai"
                  desc="Drive growth and build relationships with corporate partners."
                  type="Full time"
                  date="15/08/2025"
                />
              </Grid>
                      <Grid item xs={12} sm={6} md={4} display="flex" justifyContent="center">
                <JobCard
                  title="video creator"
                  location="Tambaram, Chennai"
                  desc="Create compelling visual stories that inspire action and strengthen audience engagement."
                  type="Full time"
                  date="25/08/2025"
                />
              </Grid>
            </Grid>
          </motion.div>

          {/* WHY JOIN SECTION */}
          <Box sx={{ mt: 15 }}>
            <Typography variant="h4" fontWeight={800} textAlign="center" sx={{ color: "#fff", mb: 8 }}>
              Why Join <span style={{ color: cinematicGold }}>Involve Scope</span>
            </Typography>

            <Grid container spacing={4} justifyContent="center">
              {[
                { title: "Purpose-Driven Work", text: "Work on projects that address real challenges in education and healthcare." },
                { title: "Learn & Grow", text: "Build leadership and workplace skills through hands-on mentorship." },
                { title: "Nationwide Impact", text: "Collaborate with a diverse team from across India to touch lives." },
              ].map((item, idx) => (
                <Grid item xs={12} md={4} key={idx} display="flex" justifyContent="center">
                  <motion.div
                    variants={cardItemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    style={{ width: '100%', maxWidth: 350 }}
                  >
                    <Paper
                      sx={{
                        p: 4,
                        borderRadius: 5,
                        height: "100%",
                        background: "rgba(255, 255, 255, 0.05)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        color: "#fff",
                        transition: "0.3s",
                        "&:hover": { borderColor: cinematicGold, transform: "translateY(-10px)" },
                      }}
                    >
                      <Typography fontWeight={700} sx={{ color: cinematicGold, mb: 2 }}>
                        {item.title}
                      </Typography>
                      <Typography fontSize={14} sx={{ opacity: 0.8 }}>
                        {item.text}
                      </Typography>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* FAQ SECTION */}
          <Box
            sx={{
              mt: 14,
              py: { xs: 8, md: 12 },
              background: "linear-gradient(135deg, #F2A900, #D68910)",
              borderRadius: 6,
              color: "#fff",
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
            }}
          >
            <Container maxWidth="lg">
              <Grid container spacing={6} alignItems="flex-start">
                <Grid item xs={12} md={4}>
                  <Typography variant="h4" fontWeight={800} mb={2}>
                    Frequently asked questions
                  </Typography>
                  <Typography sx={{ opacity: 0.9, mb: 4 }}>
                    We are always here to help. Reach out!
                  </Typography>
                  <Paper sx={{ p: 3, borderRadius: 4, display: "flex", alignItems: "center", gap: 2 }}>
                    <WhatsAppIcon sx={{ fontSize: 40, color: "#22c55e" }} />
                    <Box>
                      <Typography fontWeight={700} color="#111827">Reach out to us</Typography>
                      <Typography fontSize={14} color="text.secondary">hello@sainisha.in</Typography>
                    </Box>
                  </Paper>
                </Grid>

                <Grid item xs={12} md={8}>
                  {[
                    { q: "What is Sai Nisha Foundation?", a: "A youth-driven NGO focused on education and healthcare." },
                    { q: "How long is recruitment?", a: "Usually 1–2 weeks depending on volume." },
                    { q: "Is it paid?", a: "Learning-focused; some roles offer performance stipends." },
                  ].map((item, index) => (
                    <Accordion
                      key={index}
                      sx={{
                        mb: 2,
                        backgroundColor: "rgba(255,255,255,0.15)",
                        color: "#fff",
                        borderRadius: "12px !important",
                        "&:before": { display: "none" },
                      }}
                    >
                      <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}>
                        <Typography fontWeight={600}>{item.q}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography sx={{ opacity: 0.9 }}>{item.a}</Typography>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Container>

        {/* --- MODIFIED FOOTER SECTION --- */}
        <Box sx={{ 
          width: "100%", 
          "& *": { color: "#ffffff !important" } 
        }}>
          <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

function JobCard({ title, location, desc, type, date }) {
  return (
    <motion.div 
      variants={cardItemVariants} 
      whileHover={{ y: -10 }}
      style={{ width: '100%', maxWidth: 350 }}
    >
      <Paper
        sx={{
          p: 3,
          borderRadius: 6,
          background: "rgba(255, 255, 255, 0.03)",
          backdropFilter: "blur(15px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          color: "#fff",
          transition: "0.4s",
          height: "100%",
          display: 'flex',
          flexDirection: 'column',
          "&:hover": {
            background: "rgba(255, 255, 255, 0.07)",
            borderColor: cinematicGold,
            boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
          },
        }}
      >
        <Typography fontWeight={800} sx={{ color: cinematicGold, mb: 1, fontSize: '1.2rem' }}>
          {title}
        </Typography>
        <Typography fontSize={13} sx={{ opacity: 0.7, mb: 2 }}>
          {location}
        </Typography>
        <Typography fontSize={14} sx={{ opacity: 0.8, mb: 3, flexGrow: 1 }}>
          {desc}
        </Typography>
        <Box sx={{ pt: 2, borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <Typography fontSize={12} sx={{ color: cinematicGold, fontWeight: 600 }}>
            {type} • Posted: {date}
          </Typography>
        </Box>
      </Paper>
    </motion.div>
  );
}