import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Container,
  Card,
  CardMedia,
  CardContent,
  useMediaQuery,
  Divider,
  CssBaseline,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { motion } from "framer-motion";
import Footer from "./Footer";


import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";


import heroImage from "../page/image/volunteers.png";
import ngoImage1 from "../page/image/ladies.png";
import ngoImage2 from "../page/image/newborn.png";
import ngoImage3 from "../page/image/baby.png";
import ngoImage4 from "../page/image/kids education - 2.jpg";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";


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
    body1: { fontWeight: 400 },
    body2: { fontWeight: 400 },
  },
});


const fadeUp = {
  hidden: { opacity: 0, y: 70 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -90 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 90 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
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
        zIndex: 0, 
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {[...Array(35)].map((_, i) => {
        const size = Math.random() * 18 + 6;
        const randomLeft = Math.random() * 100;
        const duration = Math.random() * 12 + 8;
        const delay = Math.random() * 15;
        
      
        const isGold = i % 2 === 0;
        const color = isGold ? "rgba(214, 137, 16, 0.5)" : "rgba(255, 230, 0, 0.4)";
        const glow = isGold ? "rgba(214, 137, 16, 0.3)" : "rgba(255, 230, 0, 0.2)";

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
          15% { opacity: 0.7; }
          85% { opacity: 0.6; }
          100% { transform: translateY(-450vh) scale(1.3); opacity: 0; }
        }
      `}</style>
    </Box>
  );
}

export default function Home() {
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


      <Box sx={{ position: "relative", backgroundColor: creamBg, overflowX: "hidden" }}>
        
        <BubblesBackground />

        {/* ================= HERO ================= */}
        <Box
          sx={{
            height: isMobile ? "65vh" : "100vh",
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          {/* <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(247,244,236,0.88), rgba(31,47,63,0.95))",
              zIndex: 1,
            }}
          /> */}

          <Container sx={{ position: "relative", zIndex: 2 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, ease: "easeOut" }}
            >
              <Box
                sx={{
                  // background: "rgba(255,255,255,0.94)",
                  // backdropFilter: "blur(14px)",
                  borderRadius: 6,
                  p: isMobile ? 3 : 6,
                  textAlign: "center",
                  // boxShadow: "0 45px 120px rgba(0,0,0,0.35)",
                }}
              >
                <Typography
                  variant={isMobile ? "h4" : "h2"}
                  letterSpacing={2}
                  sx={{
                    background: `linear-gradient(90deg, ${navyText}, ${olive})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  SAI NISHA FOUNDATION
                </Typography>

                <Typography
                  mt={2}
                  fontSize={18}
                  color={mutedText}
                  fontStyle="italic"
                >
                  Standing beside life,{" "}
                  <span style={{ color: gold, fontWeight: 700 }}>
                    when it needs support the most
                  </span>
                  .
                </Typography>

                <Box mt={5}>
                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                      boxShadow: [
                        "0 0 0 rgba(0,0,0,0)",
                        `0 0 40px rgba(214,137,16,0.6)`,
                        "0 0 0 rgba(0,0,0,0)",
                      ],
                    }}
                    transition={{ repeat: Infinity, duration: 2.5 }}
                  >
                    <Button
                      size="large"
                      sx={{
                        px: 6,
                        py: 1.6,
                        fontSize: 16,
                        borderRadius: 50,
                        background: `linear-gradient(90deg, ${olive}, ${gold})`,
                        color: "#1a1a1a",
                        fontWeight: 800,
                        letterSpacing: 1,
                        "&:hover": {
                          transform: "scale(1.1)",
                          background: `linear-gradient(90deg, ${gold}, ${olive})`,
                        },
                      }}
                    >
                      Join as Volunteer
                    </Button>
                  </motion.div>
                </Box>
              </Box>
            </motion.div>
          </Container>
        </Box>


        {/* ================= STORY ================= */}
        <Container sx={{ py: { xs: 6, md: 12 }, position: "relative", zIndex: 2 }}>
          <Grid container spacing={{ xs: 4, md: 7 }} alignItems="center">
            <Grid item size={{ xs: 12, md: 7 }}>
              <motion.div
                variants={fadeLeft}
                initial="hidden"
                whileInView="visible"
              >
                <Typography variant="h4" fontWeight={800} color={navyText}>
                  When Joy Turns Into Fear, 
                </Typography>
                <Divider sx={{ my: 3 }} />
                <Typography color={mutedText} lineHeight={2}>
                  Support Must Arrive Fast:
                  <br /><br />
                  • Supporting mothers{" "}
                  <span style={{ color: olive, fontWeight: 600 }}>
                    when it matters most
                  </span>
                  <br />
                  • The final weeks of pregnancy.{" "}
                  <span style={{ color: gold, fontWeight: 600 }}>
                    their very first battle
                  </span>
                  <br />
                  • The first hours after birth.
                  <br /><br />
                  These are the moments when life is most fragile.
                </Typography>
              </motion.div>
            </Grid>
            <Grid item size={{ xs: 12, md: 5 }} sx={{ textAlign: { xs: "center", md: "right" } }}>
              <motion.img
                src={ngoImage3}
                style={{
                  width: "100%",
                  maxWidth: "490px",
                  borderRadius: 24,
                  boxShadow: "0 35px 90px rgba(0,0,0,0.3)",
                }}
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                whileHover={{ scale: 1.08 }}
              />
            </Grid>
          </Grid>
        </Container>

        {/* ================= WHY WE EXIST ================= */}
        <Container sx={{ py: { xs: 6, md: 12 }, position: "relative", zIndex: 2 }}>
          <Grid container spacing={{ xs: 4, md: 7 }} alignItems="center">
            <Grid item size={{ xs: 12, md: 5 }} sx={{ textAlign: { xs: "center", md: "left" } }}>
              <motion.img
                src={ngoImage1}
                style={{
                  width: "100%",
                  maxWidth: "450px",
                  borderRadius: 24,
                  boxShadow: "0 35px 90px rgba(0,0,0,0.3)",
                }}
                variants={fadeLeft}
                initial="hidden"
                whileInView="visible"
                whileHover={{ scale: 1.08 }}
              />
            </Grid>
            <Grid item size={{ xs: 12, md: 7 }}>
              <motion.div
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
              >
                <Typography variant="h4" fontWeight={800} color={navyText}>
                  Why We Exist
                </Typography>
                <Divider sx={{ my: 3 }} />
                <Typography color={mutedText} lineHeight={2}>
                  Every day:
                  <br /><br />
                  • A mother struggles to reach{" "}
                  <span style={{ color: olive, fontWeight: 600 }}>
                    timely medical care
                  </span>
                  <br />
                  • A newborn waits for{" "}
                  <span style={{ color: gold, fontWeight: 600 }}>
                    life-saving NICU admission
                  </span>
                  <br />
                  • Decisions are delayed — not due to lack of treatment, but lack of support
                  <br /><br />
                  In these moments,{" "}
                  <strong style={{ color: navyText }}>
                    even a small delay can change everything
                  </strong>.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>
        </Container>

        {/* ================= CORE WORK ================= */}
        <Container sx={{ py: { xs: 6, md: 10 }, position: "relative", zIndex: 2 }}>
          <Grid container spacing={{ xs: 4, md: 7 }} alignItems="center">
            <Grid item size={{ xs: 12, md: 7 }}>
              <motion.div
                variants={fadeLeft}
                initial="hidden"
                whileInView="visible"
              >
                <Typography variant="h4" fontWeight={800} color={navyText}>
                  Our Core Work
                </Typography>
                <Divider sx={{ my: 3 }} />
                <Typography color={mutedText} lineHeight={2}>
                  Every day:
                  <br /><br />
                  • Supporting mothers{" "}
                  <span style={{ color: olive, fontWeight: 600 }}>
                    when it matters most
                  </span>
                  <br />
                  • Helping newborns fight{" "}
                  <span style={{ color: gold, fontWeight: 600 }}>
                    their very first battle
                  </span>
                  <br />
                  • Extending compassion to those often left unseen
                  <br /><br />
                  In these situation,{" "}
                  <strong style={{ color: navyText }}>
                    even a small portion can change everything
                  </strong>.
                </Typography>
              </motion.div>
            </Grid>
            <Grid item size={{ xs: 12, md: 5 }} sx={{ textAlign: { xs: "center", md: "right" } }}>
              <motion.img
                src={ngoImage2}
                style={{
                  width: "100%",
                  maxWidth: "450px",
                  borderRadius: 24,
                  boxShadow: "0 35px 90px rgba(0,0,0,0.3)",
                }}
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                whileHover={{ scale: 1.08 }}
              />
            </Grid>
          </Grid>
        </Container>

        <Box
          sx={{
            py: 1,
            p: 1,
            borderRadius: 15,
            background: `linear-gradient(90deg, ${olive}, ${gold})`,
            textAlign: "center",
            position: "relative",
            zIndex: 2,
          }}
        >
      <motion.div  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
  <Typography fontWeight={600} color="#1a1a1a" >
    <span style={{ color: "#2E7D32" }} >
      From a child’s first breath…
    </span>{" "}
    <span style={{ color: "#efcb00" }}>
      to a family’s first relief…
    </span>
    <br />
    <strong style={{ color: "#2E7D32" }}>
      Sai Nisha Foundation stands beside life
    </strong>
    <span style={{ color: "#291905" }}>
      , when it needs support the most.
    </span>
  </Typography>
</motion.div>
        </Box>

        <Footer />
      </Box>
    </ThemeProvider>
  );
}