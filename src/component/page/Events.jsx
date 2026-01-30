import React from "react";
import {
  Box,
  Typography,
  Container,
  useMediaQuery,
  CssBaseline,
} from "@mui/material";
import { motion } from "framer-motion";
import Footer from "../page/Footer";


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


const fadeDown = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};
function BubblesBackground() {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1, 
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {[...Array(30)].map((_, i) => {
        const size = Math.random() * 18 + 6;
        const randomLeft = Math.random() * 100;
        const duration = Math.random() * 12 + 8;
        const delay = Math.random() * 15;
        const isGold = i % 2 === 0;
        const color = isGold ? "rgba(214, 137, 16, 0.4)" : "rgba(255, 230, 0, 0.3)";
        const glow = isGold ? "rgba(214, 137, 16, 0.25)" : "rgba(255, 230, 0, 0.15)";

        return (
          <Box
            key={i}
            sx={{
              position: "absolute",
              bottom: "-20px",
              left: `${randomLeft}%`,
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: color,
              borderRadius: "50%",
              boxShadow: `0 0 12px 3px ${glow}`,
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
          15% { opacity: 0.6; }
          85% { opacity: 0.5; }
          100% { transform: translateY(-110vh) scale(1.2); opacity: 0; }
        }
      `}</style>
    </Box>
  );
}

export default function Events() {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          background: creamBg,
          display: "flex",
          flexDirection: "column",
          fontFamily: "Poppins, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <motion.div
          animate={{ scale: [1, 1.12, 1], rotate: [0, 6, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          style={{
            position: "absolute",
            top: "-35%",
            left: "-35%",
            width: "170%",
            height: "170%",
            background:
              "radial-gradient(circle, rgba(214,169,16,0.2), transparent 70%)",
            zIndex: 0,
          }}
        />
        <BubblesBackground />
        <Box
          sx={{
            background: `linear-gradient(135deg, ${navyText}, #0E1624)`,
            color: "#fff",
            py: isMobile ? 7 : 10,
            textAlign: "center",
            px: 2,
            boxShadow: "0 25px 80px rgba(0,0,0,0.5)",
            position: "relative",
            zIndex: 2,
            overflow: "hidden",
          }}
        >
          <motion.div
            animate={{ x: ["-30%", "130%"] }}
            transition={{ duration: 10, repeat: Infinity }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "30%",
              height: "100%",
              background:
                "linear-gradient(120deg, transparent, rgba(255,255,255,0.15), transparent)",
            }}
          />

          <motion.div variants={fadeDown} initial="hidden" animate="visible">
            <Typography
              sx={{
                fontSize: { xs: 26, md: 42 },
                fontWeight: 900,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: gold,
              }}
            >
              Events
            </Typography>

            <Typography
              mt={2}
              fontSize={{ xs: 14, md: 17 }}
              opacity={0.9}
              color="#F7F4EC"
            >
              Curated volunteering opportunities to create meaningful impact
            </Typography>

            <Typography
              mt={1}
              fontSize={13}
              opacity={0.85}
              letterSpacing="0.2em"
              textTransform="uppercase"
              color={olive}
            >
              Explore • Participate • Grow
            </Typography>
          </motion.div>
        </Box>

        {/* ================= COMING SOON CARD ================= */}
        <Container
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            py: isMobile ? 6 : 10,
            position: "relative",
            zIndex: 2,
          }}
        >
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.04 }}
          >
            <Box
              sx={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.98), rgba(255,255,255,0.9))",
                backdropFilter: "blur(16px)",
                borderRadius: 6,
                px: { xs: 3, md: 6 },
                py: { xs: 4, md: 6 },
                boxShadow: "0 45px 120px rgba(0,0,0,0.35)",
                maxWidth: 600,
                border: `1px solid rgba(214,169,16,0.4)`,
                textAlign: "center",
                position: "relative",
              }}
            >
              <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{
                  position: "absolute",
                  inset: -8,
                  borderRadius: 24,
                  border: `2px solid rgba(214,169,16,0.35)`,
                }}
              />

              <Typography
                sx={{
                  fontSize: { xs: 26, md: 38 },
                  fontWeight: 900,
                  letterSpacing: "0.12em",
                  color: navyText,
                }}
              >
                🚀 Coming Soon
              </Typography>

              <Typography
                mt={2}
                fontSize={{ xs: 14, md: 16 }}
                color={olive}
                lineHeight={1.9}
              >
                We’re preparing impactful volunteering events for you. Stay
                tuned — exciting opportunities are on the way!
              </Typography>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2.2, repeat: Infinity }}
              >
                <Typography
                  mt={4}
                  fontWeight={900}
                  fontSize={13}
                  letterSpacing="0.25em"
                  color={gold}
                  textTransform="uppercase"
                >
                  Thank you for your patience
                </Typography>
              </motion.div>
            </Box>
          </motion.div>
        </Container>
      </Box>
      <Footer />
    </>
  );
}