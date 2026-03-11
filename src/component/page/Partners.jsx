import React, { useState } from "react";
import { Box, Typography, Container, keyframes, useMediaQuery, CssBaseline, Grid } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "./Footer";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import img1 from "../page/image/DSC06299.jpg";
import img2 from "../page/image/DSC06390.jpg";
import img3 from "../page/image/DSC06321.jpg";
import videoSrc from "../page/image/partners video.mp4";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/900.css";

const gold = "#D68910";
const theme = createTheme({
  typography: { fontFamily: `"Poppins", sans-serif`, h2: { fontWeight: 900 }, h4: { fontWeight: 800 } },
});

const orbit = keyframes`
  from { transform: rotate(0deg) translateX(var(--radius)) rotate(0deg); }
  to { transform: rotate(180deg) translateX(var(--radius)) rotate(-180deg); }
`;
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const FullPageVideoBackground = () => (
  <Box sx={{ position: "fixed", inset: 0, zIndex: -2, bgcolor: "#111827" }}>
    <Box component="video" autoPlay loop muted playsInline src={videoSrc} sx={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
    <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(17,24,39,0.7), rgba(17,24,39,0.9))" }} />
  </Box>
);

const PartnerCard = ({ img, partner, onHover, onLeave, delay, isMobile, isPaused }) => (
  <Box
    onMouseEnter={() => onHover(partner)}
    onMouseLeave={onLeave}
    onClick={() => onHover(partner)}
    sx={{
      position: "absolute", top: "20%", left: "20%", zIndex: 1, cursor: "pointer", transition: "transform 0.3s",
      "--radius": isMobile ? "100px" : "180px", margin: isMobile ? "-50px 0 0 -50px" : "-70px 0 0 -70px",
      animation: `${orbit} 20s linear infinite`, animationDelay: delay, animationPlayState: isPaused ? "paused" : "running",
      "&:hover": { zIndex: 10 },
    }}
  >
    <Box component="img" src={img} sx={{
      width: { xs: 100, md: 140 }, height: { xs: 100, md: 140 }, borderRadius: "50%", border: `3px solid ${gold}`,
      objectFit: "cover", boxShadow: `0 0 25px ${gold}44`, transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      "&:hover": { transform: "scale(1.1)", borderColor: "#fff", boxShadow: `0 0 40px ${gold}` },
    }} />
  </Box>
);

export default function Partners() {
  const isMobile = useMediaQuery("(max-width:900px)");
  const [isPaused, setIsPaused] = useState(false);
  const partnersData = [
    { img: img1, name: "Kalaimamani Thiru Dhina", delay: "0s", desc: "A legendary Music Director in the Indian film industry, known for his soul-stirring compositions and decades of contribution to cinematic excellence." },
    { img: img2, name: "R. Kannan", delay: "-6.6s", desc: "A massive director recognized for his unique storytelling and blockbuster hits. His vision brings grand narratives to life on the silver screen." },
    { img: img3, name: "Jagan Purushottam", delay: "-13.3s", desc: "One of the finest actors of the generation, bringing depth and authenticity to every character he portrays with remarkable versatility." },
  ];
  const [activePartner, setActivePartner] = useState(partnersData[0]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <FullPageVideoBackground />
      <Box sx={{ position: "relative", zIndex: 2, minHeight: "70vh", py: { xs: 5, md: 10 }, overflowX: "hidden" }}>
        <Container maxWidth="lg">
          <Typography variant={isMobile ? "h4" : "h2"} sx={{ color: "#fff", textAlign: "center", mb: { xs: 2, md: 8 }, letterSpacing: 2, mt: -5 }}>
            <span style={{ color: gold }}>celebrities</span>
          </Typography>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ height: { xs: 300, md: 500 }, position: "relative", display: "flex", alignItems: "center", paddingLeft: 150 }}>
                <Box sx={{ width: { xs: 60, md: 80 }, height: { xs: 60, md: 80 }, borderRadius: "50%", border: `1px dashed ${gold}`, position: "absolute", opacity: 0.3 }} />
                {partnersData.map((p, i) => (
                  <PartnerCard key={i} {...p} partner={p} onHover={(partner) => { setActivePartner(partner); setIsPaused(true); }} onLeave={() => setIsPaused(false)} isMobile={isMobile} isPaused={isPaused} />
                ))}
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box key={activePartner.name} sx={{
                mt: { xs: -5, md: -65 }, ml: { md: "auto" }, width: { xs: "100%", md: "45%" }, animation: `${fadeIn} 0.6s ease-out`,
                p: { xs: 3, md: 5 }, borderLeft: { md: `4px solid ${gold}` }, borderTop: { xs: `4px solid ${gold}`, md: "none" },
                bgcolor: "rgba(255,255,255,0.03)", backdropFilter: "blur(10px)", borderRadius: { xs: "20px", md: "20px 0 0 20px" }, textAlign: "left",
              }}>
                <Typography variant="overline" sx={{ color: gold, fontSize: "1rem", fontWeight: "bold", display: "block" }}>Associate Spotlight</Typography>
                <Typography variant={isMobile ? "h4" : "h3"} sx={{ color: "white", mb: 2, fontWeight: 900 }}>{activePartner.name}</Typography>
                <Typography variant="body1" sx={{ color: "#ccc", lineHeight: 1.8, fontSize: "1.1rem" }}>{activePartner.desc}</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box component="a" href="https://wa.me/919962290875" target="_blank" rel="noopener" sx={{
        position: "fixed", bottom: 20, right: 20, width: 60, height: 60, bgcolor: "#25D366", borderRadius: "50%",
        display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 20px rgba(0,0,0,0.3)", zIndex: 9999,
        transition: "0.3s", "&:hover": { transform: "scale(1.1)", bgcolor: "#1ebe5d" }
      }}><WhatsAppIcon sx={{ color: "#fff", fontSize: 32 }} /></Box>
      <Box sx={{ "& *": { color: "#fff !important" }, mt: -9 }}><Footer /></Box>
    </ThemeProvider>
  );
}