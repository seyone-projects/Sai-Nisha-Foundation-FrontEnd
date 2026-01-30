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
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import EmailIcon from "@mui/icons-material/Email";
import emailjs from "@emailjs/browser";
import Footer from "./Footer";

const creamBg = "#F7F4EC";
const navyText = "#1F2F3F";
const gold = "#D68910";
const olive = "#7C8F29";

const theme = createTheme({
  typography: {
    fontFamily: `"Poppins", sans-serif`,
    h3: { fontWeight: 900 },
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

      <Box sx={{ py: 10, background: creamBg }}>
        <Card
          sx={{
            width: isMobile ? "95%" : "70%",
            mx: "auto",
            borderRadius: 6,
            border: `2px solid ${gold}`,
          }}
        >
          {/* HEADER */}
          <Box
            sx={{
              background: `linear-gradient(90deg, ${navyText}, ${olive})`,
              py: 4,
              textAlign: "center",
            }}
          >
            <Typography variant="h3" sx={{ color: "#fff" }}>
              Contact Us
            </Typography>
            <Typography sx={{ color: "#eee" }}>
              Carrying His Light Forward
            </Typography>
          </Box>

          <Divider
            sx={{
              height: 4,
              background: `linear-gradient(90deg, ${gold}, ${olive})`,
            }}
          />

          {/* FORM */}
          <Box sx={{ px: 6, py: 5 }}>
            <Grid container spacing={3}>
              <Grid item size={{ xs: 12, md: 4 }}>
                <FormControl fullWidth>
                  <InputLabel>Type *</InputLabel>
                  <Select
                    value={type}
                    label="Type *"
                    onChange={(e) => setType(e.target.value)}
                  >
                    <MenuItem value="Volunteering">Volunteering</MenuItem>
                    <MenuItem value="Donation">Donation</MenuItem>
                    <MenuItem value="CSR">CSR</MenuItem>
                    <MenuItem value="Others">Others</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item size={{ xs: 12, md: 4 }}>
                <TextField
                  label="Name *"
                  fullWidth
                  value={formData.name}
                  onChange={handleChange("name")}
                />
              </Grid>

              <Grid item size={{ xs: 12, md: 4 }}>
                <TextField
                  label="Initial"
                  fullWidth
                  value={formData.initial}
                  onChange={handleChange("initial")}
                />
              </Grid>

              <Grid item size={{ xs: 12, md: 6 }}>
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
                    ),
                  }}
                />
              </Grid>

              <Grid item size={{ xs: 12, md: 6 }}>
                <TextField
                  label="Mobile *"
                  fullWidth
                  value={formData.mobile}
                  onChange={handleChange("mobile")}
                />
              </Grid>

              <Grid item size={{ xs: 12 }}>
                <TextField
                  label="Message *"
                  multiline
                  rows={isMobile ? 3 : 4}
                  fullWidth
                  value={formData.message}
                  onChange={handleChange("message")}
                />
              </Grid>
            </Grid>

            <Box sx={{ mt: 5, textAlign: "center" }}>
              <Button
                variant="contained"
                onClick={handleSubmit}
                sx={{
                  background: `linear-gradient(90deg, ${olive}, ${gold})`,
                  px: 6,
                  borderRadius: 50,
                  fontWeight: 700,
                  color: "#000",
                }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Card>
      </Box>

      <Snackbar open={success} autoHideDuration={4000}>
        <Alert severity="success">Message sent successfully!</Alert>
      </Snackbar>

      <Footer />
    </ThemeProvider>
  );
}
