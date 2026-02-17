import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  CssBaseline,
  Divider,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { motion } from "framer-motion";
import Footer from "./Footer";

/* ✅ IMPORT IMAGES HERE */
import pregnancyImg from "../";
import petcareImg from "../assets/petcare.jpg";
import eldersImg from "../assets/elders.jpg";
import newbornImg from "../assets/newborn.jpg";
import educationImg from "../assets/education.jpg";
import sportsImg from "../assets/sports.jpg";

const theme = createTheme({
  palette: {
    primary: { main: "#AD1457" },
    secondary: { main: "#2E7D32" },
    background: { default: "#F5F7FA" },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

const programs = [
  {
    title: "Pregnancy Emergency Care",
    description:
      "Providing urgent medical support, ambulance services, and maternal health care during critical pregnancy situations.",
    image: pregnancyImg,
  },
  {
    title: "Pet Care & Rescue",
    description:
      "Rescuing injured and abandoned animals while ensuring food, shelter, medical treatment, and adoption support.",
    image: petcareImg,
  },
  {
    title: "Mentally Challenged Elders",
    description:
      "Offering specialized care, therapy programs, and emotional support for elderly individuals with mental health challenges.",
    image: eldersImg,
  },
  {
    title: "Newborn Emergency Care",
    description:
      "Ensuring immediate neonatal medical attention, ICU support, and life-saving treatment for newborn babies.",
    image: newbornImg,
  },
  {
    title: "Education Support Programs",
    description:
      "Providing scholarships, learning materials, and awareness programs to empower underprivileged children through education.",
    image: educationImg,
  },
  {
    title: "Sports Development Initiatives",
    description:
      "Encouraging youth participation in sports by providing training, equipment, and mentorship opportunities.",
    image: sportsImg,
  },
];

export default function Awareness() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* HERO SECTION */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #AD1457, #6A1B9A)",
          color: "white",
          py: { xs: 8, md: 12 },
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h3" fontWeight={700} gutterBottom>
              Awareness & Support Programs
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.9 }}>
              Extending care, compassion, and opportunity to every life that
              needs support.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* PROGRAM CARDS */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "#F5F7FA" }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center" alignItems="stretch">
            {programs.map((item, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={index}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  style={{ width: "100%", maxWidth: "350px" }}
                >
                  <Card
                    sx={{
                      borderRadius: 4,
                      boxShadow: 4,
                      height: "100%",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="220"
                      image={item.image}
                      alt={item.title}
                      sx={{ objectFit: "cover" }}
                    />
                    <CardContent>
                      <Typography variant="h6" fontWeight={600} gutterBottom>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Divider />

      {/* IMPACT SECTION */}
      <Box sx={{ py: { xs: 6, md: 8 }, textAlign: "center" }}>
        <Container maxWidth="md">
          <Typography variant="h4" fontWeight={700} gutterBottom>
            Our Aim
          </Typography>

          <Grid container spacing={4} mt={2} justifyContent="center">
            <Grid item xs={6} md={3}>
              <Typography variant="h3" color="primary" fontWeight={700}>
                1200+
              </Typography>
              <Typography>Medical Emergencies Handled</Typography>
            </Grid>

            <Grid item xs={6} md={3}>
              <Typography variant="h3" color="primary" fontWeight={700}>
                500+
              </Typography>
              <Typography>Pets Rescued</Typography>
            </Grid>

            <Grid item xs={6} md={3}>
              <Typography variant="h3" color="primary" fontWeight={700}>
                900+
              </Typography>
              <Typography>Elders Supported</Typography>
            </Grid>

            <Grid item xs={6} md={3}>
              <Typography variant="h3" color="primary" fontWeight={700}>
                2000+
              </Typography>
              <Typography>Children Empowered</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CALL TO ACTION */}
      <Box
        sx={{
          background: "#6A1B9A",
          color: "white",
          py: { xs: 6, md: 8 },
          textAlign: "center",
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="h5" fontWeight={600} gutterBottom>
            Join Our Mission
          </Typography>
          <Typography sx={{ mb: 3 }}>
            Together we can provide emergency care, protect lives, and create
            opportunities for a better future.
          </Typography>

          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{ borderRadius: 3, px: 4 }}
          >
            Get Involved
          </Button>
        </Container>
      </Box>

      <Footer />
    </ThemeProvider>
  );
}
