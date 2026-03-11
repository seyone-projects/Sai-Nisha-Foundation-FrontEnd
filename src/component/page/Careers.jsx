import React, { useState, useEffect } from "react";
import { Box, Typography, Grid, Paper, Container, CssBaseline, useMediaQuery, Accordion, AccordionSummary, AccordionDetails, IconButton, createTheme, ThemeProvider, Button } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { ExpandMore as ExpandMoreIcon, WhatsApp as WhatsAppIcon } from "@mui/icons-material";
import { Link } from 'react-router-dom';
import Footer from "./Footer";
import eventImg1 from "../page/image/DSC05916.jpg";
import eventImg4 from "../page/image/DSC06321.jpg";
import eventImg8 from "../page/image/DSC06093.jpg";
import eventImg12 from "../page/image/DSC06023.jpg";
import eventImg3 from "../page/image/DSC06390.jpg";

const cinematicNavy = "#0B121E", cinematicGold = "#F2A900", BG_IMAGES = [eventImg1, eventImg4, eventImg8, eventImg12, eventImg3];
const theme = createTheme({ typography: { fontFamily: `"Poppins", "Roboto", sans-serif`, h2: { fontWeight: 900 }, h4: { fontWeight: 800 } } });

const anim = {
  fadeDown: { hidden: { opacity: 0, y: -30 }, visible: { opacity: 1, y: 0, transition: { duration: 1 } } },
  container: { visible: { transition: { staggerChildren: 0.2 } } },
  item: { hidden: { opacity: 0, scale: 0.9, y: 20 }, visible: { opacity: 1, scale: 1, y: 0 } }
};

const JOIN_DATA = [
  { t: "Purpose-Driven Work", d: "Work on projects that address real challenges in education and healthcare." },
  { t: "Learn & Grow", d: "Build leadership and workplace skills through hands-on mentorship." },
  { t: "Nationwide Impact", d: "Collaborate with a diverse team from across India to touch lives." }
];

const JOBS = [
  { t: "Internship", s: "Internship", d: "09/08/2025", p: "Part of one of India’s largest youth-run NGOs. Learn real-world skills." },
  { t: "Content Writer", s: "Full time", d: "12/08/2025", p: "Create engaging content that connects our mission with hearts." },
  { t: "Business Development", s: "Full time", d: "15/08/2025", p: "Drive growth and build relationships with corporate partners." },
  { t: "Video Creator", s: "Full time", d: "25/08/2025", p: "Create compelling visual stories that inspire action." }
];

const GlassPaper = ({ children, sx, ...props }) => (
  <Paper sx={{ p: 3, borderRadius: 5, background: "rgba(255,255,255,0.03)", backdropFilter: "blur(15px)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", transition: "0.4s", ...sx }} {...props}>
    {children}
  </Paper>
);

const GlobalShader = () => (
  <Box sx={{ position: "fixed", inset: 0, zIndex: -1, background: cinematicNavy, overflow: "hidden" }}>
    <Box sx={{ position: "absolute", width: "200%", height: "200%", top: "-50%", left: "-50%", background: `radial-gradient(circle at 50% 50%, ${cinematicNavy} 0%, #162435 50%, ${cinematicNavy} 100%)`, animation: "meshRotate 20s linear infinite", opacity: 0.8 }} />
    {[...Array(3)].map((_, i) => <Box key={i} sx={{ position: "absolute", inset: 0, mixBlendMode: "screen", background: `linear-gradient(${45 + i * 30}deg, transparent 0%, rgba(242,169,0,0.05) 50%, transparent 100%)`, animation: `waveMove ${10 + i * 5}s infinite alternate ease-in-out` }} />)}
    <style>{`@keyframes meshRotate{from{transform:rotate(0deg)}to{transform:rotate(360deg)}} @keyframes waveMove{0%{transform:translateY(-10%) translateX(-5%)}100%{transform:translateY(10%) translateX(5%)}}`}</style>
  </Box>
);

export default function Careers() {
  const isMobile = useMediaQuery("(max-width:600px)"), [bgIndex, setBgIndex] = useState(0);
  useEffect(() => { const int = setInterval(() => setBgIndex(p => (p + 1) % BG_IMAGES.length), 6000); return () => clearInterval(int); }, []);

  return (
    <ThemeProvider theme={theme}><CssBaseline /><GlobalShader />
      <IconButton component="a" href="https://wa.me/919962290875" target="_blank" sx={{ position: "fixed", bottom: 20, right: 20, zIndex: 9999, width: 56, height: 56, bgcolor: "#25D366", color: "#fff", "&:hover": { bgcolor: "#1EBE5D", transform: "scale(1.1)" } }}><WhatsAppIcon sx={{ fontSize: 30 }} /></IconButton>
      
      <Box sx={{ position: "relative", zIndex: 2 }}>
        <Box sx={{ height: { xs: "60vh", md: "80vh" }, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", mt: -4, mb: 8 }}>
          <AnimatePresence mode="wait"><motion.div key={bgIndex} initial={{ opacity: 0, scale: 1.2 }} animate={{ opacity: 0.4, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 3 }} style={{ position: "absolute", inset: 0, backgroundImage: `url(${BG_IMAGES[bgIndex]})`, backgroundSize: "cover", backgroundPosition: "center" }} /></AnimatePresence>
          <Box sx={{ position: "absolute", inset: 0, background: `linear-gradient(to bottom, transparent, ${cinematicNavy})`, zIndex: 2 }} />
          <Container sx={{ position: "relative", zIndex: 10, textAlign: "center" }}>
            <motion.div variants={anim.fadeDown} initial="hidden" animate="visible">
              <Typography variant={isMobile ? "h2" : "h1"} sx={{ color: "#fff", fontWeight: 900, textTransform: "uppercase", letterSpacing: { xs: 2, md: 8 }, textShadow: "0 10px 30px #000" }}>Our <span style={{ color: cinematicGold }}>Careers</span></Typography>
              <Typography sx={{ color: "rgba(255,255,255,0.7)", mt: 3, fontSize: 18, letterSpacing: 2 }}>EXPLORE • PARTICIPATE • GROW</Typography>
            </motion.div>
          </Container>
        </Box>
         <Box sx={{ mt: 5 }}><Typography variant="h4" textAlign="center" sx={{ color: "#fff", mb: 8 }}><span style={{ color: cinematicGold }}>Why Join US</span></Typography>
            <Grid container spacing={4} justifyContent="center">{JOIN_DATA.map((item, i) => (
              <Grid item xs={12} md={4} key={i} display="flex" justifyContent="center"><motion.div variants={anim.item} initial="hidden" whileInView="visible" viewport={{ once: true }} style={{ width: '100%', maxWidth: 350 }}>
                <GlassPaper sx={{ p: 4, "&:hover": { borderColor: cinematicGold, transform: "translateY(-10px)" } }}><Typography fontWeight={700} sx={{ color: cinematicGold, mb: 2 }}>{item.t}</Typography><Typography fontSize={14} sx={{ opacity: 0.8 }}>{item.d}</Typography></GlassPaper>
              </motion.div></Grid>
            ))}</Grid>
          </Box>

        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Typography variant="h4" textAlign="center" sx={{ mt: -2, mb: 6, color: "#fff" }}>view openings</Typography>
          <motion.div variants={anim.container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Grid container spacing={4} justifyContent="center">
              {JOBS.map((j, i) => (
                <Grid item xs={12} sm={6} md={4} key={i} display="flex" justifyContent="center">
                  <motion.div variants={anim.item} whileHover={{ y: -10 }} style={{ width: '100%', maxWidth: 350 }}>
                    <GlassPaper sx={{ height: "100%", display: 'flex', flexDirection: 'column', "&:hover": { borderColor: cinematicGold, boxShadow: "0 20px 50px rgba(0,0,0,0.5)" } }}>
                      <Typography fontWeight={800} sx={{ color: cinematicGold, mb: 1, fontSize: '1.2rem' }}>{j.t}</Typography>
                      <Typography fontSize={13} sx={{ opacity: 0.7, mb: 2 }}>Tambaram, Chennai</Typography>
                      <Typography fontSize={14} sx={{ opacity: 0.8, mb: 3, flexGrow: 1 }}>{j.p}</Typography>
                      <Button component={Link} to="/volunteer" variant="outlined" fullWidth sx={{ mb: 2, borderRadius: '12px', borderColor: cinematicGold, color: cinematicGold, textTransform: 'none', fontWeight: 700, "&:hover": { bgcolor: cinematicGold, color: "#000", borderColor: cinematicGold } }}>Register Now</Button>
                      <Box sx={{ pt: 2, borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                        <Typography fontSize={12} sx={{ color: cinematicGold, fontWeight: 600 }}>{j.s} • Posted: {j.d}</Typography>
                      </Box>
                    </GlassPaper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>

          <Box sx={{ mt: 10, py: { xs: 8, md: 12 }, background: "linear-gradient(135deg, #F2A900, #D68910)", borderRadius: 6, color: "#fff", boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}>
            <Container maxWidth="lg"><Grid container spacing={6}><Grid item xs={12} md={4}><Typography variant="h4" fontWeight={800} mb={2}>Frequently asked questions</Typography><Typography sx={{ opacity: 0.9, mb: 4 }}>We are always here to help. Reach out!</Typography>
              <Paper sx={{ p: 3, borderRadius: 4, display: "flex", alignItems: "center", gap: 2 }}><WhatsAppIcon sx={{ fontSize: 40, color: "#22c55e" }} /><Box><Typography fontWeight={700} color="#111827">Reach out to us</Typography><Typography fontSize={14} color="text.secondary">hello@sainisha.in</Typography></Box></Paper></Grid>
              <Grid item xs={12} md={8}>{[{ q: "What is Sai Nisha Foundation?", a: "Sai Nisha is supporting women in their pregnancy time" }, { q: "How long is recruitment?", a: "Usually 1–2 weeks depending on volume." }, { q: "Is it paid?", a: "Learning-focused; some roles offer performance stipends." }].map((item, i) => (
                <Accordion key={i} sx={{ mb: 2, bgcolor: "rgba(255,255,255,0.15)", color: "#fff", borderRadius: "12px !important", "&:before": { display: "none" } }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}><Typography fontWeight={600}>{item.q}</Typography></AccordionSummary>
                  <AccordionDetails><Typography sx={{ opacity: 0.9 }}>{item.a}</Typography></AccordionDetails>
                </Accordion>
              ))}</Grid></Grid></Container>
          </Box>
        </Container>
        <Box sx={{ width: "100%", "& *": { color: "#fff !important" } }}><Footer /></Box>
      </Box>
    </ThemeProvider>
  );
}