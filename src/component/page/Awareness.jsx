import React from "react";
import {
  Box,
  Button,
  Typography,
  Container,
  Grid,
  CssBaseline,
  Divider,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { motion } from "framer-motion";
import Footer from "./Footer";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

// Using your imported images
import pregnancyImg from "../page/image/pre.jpg";
import newbornImg from "../page/image/newborn 11.jpg";

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
    title: "Pregnancy Emergency",
    description:
     "Every pregnancy deserves a safe beginning and a healthy future, and your support ensures that even in the most unexpected moments, expert emergency care is always within reach. By leveraging your workplace’s gift matching program, you are doing more than just donating—you are doubling the hope and the resources available to mothers and newborns when they need it most. It is an effortless yet incredibly powerful way to turn your professional network into a lifeline of support, ensuring that every family has the specialized care, advanced technology, and medical expertise required to navigate an emergency and come home stronger together.",
    image: pregnancyImg,
  },
  {
    title: "Newborn Emergency Care",
    description:
      "Every newborn deserves the brightest start possible, and your support ensures that even the tiniest fighters have access to the world-class emergency care they need to thrive. By utilizing your workplace’s gift matching program, you are doubling the strength of our medical response—turning a single contribution into twice the life-saving equipment, specialized nursing, and advanced technology for infants in critical care.",
    image: newbornImg,
  },
];

export default function Awareness() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

            {/* WhatsApp FAB */}
      <Box sx={{ position: "fixed", bottom: 20, right: 20, zIndex: 9999 }}>
        <Button
          component="a"
          href="https://wa.me/919962290875"
          target="_blank"
          sx={{
            minWidth: 0,
            width: 56,
            height: 56,
            borderRadius: "50%",
            backgroundColor: "#25D366",
            color: "#fff",
            "&:hover": { backgroundColor: "#1EBE5D", transform: "scale(1.1)" },
          }}
        >
          <WhatsAppIcon />
        </Button>
      </Box>

      {/* MAIN FULL PAGE DARK BACKGROUND */}
      <Box sx={{ bgcolor: "#0f172a", color: "#ffffff" }}>
        
        {/* HERO SECTION */}
        <Box
          sx={{
            background: "linear-gradient(rgba(0,0,0,0.7), rgba(11,61,59,0.8))",
            py: { xs: 8, md: 12 },
            textAlign: "center"
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

        {/* ALTERNATING PARAGRAPH SECTION (IMAGE DESIGN) */}
        <Box sx={{ py: { xs: 6, md: 10 } }}>
          <Container maxWidth="lg">
            {programs.map((item, index) => (
              <Box key={index} sx={{ mb: { xs: 8, md: 12 } }}>
                <Grid
                  container
                  spacing={6}
                  alignItems="center"
                  // Alternates direction based on even/odd index
                  flexDirection={index % 2 === 0 ? "row" : "row-reverse"}
                >
                  {/* IMAGE SIDE */}
                  <Grid item xs={12} md={6}>
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    >
                      <Box
                        component="img"
                        src={item.image}
                        alt={item.title}
                        sx={{
                          width: "100%",
                          maxHeight: 400,
                          objectFit: "cover",
                          borderRadius: "24px",
                          boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                        }}
                      />
                    </motion.div>
                  </Grid>

                  {/* TEXT SIDE */}
                  <Grid item xs={12} md={6}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <Typography
                        variant="h5"
                        fontWeight={700}
                        sx={{ color: "#6C63FF", mb: 2 }} // Purple color from your image
                      >
                        {item.title}
                      </Typography>
                      
                      <Typography
                        variant="body1"
                        sx={{
                          opacity: 0.8,
                          lineHeight: 1.8,
                          fontSize: "1rem",
                          mb: 2,
                        }}
                      >
                        {item.description}
                      </Typography>

                      {/* Decorative colored bar from your image */}
                      <Box
                        sx={{
                          width: 40,
                          height: 3,
                          bgcolor: "#FF6F91", // Pinkish bar from your image
                          borderRadius: 2,
                        }}
                      />
                    </motion.div>
                  </Grid>
                </Grid>
              </Box>
            ))}
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

            <Grid container spacing={4} mt={2} justifyContent="center">
              {[
                { number: "1200+", label: "Medical Emergencies" },
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
                  <Typography sx={{ opacity: 0.8 }}>{item.label}</Typography>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* CALL TO ACTION */}
        <Box
          sx={{
            background: "linear-gradient(90deg, #0B3D3B, #145c59)",
            py: { xs: 5, md: 6 },
            textAlign: "center",
          }}
        >
          <Container maxWidth="sm">
            <Typography
              variant="h3"
              fontWeight={800}
              sx={{ color: "#FFD700", mb: 1 }}
            >
              Join in Our Awareness
            </Typography>
            <Typography sx={{ opacity: 0.9 }}>
              Together, we can provide immediate emergency care to those in crisis, protect vulnerable lives from harm, and create opportunities that empower families to build a better future. Every act of support brings food to the hungry, shelter to the homeless, education to children, and hope to communities facing hardship. United by compassion, we can turn challenges into new beginnings.
            </Typography>
          </Container>
        </Box>

        {/* FOOTER */}
        <Box sx={{ bgcolor: "#020617", "& *": { color: "#fff !important" } }}>
          <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  );
}