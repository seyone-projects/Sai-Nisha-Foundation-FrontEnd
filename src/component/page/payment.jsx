import React, { useState } from "react";
import { Box, Typography, Card, Grid, Button, TextField, ToggleButton, ToggleButtonGroup, useMediaQuery, Container, CssBaseline, keyframes, createTheme, ThemeProvider } from "@mui/material";
import Footer from "./Footer";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "@fontsource/poppins/300.css"; import "@fontsource/poppins/400.css"; import "@fontsource/poppins/500.css"; import "@fontsource/poppins/600.css"; import "@fontsource/poppins/700.css"; import "@fontsource/poppins/800.css"; import "@fontsource/poppins/900.css";

const [deepNavy, forestGreen, lightGreen, pureWhite, mutedGrey] = ["#050B18", "#064439", "#0A5D4D", "#FFFFFF", "rgba(255, 255, 255, 0.7)"];
const theme = createTheme({ typography: { fontFamily: `"Poppins", sans-serif`, h2: { fontWeight: 900 }, h5: { fontWeight: 800 } }, palette: { mode: 'dark', primary: { main: forestGreen } } });
const fadeIn = keyframes`from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); }`;

const BubblesBackground = () => (
  <Box sx={{ position: "fixed", inset: 0, zIndex: 1, overflow: "hidden", pointerEvents: "none" }}>
    {[...Array(40)].map((_, i) => {
      const size = Math.random() * 20 + 8, left = Math.random() * 100, dur = Math.random() * 10 + 10, del = Math.random() * 20, isG = i % 2 === 0;
      return <Box key={i} sx={{ position: "absolute", bottom: "-30px", left: `${left}%`, width: size, height: size, backgroundColor: isG ? "rgba(6, 68, 57, 0.45)" : "rgba(255, 255, 255, 0.1)", borderRadius: "50%", boxShadow: `0 0 15px 4px ${isG ? "rgba(6,68,57,0.3)" : "rgba(255,255,255,0.05)"}`, opacity: 0, animation: `floatUp ${dur}s linear infinite ${del}s` }} />;
    })}
    <style>{`@keyframes floatUp { 0% { transform: translateY(0) scale(1); opacity: 0; } 10% { opacity: 0.7; } 90% { opacity: 0.6; } 100% { transform: translateY(-110vh) scale(1.4); opacity: 0; } }`}</style>
  </Box>
);

export default function Payment() {
  const isMobile = useMediaQuery("(max-width:900px)"), [amount, setAmount] = useState("500"), [customAmount, setCustomAmount] = useState("");
  const handleAmountChange = (_, v) => v && (setAmount(v) || setCustomAmount(""));
  const inputSx = { 
    mb: 2.5,
    "& .MuiOutlinedInput-root": { 
        borderRadius: "12px", 
        backgroundColor: "rgba(255,255,255,0.05)" 
    } 
  };

  return (
    <ThemeProvider theme={theme}><CssBaseline />
      {/* WhatsApp FAB */}
      <Box sx={{ position: "fixed", bottom: 20, right: 20, zIndex: 9999 }}><Button component="a" href="https://wa.me/919962290875" target="_blank" rel="noopener" sx={{ minWidth: 0, width: 56, height: 56, borderRadius: "50%", bgcolor: "#25D366", color: "#fff", boxShadow: "0 10px 30px rgba(0,0,0,0.3)", "&:hover": { bgcolor: "#1EBE5D", transform: "scale(1.1)" } }}><WhatsAppIcon sx={{ fontSize: 30 }} /></Button></Box>
      
      <Box sx={{ bgcolor: deepNavy, minHeight: "100vh", position: "relative", zIndex: 1 }}><BubblesBackground />
        <Box sx={{ py: { xs: 8, md: 10 }, position: "relative", zIndex: 2 }}><Container maxWidth="sm">
          
          <Typography variant={isMobile ? "h4" : "h2"} align="center" sx={{ mt: -10, fontWeight: 900, mb: 4, color: pureWhite, textTransform: "uppercase", animation: `${fadeIn} 1s ease-out`, letterSpacing: 1 , fontFamily: "'Playfair Display', serif" }}>Support Our Cause</Typography>
          
          <Card sx={{ p: { xs: 3, md: 5 }, borderRadius: 6, border: "1px solid rgba(255,255,255,0.1)", bgcolor: "rgba(255,255,255,0.05)", backdropFilter: "blur(20px)", boxShadow: "0 15px 35px rgba(0,0,0,0.5)", "&:hover": { border: "1px solid rgba(255,255,255,0.2)" } , fontFamily: "'Playfair Display', serif"  }}>
            <Typography variant="h5" fontWeight={800} color={pureWhite} textAlign="center">Make a Donation</Typography>
            <Typography textAlign="center" color={mutedGrey} mb={4} fontWeight={500}>Your contribution helps us create real impact</Typography>
            
            {/* Amount Selection */}
            <Typography fontWeight={700} fontSize={14} mb={1.5} color={mutedGrey} sx={{ textTransform: 'uppercase', letterSpacing: 1.5 }}>Select Amount (₹)</Typography>
            <ToggleButtonGroup value={amount} exclusive onChange={handleAmountChange} fullWidth sx={{ mb: 2, "& .MuiToggleButton-root": { borderRadius: "12px", mx: 0.5, border: "1px solid rgba(255,255,255,0.1) !important", color: pureWhite } }}>
              {["500", "1000", "2500", "5000"].map((v) => <ToggleButton key={v} value={v} sx={{ fontWeight: 700, "&.Mui-selected": { bgcolor: `${forestGreen} !important`, color: "#fff" } }}>₹{v}</ToggleButton>)}
            </ToggleButtonGroup>

            {/* Custom Amount Field */}
            <TextField 
                fullWidth 
                label="Custom Amount" 
                type="number" 
                variant="outlined"
                value={customAmount} 
                onChange={(e) => { setCustomAmount(e.target.value); setAmount(""); }} 
                sx={inputSx} 
            />
            
            <Typography fontWeight={700} fontSize={14} mb={2} mt={1} color={mutedGrey} sx={{ textTransform: 'uppercase', letterSpacing: 1.5 }}>Donor Details</Typography>
            
            {/* Donor Detail Fields - Now exactly the same width and style */}
            <Box>
                <TextField fullWidth label="Full Name" variant="outlined" sx={inputSx} />
                <TextField fullWidth label="Email Address" variant="outlined" sx={inputSx} />
                <TextField fullWidth label="Phone Number" variant="outlined" sx={inputSx} />
            </Box>

            <Button fullWidth size="large" endIcon={<ChevronRightIcon />} onClick={() => alert("Payment Gateway Integration Pending")} sx={{ mt: 2, py: 1.8, fontSize: 16, fontWeight: 800, borderRadius: 3, bgcolor: forestGreen, color: "#fff", "&:hover": { bgcolor: lightGreen, transform: "translateY(-3px)" }, transition: "0.4s" }}>Proceed to Pay</Button>
            <Typography mt={2.5} textAlign="center" fontSize={11} fontWeight={600} color={mutedGrey} sx={{ letterSpacing: 2 }}>SECURE PAYMENT • 100% TRANSPARENT USAGE</Typography>
          </Card>
        </Container></Box>
        <Box sx={{ bgcolor: "#050B18", "& *": { color: "#fff !important" , fontFamily: "'Playfair Display', serif" } }}><Footer /></Box>
      </Box>
    </ThemeProvider>
  );
}