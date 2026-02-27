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
   IconButton, 
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Footer from "../page/Footer"; 
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";


const darkNavy = "#0A121E";
const emeraldGreen = "#0D4D3E"; 
const lightTeal = "#166352";
const whiteText = "#FFFFFF";
const mutedText = "#B0BEC5";

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: emeraldGreen,
    },
  },
  typography: {
    fontFamily: `"Poppins", "Roboto", "Helvetica", "Arial", sans-serif`,
    h2: { fontWeight: 900 },
    h3: { fontWeight: 800 },
    h4: { fontWeight: 800 },
    h5: { fontWeight: 700 },
    body1: { fontWeight: 400 },
    body2: { fontWeight: 400 },
  },
});

const floatUp = keyframes`
  0% { transform: translateY(0) scale(1); opacity: 0; }
  20% { opacity: 0.3; }
  80% { opacity: 0.3; }
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
              background: `radial-gradient(circle at 30% 30%, rgba(22, 99, 82, 0.4), rgba(255, 255, 255, 0.05))`,
              boxShadow: `0 0 10px rgba(13, 77, 62, 0.2)`,
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

      <Box
        sx={{
          py: { xs: 6, md: 10 },
          background: darkNavy, 
          minHeight: "100vh",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <BubblesBackground />

        <Container maxWidth="md" sx={{ position: "relative", zIndex: 1, mt: -8 }}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 5 },
              borderRadius: 6,
              border: "1px solid rgba(255, 255, 255, 0.1)",
              bgcolor: "rgba(15, 28, 46, 0.8)", 
              backdropFilter: "blur(10px)",
            }}
          >
            <Typography
              variant={isMobile ? "h4" : "h3"}
              textAlign="center"
              sx={{ fontWeight: 900, color: whiteText, mb: 1, textTransform: 'uppercase' }}
            >
              <span style={{ color: lightTeal }}> Volunteer </span>
            </Typography>

            <Typography
              textAlign="center"
              sx={{ color: mutedText, fontWeight: 500, mb: 4, letterSpacing: 1 }}
            >
              BE THE REASON SOMEONE SMILES TODAY
            </Typography>

            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    sx={{ "& .MuiOutlinedInput-root": { borderRadius: 3, bgcolor: "rgba(255,255,255,0.05)" } }}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    sx={{ "& .MuiOutlinedInput-root": { borderRadius: 3, bgcolor: "rgba(255,255,255,0.05)" } }}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    sx={{ "& .MuiOutlinedInput-root": { borderRadius: 3, bgcolor: "rgba(255,255,255,0.05)" } }}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Age"
                    name="age"
                    type="number"
                    value={formData.age}
                    onChange={handleChange}
                    sx={{ "& .MuiOutlinedInput-root": { borderRadius: 3, bgcolor: "rgba(255,255,255,0.05)" } }}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    select
                    fullWidth
                    label="Preferred Volunteer Role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    sx={{ "& .MuiOutlinedInput-root": { borderRadius: 3, bgcolor: "rgba(255,255,255,0.05)" } }}
                  >
                    <MenuItem value="Medical Support">Medical Support</MenuItem>
                    <MenuItem value="Education">Education</MenuItem>
                    <MenuItem value="Services">Services</MenuItem>
                    <MenuItem value="Careers">Careers</MenuItem>
                  </TextField>
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Availability (Days / Time)"
                    name="availability"
                    value={formData.availability}
                    onChange={handleChange}
                    sx={{ "& .MuiOutlinedInput-root": { borderRadius: 3, bgcolor: "rgba(255,255,255,0.05)" } }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    label="Message"
                    name="message"
                    multiline
                    fullWidth
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    sx={{ 
                        "& .MuiOutlinedInput-root": { 
                            borderRadius: 3, 
                            bgcolor: "rgba(255,255,255,0.05)" 
                        } 
                    }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Box mt={2}>
                    <Button
                      type="submit"
                      fullWidth
                      size="large"
                      sx={{
                        py: 2,
                        fontWeight: 700,
                        borderRadius: 3,
                        fontSize: "1rem",
                        background: `linear-gradient(90deg, ${emeraldGreen}, ${lightTeal})`,
                        color: "#fff",
                        textTransform: 'uppercase',
                        transition: "0.3s",
                        "&:hover": {
                          background: lightTeal,
                          transform: "translateY(-2px)",
                          boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
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

    <Box sx={{ bgcolor: "#020617", "& *": { color: "#fff !important" } }}>
                <Footer />
              </Box>
    </ThemeProvider>
  );
}