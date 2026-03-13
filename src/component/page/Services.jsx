import React, { useState, memo, useMemo } from "react";
import { 
  Box, Button, Typography, Grid, Card, CardMedia, CardContent, 
  Container, keyframes, useMediaQuery, CssBaseline, Dialog, 
  DialogTitle, DialogContent, IconButton, createTheme, ThemeProvider 
} from "@mui/material";
import { Close as CloseIcon, WhatsApp as WhatsAppIcon } from "@mui/icons-material";
import Footer from "./Footer";
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/700.css";
import "@fontsource/playfair-display/900.css";
import "@fontsource/poppins/300.css"; 
import "@fontsource/poppins/400.css";
import serviceImg1 from "./image/pre.jpg"; 
import serviceImg2 from "./image/gettyimages-1637251600-612x612.jpg";
import serviceImg3 from "./image/mentally challenged.jpg"; 
import serviceImg4 from "./image/new born child 2.jpg";
import serviceImg5 from "./image/edu 1.avif"; 
import serviceImg6 from "./image/sports 1.avif";
const GOLD = "#D68910", MUTED = "#CBD5E1";
const fadeIn = keyframes`from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); }`;
const slideUp = keyframes`from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); }`;
const spot = keyframes`0% { transform: translate(-20%, -20%); opacity: 0; } 50% { opacity: 1; } 100% { transform: translate(120%, 120%); opacity: 0; }`;
const DATA = [
  { title: "Pregnancy Emergency", desc: "Urgent support for high-risk pregnancies.", img: serviceImg1, longDesc: "Our Pregnancy Emergency program provides 24/7 rapid response for expectant mothers facing complications. We bridge the gap between home and hospital, providing emergency transport, immediate medical consultation, and financial aid for life-saving procedures." },
  { title: "Pets", desc: "Rescue, medical care, and adoption support.", img: serviceImg2, longDesc: "Our animal welfare wing focuses on rescuing stray and abandoned animals. We provide immediate veterinary care, vaccinations, and sterilization. Beyond medical help, we run an active adoption program to find forever homes for our furry friends and provide food for street animals in underserved areas." },
  { title: "Mentally Challenged Elders", desc: "Care, dignity, and emotional well-developed.", img: serviceImg3, longDesc: "We provide specialized residential and daycare services for elderly individuals living with dementia, Alzheimer's, and other cognitive challenges. Our program focuses on 'Dignity in Aging,' offering therapeutic activities, professional nursing care, and a safe, loving environment where they are never forgotten." },
  { title: "Newborn Emergency Care", desc: "NICU access and life-saving care.", img: serviceImg4, longDesc: "The first few hours of life are critical. We specialize in facilitating access to Neonatal Intensive Care Units (NICU) for families who cannot afford them. We provide high-tech incubators, emergency medicine, and specialized pediatric transport to ensure newborns get a fighting chance at life." },
  { title: "Education", desc: "Empowering children through learning.", img: serviceImg5, longDesc: "Education is the greatest equalizer. We support the schooling of children from low-income backgrounds by providing tuition fees, uniforms, books, and digital learning tools. We also run after-school mentorship programs to help students develop soft skills and vocational interests for a brighter future." },
  { title: "Sports", desc: "Encouraging fitness and confidence.", img: serviceImg6, longDesc: "Our sports program aims to identify and nurture athletic talent in underprivileged communities. By providing coaching, equipment, and access to tournaments, we help youth build discipline, teamwork, and physical health. We believe every child deserves the chance to shine on the field." },
];
const VideoBg = memo(() => (
  <Box sx={{ position: "fixed", inset: 0, zIndex: -2, bgcolor: "#000", overflow: "hidden" }}>
    <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(17,24,39,0.4), rgba(17,24,39,0.7))" }} />
  </Box>
));
const Bubbles = memo(() => (
  <Box sx={{ position: "fixed", inset: 0, zIndex: -1, pointerEvents: "none" }}>
    {[...Array(25)].map((_, i) => (
      <Box key={i} sx={{ 
        position: "absolute", bottom: "-50px", left: `${Math.random() * 100}%`, 
        width: 15, height: 15, borderRadius: "50%", bgcolor: "rgba(214,137,16,0.2)", 
        animation: `float ${12 + Math.random() * 10}s linear infinite ${Math.random() * 5}s` 
      }} />
    ))}
    <style>{`@keyframes float { from { transform: translateY(0); opacity: 0; } 20% { opacity: .4; } to { transform: translateY(-110vh); opacity: 0; } }`}</style>
  </Box>
));
export default function Services() {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [sel, setSel] = useState(null);
  const theme = useMemo(() => createTheme({ 
    typography: { fontFamily: "'Playfair Display', serif", h2: { fontWeight: 900 }, h6: { fontWeight: 700 } } 
  }), []);
return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <VideoBg />
      <Bubbles />  <IconButton   href="https://wa.me/919962290875" target="_blank"  sx={{ position: "fixed", bottom: 20, right: 20, bgcolor: "#25D366", color: "#fff", zIndex: 1000, p: 1.5, boxShadow: 3, '&:hover': { bgcolor: "#128C7E", transform: 'scale(1.1)' } }}> <WhatsAppIcon fontSize={isMobile ? "medium" : "large"} /></IconButton>
     <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 , overflowX: "hidden"}}>
        <Box sx={{ pt: { xs: 10, md: 15 }, pb: { xs: 6, md: 10 }, textAlign: "center", position: "relative" }}>
          <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "100%", height: "100%", background: `radial-gradient(circle, ${GOLD}20, transparent 70%)`, animation: `${spot} 10s infinite linear`, filter: "blur(50px)", zIndex: -1 }} />
          <Typography variant="h2" sx={{ color: "#fff", textTransform: "uppercase", animation: `${fadeIn} 1s`, fontSize: { xs: '2.2rem', md: '4.5rem' }, textShadow: "0px 4px 15px #000", letterSpacing: { xs: 1, md: 3 },fontFamily: "'Playfair Display', serif", }}>
            Our <span style={{ color: GOLD }}>Services</span>
          </Typography>
          <Typography sx={{ color: MUTED, mt: 2, fontSize: { xs: '0.9rem', md: '1.1rem' }, maxWidth: 600, mx: 'auto', px: 2, fontFamily: "'Playfair Display', serif", }}>
            Dedicated to providing emergency medical aid, education, and welfare support to those in need.
          </Typography>
        </Box>
       <Grid container spacing={isMobile ? 3 : 4} justifyContent="center" sx={{ pb: 10 }}>
          {DATA.map((s, i) => (
            <Grid item key={i} xs={12} sm={6} md={4} sx={{ display: "flex", justifyContent: "center", opacity: 0, animation: `${slideUp} .8s ease-out ${i * 0.1}s forwards` }}>
              <Card sx={{ width: "100%", maxWidth: 500, bgcolor: "rgba(255,255,255,0.08)", backdropFilter: "blur(8px)", borderRadius: 6, border: "1px solid rgba(255,255,255,0.1)", color: "#fff", transition: "0.3s", "&:hover": { transform: 'translateY(-10px)', borderColor: GOLD, bgcolor: "rgba(255,255,255,0.15)" } }}>
                <CardMedia component="img" height="200" image={s.img} sx={{ objectFit: 'cover' }} />
                <CardContent sx={{ textAlign: "center", p: 3 }}>
                  <Typography variant="h6" sx={{ color: GOLD, mb: 1 }}>{s.title}</Typography>
                  <Typography sx={{ color: MUTED, fontSize: '0.85rem', mb: 2, minHeight: '40px', fontFamily: "'Playfair Display', serif", }}>{s.desc}</Typography>
                  <Button variant="outlined" onClick={() => setSel(s)} sx={{ color: GOLD, borderColor: GOLD, borderRadius: 10, px: 3, fontFamily: "'Playfair Display', serif", '&:hover': { color: "#fff", borderColor: "#fff", bgcolor: GOLD } }}>
                    Learn More </Button></CardContent></Card>
            </Grid>
          ))}</Grid><Dialog open={!!sel} onClose={() => setSel(null)} maxWidth="sm" fullWidth PaperProps={{ sx: { bgcolor: "rgba(20,25,35,0.95)", backdropFilter: "blur(20px)", color: "#fff", borderRadius: 5, border: `1px solid ${GOLD}`, m: 2 } }}>
          {sel && (
            <> <Box sx={{ position: 'relative' }}>
                <CardMedia component="img" height={isMobile ? "200" : "280"} image={sel.img} sx={{ objectFit: 'cover' }} />
                <IconButton onClick={() => setSel(null)} sx={{ position: 'absolute', top: 10, right: 10, color: '#fff', bgcolor: 'rgba(0,0,0,0.5)', '&:hover': { bgcolor: GOLD } }}><CloseIcon /></IconButton> </Box>
              <DialogTitle sx={{ color: GOLD, fontWeight: 800, fontSize: { xs: '1.3rem', md: '1.6rem' }, pt: 3 }}>{sel.title}</DialogTitle>
              <DialogContent sx={{ pb: 4 }}>
                <Typography sx={{ lineHeight: 1.8, color: MUTED, fontSize: '0.95rem', fontFamily: "'Playfair Display', serif" }}>{sel.longDesc}</Typography>
              </DialogContent>
            </> )} </Dialog><Box sx={{ width: "100%", mt: 5, borderTop: "1px solid rgba(255,255,255,0.1)", pt: 5, "& *": { color: "#fff !important" } }}><Footer /> </Box>
      </Container></ThemeProvider>
  );
}