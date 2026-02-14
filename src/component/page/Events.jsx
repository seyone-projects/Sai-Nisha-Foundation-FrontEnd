import React, { useState, useEffect, useCallback } from "react";
import {
  Box,
  Typography,
  Container,
  CssBaseline,
  Grid,
  Card,
  CardMedia,
  CardContent,
  IconButton,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../page/Footer";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// --- IMAGE IMPORTS ---
import eventImg1 from "../page/image/DSC05916.jpg"; 
import eventImg2 from '../page/image/DSC06299.jpg';
import eventImg3 from '../page/image/DSC06390.jpg';
import eventImg4 from "../page/image/DSC06321.jpg"; 
import eventImg5 from '../page/image/DSC05759.jpg';
import eventImg6 from '../page/image/DSC05749.jpg';
import eventImg7 from '../page/image/DSC05657.jpg';
import eventImg8 from '../page/image/DSC06093.jpg';
import eventImg9 from '../page/image/DSC05856.jpg';
import eventImg10 from '../page/image/DSC05875.jpg';
import eventImg11 from '../page/image/DSC06227.jpg';
import eventImg12 from '../page/image/DSC06023.jpg';

import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";

const eventMagenta = "#b7e900";
const cinematicNavy = "#0B121E"; 
const cinematicGold = "#F2A900"; 

const ALL_EVENTS = [
  { title: "Guru Roopa Yogi", date: "Sun, 01 Feb 2026", image: eventImg1 },
  { title: "Thiru Dhina", date: "Sun, 01 Feb 2026", image: eventImg2 },
  { title: "R. kannan", date: "Sun, 01 Feb 2026", image: eventImg3 },
  { title: "Jagan purushottam", date: "Sun, 01 Feb 2026", image: eventImg4 },
  { title: "Singing", date: "Sun, 01 Feb 2026", image: eventImg5 },
  { title: "Group Singing", date: "Sun, 01 Feb 2026", image: eventImg6 },
  { title: "Hosts", date: "Sun, 01 Feb 2026", image: eventImg7 },
  { title: "Bharatanatyam", date: "Sun, 01 Feb 2026", image: eventImg8 },
  { title: "Group Singing 2", date: "Sun, 01 Feb 2026", image: eventImg9 },
  { title: "Group Dance", date: "Sun, 01 Feb 2026", image: eventImg10 },
  { title: "Memory Recreation", date: "Sun, 01 Feb 2026", image: eventImg11 },
  { title: "Lighting Candles", date: "Sun, 01 Feb 2026", image: eventImg12 },
];

const BG_IMAGES = [eventImg1, eventImg4, eventImg8, eventImg12, eventImg3];

const fadeDown = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardItemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};

// --- NEW SHADER BACKGROUND WITH LIGHT WAVES ---
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

export default function Events() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const cardsPerPage = 6;
  const totalPages = Math.ceil(ALL_EVENTS.length / cardsPerPage);

  const handleNext = useCallback(() => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => handleNext(), 5000);
    return () => clearInterval(timer);
  }, [handleNext, isPaused]);

  const currentCards = ALL_EVENTS.slice(
    currentPage * cardsPerPage,
    (currentPage + 1) * cardsPerPage
  );

  return (
    <>
      <CssBaseline />
      <GlobalShaderBackground />
      
      <Box sx={{ position: "fixed", bottom: 20, right: 20, zIndex: 9999 }}>
        <IconButton component="a" href="https://wa.me/919962290875" target="_blank" sx={{ width: 56, height: 56, backgroundColor: "#25D366", color: "#fff", boxShadow: "0 10px 30px rgba(0,0,0,0.3)", "&:hover": { backgroundColor: "#1EBE5D", transform: "scale(1.1)" } }}>
          <WhatsAppIcon sx={{ fontSize: 30 }} />
        </IconButton>
      </Box>

      <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", fontFamily: "Poppins, sans-serif", position: "relative" }}>
        
        <Box sx={{ minHeight: { xs: "60vh", md: "85vh" }, display: "flex", alignItems: "center", color: "#fff", position: "relative", zIndex: 2, overflow: "hidden" }}>
          <CinematicHeroBackground />
          <Container maxWidth="lg" sx={{ position: "relative", zIndex: 10, textAlign: "center" }}>
            <motion.div variants={fadeDown} initial="hidden" animate="visible">
              <Typography variant="h1" sx={{ fontWeight: 900, color: cinematicGold, fontSize: { xs: "2.8rem", sm: "4.5rem", md: "6.5rem" }, letterSpacing: { xs: "2px", md: "8px" }, textTransform: "uppercase", mb: 2, textShadow: '0 10px 30px rgba(0,0,0,0.8)' }}>
                Our EVENTS
              </Typography>
              <Typography sx={{ fontSize: { xs: 16, md: 22 }, fontWeight: 400, maxWidth: "800px", mx: "auto", px: 2, lineHeight: 1.6, color: "rgba(255, 255, 255, 0.8)", mb: 4, fontStyle: 'italic' }}>
                "Reliving the moments of joy, talent, and meaningful connections"
              </Typography>
              <Box sx={{ width: '80px', height: '2px', bgcolor: cinematicGold, mx: 'auto', mt: 2 }} />
            </motion.div>
          </Container>
        </Box>

        <Container 
            maxWidth="lg" 
            sx={{ position: "relative", zIndex: 3, mt: { xs: -10, md: -15 }, pb: 10 }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 8 }}>
             <IconButton onClick={handlePrev} sx={{ bgcolor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', display: { xs: 'none', md: 'flex' }, '&:hover': { bgcolor: cinematicGold, color: 'white' } }}>
                <ArrowBackIosNewIcon />
             </IconButton>

             <Box textAlign="center" sx={{ width: "100%" }}>
                <Typography sx={{ color: eventMagenta, fontWeight: 700, fontSize: { xs: '1rem', md: '1.4rem' }, textTransform: 'uppercase', letterSpacing: 4, mb: 1 }}>
                  Event Highlights
                </Typography>
                <Typography variant="h3" sx={{ fontWeight: 800, color: '#fff', fontSize: { xs: '2rem', md: '3.5rem' }, mb: 3 }}>
                  Captured Memories
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1.5 }}>
                    {[...Array(totalPages)].map((_, i) => (
                        <Box key={i} sx={{ width: currentPage === i ? 40 : 8, height: 8, borderRadius: 5, bgcolor: currentPage === i ? cinematicGold : 'rgba(255,255,255,0.2)', transition: '0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)' }} />
                    ))}
                </Box>
             </Box>

             <IconButton onClick={handleNext} sx={{ bgcolor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', display: { xs: 'none', md: 'flex' }, '&:hover': { bgcolor: cinematicGold, color: 'white' } }}>
                <ArrowForwardIosIcon />
             </IconButton>
          </Box>

          <Box sx={{ minHeight: { xs: 'auto', md: '650px' } }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <Grid container spacing={4} justifyContent="center">
                  {currentCards.map((event, index) => (
                    <Grid item xs={12} sm={6} md={4} key={`${currentPage}-${index}`}>
                      <motion.div 
                        variants={cardItemVariants}
                        whileHover={{ y: -15, transition: { duration: 0.3 } }}
                        style={{ height: '100%' }}
                      >
                        <Card sx={{ 
                          borderRadius: 4, 
                          overflow: 'hidden',
                          background: 'rgba(255, 255, 255, 0.03)',
                          backdropFilter: 'blur(15px)',
                          border: '1px solid rgba(255, 255, 255, 0.1)', 
                          height: '100%', 
                          display: 'flex', 
                          flexDirection: 'column',
                          transition: 'all 0.4s ease',
                          '&:hover': {
                            background: 'rgba(255, 255, 255, 0.07)',
                            borderColor: cinematicGold,
                            boxShadow: `0 20px 50px rgba(0,0,0,0.5)`,
                          }
                        }}>
                          <Box sx={{ position: 'relative', overflow: 'hidden', height: '240px' }}>
                            <CardMedia 
                              component="img" 
                              height="100%" 
                              image={event.image} 
                              alt={event.title}
                              sx={{ 
                                transition: 'transform 1.2s ease',
                                '&:hover': { transform: 'scale(1.15)' } 
                              }}
                            />
                            <Box sx={{ 
                                position: 'absolute', inset: 0, 
                                background: 'linear-gradient(to top, rgba(11,18,30,0.8), transparent)',
                            }} />
                          </Box>
                          
                          <CardContent sx={{ p: 3, flexGrow: 1, textAlign: 'center' }}>
                            <Typography sx={{ fontWeight: 700, fontSize: '1.4rem', mb: 1, color: '#fff', letterSpacing: 0.5 }}>
                              {event.title}
                            </Typography>
                            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.6)", mb: 2, display: 'inline-flex', alignItems: 'center', bgcolor: 'rgba(255,255,255,0.05)', px: 2, py: 0.5, borderRadius: 1 }}>
                              {event.date}
                            </Typography>
                            <Box sx={{ mt: 2, pt: 2, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                                <Typography variant="caption" sx={{ color: cinematicGold, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 2 }}>
                                    Partner: Sai Nisha
                                </Typography>
                            </Box>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </motion.div>
            </AnimatePresence>
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center', gap: 4, mt: 6 }}>
             <IconButton onClick={handlePrev} sx={{ bgcolor: 'rgba(255,255,255,0.1)', color: '#fff', width: 60, height: 60 }}><ArrowBackIosNewIcon /></IconButton>
             <IconButton onClick={handleNext} sx={{ bgcolor: 'rgba(255,255,255,0.1)', color: '#fff', width: 60, height: 60 }}><ArrowForwardIosIcon /></IconButton>
          </Box>
        </Container>

        {/* --- FOOTER OVERRIDE BOX --- */}
        <Box sx={{ 
          width: "100%", 
          "& *": { color: "#ffffff !important" } 
        }}>
          <Footer />
        </Box>
      </Box>
    </>
  );
}