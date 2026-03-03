import React, { useState } from "react";
import {
  Box, TextField, Typography, Button, Grid, MenuItem, Paper, Container, CssBaseline, useMediaQuery, keyframes
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Footer from "../page/Footer";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/900.css";

const COLORS = { dark: "#0A121E", emerald: "#0D4D3E", teal: "#166352", muted: "#B0BEC5" };

const theme = createTheme({
  palette: { mode: 'dark', primary: { main: COLORS.emerald } },
  typography: { fontFamily: "Poppins, sans-serif" },
});

const floatUp = keyframes`
  0% { transform: translateY(0); opacity: 0; }
  20%, 80% { opacity: 0.3; }
  100% { transform: translateY(-120vh) scale(1.5); opacity: 0; }
`;

const fieldStyle = { 
  "& .MuiOutlinedInput-root": { 
    borderRadius: 3, 
    bgcolor: "rgba(255,255,255,0.05)",
    "&:hover": { bgcolor: "rgba(255,255,255,0.08)" }
  } 
};

export default function VolunteerForm() {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [formData, setFormData] = useState({ 
    name: "", email: "", phone: "", age: "", role: "", availability: "", message: "" 
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const formFields = [
    { name: "name", label: "Full Name", required: true },
    { name: "email", label: "Email Address", type: "email", required: true },
    { name: "phone", label: "Phone Number", required: true },
    { name: "age", label: "Age", type: "number" },
    { name: "role", label: "Preferred Role", select: true, options: ["Medical Support", "Education", "Services", "Careers"] },
    { name: "availability", label: "Availability (Days / Time)" },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      {/* WhatsApp FAB */}
      <Button
        href="https://wa.me/919962290875" target="_blank"
        sx={{ 
          position: "fixed", bottom: 20, right: 20, zIndex: 99, 
          minWidth: 56, height: 56, borderRadius: "50%", 
          bgcolor: "#25D366", color: "#fff", 
          "&:hover": { bgcolor: "#1EBE5D", transform: "scale(1.1)" } 
        }}
      >
        <WhatsAppIcon />
      </Button>

      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: COLORS.dark, minHeight: "100vh", position: "relative", overflow: "hidden" }}>
        {[...Array(20)].map((_, i) => (
          <Box key={i} sx={{
            position: "absolute", bottom: -50, left: `${Math.random() * 100}%`,
            width: (Math.random() * 20 + 10), height: (Math.random() * 20 + 10), borderRadius: "50%",
            background: "radial-gradient(circle, rgba(22,99,82,0.4), rgba(255,255,255,0.05))",
            animation: `${floatUp} ${Math.random() * 12 + 8}s linear infinite`,
            animationDelay: `${Math.random() * 10}s`,
          }} />
        ))}

        <Container maxWidth="sm" sx={{ position: "relative", zIndex: 1 }}>
          <Paper sx={{ 
            p: { xs: 3, md: 5 }, 
            borderRadius: 6, 
            border: "1px solid rgba(255,255,255,0.1)", 
            bgcolor: "rgba(15, 28, 46, 0.8)", 
            backdropFilter: "blur(10px)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
          }}>
            
            <Typography variant={isMobile ? "h4" : "h3"} textAlign="center" sx={{ fontWeight: 900, mb: 1, textTransform: 'uppercase' }}>
              <span style={{ color: COLORS.teal }}> Volunteer </span>
            </Typography>
            
            <Typography textAlign="center" sx={{ color: COLORS.muted, fontWeight: 500, mb: 4, letterSpacing: 1, fontSize: "0.85rem" }}>
              BE THE REASON SOMEONE SMILES TODAY
            </Typography>

            <form onSubmit={(e) => { e.preventDefault(); console.log(formData); alert("Thank you for volunteering!"); }}>
              <Grid container spacing={3}>
                {formFields.map((f) => (
                  <Grid item xs={12} key={f.name}>
                    <TextField
                      {...f} 
                      fullWidth 
                      value={formData[f.name]} 
                      onChange={handleChange} 
                      sx={fieldStyle}
                    >
                      {f.options?.map((opt) => (
                        <MenuItem key={opt} value={opt}>{opt}</MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                ))}
                
                {/* Message Field - placed next in order */}
                <Grid item xs={12}>
                  <TextField 
                    fullWidth 
                    multiline 
                    rows={4} 
                    label="Message" 
                    name="message" 
                    placeholder="Tell us a bit more about yourself..."
                    value={formData.message} 
                    onChange={handleChange} 
                    sx={fieldStyle} 
                  />
                </Grid>

                {/* Submit Button */}
                <Grid item xs={12} sx={{ mt: 1 }}>
                  <Button 
                    type="submit" 
                    fullWidth 
                    size="large" 
                    sx={{
                      py: 2, fontWeight: 700, borderRadius: 3, color: "#fff",
                      background: `linear-gradient(90deg, ${COLORS.emerald}, ${COLORS.teal})`,
                      boxShadow: "0 4px 15px rgba(13, 77, 62, 0.4)",
                      "&:hover": { 
                        transform: "translateY(-2px)", 
                        boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
                        filter: "brightness(1.1)"
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    Submit Volunteer Form
                  </Button>
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