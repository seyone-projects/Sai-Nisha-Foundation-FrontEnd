import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  Grid,
  MenuItem,
  Paper,
  Container,
  CssBaseline,
  useMediaQuery,
  keyframes,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "../page/Footer";


import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";

const creamBg = "#F7F4EC";
const navyText = "#1F2F3F";
const olive = "#7C8F29";
const gold = "#D68910";


const theme = createTheme({
  typography: {
    fontFamily: `"Poppins", "Roboto", "Helvetica", "Arial", sans-serif`,
    h2: { fontWeight: 900 },
    h4: { fontWeight: 800 },
    h5: { fontWeight: 700 },
    body1: { fontWeight: 400 },
    body2: { fontWeight: 400 },
  },
});


const floatUp = keyframes`
  0% { transform: translateY(0) scale(1); opacity: 0; }
  20% { opacity: 0.5; }
  80% { opacity: 0.5; }
  100% { transform: translateY(-120vh) scale(1.5); opacity: 0; }
`;

const BubblesBackground = () => {
  const bubbleArray = Array.from({ length: 25 });
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      {bubbleArray.map((_, i) => {
        const size = Math.random() * 20 + 10;
        const left = Math.random() * 100;
        const duration = Math.random() * 12 + 8;
        const delay = Math.random() * 10;

        return (
          <Box
            key={i}
            sx={{
              position: "absolute",
              bottom: "-50px",
              left: `${left}%`,
              width: size,
              height: size,
              borderRadius: "50%",
              background: `radial-gradient(circle at 30% 30%, rgba(214, 137, 16, 0.4), rgba(255, 255, 255, 0.1))`,
              boxShadow: `0 0 10px rgba(214, 137, 16, 0.2)`,
              animation: `${floatUp} ${duration}s linear infinite`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}
    </Box>
  );
};

export default function VolunteerForm() {
  const isMobile = useMediaQuery("(max-width:600px)");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    role: "",
    availability: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Volunteer Form Data:", formData);
    alert("Thank you for volunteering!");
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box
        sx={{
          py: { xs: 6, md: 10 },
          background: `linear-gradient(180deg, ${creamBg} 0%, #ffffff 100%)`,
          minHeight: "100vh",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <BubblesBackground />

        <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
          <Paper
            elevation={8}
            sx={{
              p: { xs: 3, md: 5 },
              borderRadius: 6,
              boxShadow: "0 20px 45px rgba(0,0,0,0.12)",
              bgcolor: "rgba(255, 255, 255, 0.85)",
              backdropFilter: "blur(4px)", 
            }}
          >
            <Typography
              variant={isMobile ? "h4" : "h3"}
              textAlign="center"
              sx={{ fontWeight: 900, color: navyText, mb: 1 }}
            >
              Volunteer <span style={{ color: gold }}>With Us</span>
            </Typography>

            <Typography
              textAlign="center"
              sx={{ color: olive, fontWeight: 600, mb: 4 }}
            >
              Be the reason someone smiles today
            </Typography>

            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    InputProps={{ sx: { borderRadius: 3, bgcolor: "#FFFDF7" } }}
                  />
                </Grid>

                <Grid item size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    InputProps={{ sx: { borderRadius: 3, bgcolor: "#FFFDF7" } }}
                  />
                </Grid>

                <Grid item size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    InputProps={{ sx: { borderRadius: 3, bgcolor: "#FFFDF7" } }}
                  />
                </Grid>

                <Grid item size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Age"
                    name="age"
                    type="number"
                    value={formData.age}
                    onChange={handleChange}
                    InputProps={{ sx: { borderRadius: 3, bgcolor: "#FFFDF7" } }}
                  />
                </Grid>

                <Grid item size={{ xs: 12, md: 6 }}>
                  <TextField
                    select
                    fullWidth
                    label="Preferred Volunteer Role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    InputProps={{ sx: { borderRadius: 3, bgcolor: "#FFFDF7" } }}
                  >
                    <MenuItem value="Medical Support">Medical Support</MenuItem>
                    <MenuItem value="Education">Education</MenuItem>
                    <MenuItem value="Services">Services</MenuItem>
                    <MenuItem value="Careers">Careers</MenuItem>
                  </TextField>
                </Grid>

                <Grid item size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    label="Availability (Days / Time)"
                    name="availability"
                    value={formData.availability}
                    onChange={handleChange}
                    InputProps={{ sx: { borderRadius: 3, bgcolor: "#FFFDF7" } }}
                  />
                </Grid>

                <Grid item size={{ xs: 12 }}>
                  <TextField
                    label="Message"
                    name="message"
                    multiline
                    rows={isMobile ? 4 : 6}
                    value={formData.message}
                    onChange={handleChange}
                    sx={{
                      width: "calc(500px)",
                      maxWidth: "100%", 
                    }}
                    InputProps={{
                      sx: {
                        borderRadius: 3,
                        bgcolor: "#FFFDF7",
                      },
                    }}
                  />
                </Grid>

                <Grid item size={{ xs: 12 }}>
                  <Box mt={4}>
                    <Button
                      type="submit"
                      fullWidth
                      size="large"
                      sx={{
                        mt: -5,
                        ml: { xs: 0, md: 0 },
                        px: 0,
                        py: 1.8,
                        fontWeight: 800,
                        borderRadius: 4,
                        fontSize: "1rem",
                        background: `linear-gradient(135deg, ${olive}, ${gold})`,
                        color: "#fff",
                        transition: "0.3s",
                        "&:hover": {
                          transform: "translateY(-2px)",
                          boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                        },
                      }}
                    >
                      Submit Volunteer Form
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Container>
      </Box>

      <Footer />
    </ThemeProvider>
  );
}