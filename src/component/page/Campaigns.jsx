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
import { motion, useScroll, useTransform } from "framer-motion";
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Campaign() {
  const navigate = useNavigate();
  const isDesktop = useMediaQuery("(min-width:900px)");
  
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacityHero = useTransform(scrollY, [0, 300], [1, 0]);

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
          '&:hover': { bgcolor: "#128C7E", transform: 'scale(1.1)' },
          transition: 'all 0.3s ease'
        }}
      >
        <WhatsAppIcon />
      </Button>


      <Box
        sx={{
          width: "100%",
          height: { xs: "80vh", md: "100vh" },
          overflow: "hidden",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <motion.div
          style={{
            y: y1,
            backgroundImage: `url(${campaignBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "absolute",
            inset: 0,
            zIndex: -1,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(0,0,0,0.4), #0f172a)",
            zIndex: 0,
          }}
        />

        <Container maxWidth="md" sx={{ position: "relative", zIndex: 2 }}>
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={containerVariants}
            style={{ opacity: opacityHero }}
          >
            <motion.div variants={itemVariants}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  color: "#FFD700",
                  mb: 1,
                  letterSpacing: "4px",
                  fontSize: { xs: "2.5rem", md: "4.5rem" },
                  textShadow: "2px 2px 10px rgba(0,0,0,0.5)",
                  textAlign: "center",
                }}
              >
                OUR CAMPAIGNS
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Box
                sx={{
                  width: 60,
                  height: 3,
                  bgcolor: "#FFD700",
                  mx: "auto",
                  mb: 4,
                }}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1.1rem", md: "1.4rem" },
                  lineHeight: 1.6,
                  color: "#f1f5f9",
                  fontWeight: 300,
                  fontStyle: 'italic',
                  textAlign: "center",
                }}
              >
                "From Grassroots Awareness to Sustainable Change"
              </Typography>
            </motion.div>
            
            <motion.div variants={itemVariants} style={{ marginTop: '30px' }}>
            </motion.div>
          </motion.div>
        </Container>
      </Box>

      {/* ================= CONTENT SECTION ================= */}
      <Box sx={{ bgcolor: "#0f172a", py: { xs: 8, md: 15 } }}>
        <Container maxWidth="lg">

          {/* Scrolling Reveal Heading */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <Typography
              variant="h3"
              sx={{
                color: "#ffffff",
                fontWeight: 700,
                mb: 8,
                fontSize: { xs: "2rem", md: "3rem" },
                textAlign: "center",
                letterSpacing: '2px'
              }}
            >
              CAMPAIGNS FOR NGO
            </Typography>
          </motion.div>

          <Grid container spacing={8} alignItems="flex-start">
            {/* LEFT SIDE NAVIGATION */}
            <Grid item xs={12} md={4}>
              <Box display="flex" flexDirection="column" gap={2}>
                {[
                  { label: "How we Manage Campaigns", path: "/manage" },
                  { label: "Awareness Drives", path: "/awareness" },
                  { label: "Peer to Peer Support", path: "/peertopeer" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.6 }}
                  >
                    <Button
                      fullWidth
                      endIcon={<ArrowForwardIosIcon sx={{ fontSize: '12px !important' }} />}
                      onClick={() => navigate(item.path)}
                      sx={{
                        justifyContent: "space-between",
                        textTransform: "uppercase",
                        letterSpacing: '1px',
                        fontSize: '0.85rem',
                        fontWeight: 500,
                        px: 3,
                        py: 2.5,
                        color: "#fff",
                        borderBottom: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: 0,
                        '&:hover': {
                          bgcolor: "rgba(255,215,0,0.05)",
                          color: "#FFD700",
                          paddingLeft: '35px'
                        },
                        transition: 'all 0.4s ease'
                      }}
                    >
                      {item.label}
                    </Button>
                  </motion.div>
                ))}
              </Box>
            </Grid>

            {/* RIGHT SIDE CARDS (Refined Layout) */}
            <Grid item xs={12} md={8}>
              <Grid container spacing={3}>
                {campaigns.map((item, index) => (
                  <Grid item xs={12} sm={6} md={6} key={index}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ y: -10 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      <Card
                        sx={{
                          bgcolor: "transparent",
                          color: "#fff",
                          borderRadius: 0,
                          boxShadow: 'none',
                          border: '1px solid rgba(255,255,255,0.05)',
                          overflow: 'hidden'
                        }}
                      >
                        <Box sx={{ overflow: 'hidden' }}>
                            <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.6 }}>
                                <CardMedia
                                component="img"
                                image={item.image}
                                alt={item.title}
                                sx={{ height: 240, objectFit: "cover" }}
                                />
                            </motion.div>
                        </Box>
                        <CardContent sx={{ px: 0, pt: 3 }}>
                          <Typography
                            variant="h6"
                            sx={{
                              color: "#FFD700",
                              fontWeight: 600,
                              fontSize: '1rem',
                              letterSpacing: '1px'
                            }}
                          >
                            {item.title}
                          </Typography>
                          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase' }}>
                             Impact Initiative • 2026
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
      <Box sx={{ bgcolor: "#020617", borderTop: '1px solid rgba(255,255,255,0.05)', "& *": { color: "#fff !important" } }}>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}