import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  CssBaseline,
  Avatar,
  Divider,
  IconButton,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Footer from "../page/Footer";
import PsychologyIcon from "@mui/icons-material/Psychology";
import HandshakeIcon from "@mui/icons-material/Handshake";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import heroBg from "../page/image/mental care.avif";
import idea1 from "../page/image/mental care 2.webp";
import idea2 from "../page/image/mental care 3.webp";
import idea3 from "../page/image/mental images.webp";
import idea4 from "../page/image/mental care.avif";

const theme = createTheme({
  palette: {
    primary: { main: "#0B1F3A" },      
    secondary: { main: "#FFC107" }, 
    background: { default: "#0A192F" },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

const PeerToPeer = () => {
  const navigate = useNavigate();

  const fundraisingIdeas = [
    {
      title: "Elderly Home Nursing Care",
      img: idea1, 
      desc: "We provide compassionate home nursing services for senior citizens, ensuring they receive personalized medical attention, regular health monitoring, and emotional support in the comfort of their homes. Our trained caregivers focus on dignity, safety, and quality of life for every elder we serve."
    },
    {
      title: "Post-Hospitalization & Rehabilitation Support",
      img: idea2,
      desc: "Our rehabilitation programs assist seniors recovering from surgery, illness, or mobility challenges. From physiotherapy support to mobility assistance, we help individuals regain strength, independence, and confidence through guided care and professional supervision."
    },
    {
      title: "Daily Living & Personal Care Assistance",
      img: idea3,
      desc: "We support elderly individuals with daily activities such as bathing, grooming, medication reminders, and meal assistance. Our caregivers ensure comfort, hygiene, and companionship while promoting independence in everyday life."
    },
    {
      title: "Emotional Support & Companionship",
      img: idea4,
      desc: "Loneliness can impact mental health. Our caregivers provide meaningful companionship, conversation, and emotional reassurance to seniors, fostering a sense of belonging and happiness while supporting their overall well-being."
    }
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* WHATSAPP */}
      <Button
        component="a"
        href="https://wa.me/919962290875"
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          width: 56,
          height: 56,
          borderRadius: "50%",
          bgcolor: "#25D366",
          color: "#fff",
          zIndex: 9999,
          '&:hover': { bgcolor: "#128C7E" }
        }}
      >
        <WhatsAppIcon />
      </Button>

      {/* HERO SECTION */}
      <Box
        sx={{
          height: { xs: "90vh", md: "100vh" },
          position: "relative", 
          backgroundImage: `
            linear-gradient(rgba(5,15,35,0.85), rgba(5,15,35,0.9)),
            url(${heroBg})
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* BACK BUTTON - TOP RIGHT */}
        <IconButton
          onClick={() => navigate(-1)}
          sx={{
            position: "absolute",
            top: { xs: 20, md: 40 },
            right: { xs: 20, md: 40 },
            bgcolor: "rgba(255, 255, 255, 0.1)", 
            color: "#FFC107",
            zIndex: 10,
            transition: "all 0.3s ease",
            "&:hover": { 
              bgcolor: "rgba(255, 255, 255, 0.2)",
              transform: "scale(1.1)"
            },
          }}
        >
          <ArrowBackIcon fontSize="large" />
        </IconButton>

        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h2"
              fontWeight="bold"
              sx={{
                mb: 3,
                fontSize: { xs: "32px", md: "56px" },
                color: "#FFC107",
                letterSpacing: 2,
              }}
            >
              Empowering Every Mind & Ability
            </Typography>

            <Typography sx={{ mb: 4, maxWidth: 600, mx: "auto", color: "#E0E0E0" }}>
              Join us in providing specialized care, vocational training, and
              inclusive opportunities for individuals with intellectual and
              developmental disabilities.
            </Typography>

            <Button
              variant="contained"
              sx={{
                px: 6,
                py: 1.5,
                borderRadius: "30px",
                fontWeight: "bold",
                backgroundColor: "#FFC107",
                color: "#000",
                "&:hover": { backgroundColor: "#e6ac00" },
              }}
            >
              Support Our Mission
            </Button>
          </motion.div>
        </Container>
      </Box>

      {/* HOW YOU CAN HELP */}
      <Box sx={{ py: 10, bgcolor: "#0A192F", color: "#fff" }}>
        <Container>
          <Typography
            variant="h4"
            textAlign="center"
            fontWeight="bold"
            sx={{ mb: 8, color: "#FFC107", letterSpacing: 2 }}
          >
            HOW YOU CAN HELP
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {[
              {
                title: "Become a Mentor",
                desc: "Spend time and share your skills.",
                icon: <Diversity3Icon sx={{ fontSize: 40 }} />,
              },
              {
                title: "Advocate",
                desc: "Promote inclusive policies.",
                icon: <PsychologyIcon sx={{ fontSize: 40 }} />,
              },
              {
                title: "Donate",
                desc: "Help build sensory rooms.",
                icon: <HandshakeIcon sx={{ fontSize: 40 }} />,
              },
            ].map((item, index) => (
              <Grid item xs={12} md={4} key={index} textAlign="center">
                <Avatar
                  sx={{
                    bgcolor: "#FFC107",
                    color: "#000",
                    width: 80,
                    height: 80,
                    mx: "auto",
                    mb: 2,
                  }}
                >
                  {item.icon}
                </Avatar>

                <Typography variant="h6" fontWeight="bold">
                  {item.title}
                </Typography>

                <Typography sx={{ color: "#ccc", px: 2 }}>
                  {item.desc}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* KEY FOCUS AREAS */}
      <Box sx={{ py: 10, bgcolor: "#081426", color: "#fff" }}>
        <Container maxWidth="md">
          <Typography
            variant="h4"
            textAlign="center"
            fontWeight="bold"
            sx={{ mb: 8, color: "#FFC107" }}
          >
            OUR KEY FOCUS AREAS
          </Typography>

          {fundraisingIdeas.map((item, index) => (
            <Box key={index} sx={{ mb: 10 }}>
              <Grid
                container
                spacing={6}
                alignItems="center"
                direction={index % 2 === 0 ? "row" : "row-reverse"}
              >
                <Grid item xs={12} md={5}>
                  <Box
                    component="img"
                    src={item.img}
                    alt={item.title}
                    sx={{
                      width: "100%",
                      height: 320,
                      objectFit: "cover",
                      borderRadius: "20px",
                      boxShadow: "0 15px 40px rgba(0,0,0,0.5)",
                    }}
                  />
                </Grid>

                <Grid item xs={12} md={7}>
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    sx={{ color: "#FFC107" }}
                    gutterBottom
                  >
                    {item.title}
                  </Typography>

                  <Typography sx={{ color: "#ccc", lineHeight: 1.8 }}>
                    {item.desc}
                  </Typography>

                  <Divider
                    sx={{
                      mt: 3,
                      width: "80px",
                      borderBottomWidth: 4,
                      borderColor: "#FFC107",
                    }}
                  />
                </Grid>
              </Grid>
            </Box>
          ))}
        </Container>
      </Box>

      {/* FOOTER */}
      <Box sx={{ bgcolor: "#050B18", "& *": { color: "#fff !important" } }}>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default PeerToPeer;