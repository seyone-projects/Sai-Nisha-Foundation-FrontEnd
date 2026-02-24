import React from "react";
import {
  Box,
  Button,
  Typography,
  Container,
  keyframes,
  useMediaQuery,
  CssBaseline,
  Divider,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "./Footer";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import img1 from "../page/image/DSC06299.jpg";
import img2 from "../page/image/DSC06390.jpg";
import img3 from "../page/image/DSC06321.jpg";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/900.css";

const gold = "#D68910";

const theme = createTheme({
  typography: {
    fontFamily: `"Poppins", sans-serif`,
    h2: { fontWeight: 900 },
    h4: { fontWeight: 800 },
  },
});

// Animations
const orbit = keyframes`
  from { transform: rotate(0deg) translateX(120px) rotate(0deg); }
  to { transform: rotate(360deg) translateX(120px) rotate(-360deg); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const spotlightMove = keyframes`
  0% { transform: translate(-20%, -20%); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translate(120%, 120%); opacity: 0; }
`;

function FullPageVideoBackground() {
  return (
    <Box sx={{ position: "fixed", inset: 0, zIndex: -2, bgcolor: "#111827" }}>
      <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(17,24,39,0.85), rgba(17,24,39,0.95))" }} />
    </Box>
  );
}

const PartnerCard = ({ img, name, desc, delay }) => {
  return (
    <Box
      className="partner-orbit-child"
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        margin: "-50px 0 0 -50px",
        animation: `${orbit} 15s linear infinite`,
        animationDelay: delay,
        zIndex: 1,
        "&:hover": { zIndex: 10 },
      }}
    >
      <Box sx={{ position: "relative", textAlign: "center", cursor: "pointer" }}>
        <Box
          component="img"
          src={img}
          sx={{
            width: 150,
            height: 150,
            borderRadius: "50%",
            border: `3px solid ${gold}`,
            objectFit: "cover",
            boxShadow: `0 0 20px `,
            transition: "transform 0.3s ease",
            "&:hover": { transform: "scale(1.2)" },
          }}
        />
        <Box
          className="info-box"
          sx={{
            position: "absolute",
            top: "120%",
            left: "50%",
            transform: "translateX(-50%)",
            bgcolor: "rgba(0,0,0,0.9)",
            color: "white",
            p: 2,
            borderRadius: 2,
            width: 200,
            opacity: 0,
            visibility: "hidden",
            transition: "all 0.3s ease",
            border: `1px solid ${gold}`,
            pointerEvents: "none",
            ".partner-orbit-child:hover &": {
              opacity: 1,
              visibility: "visible",
            },
          }}
        >
          <Typography variant="subtitle1" sx={{ color: gold, fontWeight: 'bold' }}>{name}</Typography>
          <Typography variant="body2" sx={{ fontSize: '0.75rem' }}>{desc}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default function Partners() {
  const isMobile = useMediaQuery("(max-width:600px)");
  const partnersData = [
    { img: img1, name: "Dhina", desc: "Legendary Music Director", delay: "0s" },
    { img: img2, name: "Kannan", desc: "Massive Director", delay: "-5s" },
    { img: img3, name: "Jagan", desc: "Finest Actor", delay: "-10s" },
  ];

  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <FullPageVideoBackground />

      <Box sx={{ position: "relative", zIndex: 2, minHeight: "100vh", pt: 10 }}>
        <Container maxWidth="lg">
          <Typography variant={isMobile ? "h4" : "h2"} sx={{ color: "#fff", textAlign: "center", mb: 10 }}>
            OUR <span style={{ color: gold }}>PARTNERS</span>
          </Typography>

          <Box
            sx={{
              height: 400,
              width: "100%",
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              "&:hover .partner-orbit-child": { animationPlayState: "paused" }
            }}
          >
            {partnersData.map((partner, index) => (
              <PartnerCard key={index} {...partner} />
            ))}
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
     <Box sx={{ width: "100%", "& *": { color: "#ffffff !important" } }}>
              <Footer />
            </Box>
    </>
  );
}