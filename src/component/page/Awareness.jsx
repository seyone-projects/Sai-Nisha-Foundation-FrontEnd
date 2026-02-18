import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CssBaseline,
  Divider,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { motion } from "framer-motion";
import Footer from "./Footer";

import pregnancyImg from "../page/image/pre.jpg";
import petcareImg from "../page/image/gettyimages-1637251600-612x612.jpg";
import eldersImg from "../page/image/mental images.webp";
import newbornImg from "../page/image/newborn 11.jpg";
import educationImg from "../page/image/edu 1.avif";
import sportsImg from "../page/image/sports 1.avif";

const theme = createTheme({
  palette: {
    primary: { main: "#0B3D3B" },
    secondary: { main: "#FFD700" },
    background: { default: "#0f172a" },
  },
  typography: {
    fontFamily: `"Poppins","Roboto","Helvetica","Arial",sans-serif`,
  },
});

const programs = [
  {
    title: "Emergency Care",
    description:
      "Providing urgent medical support,and maternal health care during critical pregnancy situations.",
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
      "Offering specialized care, therapy programs, and emotional support for elderly",
    image: eldersImg,
  },
  {
    title: "Newborn Care",
    description:
      "Ensuring immediate neonatal medical attention, ICU support, and life-saving treatment for newborn babies.",
    image: newbornImg,
  },
  {
    title: "Education",
    description:
      "Providing scholarships, learning materials, and awareness programs to empower underprivileged children.",
    image: educationImg,
  },
  {
    title: "Sports",
    description:
      "Encouraging youth participation in sports by providing training, equipment, and mentorship opportunities.",
    image: sportsImg,
  },
];

export default function Awareness() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* MAIN FULL PAGE DARK BACKGROUND */}
      <Box sx={{ bgcolor: "#0f172a", color: "#ffffff" }}>

        {/* HERO SECTION */}
        <Box
          sx={{
            background:
              "linear-gradient(rgba(0,0,0,0.7), rgba(11,61,59,0.8))",
            py: { xs: 8, md: 12 },
          }}
        >
          <Container maxWidth="md">
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h3"
                fontWeight={800}
                gutterBottom
                sx={{ color: "#FFD700" }}
              >
                Awareness & Support Programs
              </Typography>

              <Box
                sx={{
                  width: 80,
                  height: 4,
                  bgcolor: "#FFD700",
                  mx: "auto",
                  mb: 3,
                }}
              />

              <Typography variant="h6" sx={{ opacity: 0.9 }}>
                Extending care, compassion, and opportunity to every life that needs support is at the heart of everything we do. We believe that every individual deserves dignity, hope, and a chance to thrive. Through community outreach, awareness programs, and sustainable initiatives, we work tirelessly to uplift vulnerable lives and build a future where no one is left behind.
              </Typography>
            </motion.div>
          </Container>
        </Box>

        {/* PROGRAM CARDS SECTION */}
        <Box sx={{ py: { xs: 6, md: 10 } }}>
          <Container maxWidth="lg">
            <Grid container spacing={4} justifyContent="center">
              {programs.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Card
                      sx={{
                        bgcolor: "#1e293b",
                        color: "#fff",
                        borderRadius: 4,
                        height: "200",
                        width: 280,
                        boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
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
                        <Typography
                          variant="h6"
                          fontWeight={700}
                          gutterBottom
                          sx={{ color: "#FFD700" }}
                        >
                          {item.title}
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.8 }}>
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

        <Divider sx={{ borderColor: "rgba(255,255,255,0.1)" }} />

        {/* IMPACT SECTION */}
        <Box sx={{ py: { xs: 6, md: 8 }, textAlign: "center" }}>
          <Container maxWidth="md">
            <Typography
              variant="h4"
              fontWeight={800}
              gutterBottom
              sx={{ color: "#FFD700" }}
            >
              Our Aim
            </Typography>

            <Grid container spacing={4} mt={2} justifyContent="center" marginTop={5}>
              {[
                { number: "1200+", label: "Medical Emergencies Handled" },
                { number: "500+", label: "Pets Rescued" },
                { number: "900+", label: "Elders Supported" },
                { number: "2000+", label: "Children Empowered" },
              ].map((item, index) => (
                <Grid item xs={6} md={3} key={index}>
                  <Typography
                    variant="h3"
                    fontWeight={800}
                    sx={{ color: "#FFD700" }}
                  >
                    {item.number}
                  </Typography>
                  <Typography sx={{ opacity: 0.8 }}>
                    {item.label}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* CALL TO ACTION */}
        <Box
          sx={{
            background:
              "linear-gradient(90deg, #0B3D3B, #145c59)",
            py: { xs: 6, md: 8 },
            textAlign: "center",
            borderRadius: 30,
          }}
        >
          <Container maxWidth="sm">
           <Typography
                variant="h3"
                fontWeight={800}
                gutterBottom
                sx={{ color: "#FFD700" }}
              >
              Join Our Mission
              </Typography>
            <Typography sx={{ opacity: 0.9 }} >
              Together, we can provide immediate emergency care to those in crisis, protect vulnerable lives from harm, and create opportunities that empower families to build a better future. Every act of support brings food to the hungry, shelter to the homeless, education to children, and hope to communities facing hardship. United by compassion, we can turn challenges into new beginnings.
            </Typography>
          </Container>
        </Box>

        {/* FOOTER */}
        <Box sx={{ bgcolor: "#020617", "& *": { color: "#fff !important"} }}>
          <Footer />
        </Box>

      </Box>
    </ThemeProvider>
  );
}
