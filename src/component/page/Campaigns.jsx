import React from "react";
import {
  Box,
  Typography,
  Button,
  CssBaseline,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";
import campaignBg from "../page/image/sai-nisha-logo.png";
import Footer from "../page/Footer"; 

const theme = createTheme({
  typography: {
    fontFamily: `"Poppins","Roboto","Helvetica","Arial",sans-serif`,
  },
});

export default function Campaign() {
  const navigate = useNavigate();
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* MAIN CONTAINER */}
      <Box
        sx={{
          display: "flex", // Ensures footer can push down
          flexDirection: "column",
          minHeight: "100vh",
          width: "100%",
          backgroundImage: `url(${campaignBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        {/* DARK OVERLAY */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.25), rgba(0,0,0,0.4))",
          }}
        />

        {/* HEADER */}
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            mt: 2,
          }}
        >
          <Box
            sx={{
              px: 6,
              py: 1.6,
              backgroundColor: "#0b3d3b",
              borderRadius: "0 0 60px 60px",
              boxShadow: "0 8px 25px rgba(0,0,0,0.35)",
            }}
          >
            <Typography
              variant="h5"
              fontWeight={700}
              color="#fff"
              letterSpacing={1}
            >
              Campaigns for ngo
            </Typography>
          </Box>
        </Box>

        {/* LEFT ACTION MENU */}
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2.2,
            width: 260,
            mt: 12,
            ml: 4,
            flex: 1, // This pushes the footer to the bottom
          }}
        >
          {[
            {
              label: "How we Manage Campaigns",
              onClick: () => navigate("/manage"),
            },
            {
              label: "History",
              onClick: () => navigate("/manage"),
            },
            {
              label: "Notes",
              onClick: () => navigate("/manage"),
            },
          ].map((item, index) => (
            <Button
              key={index}
              fullWidth
              endIcon={<ArrowForwardIosIcon />}
              onClick={item.onClick}
              sx={{
                justifyContent: "space-between",
                textTransform: "none",
                fontWeight: 600,
                fontSize: "0.95rem",
                px: 2.5,
                py: 1.4,
                color: "#ffffff",
                backgroundColor: "#0b3d3b",
                borderRadius: 1,
                boxShadow: "0 6px 18px rgba(0,0,0,0.35)",
                "&:hover": {
                  backgroundColor: "#145c59",
                  transform: "translateX(6px)",
                },
                transition: "all 0.25s ease",
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>


      </Box>
    </ThemeProvider>
      <Box sx={{ 
           "& *": { color: "#FFFFFF !important" }, // Force all nested text/icons to white
           bgcolor: "#020617" // Matching the dark aesthetic
         }}>
           <Footer />
         </Box>
    </>
  );
}