import React from "react";
import { Box, Button, Typography, Card, CardMedia, CardContent, Container, keyframes, useMediaQuery, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Footer from "../page/Footer";
import serviceImg1 from "./image/ngo 3.avif";
import backgroundvideo from '../page/image/new_one (1) (1).mp4';
import "@fontsource/poppins/400.css"; import "@fontsource/poppins/900.css";

const GOLD = "#D68910", anims = {
  fadeIn: keyframes`from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); }`,
  slideUp: keyframes`from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); }`,
  spotlight: keyframes`0% { transform: translate(-20%,-20%); opacity:0; } 50% { opacity:1; } 100% { transform: translate(120%,120%); opacity:0; }`,
  floatUp: keyframes`from { transform: translateY(0); opacity: 0; } 20% { opacity: .6; } to { transform: translateY(-450vh); opacity: 0; }`
}, theme = createTheme({ typography: { fontFamily: "Poppins, sans-serif", h2: { fontWeight: 900 }, h5: { fontWeight: 700 } } });

const Background = () => (
  <Box sx={{ position: "fixed", inset: 0, zIndex: -1, overflow: "hidden", bgcolor: "#000" }}>
    <video autoPlay loop muted playsInline style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover", zIndex: -2 }}><source src={backgroundvideo} type="video/mp4" /></video>
    <Box sx={{ position: "absolute", inset: 0, backgroundColor: "rgba(0, 0, 0, 0.6)", zIndex: -1 }} />
    {[...Array(15)].map((_, i) => <Box key={i} sx={{ position: "absolute", bottom: "-50px", left: `${Math.random() * 100}%`, width: 15, height: 15, borderRadius: "50%", bgcolor: "rgba(214,137,16,0.2)", animation: `${anims.floatUp} ${10 + Math.random() * 10}s linear infinite` }} />)}
  </Box>
);

export default function Newsandpublication() {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")), navigate = useNavigate();
  return (
    <ThemeProvider theme={theme}><CssBaseline /><Background />
      <Button href="https://wa.me/919962290875" target="_blank" sx={{ position: "fixed", bottom: 20, right: 20, minWidth: 56, height: 56, borderRadius: "50%", bgcolor: "#25D366", color: "#fff", zIndex: 10, '&:hover': { bgcolor: "#128C7E" } }}><WhatsAppIcon /></Button>
      <Box sx={{ position: "relative", zIndex: 2, minHeight: "100vh", display: 'flex', flexDirection: 'column' }}>
        <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 }, flex: 1, textAlign: 'center' }}>
          <Box sx={{ mt: -12, p: { xs: 4, md: 8 }, mb: 6, borderRadius: 8, bgcolor: "rgba(17,24,39,0.6)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.15)", boxShadow: "0 20px 50px rgba(0,0,0,0.5)", position: "relative", overflow: "hidden" }}>
            <Box sx={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 50%, rgba(214,137,16,0.25), transparent 70%)", animation: `${anims.spotlight} 6s infinite alternate`, pointerEvents: "none" }} />
            <Typography variant={isMobile ? "h4" : "h2"} sx={{ color: "#fff", animation: `${anims.fadeIn} 1.2s ease-out`, letterSpacing: { xs: 4, md: 8 }, lineHeight: 1.2 , fontFamily: "'Playfair Display', serif", }}>Press and  <span style={{ color: GOLD, filter: "drop-shadow(0 0 10px rgba(214,137,16,0.5))" }}>Media</span></Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.5)", mt: 3, letterSpacing: 6, fontSize: '0.75rem', fontWeight: 600, textTransform: "uppercase", display: "flex", alignItems: "center", justifyContent: "center", gap: 2, "&::before, &::after": { content: '""', height: "1px", width: "30px", bgcolor: "rgba(255,255,255,0.2)", fontFamily: "'Playfair Display', serif", } }}>EXPLORE • OUR • LATEST NEWS</Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}><Card sx={{ maxWidth: 400, bgcolor: "rgba(15, 23, 42, 0.8)", backdropFilter: "blur(20px)", borderRadius: 6, border: "1px solid rgba(255,255,255,0.1)", color: "#fff", animation: `${anims.slideUp} 1s ease-out`, transition: "0.3s", '&:hover': { transform: 'scale(1.02)' } }}>
            <CardMedia component="img" height="300" image={serviceImg1} alt="Magazine" />
            <CardContent sx={{ p: 4 }}><Typography variant="h5" sx={{ color: GOLD, mb: 2 ,fontFamily: "'Playfair Display', serif", }}>SAI NISHA FOUNDATION</Typography><Typography sx={{ color: "#CBD5E1", mb: 3, fontSize: '0.95rem', fontFamily: "'Playfair Display', serif", }}>Dive into our latest publication covering our impact, stories of hope, and community initiatives.</Typography>
              <Button variant="contained" fullWidth onClick={() => navigate("/magazine")} sx={{ bgcolor: GOLD, color: '#000', fontWeight: 800, py: 1.5, '&:hover': { bgcolor: '#b3720d' }, fontFamily: "'Playfair Display', serif", }}>View Press and Media</Button>
            </CardContent></Card></Box>
        </Container>
        <Box sx={{ bgcolor: 'rgba(0,0,0,0.8)', "& *": { color: "#fff !important" }, fontFamily: "'Playfair Display', serif", }}><Footer /></Box>
      </Box>
    </ThemeProvider>
  );
}