import React from "react";
import {
  Box,
  Button,
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
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import HandshakeIcon from "@mui/icons-material/Handshake";
import GroupAddIcon from "@mui/icons-material/GroupAdd";

import aboutImg1 from "../page/image/ladies.png";
import aboutImg2 from "../page/image/newborn-baby.jpg";

// UPDATED COLOR COMBINATION: Light Black & Premium Neon Accents
const navyText = "#F1F5F9"; // Lightened for contrast against dark bg
const olive = "#84CC16";    // Slightly brightened olive
const gold = "#FACC15";     // Electric Yellow/Gold
const mutedText = "#94A3B8"; // Muted slate for dark mode
const creamBg = "#0F172A";  // Deep Charcoal/Light Black Background
const cardBg = "#1E293B";   // Slightly lighter black for cards

const theme = createTheme({
  typography: {
    fontFamily: `"Poppins", "Roboto", "Helvetica", "Arial", sans-serif`,
    h2: { fontWeight: 900, lineHeight: 1.1 },
    h4: { fontWeight: 800, lineHeight: 1.2 },
    h5: { fontWeight: 700, lineHeight: 1.2 },
    body1: { fontWeight: 400, lineHeight: 1.3 },
  },
  palette: {
    mode: 'dark', // Ensures MUI components adapt to dark theme
  }
});

// THUNDER & CIRCLE ANIMATIONS
const thunderEffect = {
  animate: {
    opacity: [1, 0.8, 1, 0.9, 1, 0.4, 1],
    scale: [1, 1.02, 1, 1.05, 1],
    transition: {
      duration: 0.2,
      repeat: Infinity,
      repeatType: "mirror",
      repeatDelay: Math.random() * 5,
    },
  },
};

const rotateCircle = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

function ThunderCircle() {
  return (
    <Box
      sx={{
        position: "absolute",
        width: "350px",
        height: "350px",
        borderRadius: "50%",
        border: `2px solid ${gold}`,
        opacity: 0.6,
        filter: "blur(1px)",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: "-10px",
          borderRadius: "50%",
          padding: "5px",
          background: `conic-gradient(from 0deg, transparent, ${gold}, transparent 40%, ${gold})`,
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "destination-out",
          WebkitMaskComposite: "exclude",
          animation: `${rotateCircle} 2s linear infinite`,
        },
      }}
    />
  );
}

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

const barData = [
  { label: "Pregnancy Emergency", value: 90 },
  { label: "Newborn Emergency care", value: 95 },
];

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
        const color = isGold ? "rgba(250, 204, 21, 0.25)" : "rgba(101, 163, 13, 0.2)";
        const glow = isGold ? "rgba(250, 204, 21, 0.15)" : "rgba(101, 163, 13, 0.1)";

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

export default function About() {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* WhatsApp Button */}
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
                backgroundColor: "#020617", 
                borderRadius: 4,
                overflow: "hidden",
                bottom: 30,
                py: { xs: 10, md: 15 },
                mb: { xs: 6, md: 8 },
                boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                border: `1px solid rgba(255,255,255,0.05)`,
              }}
            >
              <ThunderCircle />

              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: `radial-gradient(circle at center, rgba(250, 204, 21, 0.15) 0%, transparent 70%)`,
                  filter: "blur(60px)",
                  zIndex: 0,
                  animation: `${spotlightMove} 6s infinite ease-in-out`,
                }}
              />

              <motion.div variants={thunderEffect} animate="animate">
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
                    textShadow: `0 0 20px ${gold}`,
                  }}
                >
                  About <span style={{ color: gold }}>Us</span>
                </Typography>
              </motion.div>

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

          <Box sx={{ mt: { xs: 10, md: 0 } }}>
            <Container>
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
                <Box
                  sx={{
                    background: cardBg,
                    borderRadius: 6,
                    p: { xs: 4, md: 8 },
                    boxShadow: "0 40px 120px rgba(0,0,0,0.3)",
                    border: `1px solid rgba(255,255,255,0.05)`,
                  }}
                >
                  <Typography variant="h4" fontWeight={900} color={gold} textAlign={"center"}>
                    Our Vision
                  </Typography>

                  <Typography color={mutedText} mt={2} lineHeight={1.8}>
                    A world where <Box component="span" sx={{ color: gold, fontWeight: 700 }}>no mother or newborn</Box> loses life due to <Box component="span" sx={{ color: olive, fontWeight: 600 }}>delayed care</Box>, <Box component="span" sx={{ color: olive, fontWeight: 600 }}>financial hardship</Box>, or lack of <Box component="span" sx={{ color: gold, fontWeight: 700 }}>medical support</Box>.
                    <br /><br />
                    We envision a future where <Box component="span" sx={{ color: navyText, fontWeight: 600 }}>every individual</Box> has the opportunity to <Box component="span" sx={{ color: gold, fontWeight: 700 }}>thrive</Box> through <Box component="span" sx={{ color: olive, fontWeight: 600 }}>sustainable support</Box>, <Box component="span" sx={{ color: olive, fontWeight: 600 }}>education</Box>, and <Box component="span" sx={{ color: gold, fontWeight: 700 }}>compassionate care</Box>.
                  </Typography>

                  <Divider sx={{ my: 4, borderColor: "rgba(255,255,255,0.1)" }} />

                  <Typography variant="h4" fontWeight={900} color={olive} textAlign={"center"}>
                    Our Mission
                  </Typography>

                  <Typography color={mutedText} mt={2} lineHeight={1.8}>
                    We act <Box component="span" sx={{ color: gold, fontWeight: 700 }}>swiftly</Box>, <Box component="span" sx={{ color: gold, fontWeight: 700 }}>compassionately</Box>, and <Box component="span" sx={{ color: gold, fontWeight: 700 }}>responsibly</Box> to <Box component="span" sx={{ color: olive, fontWeight: 700 }}>save lives</Box>, <Box component="span" sx={{ color: olive, fontWeight: 600 }}>empower families</Box>, and create meaningful impact during the <Box component="span" sx={{ color: navyText, fontWeight: 700 }}>most critical moments</Box>.
                    <br /><br />
                    Our mission is to <Box component="span" sx={{ color: gold, fontWeight: 700 }}>empower underprivileged communities</Box> by providing <Box component="span" sx={{ color: olive, fontWeight: 600 }}>essential resources</Box>, fostering <Box component="span" sx={{ color: olive, fontWeight: 600 }}>self-reliance</Box>, and <Box component="span" sx={{ color: gold, fontWeight: 700 }}>bridging the gap</Box> between <Box component="span" sx={{ color: "#EF4444", fontWeight: 700 }}>crisis</Box> and <Box component="span" sx={{ color: "#22C55E", fontWeight: 700 }}>stability</Box> through <Box component="span" sx={{ color: navyText, fontWeight: 700 }}>dedicated social service</Box>.
                  </Typography>

                  <Divider sx={{ my: 2, borderColor: "rgba(255,255,255,0.1)" }} />

                  <Typography variant="h4" fontWeight={900} color={navyText} textAlign={"center"}>
                    Our Impact Focus
                  </Typography>

                  <Box mt={4}>
                    {barData.map((item, i) => (
                      <Box key={i} mb={4}>
                        <Typography fontWeight={600} color={navyText}>
                          {item.label}
                        </Typography>

                        <Box
                          sx={{
                            position: "relative",
                            height: 16,
                            borderRadius: 20,
                            background: "#334155",
                            overflow: "hidden",
                            mt: 1,
                          }}
                        >
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.value}%` }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            style={{
                              height: "100%",
                              background: `linear-gradient(90deg, ${gold}, ${olive})`,
                              borderRadius: 20,
                            }}
                          />

                          <motion.div
                            animate={{
                              left: [`0%`, `${item.value}%`, `0%`],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                            style={{
                              position: "absolute",
                              top: "50%",
                              transform: "translate(-50%, -50%)",
                              width: 22,
                              height: 22,
                              borderRadius: "50%",
                              background: gold,
                              boxShadow: `0 0 12px ${gold}`,
                              zIndex: 2,
                            }}
                          />
                        </Box>
                      </Box>
                    ))}
                  </Box>

                  <Divider sx={{ my: 2, borderColor: "rgba(255,255,255,0.1)" }} />

                  <Box
                    sx={{
                      textAlign: "center",
                      p: { xs: 3, md: 4 },
                      borderRadius: 4,
                      background: `linear-gradient(135deg, #0F172A, #1e293b)`,
                      color: "#fff",
                      position: "relative",
                      overflow: "hidden",
                      border: `1px solid ${gold}44`,
                    }}
                  >
                    <motion.div
                      animate={{ opacity: [0.1, 0.3, 0.1] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: `radial-gradient(circle at center, ${gold}33, transparent 70%)`,
                        zIndex: 0,
                      }}
                    />

                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      style={{ position: "relative", zIndex: 1 }}
                    >
                      <Typography variant="h5" fontWeight={700} fontSize={20} sx={{ color: gold }}>
                        “Saving one life may not change the world,
                        but it changes the world for that one life.”
                      </Typography>
                    </motion.div>
                  </Box>

                  <Divider sx={{ my: 4, borderColor: "rgba(255,255,255,0.1)" }} />

                  <Typography variant="h4" align="center" mb={6} fontWeight={900} color={navyText}>
                    Get <span style={{ color: olive }}>Involved</span>
                  </Typography>

                  <Grid container spacing={4} sx={{ mb: -5 }} justifyContent="center">
                    {[
                      { title: "Support", icon: <VolunteerActivismIcon />, color: gold, text: "Stand with us by supporting life-saving care for mothers and newborns during their most critical hours." },
                      { title: "Partner", icon: <HandshakeIcon />, color: olive, text: "Collaborate with us to expand reach, strengthen healthcare access, and create sustainable community impact." },
                      { title: "Join", icon: <GroupAddIcon />, color: "#3B82F6", text: "Become part of a compassionate movement dedicated to protecting life, dignity, and hope for the future." }
                    ].map((card, idx) => (
                      <Grid item xs={12} sm={6} md={4} key={idx} sx={{ display: "flex", justifyContent: "center" }}>
                        <motion.div
                          whileHover={{ y: -15, scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                          style={{ width: "100%", display: "flex", justifyContent: "center" }}
                        >
                          <Box sx={{
                            width: "100%",
                            maxWidth: { xs: "100%", md: 320 },
                            p: 4,
                            textAlign: "center",
                            bgcolor: "#0F172A",
                            borderRadius: 6,
                            height: "100%",
                            boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                            borderTop: `5px solid ${card.color}`,
                            border: `1px solid rgba(255,255,255,0.05)`,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                          }}>
                            <Box sx={{ color: card.color, mb: 2, transform: "scale(1.5)" }}>
                              {card.icon}
                            </Box>
                            <Typography variant="h6" fontWeight={800} gutterBottom color={card.color}>
                              {card.title}
                            </Typography>
                            <Typography color={mutedText} fontSize="0.95rem">
                              {card.text}
                            </Typography>
                          </Box>
                        </motion.div>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </motion.div>
            </Container>
          </Box>

          {/* Core Content Sections */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
            <Box
              sx={{
                maxWidth: 980,
                mt: 10,
                mx: "auto",
                px: { xs: 3, md: 8 },
                py: { xs: 4, md: 8 },
                borderRadius: 6,
                background: cardBg,
                backdropFilter: "blur(16px)",
                boxShadow: "0 50px 140px rgba(0,0,0,0.4)",
                border: `1px solid rgba(255,255,255,0.05)`,
              }}
            >
              <Typography lineHeight={1.8} color={mutedText} fontSize="1.1rem">
                &bull; <Box component="span" sx={{ color: gold, fontWeight: 800 }}>Sai Nisha Foundation</Box> was born from <Box component="span" sx={{ color: olive, fontWeight: 600 }}>love, loss, and resolve</Box> to protect <Box component="span" sx={{ color: navyText, fontWeight: 700 }}>fragile life</Box>.<br />
                &bull; We stand in the gap for families facing <Box component="span" sx={{ color: "#EF4444", fontWeight: 600 }}>fear and uncertainty</Box> during <Box component="span" sx={{ color: gold, fontWeight: 700 }}>childbirth</Box>.<br />
                &bull; We prioritize support during the <Box component="span" sx={{ color: olive, fontWeight: 600 }}>final weeks of pregnancy</Box> and <Box component="span" sx={{ color: olive, fontWeight: 600 }}>first hours of birth</Box>.
              </Typography>

              <Typography mt={6} variant="h4" fontWeight={900} color={olive} textAlign={"center"}>
                Our Roots
              </Typography>
              <Divider sx={{ my: 2, borderColor: `${olive}33` }} />
              <Typography color={mutedText} lineHeight={1.8}>
                &bull; Established in <Box component="span" sx={{ fontWeight: 800, color: navyText }}>2023</Box> by <Box component="span" sx={{ fontWeight: 800, color: gold }}>Ganesh and his spouse</Box> to honor a <Box component="span" sx={{ fontWeight: 600, color: olive }}>deeply personal promise</Box>.<br />
                &bull; Named in loving memory of <Box component="span" sx={{ fontWeight: 800, color: gold }}>Sai</Box> and <Box component="span" sx={{ fontWeight: 800, color: gold }}>Nisha</Box>.<br />
                &bull; Born from the pain of <Box component="span" sx={{ fontWeight: 600, color: "#EF4444" }}>losing a child</Box> due to <Box component="span" sx={{ fontWeight: 600, color: olive }}>delayed hospital care</Box>.
              </Typography>

              <Typography mt={6} variant="h4" fontWeight={900} color={navyText} textAlign={"center"}>
                A Purpose Forged Through Loss
              </Typography>
              <Divider sx={{ my: 2, borderColor: "rgba(255,255,255,0.1)" }} />
              <Typography color={mutedText} lineHeight={1.8}>
                &bull; Strengthened following the <Box component="span" sx={{ color: "#EF4444", fontWeight: 600 }}>untimely loss</Box> of our founder.<br />
                &bull; Transforming <Box component="span" sx={{ color: gold, fontWeight: 800 }}>personal grief</Box> into <Box component="span" sx={{ color: olive, fontWeight: 600 }}>compassionate action</Box>.<br />
                &bull; Guided by the belief that <Box component="span" sx={{ color: navyText, fontWeight: 800 }}>care delayed should never become care denied</Box>.
              </Typography>

              <Typography mt={6} variant="h4" fontWeight={900} color="#3B82F6" textAlign={"center"}>
                What We Believe
              </Typography>
              <Divider sx={{ my: 2, borderColor: "rgba(255,255,255,0.1)" }} />
              <Typography color={mutedText} lineHeight={1.8}>
                &bull; <Box component="span" sx={{ fontWeight: 800, color: gold }}>Every mother</Box> deserves <Box component="span" sx={{ fontWeight: 600, color: olive }}>dignity and care</Box>.<br />
                &bull; <Box component="span" sx={{ fontWeight: 800, color: navyText }}>Timely intervention</Box> saves <Box component="span" sx={{ fontWeight: 800, color: gold }}>entire families</Box>.
              </Typography>

              <Typography mt={6} variant="h4" fontWeight={900} color="#06B6D4" textAlign={"center"}>
                Our Core Focus
              </Typography>
              <Divider sx={{ my: 2, borderColor: "rgba(255,255,255,0.1)" }} />
              <Typography color={mutedText} lineHeight={1.8}>
                &bull; <Box component="span" sx={{ fontWeight: 800, color: gold }}>Supporting Mothers</Box> in the <Box component="span" sx={{ fontWeight: 600, color: olive }}>Third Trimester</Box>.<br />
                &bull; <Box component="span" sx={{ fontWeight: 800, color: navyText }}>Emergency Support</Box> for <Box component="span" sx={{ fontWeight: 800, color: gold }}>New Borns & NICU care</Box>.
              </Typography>

              <Typography mt={6} variant="h4" fontWeight={900} color={navyText} textAlign={"center"}>
                Compassion Beyond Boundaries
              </Typography>
              <Divider sx={{ my: 2, borderColor: "rgba(255,255,255,0.1)" }} />
              <Typography color={mutedText} lineHeight={1.8}>
                &bull; Children Striving <Box component="span" sx={{ color: gold, fontWeight: 800 }}>for education and sports excellence</Box>, and <Box component="span" sx={{ color: navyText, fontWeight: 700 }}>Injured elderly animals</Box>, <Box component="span" sx={{ color: gold, fontWeight: 800 }}>Mentally challenged elders facing neglect</Box>.
              </Typography>

              <Typography mt={8} variant="h4" fontWeight={900} color={gold} textAlign={"center"}>
                Our Promise
              </Typography>
              <Divider sx={{ my: 2, borderColor: gold }} />
              <Typography color={mutedText} lineHeight={1.8} textAlign="center" fontSize="1.2rem">
                &bull; We promise <Box component="span" sx={{ color: gold, fontWeight: 800 }}>presence</Box>, <Box component="span" sx={{ color: olive, fontWeight: 800 }}>honesty</Box>, and <Box component="span" sx={{ color: navyText, fontWeight: 800 }}>compassion</Box> to every life we reach.<br />
                &bull; Because <Box component="span" sx={{ color: gold, fontWeight: 900 }}>every life is worth fighting for</Box>.
              </Typography>
            </Box>
          </motion.div>

          {/* Image Section */}
          <Box sx={{ mt: { xs: 8, md: 16 } }}>
            <motion.div variants={stagger} initial="hidden" whileInView="visible">
              <Grid container spacing={{ xs: 3, md: 6 }} justifyContent="center">
                {[aboutImg1, aboutImg2].map((img, i) => (
                  <Grid item xs={12} sm={6} key={i}>
                    <motion.img
                      src={img}
                      variants={fadeUp}
                      whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 1 : -1 }}
                      transition={{ duration: 0.5 }}
                      style={{
                        width: "100%",
                        maxWidth: "500px",
                        height: "auto",
                        aspectRatio: "3 / 2",
                        objectFit: "cover",
                        borderRadius: 24,
                        border: `4px solid ${gold}`,
                        boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Box>
        </Container>
      </Box>

      {/* FOOTER OVERRIDE BOX */}
      <Box sx={{ 
        "& *": { color: "#FFFFFF !important" }, // Force all nested text/icons to white
        bgcolor: "#020617" // Matching the dark aesthetic
      }}>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}