import React, { useState } from "react";
import { Box, TextField, Typography, Button, Grid, MenuItem, Paper, Container, CssBaseline, useMediaQuery, keyframes, createTheme, ThemeProvider } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Footer from "../page/Footer";
import "@fontsource/poppins/400.css"; import "@fontsource/poppins/700.css"; import "@fontsource/poppins/900.css";

const CLR = { dark: "#0A121E", teal: "#166352", muted: "#B0BEC5" };
const floatUp = keyframes`0%{transform:translateY(0);opacity:0} 20%,80%{opacity:0.3} 100%{transform:translateY(-120vh) scale(1.5);opacity:0}`;
const theme = createTheme({
  palette: { mode: 'dark', primary: { main: CLR.teal } },
  typography: { fontFamily: "Poppins, sans-serif" },
  components: { MuiOutlinedInput: { styleOverrides: { root: { borderRadius: 12, backgroundColor: "rgba(255,255,255,0.05)", "&:hover": { backgroundColor: "rgba(255,255,255,0.08)" } } } } }
});

export default function VolunteerForm() {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")), [formData, setFormData] = useState({ name: "", email: "", phone: "", age: "", role: "", availability: "", message: "" });
  const hndl = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const fields = [
    { n: "name", l: "Full Name", r: 1 }, { n: "email", l: "Email Address", t: "email", r: 1 },
    { n: "phone", l: "Phone Number", r: 1 }, { n: "age", l: "Age", t: "number" },
    { n: "role", l: "Preferred Role", s: 1, o: ["Medical Support", "Education", "Services", "Careers"] },
    { n: "availability", l: "Availability (Days / Time)" }
  ];

  return (
    <ThemeProvider theme={theme}><CssBaseline />
      <Button href="https://wa.me/919962290875" target="_blank" sx={{ position: "fixed", bottom: 20, right: 20, zIndex: 99, minWidth: 56, height: 56, borderRadius: "50%", bgcolor: "#25D366", color: "#fff", "&:hover": { bgcolor: "#1EBE5D", transform: "scale(1.1)" } }}><WhatsAppIcon /></Button>
      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: CLR.dark, minHeight: "100vh", position: "relative", overflow: "hidden" }}>
        {[...Array(15)].map((_, i) => (
          <Box key={i} sx={{ position: "absolute", bottom: -50, left: `${Math.random() * 100}%`, width: 15, height: 15, borderRadius: "50%", background: "radial-gradient(circle, rgba(22,99,82,0.4), transparent)", animation: `${floatUp} ${Math.random() * 10 + 8}s linear infinite`, animationDelay: `${Math.random() * 5}s` }} />
        ))}
        <Container maxWidth="sm" sx={{ position: "relative", zIndex: 1 }}>
          <Paper sx={{ p: { xs: 3, md: 5 }, borderRadius: 6, border: "1px solid rgba(255,255,255,0.1)", bgcolor: "rgba(15, 28, 46, 0.8)", backdropFilter: "blur(10px)", boxShadow: 24 }}>
            <Typography variant={isMobile ? "h4" : "h3"} textAlign="center" sx={{ fontWeight: 900, mb: 1, textTransform: 'uppercase', color: CLR.teal }}>Volunteer</Typography>
            <Typography textAlign="center" sx={{ color: CLR.muted, mb: 4, letterSpacing: 1, fontSize: "0.85rem" }}>BE THE REASON SOMEONE SMILES TODAY</Typography>
            <form onSubmit={(e) => { e.preventDefault(); alert("Thank you for volunteering!"); }}>
              <Grid container spacing={2.5}>
                {fields.map((f) => (
                  <Grid item xs={12} key={f.n}>
                    <TextField fullWidth label={f.l} name={f.n} type={f.t || "text"} required={!!f.r} select={!!f.s} value={formData[f.n]} onChange={hndl}>
                      {f.o?.map((opt) => <MenuItem key={opt} value={opt}>{opt}</MenuItem>)}
                    </TextField>
                  </Grid>
                ))}
                <Grid item xs={12}>
                  <TextField fullWidth multiline rows={4} label="Message" name="message" placeholder="Tell us more..." value={formData.message} onChange={hndl} />
                </Grid>
                <Grid item xs={12} sx={{ mt: 1 }}>
                  <Button type="submit" fullWidth size="large" sx={{ py: 2, fontWeight: 700, borderRadius: 3, color: "#fff", background: `linear-gradient(90deg, #0D4D3E, ${CLR.teal})`, boxShadow: "0 4px 15px rgba(13, 77, 62, 0.4)", "&:hover": { transform: "translateY(-2px)", filter: "brightness(1.2)" }, transition: "0.3s" }}>Submit Volunteer Form</Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Container>
      </Box>
      <Box sx={{ bgcolor: "#020617", "& *": { color: "#fff !important" } }}><Footer /></Box>
    </ThemeProvider>
  );
}