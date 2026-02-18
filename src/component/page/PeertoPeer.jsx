import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CssBaseline,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { motion } from "framer-motion";
import Footer from "../page/Footer"; 

// Images
import heroBg from "../page/image/volunteers 2.png";
import idea1 from "../page/image/pets.jpg";
import idea2 from "../page/image/gettyimages-1637251600-612x612.jpg";
import idea3 from "../page/image/gettyimages-964352016-612x612.jpg";
import idea4 from "../page/image/prt images.jpg";

const theme = createTheme({
  palette: {
    primary: { main: "#6C63FF" },
    secondary: { main: "#FF6F91" },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

const PeerToPeer = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* HERO SECTION */}
      <Box
        sx={{
          height: { xs: "90vh", md: "100vh" },
          backgroundImage: `linear-gradient(rgba(53, 52, 130, 0.75), rgba(63, 52, 130, 0.75)), url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h2"
              fontWeight="bold"
              sx={{ mb: 3, fontSize: { xs: "32px", md: "56px" } }}
            >
              Emergency <br /> Medical Care
            </Typography>

            <Typography sx={{ mb: 4, maxWidth: 600, mx: "auto" }}>
              Together let’s get fitter with our furry friends and turn those
              walkies into fundraising dollars for new Born emergency
              across the country.
            </Typography>

            <Box sx={{ mb: 4 }}>
              <Typography>$11,791 raised</Typography>
              <Box
                sx={{
                  height: 8,
                  bgcolor: "#fff",
                  borderRadius: 10,
                  mt: 1,
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    width: "60%",
                    height: "100%",
                    bgcolor: "secondary.main",
                  }}
                />
              </Box>
              <Typography sx={{ mt: 1 }}>$25,000 goal</Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
              <Button
                variant="contained"
                color="secondary"
                sx={{ px: 4, borderRadius: "30px" }}
              >
                Donate
              </Button>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* HOW IT WORKS */}
      <Box sx={{ py: 10, bgcolor: "#F8F9FF" }}>
        <Container>
          <Typography
            variant="h5"
            textAlign="center"
            fontWeight="bold"
            sx={{ mb: 6 }}
          >
            HOW IT WORKS
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {[
              {
                title: "Sign up",
                desc: "Register you and your dog and start fundraising.",
              },
              {
                title: "Take the lead",
                desc: "Pledge a distance and start walking together.",
              },
              {
                title: "Get Fundraising",
                desc: "Share your page and raise funds for rescue shelters.",
              },
            ].map((item, index) => (
              <Grid
                item
                xs={12}
                md={4}
                key={index}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <motion.div whileHover={{ y: -10 }}>
                  <Card
                    sx={{
                      p: 3,
                      textAlign: "center",
                      borderRadius: 4,
                      boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                      maxWidth: 320,
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        color="primary"
                        sx={{ mb: 2 }}
                      >
                        {item.title}
                      </Typography>
                      <Typography color="text.secondary">
                        {item.desc}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* EXPLORE FUNDRAISING IDEAS */}
      <Box sx={{ py: 10 }}>
        <Container>
          <Typography
            variant="h5"
            textAlign="center"
            fontWeight="bold"
            sx={{ mb: 6 }}
          >
            EXPLORE FUNDRAISING IDEAS
          </Typography>

          <Grid container spacing={4}>
            {[idea1, idea2, idea3, idea4].map((img, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Card
                    sx={{
                      borderRadius: 4,
                      overflow: "hidden",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="180"
                      image={img}
                      alt="idea"
                    />
                    <CardContent>
                      <Typography fontWeight="bold" sx={{ mb: 1 }}>
                        Fundraising Idea
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Start your own creative fundraising journey.
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

       <Box sx={{ bgcolor: "#020617", "& *": { color: "#fff !important" } }}>
              <Footer />
            </Box>
    </ThemeProvider>
  );
};

export default PeerToPeer;
