import React, { useState, memo, useMemo } from "react";
// 1. Video import at the top
import backgroundVideo from "../page/image/pre video.mp4"; 
import {
  Box, Button, Typography, Grid, Card, CardMedia,
  CardContent, Container, keyframes, useMediaQuery,
  CssBaseline, Dialog, DialogTitle, DialogContent,
  IconButton,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Footer from "./Footer";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";

// Image Imports
import serviceImg1 from "./image/pre.jpg";
import serviceImg2 from "./image/gettyimages-1637251600-612x612.jpg";
import serviceImg3 from "./image/mental 2.avif";
import serviceImg4 from "./image/born 1.jpg";
import serviceImg5 from "./image/edu 1.avif";
import serviceImg6 from "./image/sports 1.avif";

const GOLD = "#D68910";
const LIGHT_MUTED = "#CBD5E1";

const SERVICES_DATA = [
  { title: "Pregnancy Emergency", desc: "Urgent support for high-risk pregnancies.", img: serviceImg1, longDesc: "Our Pregnancy Emergency program provides 24/7 rapid response for expectant mothers facing complications. We bridge the gap between home and hospital, providing emergency transport, immediate medical consultation, and financial aid for life-saving procedures." },
  { title: "Pets", desc: "Rescue, medical care, and adoption support.", img: serviceImg2, longDesc: "Our animal welfare wing focuses on rescuing stray and abandoned animals. We provide immediate veterinary care, vaccinations, and sterilization." },
  { title: "Mentally Challenged Elders", desc: "Care, dignity, and emotional well-developed.", img: serviceImg3, longDesc: "We provide specialized residential and daycare services for elderly individuals living with dementia, Alzheimer's, and other cognitive challenges." },
  { title: "Newborn Emergency Care", desc: "NICU access and life-saving care.", img: serviceImg4, longDesc: "The first few hours of life are critical. We specialize in facilitating access to Neonatal Intensive Care Units (NICU) for families who cannot afford them." },
  { title: "Education", desc: "Empowering children through learning.", img: serviceImg5, longDesc: "Education is the greatest equalizer. We support the schooling of children from low-income backgrounds by providing tuition fees, uniforms, and books." },
  { title: "Sports", desc: "Encouraging fitness and confidence.", img: serviceImg6, longDesc: "Our sports program aims to identify and nurture athletic talent in underprivileged communities. We believe every child deserves the chance to shine." },
];

const fadeIn = keyframes`from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); }`;
const slideUp = keyframes`from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); }`;
const spotlightMove = keyframes`0% { transform: translate(-20%, -20%); opacity: 0; } 50% { opacity: 1; } 100% { transform: translate(120%, 120%); opacity: 0; }`;

const FullPageVideoBackground = memo(() => (
  <Box sx={{ position: "fixed", inset: 0, zIndex: -2, overflow: "hidden", backgroundColor: "#000" }}>
    <video
      autoPlay muted loop playsInline
      src={backgroundVideo}
      style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.4) contrast(1.1)" }}
    />
    {/* Transparent Overlay to allow video visibility while keeping text readable */}
    <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(17,24,39,0.4), rgba(17,24,39,0.7))" }} />
  </Box>
));

const BubblesBackground = memo(() => {
  const bubbles = useMemo(() => [...Array(25)], []);
  return (
    <Box sx={{ position: "fixed", inset: 0, zIndex: -1, pointerEvents: "none" }}>
      {bubbles.map((_, i) => (
        <Box
          key={i}
          sx={{
            position: "absolute",
            bottom: "-50px",
            left: `${Math.random() * 100}%`,
            width: 10 + Math.random() * 20,
            height: 10 + Math.random() * 20,
            borderRadius: "50%",
            background: "rgba(214,137,16,0.2)",
            animation: `floatUp ${12 + Math.random() * 10}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes floatUp {
          from { transform: translateY(0); opacity: 0; }
          20% { opacity: .4; }
          to { transform: translateY(-110vh); opacity: 0; }
        }
      `}</style>
    </Box>
  );
});

const ServiceCard = ({ service, index, onLearnMore }) => (
  <Grid
    item xs={12} md={6} lg={4}
    sx={{
      display: "flex", justifyContent: "center", opacity: 0,
      animation: `${slideUp} .8s ease-out ${index * 0.1}s forwards`,
      willChange: 'transform, opacity'
    }}
  >
    <Card
      sx={{
        width: 320, background: "rgba(255,255,255,0.08)",
        backdropFilter: "blur(8px)", borderRadius: 6,
        border: "1px solid rgba(255,255,255,0.1)", color: "#fff",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        display: 'flex', flexDirection: 'column',
        '&:hover': { transform: 'translateY(-10px)', background: "rgba(255,255,255,0.15)", borderColor: GOLD }
      }}
    >
      <CardMedia component="img" height="220" image={service.img} alt={service.title} loading="lazy" />
      <CardContent sx={{ textAlign: "center", flexGrow: 1 }}>
        <Typography variant="h6" sx={{ color: GOLD, mb: 1, fontWeight: 700 }}>{service.title}</Typography>
        <Typography sx={{ color: LIGHT_MUTED, fontSize: '0.9rem', mb: 2 }}>{service.desc}</Typography>
        <Button 
          variant="outlined" 
          onClick={() => onLearnMore(service)}
          sx={{ 
            color: GOLD, borderColor: GOLD, borderRadius: 10, px: 3,
            '&:hover': { borderColor: "#fff", color: "#fff" }
          }}
        >
          Learn More
        </Button>
      </CardContent>
    </Card>
  </Grid>
);

export default function Services() {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [selectedService, setSelectedService] = useState(null);

  const theme = useMemo(() => createTheme({
    typography: {
      fontFamily: `"Poppins", sans-serif`,
      h2: { fontWeight: 900 },
      h4: { fontWeight: 800 },
    },
  }), []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <FullPageVideoBackground />
      <BubblesBackground />

      {/* FAB: WhatsApp */}
      <IconButton
        href="https://wa.me/919962290875"
        target="_blank"
        sx={{
          position: "fixed", bottom: 20, right: 20, width: 56, height: 56,
          bgcolor: "#25D366", color: "#fff", zIndex: 1000,
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          '&:hover': { bgcolor: "#128C7E", transform: 'scale(1.1)' },
          transition: 'all 0.2s'
        }}
      >
        <WhatsAppIcon />
      </IconButton>

      <Box sx={{ position: "relative", zIndex: 2, minHeight: "100vh" }}>
        <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
          
          {/* HERO SECTION - Made transparent to show video */}
          <Box sx={{
              position: "relative", 
              backgroundColor: "transparent", // Removed dark background
              mb: { xs: 4, md: 8 }, mt: { xs: -4, md: -6 },
              py: { xs: 6, md: 12 }, px: 2, textAlign: "center", overflow: "hidden",
              borderRadius: { xs: 0, md: 4 }, display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
            }}
          >
            {/* Animated Spotlight remains for flair */}
            <Box sx={{
                position: "absolute", inset: 0, pointerEvents: "none",
                background: `radial-gradient(circle at center, ${GOLD}25, transparent 70%)`,
                animation: `${spotlightMove} 10s infinite linear`, filter: "blur(60px)",
              }}
            />
            <Typography
              variant={isMobile ? "h4" : "h2"}
              sx={{
                position: "relative", color: "#fff", textTransform: "uppercase",
                animation: `${fadeIn} 1s ease-out`, fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                lineHeight: 1.2, textShadow: "2px 2px 10px rgba(0,0,0,0.5)"
              }}
            >
              Our <span style={{ color: GOLD }}>Services</span>
            </Typography>
          </Box>

          {/* SERVICES GRID */}
          <Grid container spacing={4} justifyContent="center">
            {SERVICES_DATA.map((service, index) => (
              <ServiceCard 
                key={service.title} 
                service={service} 
                index={index} 
                onLearnMore={setSelectedService} 
              />
            ))}
          </Grid>
        </Container>

        {/* MODAL / DIALOG */}
        <Dialog 
          open={!!selectedService} 
          onClose={() => setSelectedService(null)}
          maxWidth="sm"
          fullWidth
          PaperProps={{
            sx: {
              background: "rgba(20, 25, 35, 0.9)", backdropFilter: "blur(20px)",
              color: "#fff", borderRadius: 5, border: `1px solid ${GOLD}`,
            }
          }}
        >
          {selectedService && (
            <>
              <Box sx={{ position: 'relative' }}>
                <CardMedia component="img" height="250" image={selectedService.img} alt={selectedService.title} />
                <IconButton
                  onClick={() => setSelectedService(null)}
                  sx={{ position: 'absolute', top: 10, right: 10, color: '#fff', bgcolor: 'rgba(0,0,0,0.5)', '&:hover': {bgcolor: GOLD} }}
                >
                  <CloseIcon />
                </IconButton>
              </Box>
              <DialogTitle sx={{ color: GOLD, fontWeight: 800, fontSize: '1.5rem', pt: 3 }}>
                {selectedService.title}
              </DialogTitle>
              <DialogContent>
                <Typography sx={{ color: "#fff", lineHeight: 1.8, fontSize: '1rem' }}>
                  {selectedService.longDesc}
                </Typography>
              </DialogContent>
            </>
          )}
        </Dialog>

        <Box sx={{ width: "100%", mt: 10, "& *": { color: "#ffffff !important" } }}>
          <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  );
}