import React from "react";
import {
  Box,
  Button,
  Typography,
  Grid,
  Paper,
  Container,
  CssBaseline,
  keyframes,
  useMediaQuery,
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

const creamBg = "#F7F4EC";
const navyText = "#1F2F3F";
const olive = "#7C8F29";
const gold = "#D68910";
const mutedText = "#5F6F7E";

const theme = createTheme({
  typography: {
    fontFamily: `"Poppins", "Roboto", "Helvetica", "Arial", sans-serif`,
    h2: { fontWeight: 900 },
    h4: { fontWeight: 800 },
    h5: { fontWeight: 700 },
    h6: { fontWeight: 600 },
    body1: { fontWeight: 400 },
    body2: { fontWeight: 400 },
  },
});

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Video Spotlight Effect Animation
const spotlightMove = keyframes`
  0% { transform: translate(-20%, -20%); opacity: 0; }
  20% { opacity: 1; }
  80% { opacity: 1; }
  100% { transform: translate(120%, 120%); opacity: 0; }
`;

function BubblesBackground() {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {[...Array(40)].map((_, i) => {
        const size = Math.random() * 20 + 8;
        const randomLeft = Math.random() * 100;
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 20;

        const isGold = i % 2 === 0;
        const color = isGold
          ? "rgba(214, 137, 16, 0.45)"
          : "rgba(255, 230, 0, 0.35)";
        const glow = isGold
          ? "rgba(214, 137, 16, 0.3)"
          : "rgba(255, 230, 0, 0.2)";

        return (
          <Box
            key={i}
            sx={{
              position: "absolute",
              bottom: "-30px",
              left: `${randomLeft}%`,
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: color,
              borderRadius: "50%",
              boxShadow: `0 0 15px 4px ${glow}`,
              opacity: 0,
              animation: `floatUp ${duration}s linear infinite`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}

      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          10% { opacity: 0.7; }
          90% { opacity: 0.6; }
          100% { transform: translateY(-450vh) scale(1.4); opacity: 0; }
        }
      `}</style>
    </Box>
  );
}

export default function Careers() {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

          <Box
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          zIndex: 9999,
        }}
      >
        <Button
          component="a"
          href="https://wa.me/919962290875"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            minWidth: 0,
            width: 56,
            height: 56,
            borderRadius: "50%",
            backgroundColor: "#25D366",
            color: "#fff",
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
            "&:hover": {
              backgroundColor: "#1EBE5D",
              transform: "scale(1.1)",
            },
          }}
        >
          <WhatsAppIcon sx={{ fontSize: 30 }} />
        </Button>
      </Box>
      <Box
        sx={{
          background: `linear-gradient(180deg, ${creamBg} 0%, #ffffff 100%)`,
          minHeight: "100vh",
          position: "relative",
          zIndex: 1,
        }}
      >
        <BubblesBackground />

        <Box sx={{ py: { xs: 8, md: 12 }, position: "relative", zIndex: 2 }}>
          <Container maxWidth="lg">
            {/* Spotlight Header Wrapper - HEIGHT INCREASED HERE */}
            <Box
              sx={{
                position: "relative",
                backgroundColor: "#111827",
                borderRadius: 4,
                overflow: "hidden",
                bottom: 30,
                // Increased padding for more height
                py: { xs: 10, md: 15 }, 
                mb: { xs: 6, md: 8 },
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Spotlight Moving Light */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: `radial-gradient(circle at center, rgba(214, 137, 16, 0.2) 0%, transparent 70%)`,
                  filter: "blur(60px)", // Slightly higher blur for larger box
                  zIndex: 0,
                  animation: `${spotlightMove} 6s infinite ease-in-out`,
                }}
              />

              <Typography
                variant={isMobile ? "h4" : "h2"}
                align="center"
                sx={{
                  position: "relative",
                  zIndex: 2,
                  fontWeight: 900,
                  color: "#FFFFFF",
                  textTransform: "uppercase",
                  animation: `${fadeIn} 1s ease-out`,
                  // Extra spacing to fill the box
                  letterSpacing: { xs: 2, md: 5 },
                }}
              >
                Our <span style={{ color: gold }}>Careers</span>
              </Typography>
              
              <Typography
                align="center"
                sx={{
                  position: "relative",
                  zIndex: 2,
                  color: "rgba(255,255,255,0.7)",
                  letterSpacing: { xs: 3, md: 8 }, // Wider spacing like the video
                  fontSize: { xs: 12, md: 16 },
                  mt: 3,
                  fontWeight: 600,
                  textTransform: "uppercase"
                }}
              >
                Explore • Participate • Grow
              </Typography>
            </Box>

            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Box sx={{ mb: 4, textAlign: { xs: "center", md: "left" } }}>
                  <Typography variant="h5" fontWeight={800} sx={{ color: navyText, mb: 1 }}>
                    Join us to make an impact across India
                  </Typography>
                  <Typography sx={{ color: mutedText, fontWeight: 500 }}>
                    Our vision is to inspire everyone to Volunteer
                  </Typography>
                </Box>

                <JobCard
                  title="Internship"
                  location="Tambaram, Chennai, Tamil Nadu, India"
                  desc="This is not your usual internship. At Sai Nisha Foundation, you will get to be part of one of India’s largest youth-run NGOs. You will learn real-world skills."
                  type="Internship"
                  date="09/08/2025"
                />

                <JobCard
                  title="Content writer"
                  location="Tambaram, Chennai, Tamil Nadu, India"
                  desc="Help us tell stories that matter. You will be responsible for creating engaging content that connects our mission with the hearts of thousands."
                  type="Full time"
                  date="12/08/2025"
                />

                <JobCard
                  title="Business Development"
                  location="Tambaram, Chennai, Tamil Nadu, India"
                  desc="Drive our growth and partnerships. You will identify opportunities and build relationships with corporate partners to scale our impact."
                  type="Full time"
                  date="15/08/2025"
                />
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

function JobCard({ title, location, desc, type, date }) {
  return (
    <Paper
      variant="outlined"
      sx={{
        p: 3,
        mb: 3,
        borderRadius: 6,
        borderColor: "rgba(255, 255, 255, 0.3)",
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
        transition: "0.4s",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
        },
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={9}>
          <Typography variant="h6" fontWeight={800} sx={{ color: olive, mb: 0.5 }}>
            {title}
          </Typography>

          <Typography fontSize={13} sx={{ color: gold, fontWeight: 600, mb: 1.5 }}>
            {location}
          </Typography>

          <Typography fontSize={14} sx={{ lineHeight: 1.7, color: mutedText }}>
            {desc}
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          md={3}
          sx={{
            textAlign: { xs: "left", md: "right" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography fontSize={13} fontWeight={700} sx={{ color: navyText, textTransform: "uppercase" }}>
            {type}
          </Typography>
          <Typography fontSize={12} sx={{ color: mutedText, mt: 0.5 }}>
            Posted: {date}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}