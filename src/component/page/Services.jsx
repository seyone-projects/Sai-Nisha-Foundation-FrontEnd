import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Container,
  keyframes,
  useMediaQuery,
  CssBaseline,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "./Footer";


import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";

import serviceImg1 from "./image/kids education - 1.jpg";
import serviceImg2 from "./image/pets - 1.jpg";
import serviceImg3 from "./image/mentally challenged elders.webp";
import serviceImg4 from "./image/newborn-baby.jpg";
import serviceImg5 from "./image/education.jpg";
import serviceImg6 from "./image/kids_education_part2.jpg";

const serviceImages = [serviceImg1, serviceImg2, serviceImg3, serviceImg4, serviceImg5, serviceImg6];


const creamBg = "#F7F4EC";
const navyText = "#1F2F3F";
const olive = "#7C8F29";
const gold = "#D68910";
const mutedText = "#5F6F7E";


const services = [
  {
    title: "Pregnancy Emergency",
    desc: "We provide urgent support for expecting mothers during high-risk pregnancies, ensuring timely medical care, transportation, and emotional assistance when every moment matters.",
  },
  {
    title: "Pets",
    desc: "We promote compassion toward animals through rescue support, medical aid, rehabilitation, and adoption awareness for abandoned and injured pets.",
  },
  {
    title: "Mentally Challenged Elders",
    desc: "We ensure dignity, care, and emotional well-being for mentally challenged elderly individuals by offering medical support, daily care, and compassionate companionship.",
  },
  {
    title: "Newborn Emergency Care",
    desc: "We support critically ill newborns by facilitating immediate medical attention, NICU access, and essential life-saving care during the most fragile first hours of life.",
  },
  {
    title: "Education",
    desc: "We empower children through access to education, learning resources, and skill development, helping them build a brighter and more secure future.",
  },
  {
    title: "Sports",
    desc: "We encourage physical fitness and confidence in young individuals by supporting sports training, team activities, and opportunities for healthy development.",
  },
];


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

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
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
          100% { transform: translateY(-110vh) scale(1.4); opacity: 0; }
        }
      `}</style>
    </Box>
  );
}

export default function Services() {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
            <Typography
              variant={isMobile ? "h4" : "h2"}
              align="center"
              sx={{
                fontWeight: 900,
                mb: { xs: 6, md: 8 },
                color: navyText,
                textTransform: "uppercase",
                animation: `${fadeIn} 1s ease-out`,
              }}
            >
              Our <span style={{ color: gold }}>Services</span>
            </Typography>


            <Box
              sx={{
                maxWidth: 950,
                mx: "auto",
                mb: 10,
                textAlign: "center",
                animation: `${fadeIn} 1.2s ease-out`,
                p: 4,
                borderRadius: 8,
                backgroundColor: "rgba(255, 255, 255, 0.4)",
                backdropFilter: "blur(5px)",
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 800, mb: 2, color: navyText }}>
                Sai Nisha Foundation
              </Typography>

              <Typography sx={{ fontWeight: 600, color: olive, mb: 3 }}>
                Serving Life at Its Most Vulnerable Moments
              </Typography>

              <Typography sx={{ lineHeight: 1.9, mb: 3, color: mutedText }}>
                At Sai Nisha Foundation, our work begins where uncertainty is highest
                and support is often absent. We focus on moments when time, care,
                and reassurance matter more than anything else.
              </Typography>

              <Typography sx={{ lineHeight: 1.9, color: mutedText }}>
                Our services are guided by urgency, compassion, and responsibility — 
                always centred on dignity and need.
              </Typography>
            </Box>


            <Box sx={{ maxWidth: 1000, mx: "auto", mb: 10, textAlign: "center" }}>
              <Typography
                variant="h5"
                sx={{ fontWeight: 800, color: gold, mb: 3 }}
              >
                Primary Services (Our Core Commitment)
              </Typography>

              <Typography sx={{ mb: 3, color: mutedText }}>
                <b>Third Trimester Pregnancy Support:</b> Emergency medical
                assistance, hospitalisation support, nutrition, guidance, and
                emotional reassurance.
              </Typography>

              <Typography sx={{ color: mutedText }}>
                <b>NICU & Newborn Emergency Care:</b> Partial or full financial
                support, neonatal emergency treatment, and post-NICU recovery
                support.
              </Typography>
            </Box>

            <Box sx={{ maxWidth: 1000, mx: "auto", mb: 12, textAlign: "center" }}>
              <Typography
                variant="h5"
                sx={{ fontWeight: 800, color: "#00BFFF", mb: 3 }}
              >
                Secondary Services
              </Typography>

              <Typography sx={{ mb: 2, color: mutedText }}>
                <b>Children – Education & Sports:</b> Supporting education, coaching,
                equipment, and opportunities.
              </Typography>

              <Typography sx={{ mb: 2, color: mutedText }}>
                <b>Injured & Elderly Pet Care:</b> Emergency medical care and support
                for abandoned animals.
              </Typography>

              <Typography sx={{ color: mutedText }}>
                <b>Mentally Challenged Elders:</b> Medical care, safety, dignity, and
                caregiver support.
              </Typography>
            </Box>


            <Grid container spacing={4} justifyContent="center">
              {services.map((service, index) => (
                <Grid
                  item
                  size={{ xs: 12, md: 6, lg: 4 }}
                  key={index}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    opacity: 0,
                    animation: `${slideUp} 0.8s ease-out ${index * 0.1}s forwards`,
                  }}
                >
                  <Card
                    sx={{
                      width: 320,
                      borderRadius: 6,
                      overflow: "hidden",
                      backgroundColor: "rgba(255, 255, 255, 0.7)", 
                      backdropFilter: "blur(10px)",
                      boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
                      border: "1px solid rgba(255, 255, 255, 0.3)",
                      transition: "0.4s",
                      "&:hover": {
                        transform: "translateY(-10px)",
                        boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="240"
                      image={serviceImages[index]}
                      alt={service.title}
                    />
                    <CardContent sx={{ textAlign: "center" }}>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 800, color: olive, mb: 1 }}
                      >
                        {service.title}
                      </Typography>
                      <Typography sx={{ opacity: 0.85, color: mutedText }}>
                        {service.desc}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}