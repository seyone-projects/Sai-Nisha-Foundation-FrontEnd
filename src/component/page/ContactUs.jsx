import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Card,
  InputAdornment,
  CssBaseline,
  Divider,
  useMediaQuery,
  Snackbar,
  Alert,
  IconButton, 
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import emailjs from "@emailjs/browser";
import Footer from "./Footer";


const darkNavy = "#0B1120"; 
const tealGreen = "#0E4D44"; 
const emeraldGreen = "#157A6E"; 
const textWhite = "#FFFFFF";
const lightGrey = "#B0BCC2";

const theme = createTheme({
  palette: {
    mode: 'dark', 
    primary: {
      main: emeraldGreen,
    },
  },
  typography: {
    fontFamily: `"Poppins", sans-serif`,
    h3: { fontWeight: 900 },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.23)' },
          },
        },
      },
    },
  },
});

export default function ContactUs() {
  const isMobile = useMediaQuery("(max-width:600px)");

  const [type, setType] = useState("");
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    initial: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSubmit = async () => {
    if (
      !type ||
      !formData.name ||
      !formData.email ||
      !formData.mobile ||
      !formData.message
    ) {
      alert("Please fill all required fields");
      return;
    }

    const templateParams = {
      type,
      name: formData.name,
      initial: formData.initial,
      email: formData.email,
      mobile: formData.mobile,
      message: formData.message,
    };

    try {
      await emailjs.send(
        "service_eb25s1n",
        "__ejs-test-mail-service__",
        templateParams,
        "4GsDVNd7LMiEbRwQY",
      );

      setSuccess(true);
      setFormData({
        name: "",
        initial: "",
        email: "",
        mobile: "",
        message: "",
      });
      setType("");
    } catch (error) {
      console.error(error);
      alert("Failed to send message. Try again.");
    }
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

      <Box sx={{ py: 10, background: darkNavy, minHeight: "100vh" }}>
        <Card
          sx={{
            width: isMobile ? "95%" : "90%", 
            maxWidth: "800px",
            mx: "auto",
            borderRadius: 6,
            border: `1px solid ${emeraldGreen}`,
            background: "#111827", 
            boxShadow: "0px 10px 30px rgba(0,0,0,0.5)",
          }}
        >
          {/* HEADER */}
          <Box sx={{ background: `linear-gradient(135deg, ${tealGreen}, ${emeraldGreen})`, py: 4, textAlign: "center" }}>
            <Typography variant="h3" sx={{ color: textWhite }}>Contact Us</Typography>
            <Typography sx={{ color: lightGrey }}>Carrying His Light Forward</Typography>
          </Box>

          <Divider sx={{ height: 4, background: `linear-gradient(90deg, ${emeraldGreen}, #2DD4BF)`, border: "none" }} />

          {/* FORM AREA */}
          <Box sx={{ px: isMobile ? 3 : 10, py: 6 }}>
            <Grid container spacing={4} direction="column" alignItems="center">
              <Grid item xs={12} sx={{ width: "100%" }}>
                <FormControl fullWidth>
                  <InputLabel sx={{ color: lightGrey }}>Type *</InputLabel>
                  <Select
                    value={type}
                    label="Type *"
                    onChange={(e) => setType(e.target.value)}
                    sx={{ color: textWhite }}
                  >
                    <MenuItem value="Volunteering">Volunteering</MenuItem>
                    <MenuItem value="Donation">Donation</MenuItem>
                    <MenuItem value="Others">Others</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} sx={{ width: "100%" }}>
                <TextField label="Name *" fullWidth value={formData.name} onChange={handleChange("name")} />
              </Grid>

              <Grid item xs={12} sx={{ width: "100%" }}>
                <TextField label="Initial" fullWidth value={formData.initial} onChange={handleChange("initial")} />
              </Grid>

              <Grid item xs={12} sx={{ width: "100%" }}>
                <TextField
                  label="Email *"
                  fullWidth
                  value={formData.email}
                  onChange={handleChange("email")}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <EmailIcon sx={{ color: emeraldGreen }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item xs={12} sx={{ width: "100%" }}>
                <TextField label="Mobile *" fullWidth value={formData.mobile} onChange={handleChange("mobile")} />
              </Grid>

              <Grid item xs={12} sx={{ width: "100%" }}>
                <TextField 
                  label="Message *" 
                  multiline 
                  rows={5} 
                  fullWidth 
                  value={formData.message} 
                  onChange={handleChange("message")} 
                />
              </Grid>

              <Grid item xs={12} sx={{ width: "100%", textAlign: "center", mt: 4 }}>
                <Button
                  variant="contained"
                  onClick={handleSubmit}
                  sx={{
                    background: `linear-gradient(90deg, ${tealGreen}, ${emeraldGreen})`,
                    width: isMobile ? "100%" : "40%", 
                    py: 2,
                    borderRadius: 2, 
                    fontWeight: 700,
                    color: textWhite,
                    textTransform: "none",
                    fontSize: "1.2rem",
                    transition: "all 0.3s ease",
                    "&:hover": { 
                        background: emeraldGreen,
                        boxShadow: `0px 0px 20px ${emeraldGreen}`
                    }
                  }}
                >
                  Submit Message
                </Button>
              </Grid>

            </Grid>
          </Box>
        </Card>
      </Box>

        <Box sx={{ bgcolor: "#020617", "& *": { color: "#fff !important" } }}>
                <Footer />
              </Box>
    </ThemeProvider>
  );
}