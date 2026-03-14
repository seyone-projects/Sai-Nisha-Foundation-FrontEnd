import React, { useState } from "react";
import { Box, Typography, Grid, TextField, Button, MenuItem, Select, FormControl, InputLabel, Card, InputAdornment, CssBaseline, Divider, useMediaQuery } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import emailjs from "@emailjs/browser";
import Footer from "./Footer";

const [darkNavy, tealGreen, emeraldGreen, textWhite, lightGrey] = ["#0B1120", "#0E4D44", "#157A6E", "#FFFFFF", "#B0BCC2"];
const theme = createTheme({ palette: { mode: 'dark', primary: { main: emeraldGreen } }, typography: { fontFamily: `"Poppins", sans-serif`, h3: { fontWeight: 900 } }, components: { MuiTextField: { styleOverrides: { root: { '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.23)' } } } } } } });
const BubblesBackground = () => (
  <Box sx={{ position: "fixed", inset: 0, zIndex: 1, overflow: "hidden", pointerEvents: "none" }}>
    {[...Array(40)].map((_, i) => {
      const size = Math.random() * 20 + 8, left = Math.random() * 100, dur = Math.random() * 10 + 10, del = Math.random() * 20, isG = i % 2 === 0;
      return <Box key={i} sx={{ position: "absolute", bottom: "-30px", left: `${left}%`, width: size, height: size, backgroundColor: isG ? "rgba(6, 68, 57, 0.45)" : "rgba(255, 255, 255, 0.1)", borderRadius: "50%", boxShadow: `0 0 15px 4px ${isG ? "rgba(6,68,57,0.3)" : "rgba(255,255,255,0.05)"}`, opacity: 0, animation: `floatUp ${dur}s linear infinite ${del}s` }} />;
    })}
    <style>{`@keyframes floatUp { 0% { transform: translateY(0) scale(1); opacity: 0; } 10% { opacity: 0.7; } 90% { opacity: 0.6; } 100% { transform: translateY(-110vh) scale(1.4); opacity: 0; } }`}</style>
  </Box>
);

export default function ContactUs() {
  const isMobile = useMediaQuery("(max-width:600px)"), [type, setType] = useState(""), [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: "", initial: "", email: "", mobile: "", message: "" });
  const handleChange = (f) => (e) => setFormData({ ...formData, [f]: e.target.value });

  const handleSubmit = async () => {
    if (!type || !formData.name || !formData.email || !formData.mobile || !formData.message) return alert("Please fill all required fields");
    try {
      await emailjs.send("service_eb25s1n", "__ejs-test-mail-service__", { type, ...formData }, "4GsDVNd7LMiEbRwQY");
      setSuccess(true); setFormData({ name: "", initial: "", email: "", mobile: "", message: "" }); setType("");
    } catch (e) { alert("Failed to send message. Try again."); }
  };

  return (
    <ThemeProvider theme={theme}><CssBaseline />
      <Box sx={{ position: "fixed", bottom: 20, right: 20, zIndex: 9999 }}><Button component="a" href="https://wa.me/919962290875" target="_blank" sx={{ minWidth: 0, width: 56, height: 56, borderRadius: "50%", backgroundColor: "#25D366", color: "#fff", "&:hover": { backgroundColor: "#1EBE5D", transform: "scale(1.1)" } }}><WhatsAppIcon /></Button></Box><BubblesBackground />
      <Box sx={{ py: 10, background: darkNavy, minHeight: "100vh", mt: -12 }}>
        <Card sx={{ width: isMobile ? "95%" : "90%", maxWidth: "800px", mx: "auto", borderRadius: 6, border: `1px solid ${emeraldGreen}`, background: "#111827", boxShadow: "0px 10px 30px rgba(0,0,0,0.5)" }}>
          <Box sx={{ background: `linear-gradient(135deg, ${tealGreen}, ${emeraldGreen})`, py: 4, textAlign: "center" }}><Typography variant="h3" sx={{ color: textWhite , fontFamily: "'Playfair Display', serif" }}>Contact Us</Typography><Typography sx={{ color: lightGrey, fontFamily: "'Playfair Display', serif"  }}>Carrying His Light Forward</Typography></Box>
          <Divider sx={{ height: 4, background: `linear-gradient(90deg, ${emeraldGreen}, #2DD4BF)`, border: "none" }} />
          <Box sx={{ px: isMobile ? 3 : 10, py: 6 }}><Grid container spacing={4} direction="column" alignItems="center">
            <Grid item xs={12} sx={{ width: "100%" }}><FormControl fullWidth><InputLabel sx={{ color: lightGrey }}>Type *</InputLabel><Select value={type} label="Type *" onChange={(e) => setType(e.target.value)} sx={{ color: textWhite }}><MenuItem value="Volunteering">Volunteering</MenuItem><MenuItem value="Donation">Donation</MenuItem><MenuItem value="Others">Others</MenuItem></Select></FormControl></Grid>
            <Grid item xs={12} sx={{ width: "100%" }}><TextField label="Name *" fullWidth value={formData.name} onChange={handleChange("name")} /></Grid>
            <Grid item xs={12} sx={{ width: "100%" }}><TextField label="Initial" fullWidth value={formData.initial} onChange={handleChange("initial")} /></Grid>
            <Grid item xs={12} sx={{ width: "100%" }}><TextField label="Email *" fullWidth value={formData.email} onChange={handleChange("email")} InputProps={{ endAdornment: <InputAdornment position="end"><EmailIcon sx={{ color: emeraldGreen }} /></InputAdornment> }} /></Grid>
            <Grid item xs={12} sx={{ width: "100%" }}><TextField label="Mobile *" fullWidth value={formData.mobile} onChange={handleChange("mobile")} /></Grid>
            <Grid item xs={12} sx={{ width: "100%" }}><TextField label="Message *" multiline rows={5} fullWidth value={formData.message} onChange={handleChange("message")} /></Grid>
            <Grid item xs={12} sx={{ width: "100%", textAlign: "center", mt: 4 }}><Button variant="contained" onClick={handleSubmit} sx={{ background: `linear-gradient(90deg, ${tealGreen}, ${emeraldGreen})`, width: isMobile ? "100%" : "40%", py: 2, borderRadius: 2, fontWeight: 700, color: textWhite, textTransform: "none", fontSize: "1.2rem", transition: "all 0.3s ease", "&:hover": { background: emeraldGreen, boxShadow: `0px 0px 20px ${emeraldGreen}` , fontFamily: "'Playfair Display', serif" } }}>Submit Message</Button></Grid>
          </Grid></Box>
        </Card>
      </Box>
      <Box sx={{ bgcolor: "#020617", "& *": { color: "#fff !important" } }}><Footer /></Box>
    </ThemeProvider>
  );
}