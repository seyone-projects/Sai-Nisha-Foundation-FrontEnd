import React from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  Divider,
  CssBaseline,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { motion } from "framer-motion";
import Footer from "../page/Footer";

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
    h2: { fontWeight: 900 },
    h4: { fontWeight: 800 },
    h5: { fontWeight: 700 },
    body1: { fontWeight: 400 },
    body2: { fontWeight: 400 },
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
          100% { transform: translateY(-110vh) scale(1.4); opacity: 0; }
        }
      `}</style>
    </Box>
  );
}

export default function About() {
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
            <Typography
              align="center"
              variant="h2"
              sx={{
                fontWeight: 900,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                background: `linear-gradient(90deg, ${navyText}, ${olive})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              About Us
            </Typography>

            <Divider
              sx={{
                width: 140,
                height: 5,
                background: `linear-gradient(90deg, ${gold}, ${olive})`,
                mx: "auto",
                mt: 3,
                mb: 9,
                borderRadius: 2,
              }}
            />
          </motion.div>

          {/* ================= STORY ================= */}
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
              <Typography lineHeight={2} color={mutedText}>
                <strong>Sai Nisha Foundation</strong> was born from a place of
                love, loss, and an unshakable resolve to protect life when it
                is most fragile.
                <br />
                <br />
                For many families, pregnancy and childbirth are moments of joy.
                For countless others, they are moments filled with fear,
                uncertainty, and helpless waiting.
                <br />
                <br />
                The final weeks of pregnancy.
                <br />
                The first hours after birth.
                <br />
                These moments decide everything — yet they are often the moments
                when support is least accessible.
                <br />
                <br />
                Sai Nisha Foundation exists to stand in that space.
              </Typography>

              {/* ================= ROOTS ================= */}
              <Typography mt={6} variant="h4" fontWeight={800} color={olive}>
                Our Roots
              </Typography>

              <Divider sx={{ my: 2 }} />
              <Typography mt={2} color={mutedText} lineHeight={2}>
                Established in 2023, Sai Nisha Foundation was founded by Ganesh
                and his spouse, born from a deeply personal promise — that no
                mother should ever feel abandoned, and no newborn should ever
                be denied care because help did not arrive in time.
                <br />
                <br />
                The Foundation is named in loving memory of:
                <br />
                • Sai — our daughter
                <br />
                • Nisha (Nithya & Shanmugam) — Ganesh’s parents
                <br />
                <br />
                What began as remembrance soon became responsibility.
                <br />
                <br />
                Sai Nisha Foundation was born out of pain — the pain of losing
                our child within a week of birth.
                <br />
                <br />
                During the final trimester, at the peak of the COVID crisis,
                hospitals were overwhelmed. Doors remained closed. Admissions
                were denied. When we needed care the most, timely support did
                not reach us — and that absence changed our lives forever.
              </Typography>

              {/* ================= PURPOSE & BELIEFS ================= */}
              <Typography mt={6} color={mutedText} lineHeight={2}>
                Out of that loss came a resolve. Out of that silence came a voice.
                <br />
                <br />
                Sai Nisha Foundation exists today to ensure that no family faces
                the same helplessness we once did.
              </Typography>

              <Typography mt={4} variant="h4" fontWeight={800} color={navyText}>
                A Purpose Forged Through Loss
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography mt={2} color={mutedText} lineHeight={2}>
                In June 2024, the untimely loss of Ganesh profoundly altered the
                course of this journey.
                <br />
                <br />
                Yet grief did not silence the mission. It strengthened it.
                <br />
                <br />
                The Foundation chose not to retreat from pain, but to transform
                loss into presence — ensuring that even in moments of personal
                darkness, light could still reach others.
                <br />
                <br />
                Sai Nisha Foundation continues today not as an institution
                driven by numbers, but as a commitment driven by conscience —
                rooted in compassion, shaped by experience, and guided by the
                belief that care delayed should never become care denied.
              </Typography>

              <Typography mt={6} variant="h4" fontWeight={800} color="#2f4dd3">
                What We Believe
              </Typography>

              <Divider sx={{ my: 2 }} />
              <Typography mt={2} color={mutedText} lineHeight={2}>
                • A mother deserves care, dignity, and reassurance
                <br />
                • A newborn’s survival should never depend on financial readiness
                <br />
                • Timely support can save lives and families
                <br />
                <br />
                We do not work for recognition. We work for impact — quiet,
                immediate, and meaningful.
              </Typography>

              <Typography mt={6} variant="h4" fontWeight={800} color={navyText}>
                Our Core Focus
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography mt={2} color={mutedText} lineHeight={2}>
                🤰 Supporting Mothers in the Third Trimester
                <br />
                👶 Emergency Support for Newborns & NICU Care
              </Typography>

              <Typography mt={6} variant="h4" fontWeight={800} color={gold}>
                Compassion Beyond Boundaries
              </Typography>

              <Divider sx={{ my: 2 }} />
              <Typography mt={2} color={mutedText} lineHeight={2}>
                • Children striving for education and sports excellence
                <br />
                • Injured and elderly animals
                <br />
                • Mentally challenged elders facing neglect
              </Typography>

              <Typography mt={6} variant="h4" fontWeight={800} color="#d32f4a">
                Our Promise
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography mt={2} color={mutedText} lineHeight={2}>
                We may not be able to help everyone. But for those we reach, we
                promise presence, honesty, and compassion.
              </Typography>
            </Box>
          </motion.div>

          {/* ================= GALLERY ================= */}
          <Box sx={{ mt: { xs: 8, md: 16 } }}>
            <motion.div variants={stagger} initial="hidden" whileInView="visible">
              <Grid container spacing={{ xs: 3, md: 6 }} justifyContent="center">
                {[aboutImg1, aboutImg2, aboutImg3, aboutImg4].map((img, i) => (
                  <Grid item size={{ xs: 12, sm: 6, md: 6 }} key={i}>
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