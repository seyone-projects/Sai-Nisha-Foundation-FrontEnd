import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  Grid,
  Button,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  useMediaQuery,
  Container,
  CssBaseline,
  keyframes,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "./Footer";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ChevronRightIcon from "@mui/icons-material/ChevronRight"; // Added for the arrow icon in buttons

import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";

// Updated Color Palette from the Image
const deepNavy = "#050B18";
const forestGreen = "#064439";
const lightGreen = "#0A5D4D"; 
const pureWhite = "#FFFFFF";
const mutedGrey = "rgba(255, 255, 255, 0.7)";

const theme = createTheme({
  typography: {
    fontFamily: `"Poppins", "Roboto", "Helvetica", "Arial", sans-serif`,
    h2: { fontWeight: 900 },
    h5: { fontWeight: 800 },
    body1: { fontWeight: 400 },
    body2: { fontWeight: 400 },
  },
  // Added palette to fix TextField label colors on dark background
  palette: {
    mode: 'dark',
    primary: { main: forestGreen },
  }
});

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
`;

function BubblesBackground() {
  return (
    <Box
      sx={{
        position: "fixed", 
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {[...Array(40)].map((_, i) => {
        const size = Math.random() * 20 + 8;
        const randomLeft = Math.random() * 100;
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 20;

        // Updated bubble colors to match the theme
        const isGreen = i % 2 === 0;
        const color = isGreen ? "rgba(6, 68, 57, 0.45)" : "rgba(255, 255, 255, 0.1)";
        const glow = isGreen ? "rgba(6, 68, 57, 0.3)" : "rgba(255, 255, 255, 0.05)";

        return (
          <Box
            key={i}
            sx={{
              position: "absolute",
              bottom: "-30px",
              left: `${randomLeft}%`,
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: color,
              borderRadius: "50%",
              boxShadow: `0 0 15px 4px ${glow}`,
              opacity: 0,
              animation: `floatUp ${duration}s linear infinite`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}

      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          10% { opacity: 0.7; }
          90% { opacity: 0.6; }
          100% { transform: translateY(-110vh) scale(1.4); opacity: 0; }
        }
      `}</style>
    </Box>
  );
}

export default function Payment() {
  const isMobile = useMediaQuery("(max-width:900px)");
  const [amount, setAmount] = useState("500");
  const [customAmount, setCustomAmount] = useState("");

  const handleAmountChange = (_, value) => {
    if (value !== null) {
      setAmount(value);
      setCustomAmount("");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          zIndex: 9999,
        }}
      >
        <Button
          component="a"
          href="https://wa.me/919962290875"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            minWidth: 0,
            width: 56,
            height: 56,
            borderRadius: "50%",
            backgroundColor: "#25D366",
            color: "#fff",
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
            "&:hover": {
              backgroundColor: "#1EBE5D",
              transform: "scale(1.1)",
            },
          }}
        >
          <WhatsAppIcon sx={{ fontSize: 30 }} />
        </Button>
      </Box>

      {/* Background Changed to Deep Navy from Image */}
      <Box 
        sx={{ 
          backgroundColor: deepNavy,
          minHeight: "100vh",
          position: "relative",
          zIndex: 1,
        }}
      >
        <BubblesBackground />

        <Box sx={{ py: { xs: 8, md: 10 }, position: "relative", zIndex: 2 }}>
          <Container maxWidth="sm">
            <Typography
              variant={isMobile ? "h4" : "h2"}
              align="center"
              sx={{
                fontWeight: 900,
                mb: 4,
                color: pureWhite, // Changed to White
                textTransform: "uppercase",
                animation: `${fadeIn} 1s ease-out`,
                letterSpacing: 1
              }}
            >
              Support <span style={{ color: "#fff" }}>Our Cause</span>
            </Typography>

            <Card
              sx={{
                p: { xs: 3, md: 5 },
                borderRadius: 6, 
                border: "1px solid rgba(255, 255, 255, 0.1)",
                backgroundColor: "rgba(255, 255, 255, 0.05)", // Glassmorphism style for Dark UI
                backdropFilter: "blur(20px)",
                boxShadow: "0 15px 35px rgba(0,0,0,0.5)",
                transition: "0.4s",
                "&:hover": {
                  boxShadow: "0 25px 50px rgba(0,0,0,0.7)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }
              }}
            >
              <Typography
                variant="h5"
                fontWeight={800}
                color={pureWhite}
                textAlign="center"
                gutterBottom
              >
                Make a Donation
              </Typography>

              <Typography
                textAlign="center"
                color={mutedGrey}
                mb={4}
                fontWeight={500}
              >
                Your contribution helps us create real impact
              </Typography>

              <Typography fontWeight={700} fontSize={14} mb={1.5} color={mutedGrey} sx={{ textTransform: 'uppercase', letterSpacing: 1.5 }}>
                Select Amount (₹)
              </Typography>

              <ToggleButtonGroup
                value={amount}
                exclusive
                onChange={handleAmountChange}
                fullWidth
                sx={{ 
                    mb: 2,
                    "& .MuiToggleButton-root": {
                        borderRadius: "12px",
                        mx: 0.5,
                        border: "1px solid rgba(255, 255, 255, 0.1) !important",
                        color: pureWhite,
                    }
                }}
              >
                {["500", "1000", "2500", "5000"].map((val) => (
                  <ToggleButton
                    key={val}
                    value={val}
                    sx={{
                      fontWeight: 700,
                      "&.Mui-selected": {
                        backgroundColor: `${forestGreen} !important`, // Changed to Image Green
                        color: "#fff",
                        boxShadow: `0 4px 12px ${forestGreen}66`,
                      },
                    }}
                  >
                    ₹{val}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>

              <TextField
                fullWidth
                label="Custom Amount"
                variant="outlined"
                type="number"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setAmount("");
                }}
                sx={{ 
                    mb: 3,
                    "& .MuiOutlinedInput-root": { 
                        borderRadius: "12px",
                        backgroundColor: "rgba(255,255,255,0.05)"
                    }
                }}
              />

              <Typography fontWeight={700} fontSize={14} mb={1.5} color={mutedGrey} sx={{ textTransform: 'uppercase', letterSpacing: 1.5 }}>
                Donor Details
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField fullWidth label="Full Name" variant="outlined" sx={{ "& .MuiOutlinedInput-root": { borderRadius: "12px", backgroundColor: "rgba(255,255,255,0.05)" } }} />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Email Address" variant="outlined" sx={{ "& .MuiOutlinedInput-root": { borderRadius: "12px", backgroundColor: "rgba(255,255,255,0.05)" } }} />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Phone Number" variant="outlined" sx={{ "& .MuiOutlinedInput-root": { borderRadius: "12px", backgroundColor: "rgba(255,255,255,0.05)" } }} />
                </Grid>
              </Grid>

              <Button
                fullWidth
                size="large"
                endIcon={<ChevronRightIcon />}
                sx={{
                  mt: 4,
                  py: 1.8,
                  fontSize: 16,
                  fontWeight: 800,
                  borderRadius: 3,
                  backgroundColor: forestGreen, // Match Button in Image
                  color: "#fff",
                  boxShadow: `0 10px 20px rgba(0,0,0,0.3)`,
                  "&:hover": {
                    backgroundColor: lightGreen,
                    transform: "translateY(-3px)",
                  },
                  transition: "all 0.4s ease",
                }}
                onClick={() => alert("Payment Gateway Integration Pending")}
              >
                Proceed to Pay
              </Button>

              <Typography
                mt={2.5}
                textAlign="center"
                fontSize={11}
                fontWeight={600}
                color={mutedGrey}
                sx={{ letterSpacing: 2 }}
              >
                SECURE PAYMENT • 100% TRANSPARENT USAGE
              </Typography>
            </Card>
          </Container>
        </Box>

      
              <Box sx={{ bgcolor: "#050B18", "& *": { color: "#fff !important" } }}>
                     <Footer />
                   </Box>
      </Box>
    </ThemeProvider>
  );
}