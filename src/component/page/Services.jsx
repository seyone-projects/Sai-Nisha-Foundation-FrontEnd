import React from "react";
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
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "./Footer";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";

import serviceImg1 from "./image/pre emergency.png";
import serviceImg2 from "./image/pets - 1.jpg";
import serviceImg3 from "./image/mentally challenged elders.webp";
import serviceImg4 from "./image/newborn-baby.jpg";
import serviceImg5 from "./image/education.jpg";
import serviceImg6 from "./image/kids_education_part2.jpg";

const serviceImages = [
  serviceImg1,
  serviceImg2,
  serviceImg3,
  serviceImg4,
  serviceImg5,
  serviceImg6,
];

// Colors
const gold = "#D68910";
const lightOlive = "#A4B454"; // Brightened for dark background
const lightMuted = "#CBD5E1"; // Light grey for readability

const services = [
  { title: "Pregnancy Emergency", desc: "Urgent support for high-risk pregnancies." },
  { title: "Pets", desc: "Rescue, medical care, and adoption support." },
  { title: "Mentally Challenged Elders", desc: "Care, dignity, and emotional well-developed." },
  { title: "Newborn Emergency Care", desc: "NICU access and life-saving care." },
  { title: "Education", desc: "Empowering children through learning." },
  { title: "Sports", desc: "Encouraging fitness and confidence." },
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

/* ---------------- ANIMATIONS ---------------- */
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

/* ---------------- FULL PAGE VIDEO ---------------- */
function FullPageVideoBackground() {
  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        zIndex: -2,
        overflow: "hidden",
      }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "brightness(0.35) contrast(1.15)",
        }}
      >
        <source src="/animation eeee.mp4" type="video/mp4" />
      </video>
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(17,24,39,0.85), rgba(17,24,39,0.95))",
        }}
      />
    </Box>
  );
}

/* ---------------- FLOATING BUBBLES ---------------- */
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
          position: "fixed",
          bottom: 20,
          right: 20,
          width: 56,
          height: 56,
          borderRadius: "50%",
          bgcolor: "#25D366",
          color: "#fff",
          zIndex: 9999,
          '&:hover': { bgcolor: "#128C7E" }
        }}
      >
        <WhatsAppIcon />
      </Button>

      <Box sx={{ position: "relative", zIndex: 2, minHeight: "100vh" }}>
        <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>

          {/* HERO */}
          <Box
            sx={{
              position: "relative",
              backgroundColor: "rgba(17,24,39,0.85)",
              borderRadius: 4,
              py: { xs: 8, md: 12 },
              mb: 10,
              textAlign: "center",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(circle, rgba(214,137,16,0.25), transparent)",
                animation: `${spotlightMove} 6s infinite`,
              }}
            />

            <Typography
              variant={isMobile ? "h4" : "h2"}
              sx={{
                color: "#fff",
                textTransform: "uppercase",
                animation: `${fadeIn} 1s ease-out`,
              }}
            >
              Our <span style={{ color: gold }}>Services</span>
            </Typography>

            <Typography sx={{ color: "rgba(255,255,255,0.7)", mt: 2 }}>
              Explore • Participate • Grow
            </Typography>
          </Box>

          {/* SERVICES GRID */}
          <Grid container spacing={4} justifyContent="center">
            {services.map((service, index) => (
              <Grid
                key={index}
                item
                xs={12}
                md={6}
                lg={4}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  opacity: 0,
                  animation: `${slideUp} .8s ease-out ${index * 0.1}s forwards`,
                }}
              >
                <Card
                  sx={{
                    width: 320,
                    background: "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(12px)",
                    borderRadius: 6,
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "#fff",
                    transition: "transform 0.3s ease",
                    '&:hover': { transform: 'translateY(-10px)' }
                  }}
                >
                  <CardMedia
                    component="img"
                    height="240"
                    image={serviceImages[index]}
                    alt={service.title}
                  />
                  <CardContent sx={{ textAlign: "center" }}>
                    <Typography variant="h6" sx={{ color: gold, mb: 1 }}>
                      {service.title}
                    </Typography>
                    <Typography sx={{ color: lightMuted, fontSize: '0.9rem' }}>
                      {service.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* FOOTER SECTION 
            We wrap the footer in a Box that overrides all child text colors to white
        */}
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