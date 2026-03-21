import React, { useState } from "react";
import {
  Box, Typography, Grid, TextField, Button, MenuItem, Select,
  FormControl, InputLabel, Card, InputAdornment,
  CssBaseline, Divider, useMediaQuery
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import emailjs from "@emailjs/browser";
import Footer from "./Footer";
const [darkNavy, tealGreen, emeraldGreen, textWhite, lightGrey] =
  ["#0B1120", "#0E4D44", "#157A6E", "#FFFFFF", "#B0BCC2"];
const theme = createTheme({
  palette: { mode: "dark", primary: { main: emeraldGreen } },
  typography: {
    fontFamily: `"Poppins", sans-serif`,
    h3: { fontWeight: 900 }
  }
});
const BubblesBackground = () => (
  <Box sx={{ position: "fixed", inset: 0, zIndex: 1, overflow: "hidden", pointerEvents: "none" }}>
    {[...Array(40)].map((_, i) => {
      const size = Math.random() * 20 + 8;
      const left = Math.random() * 100;
      const dur = Math.random() * 10 + 10;
      const del = Math.random() * 20;
      const isG = i % 2 === 0;

      return (
        <Box
          key={i}
          sx={{
            position: "absolute",
            bottom: "-30px",
            left: `${left}%`,
            width: size,
            height: size,
            backgroundColor: isG ? "rgba(6, 68, 57, 0.45)" : "rgba(255, 255, 255, 0.1)",
            borderRadius: "50%",
            opacity: 0,
            animation: `floatUp ${dur}s linear infinite ${del}s`
          }}
        />
      );
    })}
    <style>{`
      @keyframes floatUp {
        0% { transform: translateY(0); opacity: 0; }
        10% { opacity: 0.7; }
        100% { transform: translateY(-110vh); opacity: 0; }
      }
    `}</style>
  </Box>
);

export default function JobForm() {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [type, setType] = useState("");
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    availability: "",
    message: ""
  });

  const handleChange = (field) => (e) =>
    setFormData({ ...formData, [field]: e.target.value });

  const handleSubmit = async () => {
    if (!type || !formData.name || !formData.email || !formData.mobile || !formData.message) {
      return alert("Please fill all required fields");
    }

    try {
      await emailjs.send(
        "service_eb25s1n",
        "__ejs-test-mail-service__",
        { type, ...formData },
        "4GsDVNd7LMiEbRwQY"
      );

      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        mobile: "",
        availability: "",
        message: ""
      });
      setType("");
    } catch (e) {
      alert("Failed to send message. Try again.");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* WhatsApp Button */}
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
            color: "#fff"
          }}
        >
          <WhatsAppIcon />
        </Button>
      </Box>

      <BubblesBackground />

      <Box sx={{ py: 10, background: darkNavy, minHeight: "100vh", mt: -12 }}>
        <Card
          sx={{
            width: isMobile ? "95%" : "90%",
            maxWidth: "800px",
            mx: "auto",
            borderRadius: 6,
            border: `1px solid ${emeraldGreen}`,
            background: "#111827"
          }}
        >
          {/* Header */}
          <Box
            sx={{
              background: `linear-gradient(135deg, ${tealGreen}, ${emeraldGreen})`,
              py: 4,
              textAlign: "center"
            }}
          >
            <Typography variant="h3" sx={{ color: textWhite }}>
              Join Our Team
            </Typography>
            <Typography sx={{ color: lightGrey }}>
              BE THE REASON SOMEONE SMILES TODAY
            </Typography>
          </Box>

          <Divider />

          {/* Form */}
          <Box sx={{ px: isMobile ? 3 : 10, py: 6 }}>
            <Grid container spacing={4} direction="column">

              {/* UPDATED DROPDOWN */}
              <Grid item>
                <FormControl fullWidth>
                  <InputLabel>Role *</InputLabel>
                  <Select
                    value={type}
                    label="Role *"
                    onChange={(e) => setType(e.target.value)}
                  >
                    <MenuItem value="Internship">Internship</MenuItem>
                    <MenuItem value="Content Writer">Content Writer</MenuItem>
                    <MenuItem value="Business Development">Business Development</MenuItem>
                    <MenuItem value="Video Creator">Video Creator</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item>
                <TextField
                  label="Full Name *"
                  fullWidth
                  value={formData.name}
                  onChange={handleChange("name")}
                />
              </Grid>

              <Grid item>
                <TextField
                  label="Email *"
                  fullWidth
                  value={formData.email}
                  onChange={handleChange("email")}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <EmailIcon />
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>

              <Grid item>
                <TextField
                  label="Mobile *"
                  fullWidth
                  value={formData.mobile}
                  onChange={handleChange("mobile")}
                />
              </Grid>

              {/* <Grid item>
                <TextField
                  label="Availability (Days/Time)"
                  fullWidth
                  value={formData.availability}
                  onChange={handleChange("availability")}
                />
              </Grid> */}
              <Grid item>
                <TextField
                  label="Message *"
                  multiline
                  rows={5}
                  fullWidth
                  value={formData.message}
                  onChange={handleChange("message")}
                />
              </Grid>
              <Grid item textAlign="center">
                <Button  variant="contained" onClick={handleSubmit}
                  sx={{
                    background: `linear-gradient(90deg, ${tealGreen}, ${emeraldGreen})`,
                    width: isMobile ? "100%" : "40%",
                    py: 2,
                    fontWeight: 700
                  }}
                >
                  Submit
                </Button>
              </Grid>

            </Grid>
          </Box>
        </Card>
      </Box>

      <Footer />
    </ThemeProvider>
  );
}