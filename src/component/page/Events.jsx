import React, { useState, useEffect, useCallback } from "react";
import {
  Box,
  Button,
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
import eventImg2 from '../page/image/DSC06299.jpg'
import eventImg3 from '../page/image/DSC06390.jpg'
import eventImg4 from "../page/image/DSC06321.jpg"; 
import eventImg5 from '../page/image/DSC05759.jpg'
import eventImg6 from '../page/image/DSC05749.jpg'
import eventImg7 from '../page/image/DSC05657.jpg'
import eventImg8 from '../page/image/DSC06093.jpg'
import eventImg9 from '../page/image/DSC05856.jpg'
import eventImg10 from '../page/image/DSC05875.jpg'
import eventImg11 from '../page/image/DSC06227.jpg'
import eventImg12 from '../page/image/DSC06023.jpg'

import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";

const creamBg = "#F7F4EC";
const navyText = "#1F2F3F";
const eventMagenta = "#b7e900";
const cinematicNavy = "#0B121E"; 
const cinematicGold = "#F2A900"; 

const ALL_EVENTS = [
  { title: "Chief Guest 1", date: "Sun, 01 Feb 2026", image: eventImg1 },
  { title: "Chief Guest 2", date: "Sun, 01 Feb 2026", image: eventImg2 },
  { title: "Chief Guest 3", date: "Sun, 01 Feb 2026", image: eventImg3 },
  { title: "Chief Guest 4", date: "Sun, 01 Feb 2026", image: eventImg4 },
  { title: "Audience", date: "Sun, 01 Feb 2026", image: eventImg5 },
  { title: "Group Singing", date: "Sun, 01 Feb 2026", image: eventImg6 },
  { title: "Hosts", date: "Sun, 01 Feb 2026", image: eventImg7 },
  { title: "Bharatanatyam", date: "Sun, 01 Feb 2026", image: eventImg8 },
  { title: "Group Singing 2", date: "Sun, 01 Feb 2026", image: eventImg9 },
  { title: "Group Dance", date: "Sun, 01 Feb 2026", image: eventImg10 },
  { title: "Memory Recreation", date: "Sun, 01 Feb 2026", image: eventImg11 },
  { title: "Cloud Computing Summit", date: "Sun, 01 Feb 2026", image: eventImg12 },
];

const fadeDown = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const setTransition = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
  transition: { duration: 0.6, ease: "easeInOut" }
};

function CinematicBackground() {
  return (
    <Box sx={{ position: "absolute", inset: 0, zIndex: 1, overflow: "hidden", backgroundColor: cinematicNavy }}>
      {[...Array(6)].map((_, i) => (
        <Box
          key={i}
          sx={{
            position: "absolute",
            width: { xs: 150, md: 300 },
            height: { xs: 150, md: 300 },
            borderRadius: "50%",
            background: i % 2 === 0 
                ? `radial-gradient(circle, rgba(242, 169, 0, 0.12) 0%, transparent 70%)` 
                : `radial-gradient(circle, rgba(255, 255, 255, 0.04) 0%, transparent 70%)`,
            filter: "blur(40px)",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `floatOrbs ${15 + i * 2}s linear infinite alternate`,
          }}
        />
      ))}
      <style>{`
        @keyframes floatOrbs { 0% { transform: translate(0, 0); opacity: 0.3; } 100% { transform: translate(50px, -50px); opacity: 0.6; } }
      `}</style>
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
    const timer = setInterval(() => handleNext(), 3000);
    return () => clearInterval(timer);
  }, [handleNext, isPaused]);

  const currentCards = ALL_EVENTS.slice(
    currentPage * cardsPerPage,
    (currentPage + 1) * cardsPerPage
  );

  return (
    <>
      <CssBaseline />
      
      {/* WhatsApp Button */}
      <Box sx={{ position: "fixed", bottom: 20, right: 20, zIndex: 9999 }}>
        <IconButton
          component="a" href="https://wa.me/919962290875" target="_blank" rel="noopener noreferrer"
          sx={{
            width: 56, height: 56, backgroundColor: "#25D366", color: "#fff",
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)", "&:hover": { backgroundColor: "#1EBE5D", transform: "scale(1.1)" },
          }}
        >
          <WhatsAppIcon sx={{ fontSize: 30 }} />
        </IconButton>
      </Box>

      <Box sx={{ minHeight: "100vh", background: creamBg, display: "flex", flexDirection: "column", fontFamily: "Poppins, sans-serif", position: "relative" }}>
        
        {/* HERO SECTION */}
        <Box sx={{ minHeight: { xs: "50vh", md: "70vh" }, display: "flex", alignItems: "center", color: "#fff", position: "relative", zIndex: 2, py: { xs: 8, md: 10 } }}>
          <CinematicBackground />
          <Container maxWidth="lg" sx={{ position: "relative", zIndex: 3, textAlign: "center" }}>
            <motion.div variants={fadeDown} initial="hidden" animate="visible">
              <Typography variant="h1" sx={{ fontWeight: 900, color: cinematicGold, fontSize: { xs: "2.8rem", sm: "4rem", md: "6.5rem" }, letterSpacing: { xs: "2px", md: "8px" }, textTransform: "uppercase", mb: 2 }}>
                Our EVENTS
              </Typography>
              <Typography sx={{ fontSize: { xs: 16, md: 22 }, fontWeight: 400, maxWidth: "800px", mx: "auto", px: 2, lineHeight: 1.6, color: "rgba(255, 255, 255, 0.9)", mb: 4 }}>
                Curated volunteering opportunities to create <br /> meaningful impact
              </Typography>
            </motion.div>
          </Container>
        </Box>

        {/* EVENTS GRID SECTION */}
        <Container 
            maxWidth="lg" 
            sx={{ position: "relative", zIndex: 3, mt: { xs: -4, md: -8 }, pb: 10 }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
        >
          
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
             {/* Left Arrow Desktop */}
             <IconButton 
                onClick={handlePrev}
                sx={{ 
                    bgcolor: 'white', color: cinematicNavy, boxShadow: 3,
                    display: { xs: 'none', md: 'flex' },
                    '&:hover': { bgcolor: cinematicGold, color: 'white' }
                }}
             >
                <ArrowBackIosNewIcon />
             </IconButton>

             <Box textAlign="center" sx={{ width: "100%" }}>
                <Typography sx={{ color: eventMagenta, fontWeight: 700, fontSize: { xs: '1.5rem', md: '2.5rem' }, mb: 0.5 }}>
                  Our Events
                </Typography>
                <Typography variant="h3" sx={{ fontWeight: 800, color: navyText, fontSize: { xs: '1.2rem', md: '2rem' }, mb: 2 }}>
                  Featured Sets
                </Typography>
                {/* Pagination Dots */}
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
                    {[...Array(totalPages)].map((_, i) => (
                        <Box 
                            key={i} 
                            sx={{ 
                                width: currentPage === i ? 24 : 8, 
                                height: 8, 
                                borderRadius: 4, 
                                bgcolor: currentPage === i ? cinematicGold : '#ccc',
                                transition: 'all 0.3s ease'
                            }} 
                        />
                    ))}
                </Box>
             </Box>

             {/* Right Arrow Desktop */}
             <IconButton 
                onClick={handleNext}
                sx={{ 
                    bgcolor: 'white', color: cinematicNavy, boxShadow: 3,
                    display: { xs: 'none', md: 'flex' },
                    '&:hover': { bgcolor: cinematicGold, color: 'white' }
                }}
             >
                <ArrowForwardIosIcon />
             </IconButton>
          </Box>

          {/* Cards Grid */}
          <Box sx={{ minHeight: { xs: 'auto', md: '600px' } }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                variants={setTransition}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
                  {currentCards.map((event, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <motion.div whileHover={{ y: -8 }} style={{ height: '100%' }}>
                        <Card sx={{ 
                          borderRadius: 4, 
                          border: '1px solid #f0f0f0', 
                          boxShadow: '0 10px 30px rgba(0,0,0,0.05)', 
                          height: '100%', 
                          display: 'flex', 
                          flexDirection: 'column',
                          mx: { xs: 'auto', sm: 0 },
                          maxWidth: { xs: '340px', sm: '100%' }
                        }}>
                          <CardMedia component="img" height="200" image={event.image} alt={event.title} />
                          <CardContent sx={{ p: { xs: 2, md: 3 }, flexGrow: 1 }}>
                            <Typography sx={{ fontWeight: 700, fontSize: '1.05rem', height: 50, overflow: 'hidden', mb: 1.5, color: '#2D3954' }}>
                              {event.title}
                            </Typography>
                            <Typography variant="body2" sx={{ color: "#777", mb: 2 }}>
                              📅 {event.date}
                            </Typography>
                            <Box sx={{ pt: 2, borderTop: '1px solid #f4f4f4', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                              <Box>
                                <Typography variant="caption" sx={{ color: '#999', display: 'block' }}>Organized By</Typography>
                                <Typography variant="caption" sx={{ color: eventMagenta, fontWeight: 700 }}>Sai Nisha</Typography>
                              </Box>
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

          {/* Mobile Arrows - Visible only on mobile/tablet */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center', gap: 4, mt: 5 }}>
             <IconButton onClick={handlePrev} sx={{ bgcolor: 'white', boxShadow: 2, color: cinematicNavy }}><ArrowBackIosNewIcon /></IconButton>
             <IconButton onClick={handleNext} sx={{ bgcolor: 'white', boxShadow: 2, color: cinematicNavy }}><ArrowForwardIosIcon /></IconButton>
          </Box>

        </Container>
      </Box>
      <Footer />
    </>
  );
}