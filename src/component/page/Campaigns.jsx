import React from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  Divider,
  CssBaseline,
  keyframes,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { motion } from "framer-motion";
import Footer from "../page/Footer";
import useMediaQuery from "@mui/material/useMediaQuery";

import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";

import aboutImg1 from "../page/image/ladies.png";
import aboutImg2 from "../page/image/newborn-baby.jpg";
import aboutImg3 from "../page/image/kids education - 2.jpg";
import aboutImg4 from "../page/image/mentally challenged elders.webp";

const navyText = "#1F2F3F";
const olive = "#7C8F29";
const gold = "#D68910";
const mutedText = "#5F6F7E";
const creamBg = "#F7F4EC";

const theme = createTheme({
  typography: {
    fontFamily: `"Poppins", "Roboto", "Helvetica", "Arial", sans-serif`,
    h2: { fontWeight: 900, lineHeight: 1.1 },
    h4: { fontWeight: 800, lineHeight: 1.2 },
    h5: { fontWeight: 700, lineHeight: 1.2 },
    body1: { fontWeight: 400, lineHeight: 1.3 },
  },
});

const fadeUp = {
  hidden: { opacity: 0, y: 70 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
};

const fadeDown = {
  hidden: { opacity: 0, y: -60 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.3 } },
};

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
        const color = isGold ? "rgba(214, 137, 16, 0.45)" : "rgba(255, 230, 0, 0.35)";
        const glow = isGold ? "rgba(214, 137, 16, 0.3)" : "rgba(255, 230, 0, 0.2)";

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

export default function Campaigns() {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          position: "relative",
          py: { xs: 10, md: 14 },
          background: creamBg,
          overflow: "hidden",
          minHeight: "100vh",
        }}
      >
        <BubblesBackground />

        <Container sx={{ position: "relative", zIndex: 2 }}>
          
          <motion.div variants={fadeDown} initial="hidden" animate="visible">
            <Box
              sx={{
                position: "relative",
                backgroundColor: "#111827", 
                borderRadius: 4,
                overflow: "hidden",
                bottom: 30,
                py: { xs: 10, md: 15 }, 
                mb: { xs: 6, md: 8 },
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: `radial-gradient(circle at center, rgba(214, 137, 16, 0.25) 0%, transparent 70%)`,
                  filter: "blur(60px)",
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
                  letterSpacing: { xs: "0.1em", md: "0.18em" },
                  textTransform: "uppercase",
                  color: "#FFFFFF",
                  lineHeight: 1,
                }}
              >
                 Campaigns <span style={{ color: gold }}> With Us</span>
              </Typography>

              <Typography
                align="center"
                sx={{
                  position: "relative",
                  zIndex: 2,
                  color: "rgba(255,255,255,0.7)",
                  letterSpacing: { xs: 3, md: 8 },
                  fontSize: { xs: 12, md: 14 },
                  mt: 3,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  lineHeight: 1,
                }}
              >
                Compassion • Purpose • Impact
              </Typography>
            </Box>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
            <Box
              sx={{
                maxWidth: 980,
                mx: "auto",
                px: { xs: 3, md: 8 },
                py: { xs: 4, md: 8 },
                borderRadius: 6,
                background: "rgba(255,255,255,0.95)",
                backdropFilter: "blur(16px)",
                boxShadow: "0 50px 140px rgba(0,0,0,0.28)",
              }}
            >
              <Typography lineHeight={1.3} color={mutedText}>
                &bull; <strong>Sai Nisha Foundation</strong> was born from love, loss, and a resolve to protect fragile life.<br />
                &bull; We stand in the gap for families facing fear and uncertainty during childbirth.<br />
                &bull; We prioritize support during the final weeks of pregnancy and first hours of birth.<br />
                &bull; Our mission is to ensure that critical care is accessible when it is most needed.
              </Typography>

              <Typography mt={4} variant="h4" fontWeight={800} color={olive} sx={{ lineHeight: 1.2 }}>
                Our Roots
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography color={mutedText} lineHeight={1.3}>
                &bull; Established in 2023 by Ganesh and his spouse to honor a deeply personal promise.<br />
                &bull; Named in loving memory of <strong>Sai</strong> (daughter) and <strong>Nisha</strong> (parents Nithya & Shanmugam).<br />
                &bull; Born from the pain of losing a child within a week of birth due to delayed hospital care.<br />
                &bull; Transformed a personal COVID-era crisis into a public responsibility for others.
              </Typography>

              <Typography mt={4} variant="h4" fontWeight={800} color={navyText} sx={{ lineHeight: 1.2 }}>
                A Purpose Forged Through Loss
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography color={mutedText} lineHeight={1.3}>
                &bull; The mission was strengthened following the untimely loss of our founder, Ganesh, in 2024.<br />
                &bull; We choose to transform personal grief into an active, compassionate presence.<br />
                &bull; Driven by conscience and experience rather than just numbers.<br />
                &bull; Guided by the core belief that care delayed should never become care denied.
              </Typography>

              <Typography mt={4} variant="h4" fontWeight={800} color="#2f4dd3" sx={{ lineHeight: 1.2 }}>
                What We Believe
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography color={mutedText} lineHeight={1.3}>
                &bull; Every mother deserves dignity, care, and absolute reassurance.<br />
                &bull; A newborn's survival should never be a matter of financial capability.<br />
                &bull; Timely intervention has the power to save entire families.<br />
                &bull; Our focus remains on quiet, immediate, and meaningful impact.
              </Typography>

              <Typography mt={4} variant="h4" fontWeight={800} color={navyText} sx={{ lineHeight: 1.2 }}>
                Our Core Focus
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography color={mutedText} lineHeight={1.3}>
                &bull; 🤰 Comprehensive support for mothers in their third trimester.<br />
                &bull; 👶 Emergency medical assistance for newborns and specialized NICU care.
              </Typography>

              <Typography mt={4} variant="h4" fontWeight={800} color={gold} sx={{ lineHeight: 1.2 }}>
                Compassion Beyond Boundaries
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography color={mutedText} lineHeight={1.3}>
                &bull; Empowering children striving for excellence in education and sports.<br />
                &bull; Providing refuge and care for injured and elderly animals.<br />
                &bull; Supporting mentally challenged elders facing neglect or abandonment.
              </Typography>

              <Typography mt={4} variant="h4" fontWeight={800} color="#d32f4a" sx={{ lineHeight: 1.2 }}>
                Our Promise
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography color={mutedText} lineHeight={1.3}>
                &bull; We promise presence, honesty, and compassion to every life we reach.<br />
                &bull; We remain dedicated to the belief that every life is worth fighting for.
              </Typography>
            </Box>
          </motion.div>

          <Box sx={{ mt: { xs: 8, md: 16 } }}>
            <motion.div variants={stagger} initial="hidden" whileInView="visible">
              <Grid container spacing={{ xs: 3, md: 6 }} justifyContent="center">
                {[aboutImg1, aboutImg2, aboutImg3, aboutImg4].map((img, i) => (
                  <Grid item xs={12} sm={6} md={6} key={i}>
                    <motion.img
                      src={img}
                      variants={fadeUp}
                      whileHover={{ scale: 1.12, y: -20, rotate: 0.6 }}
                      transition={{ duration: 0.7 }}
                      style={{
                        width: "100%",
                        maxWidth: "500px",
                        height: "auto",
                        aspectRatio: "3 / 2",
                        objectFit: "cover",
                        borderRadius: 28,
                        border: `3px solid ${gold}`,
                        position: "relative",
                        zIndex: 3,
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Box>
        </Container>
      </Box>

      <Footer />
    </ThemeProvider>
  );
}