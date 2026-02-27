import React from "react";
import {
  Box,
  Button,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CssBaseline,
  IconButton,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Footer from "../page/Footer";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import img1 from "../page/image/home1.jpg";
import img2 from "../page/image/home.jpg";
import img3 from "../page/image/images_1.jpg";
import img4 from "../page/image/images_2.jpg";
import img5 from "../page/image/images_3.jpg";
import img6 from "../page/image/images_4.jpg";
import img7 from "../page/image/images_5.jpg";
import img8 from "../page/image/images_6.jpg";
import img9 from "../page/image/images_7.jpg";
import img10 from "../page/image/images_8.jpg";
import img11 from "../page/image/images_9.jpg";

import bgImage from "../page/image/home1.jpg";

const theme = createTheme({
  palette: {
    primary: { main: "#f5b400" },
    background: { default: "#0b1d3a" },
  },
  typography: {
    fontFamily: `"Poppins","Roboto","Helvetica","Arial",sans-serif`,
  },
});

const mediaList = [
  { type: "image", src: img1, title: "Healthcare Outreach" },
  { type: "image", src: img2, title: "Education for All" },
  { type: "image", src: img3, title: "Rural Development" },
  { type: "image", src: img4, title: "Clean Water Initiative" },
  { type: "image", src: img5, title: "Food Distribution" },
  { type: "image", src: img6, title: "Women Empowerment" },
  { type: "image", src: img7, title: "Environmental Care" },
  { type: "image", src: img8, title: "Youth Mentorship" },
  { type: "image", src: img9, title: "Elderly Support" },
  { type: "image", src: img10, title: "Community Welfare" },
  { type: "image", src: img11, title: "Child Protection" },
];

export default function Manage() {
  const navigate = useNavigate();

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

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            backgroundImage: `
              linear-gradient(
                rgba(5, 15, 35, 0.92),
                rgba(8, 22, 45, 0.95)
              ),
              url(${bgImage})
            `,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }}
        >
        <Box 
  sx={{ 
    position: "absolute", 
    top: 80, 
    right: { xs: 20, md: 40 },
    zIndex: 10 
  }}
>
  <Button
    onClick={() => navigate(-1)}
    startIcon={<ArrowBackIosNewIcon />}
    sx={{
      color: "#fff",
      textTransform: "none",
      fontWeight: 600,
      fontSize: "1.1rem",
      bgcolor: "rgba(255, 255, 255, 0.1)",
      px: 3,
      py: 1,
      borderRadius: "30px",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      "&:hover": {
        bgcolor: "#f5b400",
        color: "#0b1d3a",
        borderColor: "#f5b400",
      },
    }}
  >
    Back
  </Button>
</Box>
          {/* HERO TITLE SECTION */}
          <Box sx={{ textAlign: "center", pt: 12, pb: 6 }}>
            <Typography
              variant="h2"
              fontWeight={900}
              sx={{
                color: "#ffffff",
                letterSpacing: 3,
                fontSize: { xs: "2.5rem", md: "3.75rem" },
              }}
            >
              MANAGE{" "}
              <Box component="span" sx={{ color: "#f5b400" }}>
                CAMPAIGNS
              </Box>
            </Typography>

            <Typography
              sx={{
                mt: 2,
                color: "#cbd5e1",
                letterSpacing: 2,
              }}
            >
              ORGANIZE • TRACK • GROW
            </Typography>
          </Box>

          {/* GRID SECTION */}
          <Box sx={{ px: { xs: 2, md: 6 }, pb: 8, flex: 1 }}>
            <Grid container spacing={4} justifyContent="center">
              {mediaList.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.08 }}
                    viewport={{ once: true }}
                  >
                    <Card
                      sx={{
                        borderRadius: 4,
                        overflow: "hidden",
                        background: "rgba(255,255,255,0.95)",
                        backdropFilter: "blur(6px)",
                        boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-8px)",
                          boxShadow: "0 25px 70px rgba(245,180,0,0.4)",
                        },
                      }}
                    >
                      <CardMedia
                        component="img"
                        image={item.src}
                        alt={item.title}
                        sx={{
                          height: 240,
                          objectFit: "cover",
                        }}
                      />

                      <CardContent sx={{ textAlign: "center", py: 3 }}>
                        <Typography
                          fontWeight={800}
                          variant="subtitle1"
                          sx={{ color: "#0b1d3a" }}
                        >
                          {item.title}
                        </Typography>

                        <Typography
                          variant="body2"
                          sx={{
                            mt: 1,
                            color: "#f5b400",
                            fontWeight: 600,
                          }}
                        >
                          Campaign #{index + 1}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* FOOTER */}
          <Box
            sx={{
              bgcolor: "#050f23",
              "& *": { color: "#fff !important" },
            }}
          >
            <Footer />
          </Box>
        </Box>
      </motion.div>
    </ThemeProvider>
  );
}