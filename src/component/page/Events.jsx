import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Box, Typography, Container, CssBaseline, Grid, IconButton } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../page/Footer";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { ALL_EVENTS, HERO_SLIDES } from "../page/data/EventRegistry";
const eventMagenta = "#b7e900", cinematicNavy = "#0B121E", cinematicGold = "#F2A900";
const fadeDown = { hidden: { opacity: 0, y: -30 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } } };
const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const imageItemVariants = { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } } };
const GlobalShaderBackground = () => (
  <Box sx={{ position: "fixed", inset: 0, zIndex: -1, overflow: "hidden", background: cinematicNavy }}>
    <Box sx={{ position: "absolute", width: "200%", height: "200%", top: "-50%", left: "-50%", background: `radial-gradient(circle at 50% 50%, ${cinematicNavy} 0%, #162435 50%, ${cinematicNavy} 100%)`, animation: "meshRotate 20s linear infinite", opacity: 0.8 }} />
    <style>{`@keyframes meshRotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
  </Box> );
const CinematicHeroBackground = () => {
  const [bgIndex, setBgIndex] = useState(0);
  useEffect(() => {
    if (!HERO_SLIDES.length) return;
    const interval = setInterval(() => setBgIndex((prev) => (prev + 1) % HERO_SLIDES.length), 6000);
    return () => clearInterval(interval);
  }, []);
  return (
    <Box sx={{ position: "absolute", inset: 0, zIndex: 1, overflow: "hidden" }}>
      <AnimatePresence mode="wait">
        <motion.div key={bgIndex} initial={{ opacity: 0, scale: 1.2 }} animate={{ opacity: 0.4, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 3 }}
          style={{ width: "100%", height: "100%", backgroundImage: `url(${HERO_SLIDES[bgIndex]})`, backgroundSize: "cover", backgroundPosition: "center", position: "absolute" }} />
      </AnimatePresence>
      <Box sx={{ position: "absolute", inset: 0, background: `linear-gradient(to bottom, transparent, ${cinematicNavy})`, zIndex: 2 }} />
    </Box>
  );
};
export default function Events() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const cardsPerPage = 6;
  const totalPages = Math.ceil(ALL_EVENTS.length / cardsPerPage);

  const handleNext = useCallback(() => setCurrentPage((p) => (p + 1) % totalPages), [totalPages]);
  const handlePrev = () => setCurrentPage((p) => (p - 1 + totalPages) % totalPages);

  useEffect(() => {
    if (isPaused || totalPages <= 1) return;
    const timer = setInterval(handleNext, 5000);
    return () => clearInterval(timer);
  }, [handleNext, isPaused, totalPages]);

  const currentCards = useMemo(() => ALL_EVENTS.slice(currentPage * cardsPerPage, (currentPage + 1) * cardsPerPage), [currentPage]);
return (
    <>
      <CssBaseline />
      <GlobalShaderBackground /> <Box sx={{ position: "fixed", bottom: 20, right: 20, zIndex: 9999 }}> <IconButton component="a" href="https://wa.me/919962290875" target="_blank" sx={{ width: 56, height: 56, bgcolor: "#25D366", color: "#fff", "&:hover": { bgcolor: "#1EBE5D", transform: "scale(1.1)" } }}><WhatsAppIcon /></IconButton>
      </Box> <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", fontFamily: "'Playfair Display', serif" }}>  <Box sx={{ minHeight: { xs: "60vh", md: "85vh" }, display: "flex", alignItems: "center", position: "relative", zIndex: 2 }}>
          <CinematicHeroBackground />
          <Container sx={{ position: "relative", zIndex: 10, textAlign: "center" }}>
            <motion.div variants={fadeDown} initial="hidden" animate="visible">
              <Typography variant="h1" sx={{ fontWeight: 900, color: cinematicGold, fontSize: { xs: "2.8rem", md: "6.5rem" }, letterSpacing: { xs: 2, md: 8 }, textTransform: "uppercase", mb: 2 ,fontFamily: "'Playfair Display', serif", }}>Our EVENTS</Typography>
              <Typography sx={{ fontSize: { xs: 16, md: 22 }, color: "rgba(255,255,255,0.8)", fontStyle: 'italic', fontFamily: "'Playfair Display', serif", }}>"Reliving the moments of joy, talent, and meaningful connections"</Typography>
            </motion.div>
          </Container>
        </Box>
        <Container maxWidth="md" sx={{ zIndex: 3, mt: -5, mb: 10, textAlign: "center" }}>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <Typography variant="h4" sx={{ color: cinematicGold, mb: 3, fontWeight: 700 , fontFamily: "'Playfair Display', serif",}}>The Essence of Our Gathering</Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.8, fontSize: "1.1rem", textAlign: "justify", mx: "auto", px: 2, fontFamily: "'Playfair Display', serif" }}>
            On February 1, 2026, a meaningful “Birthday Tribute & Dream Reveal Ceremony” was held to honor the legacy and vision of the late Ganesh Shanmugam, Founder of Virtual India ALC Limited. The event took place at Jayanthi Narayanan Palace, Tambaram from 4 PM onwards and marked a significant step toward fulfilling his lifelong dreams and purpose. The occasion was graced by several distinguished guests, including spiritual leader Guru Roopa Yogi Sri La Sri Maha Narasimha Athmanatha Swamigal, legendary music director Thiru Dhina, film director Thiru R. Kannan, and actor Thiru Jagan Purushottam. The attendees also enjoyed special cultural performances by groups such as Team Gulab Events and Musica Cura, making the evening a memorable celebration of remembrance, inspiration, and the enduring legacy of the founder.
            </Typography>
          </motion.div>
        </Container>
       <Container maxWidth="lg" sx={{ zIndex: 3, pb: 10 }} onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 6 }}>
            <IconButton onClick={handlePrev} sx={{ color: '#fff', border: '1px solid rgba(255,255,255,0.2)', display: { xs: 'none', md: 'flex' }, '&:hover': { bgcolor: cinematicGold } }}><ArrowBackIosNewIcon /></IconButton>
            <Box textAlign="center" sx={{ width: "100%" }}>
              <Typography sx={{ color: eventMagenta, fontWeight: 700, letterSpacing: 4, mb: 1, textTransform: 'uppercase' }}>Event Highlights</Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1.5, mt: 2 }}>
                {[...Array(totalPages)].map((_, i) => <Box key={i} sx={{ width: currentPage === i ? 40 : 8, height: 8, borderRadius: 5, bgcolor: currentPage === i ? cinematicGold : 'rgba(255,255,255,0.2)', transition: '0.6s' }} />)}
              </Box>
            </Box>
            <IconButton onClick={handleNext} sx={{ color: '#fff', border: '1px solid rgba(255,255,255,0.2)', display: { xs: 'none', md: 'flex' }, '&:hover': { bgcolor: cinematicGold } }}><ArrowForwardIosIcon /></IconButton></Box>
        <Box sx={{ minHeight: '600px' }}>
            <AnimatePresence mode="wait">
              <motion.div key={currentPage} variants={containerVariants} initial="hidden" animate="visible" exit="hidden">
                <Grid container spacing={2}>
                  {currentCards.map((event, index) => (
                    <Grid item xs={12} sm={6} md={4} key={`${currentPage}-${index}`}>
                      <motion.div variants={imageItemVariants} whileHover={{ scale: 1.03 }} style={{ height: '350px', overflow: 'hidden', borderRadius: '12px', cursor: 'pointer', position: 'relative' }}>
                        <Box component="img" src={event.image} alt={event.title} sx={{ width: '100%', height: '100%', objectFit: 'cover', transition: '0.8s ease', '&:hover': { transform: 'scale(1.1)' } }} />
                        <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent 40%)', display: 'flex', alignItems: 'flex-end', p: 3, opacity: 0, transition: '0.3s', '&:hover': { opacity: 1 } }}>
                          <Typography sx={{ color: '#fff', fontWeight: 600 }}>{event.title}</Typography>
                        </Box>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </motion.div>
  </AnimatePresence> </Box><Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center', gap: 4, mt: 6 }}> <IconButton onClick={handlePrev} sx={{ bgcolor: 'rgba(255,255,255,0.1)', color: '#fff' }}><ArrowBackIosNewIcon /></IconButton> <IconButton onClick={handleNext} sx={{ bgcolor: 'rgba(255,255,255,0.1)', color: '#fff' }}><ArrowForwardIosIcon /></IconButton>  </Box> </Container> <Box sx={{ width: "100%", "& *": { color: "#ffffff !important"  } }}><Footer /></Box></Box>
    </>);}