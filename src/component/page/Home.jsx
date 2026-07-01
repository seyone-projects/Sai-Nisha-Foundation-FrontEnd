import React, { useMemo, useState } from "react";
import { Box, Typography, Button, Container, Card, CardContent, useMediaQuery, Divider, CssBaseline, Grid, createTheme, ThemeProvider, Dialog, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CloseIcon from "@mui/icons-material/Close";
import Footer from "./Footer";
import "@fontsource/poppins/300.css"; import "@fontsource/poppins/400.css"; import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css"; import "@fontsource/poppins/700.css"; import "@fontsource/poppins/800.css"; import "@fontsource/poppins/900.css";
import ngoImage2 from "../page/image/newborn-baby-crib.jpg"; import ngoImage3 from "../page/image/pre photo.jpg"; import ngoImage6 from "../page/image/DSC06412.jpg";

const DARK_BG = "#121212", GOLD = "#FFC107", WHITE_TEXT = "#FFFFFF";
const theme = createTheme({ palette: { mode: 'dark', primary: { main: GOLD }, text: { primary: WHITE_TEXT, secondary: "rgba(255, 255, 255, 0.7)" } }, typography: { fontFamily: `"Poppins", "sans-serif"`, h1: { fontWeight: 900, textTransform: 'uppercase', letterSpacing: '8px' }, h2: { fontWeight: 800 } } });
const STAGGER_CONTAINER = { initial: {}, animate: { transition: { staggerChildren: 0.05 } } }, LETTER_ANIM = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0, transition: { duration: 0.5 } } }, IMAGE_CLIP_REVEAL = { hidden: { clipPath: "inset(0 100% 0 0)", opacity: 0 }, visible: { clipPath: "inset(0 0% 0 0)", opacity: 1, transition: { duration: 1.2, ease: "circOut" } } }, FADE_UP = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

import introVideo from "../page/image/0206 (1).mp4";

export default function Home() {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")), navigate = useNavigate();
  const goals = useMemo(() => [{ text: "Our goal is to ensure that every mother and newborn receives timely support during critical moments." }, { text: "We strive to expand our reach by building strong partnerships with healthcare providers." }, { text: "Our vision is a sustainable support system where no family faces emergencies alone." }], []);
  const titleLetters = useMemo(() => "SAI NISHA FOUNDATION".split(""), []);

  const [openVideo, setOpenVideo] = useState(false);

  return (
    <ThemeProvider theme={theme}><CssBaseline />
      <Box sx={{ position: "fixed", bottom: isMobile ? 15 : 20, right: isMobile ? 15 : 20, zIndex: 9999 }}>
        <Button component="a" href="https://wa.me/919962290875" target="_blank" sx={{ minWidth: 0, width: isMobile ? 50 : 56, height: isMobile ? 50 : 56, borderRadius: "50%", backgroundColor: "#25D366", color: "#fff", boxShadow: "0 10px 30px rgba(0,0,0,0.5)", "&:hover": { backgroundColor: "#1EBE5D", transform: "scale(1.1)" } }}><WhatsAppIcon sx={{ fontSize: isMobile ? 24 : 30 }} /></Button>
      </Box>
      <Box sx={{ backgroundColor: DARK_BG, color: WHITE_TEXT, overflowX: "hidden", mt: -4 }}>
        <Box component="section" sx={{ height: "100vh", width: "100%", position: "relative", display: 'flex', alignItems: 'center', backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${ngoImage6})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <Container maxWidth={false} sx={{ textAlign: "center", zIndex: 2 }}><motion.div variants={STAGGER_CONTAINER} initial="initial" animate="animate">
            <Box sx={{ overflow: 'hidden', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', mb: 2 }}>{titleLetters.map((char, i) => (<motion.span key={i} variants={LETTER_ANIM} style={{ display: 'inline-block' }}><Typography variant={isMobile ? "body2" : "h5"} sx={{ color: GOLD, fontWeight: 700, letterSpacing: isMobile ? '2px' : '4px', mr: char === " " ? (isMobile ? 1 : 2) : 0.2 }}>{char}</Typography></motion.span>))}</Box>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 1.5 }}>
              <Typography variant={isMobile ? "body2" : "h6"} sx={{ fontStyle: 'italic', mb: isMobile ? 2 : 4, opacity: 0.8, fontSize: isMobile ? '0.85rem' : '1.25rem',fontFamily: "'Playfair Display', serif" }}>"Every Great Change Starts with One Step—and One View."</Typography>
               <IconButton
                onClick={() => setOpenVideo(true)}
                sx={{
                  border: `2px solid ${GOLD}`,
                  color: GOLD,
                  mb: isMobile ? 2 : 3,
                  "&:hover": { backgroundColor: GOLD, color: "#000" }
                }}>
                <PlayArrowIcon sx={{ fontSize: 40 }} />
              </IconButton>
          <Box sx={{ width: '60px', height: '3px', bgcolor: GOLD, margin: '0 auto', mb: isMobile ? 3 : 4 }} /><Typography variant="overline" sx={{ letterSpacing: isMobile ? 4 : 8, display: 'block', mb: 1, color: GOLD, fontSize: isMobile ? '0.6rem' : '1.5rem', fontFamily: "'Playfair Display', serif" }}>Click view to get more</Typography>
              <Typography variant={isMobile ? "h4" : "h2"} sx={{ mb: isMobile ? 4 : 6, fontWeight: 900, fontFamily: "'Playfair Display', serif" }}>Captured Emotions</Typography>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}><Button onClick={() => navigate("/volunteer")} variant="contained" sx={{ bgcolor: GOLD, color: '#000', fontWeight: 900, px: isMobile ? 4 : 6, py: isMobile ? 1.5 : 2, borderRadius: 0, '&:hover': { bgcolor: '#fff' }, fontFamily: "'Playfair Display', serif" }}> Join  as  Volunteer</Button></motion.div>
        <Dialog open={openVideo} onClose={() => setOpenVideo(false)} maxWidth="md"  PaperProps={{ sx: { bgcolor: "black", position: "relative", overflow: "visible" }}}
              >
                <IconButton onClick={() => setOpenVideo(false)} sx={{  position: "absolute", right: -12, top: -12, bgcolor: GOLD, color: "black", "&:hover": { bgcolor: "white" },  zIndex: 1}}
                >
                  <CloseIcon />
                </IconButton><video width="100%" controls autoPlay style={{ display: 'block' }}> <source src={introVideo} type="video/mp4" /> </video>
              </Dialog></motion.div>
          </motion.div></Container>
        </Box>
        <Box sx={{ py: 0, bgcolor: '#0a0a0a' }}><Container><Typography variant={isMobile ? "h5" : "h4"} textAlign="center" sx={{ color: GOLD, mb: isMobile ? 4 : 6, letterSpacing: isMobile ? 2 : 4, fontWeight: 700, pt: isMobile ? 4 : 6 , fontFamily: "'Playfair Display', serif"}}>OUR GOALS</Typography>
          <Grid container spacing={isMobile ? 3 : 6} sx={{ pb: isMobile ? 4 : 6 }}>{goals.map((goal, index) => (
            <Grid item xs={12} md={4} key={index}><motion.div {...FADE_UP} transition={{ delay: index * 0.1 }} whileHover={!isMobile ? { y: -15, boxShadow: `0px 10px 30px ${GOLD}33` } : {}}><Card sx={{ bgcolor: '#1a1a1a', color: '#fff', height: '100%', borderRadius: 0, borderLeft: `2px solid ${GOLD}` }}><CardContent sx={{ p: isMobile ? 3 : 5 }}><Typography variant="body1" sx={{ opacity: 0.7, fontSize: isMobile ? '0.9rem' : '1rem' , fontFamily: "'Playfair Display', serif"}}>{goal.text}</Typography></CardContent></Card></motion.div></Grid>
          ))}</Grid></Container></Box>
        <Box sx={{ bgcolor: '#000', py: isMobile ? 4 : 8 }}><Container><Grid container spacing={isMobile ? 4 : 8} alignItems="center"><Grid item xs={12} md={6}><motion.div initial={{ opacity: 0, x: isMobile ? 0 : -100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}><Typography variant={isMobile ? "h5" : "h4"} sx={{ color: GOLD, mb: 2, fontWeight: 800 , fontFamily: "'Playfair Display', serif"}}>When Joy Turns Into Fear</Typography><Divider sx={{ borderColor: GOLD, width: '80px', mb: 3, borderWidth: 2 }} /><Typography variant="body1" sx={{ fontSize: isMobile ? '0.95rem' : '1.1rem', opacity: 0.6, fontFamily: "'Playfair Display', serif" }}>Every day, a mother struggles to reach timely medical care. <br />A newborn waits for life-saving NICU admission. <br />We bridge that gap.</Typography></motion.div></Grid>
          <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}><motion.div initial="hidden" whileInView="visible" variants={IMAGE_CLIP_REVEAL} viewport={{ once: true }}><Box component="img" src={ngoImage3} sx={{ width: "100%", maxWidth: "500px", borderRadius: '4px', filter: 'brightness(0.8) contrast(1.2)', height: isMobile ? '300px' : 'auto', objectFit: 'cover' }} /></motion.div></Grid>
        </Grid></Container></Box>
        <Box sx={{ bgcolor: '#0a0a0a', py: isMobile ? 4 : 8 }}><Container><Grid container spacing={isMobile ? 4 : 8} alignItems="center" direction={isMobile ? "column-reverse" : "row"}><Grid item xs={12} md={6} sx={{ textAlign: 'center' }}><motion.div initial="hidden" whileInView="visible" variants={IMAGE_CLIP_REVEAL} viewport={{ once: true }}><Box component="img" src={ngoImage2} sx={{ width: "100%", maxWidth: "500px", borderRadius: '4px', filter: 'grayscale(40%)', height: isMobile ? '300px' : 'auto', objectFit: 'cover' }} /></motion.div></Grid>
          <Grid item xs={12} md={6}><motion.div initial={{ opacity: 0, x: isMobile ? 0 : 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}><Typography variant={isMobile ? "h5" : "h4"} sx={{ color: GOLD, mb: 2, fontWeight: 800 ,fontFamily: "'Playfair Display', serif" }}>Our Core Work</Typography><Divider sx={{ borderColor: GOLD, width: '80px', mb: 3, borderWidth: 2 }} /><Typography variant="body1" sx={{ fontSize: isMobile ? '1rem' : '1.2rem', lineHeight: 2, fontFamily: "'Playfair Display', serif" }}>• Supporting mothers <strong>when it matters most</strong><br />• Helping newborns fight <strong>their first battle</strong><br />• Extending compassion to the unseen</Typography></motion.div></Grid>
        </Grid></Container></Box>
        <Box component={motion.div} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} sx={{ py: isMobile ? 6 : 10, textAlign: "center", px: 2, background: `linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url(${ngoImage6})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: isMobile ? 'scroll' : 'fixed', borderTop: `1px solid ${GOLD}`, borderBottom: `1px solid ${GOLD}` }}>
          <Container maxWidth="md"><Typography variant={isMobile ? "h6" : "h4"} sx={{ fontStyle: 'italic', color: GOLD, fontWeight: 300 , fontFamily: "'Playfair Display', serif"}}>"Sai Nisha Foundation stands beside life, when it needs support the most."</Typography></Container>
        </Box><Footer />
      </Box>
    </ThemeProvider>
  );
}