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

import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";

import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import HandshakeIcon from "@mui/icons-material/Handshake";
import GroupAddIcon from "@mui/icons-material/GroupAdd";


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

/* ---------- BAR DATA (NEW) ---------- */
const barData = [
  { label: "Pregnancy Emergency", value: 90 },
  { label: "Newborn Emergency care", value: 95 },
  { label: "Education Support", value: 75 },
  { label: "Mentally Challenged Elders", value: 70 },
  { label: "Pets", value: 65 },
  { label: "Sports", value: 60 },
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

export default function About() {
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
                About <span style={{ color: gold }}>Us</span>
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

          <Box sx={{ mt: { xs: 10, md: 0 } }}>
        <Container>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
            <Box
              sx={{
                background: "rgba(255,255,255,0.95)",
                borderRadius: 6,
                p: { xs: 4, md: 8 },
                boxShadow: "0 40px 120px rgba(0,0,0,0.25)",
              }}
            >
              {/* VISION */}
            <Typography variant="h4" fontWeight={900} color={gold}>
  Our Vision
</Typography>

<Typography color={mutedText} mt={2} lineHeight={1.6}>
  A world where{" "}
  <Box component="span" sx={{ color: gold, fontWeight: 600 }}>
    no mother or newborn
  </Box>{" "}
  loses life due to{" "}
  <Box component="span" sx={{ color: olive, fontWeight: 600 }}>
    delayed care
  </Box>
  ,{" "}
  <Box component="span" sx={{ color: olive, fontWeight: 600 }}>
    financial hardship
  </Box>
  , or lack of access to{" "}
  <Box component="span" sx={{ color: gold, fontWeight: 600 }}>
    medical support
  </Box>
  .
  <br />
  <br />
  To create a world where{" "}
  <Box component="span" sx={{ color: navyText, fontWeight: 600 }}>
    every individual
  </Box>{" "}
  has the opportunity to{" "}
  <Box component="span" sx={{ color: gold, fontWeight: 600 }}>
    thrive
  </Box>{" "}
  through{" "}
  <Box component="span" sx={{ color: olive, fontWeight: 600 }}>
    sustainable support
  </Box>
  ,{" "}
  <Box component="span" sx={{ color: olive, fontWeight: 600 }}>
    education
  </Box>
  , and{" "}
  <Box component="span" sx={{ color: gold, fontWeight: 600 }}>
    compassionate care
  </Box>
  .
  <br />
  <br />
  The birth of a child should be a{" "}
  <Box component="span" sx={{ color: gold, fontWeight: 700 }}>
    celebration of life
  </Box>
  , not a{" "}
  <Box component="span" sx={{ color: "#d32f2f", fontWeight: 700 }}>
    race against time
  </Box>{" "}
  or a struggle against{" "}
  <Box component="span" sx={{ color: "#d32f2f", fontWeight: 700 }}>
    poverty
  </Box>
  .
  <br />
  <br />
  At{" "}
  <Box component="span" sx={{ color: gold, fontWeight: 700 }}>
    Sai Nisha Foundation
  </Box>
  , we envision a future where the{" "}
  <Box component="span" sx={{ color: olive, fontWeight: 700 }}>
    “golden hour”
  </Box>{" "}
  of{" "}
  <Box component="span" sx={{ color: gold, fontWeight: 600 }}>
    medical intervention
  </Box>{" "}
  is{" "}
  <Box component="span" sx={{ color: navyText, fontWeight: 700 }}>
    guaranteed to everyone
  </Box>
  , regardless of their{" "}
  <Box component="span" sx={{ color: "#2f4dd3", fontWeight: 600 }}>
    bank balance
  </Box>
  .
  <br />
  <br />
  We see a world where{" "}
  <Box component="span" sx={{ color: gold, fontWeight: 700 }}>
    no mother has to choose
  </Box>{" "}
  between{" "}
  <Box component="span" sx={{ color: olive, fontWeight: 600 }}>
    her health
  </Box>{" "}
  and{" "}
  <Box component="span" sx={{ color: olive, fontWeight: 600 }}>
    her family’s survival
  </Box>
  , and where{" "}
  <Box component="span" sx={{ color: gold, fontWeight: 700 }}>
    every newborn
  </Box>{" "}
  is welcomed into a system designed to{" "}
  <Box component="span" sx={{ color: navyText, fontWeight: 600 }}>
    protect them
  </Box>
  .
  <br />
  <br />
  By removing the barriers of{" "}
  <Box component="span" sx={{ color: "#d32f2f", fontWeight: 600 }}>
    distance
  </Box>
  ,{" "}
  <Box component="span" sx={{ color: "#d32f2f", fontWeight: 600 }}>
    cost
  </Box>
  , and{" "}
  <Box component="span" sx={{ color: "#d32f2f", fontWeight: 600 }}>
    systemic neglect
  </Box>
  , we are building a{" "}
  <Box component="span" sx={{ color: gold, fontWeight: 700 }}>
    sanctuary of safety
  </Box>{" "}
  for the{" "}
  <Box component="span" sx={{ color: olive, fontWeight: 700 }}>
    next generation
  </Box>
  .
</Typography>


              <Divider sx={{ my: 4 }} />

              {/* MISSION */}
          <Typography variant="h4" fontWeight={900} color={olive}>
  Our Mission
</Typography>

<Typography color={mutedText} mt={2} lineHeight={1.6}>
  To act{" "}
  <Box component="span" sx={{ color: gold, fontWeight: 700 }}>
    swiftly
  </Box>
  ,{" "}
  <Box component="span" sx={{ color: gold, fontWeight: 700 }}>
    compassionately
  </Box>
  , and{" "}
  <Box component="span" sx={{ color: gold, fontWeight: 700 }}>
    responsibly
  </Box>{" "}
  to{" "}
  <Box component="span" sx={{ color: olive, fontWeight: 700 }}>
    save lives
  </Box>
  ,{" "}
  <Box component="span" sx={{ color: olive, fontWeight: 600 }}>
    empower families
  </Box>
  , and{" "}
  <Box component="span" sx={{ color: olive, fontWeight: 600 }}>
    create meaningful impact
  </Box>{" "}
  during the{" "}
  <Box component="span" sx={{ color: navyText, fontWeight: 700 }}>
    most critical moments
  </Box>
  .
  <br />
  <br />
  Our mission is to{" "}
  <Box component="span" sx={{ color: gold, fontWeight: 700 }}>
    empower underprivileged communities
  </Box>{" "}
  by providing{" "}
  <Box component="span" sx={{ color: olive, fontWeight: 600 }}>
    essential resources
  </Box>
  , fostering{" "}
  <Box component="span" sx={{ color: olive, fontWeight: 600 }}>
    self-reliance
  </Box>
  , and{" "}
  <Box component="span" sx={{ color: gold, fontWeight: 600 }}>
    bridging the gap
  </Box>{" "}
  between{" "}
  <Box component="span" sx={{ color: "#d32f2f", fontWeight: 700 }}>
    crisis
  </Box>{" "}
  and{" "}
  <Box component="span" sx={{ color: "#2e7d32", fontWeight: 700 }}>
    stability
  </Box>{" "}
  through{" "}
  <Box component="span" sx={{ color: navyText, fontWeight: 700 }}>
    dedicated social service
  </Box>
  .
  <br />
  <br />
  At the core of the{" "}
  <Box component="span" sx={{ color: gold, fontWeight: 700 }}>
    Sai Nisha Foundation
  </Box>{" "}
  lies a{" "}
  <Box component="span" sx={{ color: olive, fontWeight: 700 }}>
    steadfast commitment
  </Box>{" "}
  to act with{" "}
  <Box component="span" sx={{ color: gold, fontWeight: 700 }}>
    speed
  </Box>{" "}
  and{" "}
  <Box component="span" sx={{ color: gold, fontWeight: 700 }}>
    heart
  </Box>
  . We recognize that in{" "}
  <Box component="span" sx={{ color: "#d32f2f", fontWeight: 700 }}>
    moments of crisis
  </Box>
  ,{" "}
  <Box component="span" sx={{ color: navyText, fontWeight: 700 }}>
    every second counts
  </Box>{" "}
  and{" "}
  <Box component="span" sx={{ color: navyText, fontWeight: 700 }}>
    every decision carries the weight of a life
  </Box>
  .
  <br />
  <br />
  Our organization is designed to move{" "}
  <Box component="span" sx={{ color: gold, fontWeight: 700 }}>
    swiftly
  </Box>
  ,{" "}
  <Box component="span" sx={{ color: gold, fontWeight: 700 }}>
    compassionately
  </Box>
  , and{" "}
  <Box component="span" sx={{ color: gold, fontWeight: 700 }}>
    responsibly
  </Box>
  , ensuring that when a family reaches their{" "}
  <Box component="span" sx={{ color: "#d32f2f", fontWeight: 700 }}>
    breaking point
  </Box>
  , they are met with a{" "}
  <Box component="span" sx={{ color: olive, fontWeight: 700 }}>
    helping hand
  </Box>{" "}
  that is both{" "}
  <Box component="span" sx={{ color: navyText, fontWeight: 700 }}>
    ready to help
  </Box>{" "}
  and{" "}
  <Box component="span" sx={{ color: navyText, fontWeight: 700 }}>
    equipped to lead
  </Box>
  .
  <br />
  <br />
  We don't just provide{" "}
  <Box component="span" sx={{ color: olive, fontWeight: 700 }}>
    aid
  </Box>
  ; we provide a{" "}
  <Box component="span" sx={{ color: gold, fontWeight: 800 }}>
    lifeline
  </Box>
  , intervening at the{" "}
  <Box component="span" sx={{ color: navyText, fontWeight: 700 }}>
    exact moment
  </Box>{" "}
  where{" "}
  <Box component="span" sx={{ color: olive, fontWeight: 700 }}>
    intervention saves lives
  </Box>
  .
</Typography>

              <Divider sx={{ my: 4 }} />

              {/* BAR CHART */}

            <Typography variant="h4" fontWeight={900} color={navyText}>
  Our Impact Focus
</Typography>

<Box mt={4}>
  {barData.map((item, i) => (
    <Box key={i} mb={4}>
      <Typography fontWeight={600} color={navyText}>
        {item.label}
      </Typography>

      {/* BAR CONTAINER */}
      <Box
        sx={{
          position: "relative",
          height: 16,
          borderRadius: 20,
          background: "#e0e0e0",
          overflow: "hidden",
          mt: 1,
        }}
      >
        {/* FILLED BAR */}
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

        {/* MOVING CIRCLE */}
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

              <Divider sx={{ my: 4 }} />

              {/* QUOTE */}
             <Box
    sx={{
      textAlign: "center",
      p: { xs: 3, md: 1 },
      borderRadius: 4,
      background: `linear-gradient(135deg, ${gold}, ${olive})`,
      color: "#fff",
      position: "relative",
      overflow: "hidden",
    }}
  >
    {/* SOFT GLOW ANIMATION */}
    <motion.div
      animate={{ opacity: [0.2, 0.5, 0.2] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      style={{
        position: "absolute",
        inset: 0,
        background:
          "radial-gradient(circle at center, rgba(255,255,255,0.35), transparent 70%)",
        zIndex: 0,
      }}
    />

    {/* FLOATING TEXT */}
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      style={{ position: "relative", zIndex: 1 }}
    >
      <Typography variant="h5" fontWeight={700} fontSize={18}>
        “Saving one life may not change the world,
        but it changes the world for that one life.”
      </Typography>
    </motion.div>
  </Box>

  <Divider sx={{ my: 6 }} />

{/* GET INVOLVED */}
<Typography
  variant="h4"
  fontWeight={900}
  textAlign="center"
  color={navyText}
  mb={4}
>
  Get Involved
</Typography>

<Grid container spacing={4} justifyContent="center">
  {/* SHOW YOUR SUPPORT */}
  <Grid item xs={12} md={4}>
    <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.3 }}>
      <Box
        sx={{
          textAlign: "center",
          p: 4,
          height: "100%",
          borderRadius: 5,
          background: "rgba(255,255,255,0.9)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
        }}
      >
        <VolunteerActivismIcon sx={{ fontSize: 50, color: gold, mb: 2 }} />

        <Typography variant="h6" fontWeight={800} color={gold}>
          Show Your Support
        </Typography>

        <Typography color={mutedText} mt={1}>
          Stand with us by supporting{" "}
          <Box component="span" sx={{ color: gold, fontWeight: 700 }}>
            life-saving care
          </Box>{" "}
          for{" "}
          <Box component="span" sx={{ color: olive, fontWeight: 600 }}>
            mothers, newborns, and families
          </Box>{" "}
          during their{" "}
          <Box component="span" sx={{ color: navyText, fontWeight: 700 }}>
            most critical moments
          </Box>
          . In times when{" "}
          <Box component="span" sx={{ color: "#d32f2f", fontWeight: 600 }}>
            hope feels fragile
          </Box>{" "}
          and choices are limited, your support becomes a{" "}
          <Box component="span" sx={{ color: gold, fontWeight: 800 }}>
            lifeline
          </Box>{" "}
          — delivering{" "}
          <Box component="span" sx={{ color: olive, fontWeight: 600 }}>
            timely care
          </Box>
          , comfort, and the assurance that{" "}
          <Box component="span" sx={{ color: navyText, fontWeight: 700 }}>
            no family faces crisis alone
          </Box>
          .
        </Typography>
      </Box>
    </motion.div>
  </Grid>

  {/* PARTNER WITH US */}
  <Grid item xs={12} md={4}>
    <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.3 }}>
      <Box
        sx={{
          textAlign: "center",
          p: 4,
          height: "100%",
          borderRadius: 5,
          background: "rgba(255,255,255,0.9)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
        }}
      >
        <HandshakeIcon sx={{ fontSize: 50, color: olive, mb: 2 }} />

        <Typography variant="h6" fontWeight={800} color={olive}>
          Partner With Us
        </Typography>

        <Typography color={mutedText} mt={1}>
          Collaborate with us to{" "}
          <Box component="span" sx={{ color: gold, fontWeight: 700 }}>
            expand reach
          </Box>
          ,{" "}
          <Box component="span" sx={{ color: olive, fontWeight: 700 }}>
            strengthen healthcare access
          </Box>
          , and create{" "}
          <Box component="span" sx={{ color: navyText, fontWeight: 700 }}>
            sustainable community impact
          </Box>
          . By partnering with{" "}
          <Box component="span" sx={{ color: gold, fontWeight: 700 }}>
            Sai Nisha Foundation
          </Box>
          , organizations and individuals help build{" "}
          <Box component="span" sx={{ color: olive, fontWeight: 600 }}>
            reliable healthcare pathways
          </Box>
          , support{" "}
          <Box component="span" sx={{ color: navyText, fontWeight: 600 }}>
            maternal and neonatal care
          </Box>
          , and drive{" "}
          <Box component="span" sx={{ color: gold, fontWeight: 600 }}>
            long-term social change
          </Box>
          .
        </Typography>
      </Box>
    </motion.div>
  </Grid>

  {/* JOIN WITH US */}
  <Grid item xs={12} md={4}>
    <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.3 }}>
      <Box
        sx={{
          textAlign: "center",
          p: 4,
          height: "100%",
          borderRadius: 5,
          background: "rgba(255,255,255,0.9)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
        }}
      >
        <GroupAddIcon sx={{ fontSize: 50, color: navyText, mb: 2 }} />

        <Typography variant="h6" fontWeight={800} color={navyText}>
          Join With Us
        </Typography>

        <Typography color={mutedText} mt={1}>
          Become part of a{" "}
          <Box component="span" sx={{ color: gold, fontWeight: 700 }}>
            compassionate movement
          </Box>{" "}
          dedicated to{" "}
          <Box component="span" sx={{ color: olive, fontWeight: 700 }}>
            protecting life, dignity, and hope
          </Box>{" "}
          for the future. Your{" "}
          <Box component="span" sx={{ color: navyText, fontWeight: 600 }}>
            time, skills, and voice
          </Box>{" "}
          help{" "}
          <Box component="span" sx={{ color: gold, fontWeight: 700 }}>
            bridge gaps in care
          </Box>
          , raise awareness, and extend a{" "}
          <Box component="span" sx={{ color: olive, fontWeight: 700 }}>
            helping hand
          </Box>{" "}
          to families in crisis. Together, we{" "}
          <Box component="span" sx={{ color: navyText, fontWeight: 700 }}>
            transform empathy into action
          </Box>{" "}
          and build a{" "}
          <Box component="span" sx={{ color: gold, fontWeight: 700 }}>
            safer, more caring world
          </Box>
          .
        </Typography>
      </Box>
    </motion.div>
  </Grid>
</Grid>


            </Box>
          </motion.div>
        </Container>
      </Box>

       <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
  <Box
    sx={{
      maxWidth: 980,
      mt: 5,
      mx: "auto",
      px: { xs: 3, md: 8 },
      py: { xs: 4, md: 8 },
      borderRadius: 6,
      background: "rgba(255,255,255,0.95)",
      backdropFilter: "blur(16px)",
      boxShadow: "0 50px 140px rgba(0,0,0,0.28)",
    }}
  >
    <Typography lineHeight={1.5} color={mutedText}>
      &bull;{" "}
      <Box component="span" sx={{ color: gold, fontWeight: 700 }}>
        Sai Nisha Foundation
      </Box>{" "}
      was born from{" "}
      <Box component="span" sx={{ color: olive, fontWeight: 600 }}>
        love, loss, and resolve
      </Box>{" "}
      to protect{" "}
      <Box component="span" sx={{ color: navyText, fontWeight: 600 }}>
        fragile life
      </Box>
      .<br />
      &bull; We stand in the gap for families facing{" "}
      <Box component="span" sx={{ color: "#d32f2f", fontWeight: 600 }}>
        fear and uncertainty
      </Box>{" "}
      during{" "}
      <Box component="span" sx={{ color: gold, fontWeight: 600 }}>
        childbirth
      </Box>
      .<br />
      &bull; We prioritize support during the{" "}
      <Box component="span" sx={{ color: olive, fontWeight: 600 }}>
        final weeks of pregnancy
      </Box>{" "}
      and{" "}
      <Box component="span" sx={{ color: olive, fontWeight: 600 }}>
        first hours of birth
      </Box>
      .<br />
      &bull; Our mission is to ensure{" "}
      <Box component="span" sx={{ color: navyText, fontWeight: 700 }}>
        critical care
      </Box>{" "}
      is accessible when it is{" "}
      <Box component="span" sx={{ color: gold, fontWeight: 700 }}>
        most needed
      </Box>
      .
    </Typography>

    <Typography mt={4} variant="h4" fontWeight={800} color={olive}>
      Our Roots
    </Typography>
    <Divider sx={{ my: 2 }} />
    <Typography color={mutedText} lineHeight={1.5}>
      &bull; Established in{" "}
      <Box component="span" sx={{ fontWeight: 700, color: navyText }}>
        2023
      </Box>{" "}
      by{" "}
      <Box component="span" sx={{ fontWeight: 700, color: gold }}>
        Ganesh and his spouse
      </Box>{" "}
      to honor a{" "}
      <Box component="span" sx={{ fontWeight: 600, color: olive }}>
        deeply personal promise
      </Box>
      .<br />
      &bull; Named in loving memory of{" "}
      <Box component="span" sx={{ fontWeight: 700, color: gold }}>
        Sai
      </Box>{" "}
      and{" "}
      <Box component="span" sx={{ fontWeight: 700, color: gold }}>
        Nisha
      </Box>
      .<br />
      &bull; Born from the pain of{" "}
      <Box component="span" sx={{ fontWeight: 600, color: "#d32f2f" }}>
        losing a child
      </Box>{" "}
      due to{" "}
      <Box component="span" sx={{ fontWeight: 600, color: olive }}>
        delayed hospital care
      </Box>
      .<br />
      &bull; Transformed a{" "}
      <Box component="span" sx={{ fontWeight: 600, color: navyText }}>
        COVID-era crisis
      </Box>{" "}
      into a{" "}
      <Box component="span" sx={{ fontWeight: 700, color: gold }}>
        public responsibility
      </Box>
      .
    </Typography>

    <Typography mt={4} variant="h4" fontWeight={800} color={navyText}>
      A Purpose Forged Through Loss
    </Typography>
    <Divider sx={{ my: 2 }} />
    <Typography color={mutedText} lineHeight={1.5}>
      &bull; Strengthened following the{" "}
      <Box component="span" sx={{ color: "#d32f2f", fontWeight: 600 }}>
        untimely loss
      </Box>{" "}
      of our founder.<br />
      &bull; Transforming{" "}
      <Box component="span" sx={{ color: gold, fontWeight: 700 }}>
        personal grief
      </Box>{" "}
      into{" "}
      <Box component="span" sx={{ color: olive, fontWeight: 600 }}>
        compassionate action
      </Box>
      .<br />
      &bull; Guided by the belief that{" "}
      <Box component="span" sx={{ color: navyText, fontWeight: 700 }}>
        care delayed should never become care denied
      </Box>
      .
    </Typography>

    <Typography mt={4} variant="h4" fontWeight={800} color="#2f4dd3">
      What We Believe
    </Typography>
    <Divider sx={{ my: 2 }} />
    <Typography color={mutedText} lineHeight={1.5}>
      &bull;{" "}
      <Box component="span" sx={{ fontWeight: 700, color: gold }}>
        Every mother
      </Box>{" "}
      deserves{" "}
      <Box component="span" sx={{ fontWeight: 600, color: olive }}>
        dignity and care
      </Box>
      .<br />
      &bull;{" "}
      <Box component="span" sx={{ fontWeight: 700, color: navyText }}>
        Timely intervention
      </Box>{" "}
      saves{" "}
      <Box component="span" sx={{ fontWeight: 700, color: gold }}>
        entire families
      </Box>
      .
    </Typography>

    <Typography mt={4} variant="h4" fontWeight={800} color={gold}>
      Our Promise
    </Typography>
    <Divider sx={{ my: 2 }} />
    <Typography color={mutedText} lineHeight={1.5}>
      &bull; We promise{" "}
      <Box component="span" sx={{ color: gold, fontWeight: 700 }}>
        presence
      </Box>
      ,{" "}
      <Box component="span" sx={{ color: olive, fontWeight: 700 }}>
        honesty
      </Box>
      , and{" "}
      <Box component="span" sx={{ color: navyText, fontWeight: 700 }}>
        compassion
      </Box>{" "}
      to every life we reach.<br />
      &bull; Because{" "}
      <Box component="span" sx={{ color: gold, fontWeight: 800 }}>
        every life is worth fighting for
      </Box>
      .
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