import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Container,
  keyframes,
  useMediaQuery,
  CssBaseline,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
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
import serviceImg1 from "./image/pre.jpg";
import serviceImg2 from "./image/gettyimages-1637251600-612x612.jpg";
import serviceImg3 from "./image/mental 2.avif";
import serviceImg4 from "./image/baby.png";
import serviceImg5 from "./image/edu 1.avif";
import serviceImg6 from "./image/sports 1.avif";

const serviceImages = [serviceImg1, serviceImg2, serviceImg3, serviceImg4, serviceImg5, serviceImg6];

const gold = "#D68910";
const lightMuted = "#CBD5E1";

const services = [
  { 
    title: "Pregnancy Emergency", 
    desc: "Urgent support for high-risk pregnancies.",
    longDesc: "Our Pregnancy Emergency program provides 24/7 rapid response for expectant mothers facing complications. We bridge the gap between home and hospital, providing emergency transport, immediate medical consultation, and financial aid for life-saving procedures. We ensure that no mother or child is at risk due to a lack of resources."
  },
  { 
    title: "Pets", 
    desc: "Rescue, medical care, and adoption support.",
    longDesc: "Our animal welfare wing focuses on rescuing stray and abandoned animals. We provide immediate veterinary care, vaccinations, and sterilization. Beyond medical help, we run an active adoption program to find forever homes for our furry friends and provide food for street animals in underserved areas."
  },
  { 
    title: "Mentally Challenged Elders", 
    desc: "Care, dignity, and emotional well-developed.",
    longDesc: "We provide specialized residential and daycare services for elderly individuals living with dementia, Alzheimer's, and other cognitive challenges. Our program focuses on 'Dignity in Aging,' offering therapeutic activities, professional nursing care, and a safe, loving environment where they are never forgotten."
  },
  { 
    title: "Newborn Emergency Care", 
    desc: "NICU access and life-saving care.",
    longDesc: "The first few hours of life are critical. We specialize in facilitating access to Neonatal Intensive Care Units (NICU) for families who cannot afford them. We provide high-tech incubators, emergency medicine, and specialized pediatric transport to ensure newborns get a fighting chance at life."
  },
  { 
    title: "Education", 
    desc: "Empowering children through learning.",
    longDesc: "Education is the greatest equalizer. We support the schooling of children from low-income backgrounds by providing tuition fees, uniforms, books, and digital learning tools. We also run after-school mentorship programs to help students develop soft skills and vocational interests for a brighter future."
  },
  { 
    title: "Sports", 
    desc: "Encouraging fitness and confidence.",
    longDesc: "Our sports program aims to identify and nurture athletic talent in underprivileged communities. By providing coaching, equipment, and access to tournaments, we help youth build discipline, teamwork, and physical health. We believe every child deserves the chance to shine on the field."
  },
];

const theme = createTheme({
  typography: {
    fontFamily: `"Poppins", sans-serif`,
    h2: { fontWeight: 900 },
    h4: { fontWeight: 800 },
    h5: { fontWeight: 700 },
    h6: { fontWeight: 600 },
  },
});

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
`;

const spotlightMove = keyframes`
  0% { transform: translate(-20%, -20%); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translate(120%, 120%); opacity: 0; }
`;

function FullPageVideoBackground() {
  return (
    <Box sx={{ position: "fixed", inset: 0, zIndex: -2, overflow: "hidden" }}>
      <video
        autoPlay muted loop playsInline
        style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.35) contrast(1.15)" }}
      />
      <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(17,24,39,0.85), rgba(17,24,39,0.95))" }} />
    </Box>
  );
}

function BubblesBackground() {
  return (
    <Box sx={{ position: "fixed", inset: 0, zIndex: -1, pointerEvents: "none" }}>
      {[...Array(35)].map((_, i) => (
        <Box
          key={i}
          sx={{
            position: "absolute",
            bottom: "-50px",
            left: `${Math.random() * 100}%`,
            width: 10 + Math.random() * 20,
            height: 10 + Math.random() * 20,
            borderRadius: "50%",
            background: "rgba(214,137,16,0.45)",
            animation: `floatUp ${12 + Math.random() * 10}s linear infinite`,
          }}
        />
      ))}
      <style>{`
        @keyframes floatUp {
          from { transform: translateY(0); opacity: 0; }
          20% { opacity: .8; }
          to { transform: translateY(-450vh); opacity: 0; }
        }
      `}</style>
    </Box>
  );
}

export default function Services() {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [selectedService, setSelectedService] = useState(null);

  const handleOpen = (service) => setSelectedService(service);
  const handleClose = () => setSelectedService(null);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <FullPageVideoBackground />
      <BubblesBackground />

      {/* WHATSAPP */}
      <Button
        component="a"
        href="https://wa.me/919962290875"
        sx={{
          position: "fixed", bottom: 20, right: 20, width: 56, height: 56,
          borderRadius: "50%", bgcolor: "#25D366", color: "#fff", zIndex: 9999,
          '&:hover': { bgcolor: "#128C7E" }
        }}
      >
        <WhatsAppIcon />
      </Button>

      <Box sx={{ position: "relative", zIndex: 2, minHeight: "100vh" }}>
        <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
          
          {/* HERO SECTION */}
          <Box
            sx={{
              position: "relative", backgroundColor: "rgba(17,24,39,0.85)",
              mb: { xs: 4, md: 8 }, mt: { xs: -10, md: -15 },
              py: { xs: 6, md: 12 }, px: 2, textAlign: "center", overflow: "hidden",
              width: { xs: "100vw", md: "100%" }, marginLeft: { xs: "50%", md: "0" },
              transform: { xs: "translateX(-50%)", md: "none" },
              borderRadius: { xs: 0, md: 4 }, display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
            }}
          >
            <Box
              sx={{
                position: "absolute", inset: 0, pointerEvents: "none",
                background: `radial-gradient(circle at center, ${gold}40, transparent 70%)`,
                animation: `${spotlightMove} 10s infinite linear`, filter: "blur(40px)",
              }}
            />
            <Typography
              variant={isMobile ? "h4" : "h2"}
              sx={{
                position: "relative", color: "#fff", fontWeight: 800, textTransform: "uppercase",
                animation: `${fadeIn} 1s ease-out`, fontSize: { xs: '2rem', sm: '3rem', md: '3.75rem' },
                lineHeight: 1.2,
              }}
            >
              Our <span style={{ color: gold }}>Services</span>
            </Typography>
          </Box>

          {/* SERVICES GRID */}
          <Grid container spacing={4} justifyContent="center">
            {services.map((service, index) => (
              <Grid
                key={index} item xs={12} md={6} lg={4}
                sx={{
                  display: "flex", justifyContent: "center", opacity: 0,
                  animation: `${slideUp} .8s ease-out ${index * 0.1}s forwards`,
                }}
              >
                <Card
                  sx={{
                    width: 320, background: "rgba(255,255,255,0.05)",
                    backdropFilter: "blur(12px)", borderRadius: 6,
                    border: "1px solid rgba(255,255,255,0.1)", color: "#fff",
                    transition: "all 0.3s ease", display: 'flex', flexDirection: 'column',
                    '&:hover': { transform: 'translateY(-10px)', background: "rgba(255,255,255,0.1)", borderColor: gold }
                  }}
                >
                  <CardMedia
                    component="img" height="220"
                    image={serviceImages[index]} alt={service.title}
                  />
                  <CardContent sx={{ textAlign: "center", flexGrow: 1 }}>
                    <Typography variant="h6" sx={{ color: gold, mb: 1 }}>
                      {service.title}
                    </Typography>
                    <Typography sx={{ color: lightMuted, fontSize: '0.9rem', mb: 2 }}>
                      {service.desc}
                    </Typography>
                    <Button 
                      variant="outlined" 
                      onClick={() => handleOpen({ ...service, image: serviceImages[index] })}
                      sx={{ 
                        color: gold, borderColor: gold, borderRadius: 10, px: 3,
                        '&:hover': { borderColor: "#fff", color: "#fff" }
                      }}
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* MODAL / DIALOG FOR MORE CONTENT */}
        <Dialog 
          open={Boolean(selectedService)} 
          onClose={handleClose}
          maxWidth="sm"
          fullWidth
          PaperProps={{
            sx: {
              background: "rgba(20, 25, 35, 0.95)",
              backdropFilter: "blur(20px)",
              color: "#fff",
              borderRadius: 5,
              border: `1px solid ${gold}`,
            }
          }}
        >
          {selectedService && (
            <>
              <Box sx={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  height="250"
                  image={selectedService.image}
                  alt={selectedService.title}
                />
                <IconButton
                  onClick={handleClose}
                  sx={{ position: 'absolute', top: 10, right: 10, color: '#fff', bgcolor: 'rgba(0,0,0,0.5)', '&:hover': {bgcolor: gold} }}
                >
                  <CloseIcon />
                </IconButton>
              </Box>
              <DialogTitle sx={{ color: gold, fontWeight: 800, fontSize: '1.5rem', pt: 3 }}>
                {selectedService.title}
              </DialogTitle>
              <DialogContent>
                <Typography sx={{ color: "#fff", lineHeight: 1.8, fontSize: '1rem' }}>
                  {selectedService.longDesc}
                </Typography>
              </DialogContent>
              <DialogActions sx={{ p: 3 }}>
                <Button onClick={handleClose} sx={{ color: lightMuted }}>Close</Button>
              </DialogActions>
            </>
          )}
        </Dialog>

        <Box sx={{ width: "100%", "& *": { color: "#ffffff !important" } }}>
          <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  );
}