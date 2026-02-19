import React from "react";
import {
  Box,
  Typography,
  Button,
  CssBaseline,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Container,
  useMediaQuery,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import campaignBg from "../page/image/ngo 2.jpg";
import campaignImg2 from "../page/image/ngo 1.jpg";
import campaignImg3 from "../page/image/ngo 3.avif";

import Footer from "../page/Footer";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

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

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const cardAnimation = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

export default function Campaign() {
  const navigate = useNavigate();
  const isDesktop = useMediaQuery("(min-width:900px)");

  const campaigns = [
    { title: "HELPING CHILDREN", image: campaignBg },
    { title: "CHILD EDUCATION DRIVE", image: campaignImg2 },
    { title: "HEALTH & AWARENESS CAMP", image: campaignImg3 },
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

      {/* ================= HERO SECTION ================= */}
      <Box
        sx={{
          width: "100%",
          minHeight: { xs: "70vh", md: "90vh" },
          backgroundImage: `url(${campaignBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 8000,
          textAlign: "center",
          position: "relative",
          px: 2,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(rgba(0,0,0,0.7), rgba(11,61,59,0.8))",
          }}
        />

        <Container maxWidth="md" sx={{ position: "relative", zIndex: 2 }}>
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                color: "#FFD700",
                mb: 2,
                fontSize: { xs: "2rem", md: "3.5rem" },
              }}
            >
              OUR CAMPAIGNS
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

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "1rem", md: "1.2rem" },
                lineHeight: 1.8,
                color: "#f1f5f9",
              }}
            >
              We design and execute impactful campaigns focused on education,
              healthcare, and community development.We collaborate with local leaders, volunteers, and partner organizations to create sustainable solutions that uplift underserved communities. Through awareness drives, skill-building programs, and grassroots initiatives, we empower individuals with the knowledge, resources, and support they need to build healthier families, access quality education, and achieve long-term social and economic stability.
            </Typography>
          </motion.div>
        </Container>
              </Box>

      {/* ================= CONTENT SECTION ================= */}
      <Box sx={{ bgcolor: "#0f172a", py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">

          {/* Animated Heading */}
          {isDesktop ? (
            <motion.div
              animate={{ x: ["-5%", "30%", "-30%"] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  color: "#ffffff",
                  fontWeight: 700,
                  mt: 1,
                  mb: 6,
                  fontSize: "2.5rem",
                  textAlign: "center",
                }}
              >
                CAMPAIGNS FOR NGO
              </Typography>
            </motion.div>
          ) : (
            <Typography
              variant="h3"
              sx={{
                color: "#ffffff",
                fontWeight: 700,
                mt: 1,
                mb: 6,
                fontSize: "1.8rem",
                textAlign: "center",
              }}
            >
              CAMPAIGNS FOR NGO
            </Typography>
          )}

          <Grid container spacing={5} justifyContent="center">
            {/* LEFT SIDE BUTTONS */}
            <Grid item xs={12} md={4}>
              <Box display="flex" flexDirection="column" gap={3}>
                {[
                  { label: "How we Manage Campaigns", path: "/manage" },
                  { label: "Awareness", path: "/awareness" },
                  { label: "Peer to Peer", path: "/peertopeer" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <Button
                      fullWidth
                      endIcon={<ArrowForwardIosIcon />}
                      onClick={() => navigate(item.path)}
                      sx={{
                        justifyContent: "space-between",
                        textTransform: "none",
                        fontWeight: 600,
                        px: 3,
                        py: 2,
                        color: "#fff",
                        background:
                          "linear-gradient(90deg, #0B3D3B, #145c59)",
                        borderRadius: 3,
                      }}
                    >
                      {item.label}
                    </Button>
                  </motion.div>
                ))}
              </Box>
            </Grid>

            {/* RIGHT SIDE CARDS (CENTERED) */}
            <Grid item xs={12} md={8}>
              <Grid
                container
                spacing={4}
                justifyContent="center"
                alignItems="center"
              >
                {campaigns.map((item, index) => (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    key={index}
                    display="flex"
                    justifyContent="center"
                  >
                    <motion.div
                      variants={cardAnimation}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                      style={{ width: "100%", maxWidth: 280 }}
                    >
                      <Card
                        sx={{
                          bgcolor: "#1e293b",
                          color: "#fff",
                          borderRadius: 4,
                          height: "100%",
                          textAlign: "center",
                        }}
                      >
                        <CardMedia
                          component="img"
                          image={item.image}
                          alt={item.title}
                          sx={{ height: 180, objectFit: "cover" }}
                        />
                        <CardContent>
                          <Typography
                            variant="body1"
                            sx={{
                              color: "#FFD700",
                              fontWeight: 700,
                            }}
                          >
                            {item.title}
                          </Typography>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ================= FOOTER ================= */}
      <Box sx={{ bgcolor: "#020617", "& *": { color: "#fff !important" } }}>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
