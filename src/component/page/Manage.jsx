import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CssBaseline,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

/* IMAGES */
import img1 from "../page/image/home1.jpg";
import img2 from "../page/image/home.jpg";

const theme = createTheme({
  typography: {
    fontFamily: `"Poppins","Roboto","Helvetica","Arial",sans-serif`,
  },
});

const mediaList = [
  { type: "image", src: img1 },
  { type: "image", src: img2 },
];

export default function Manage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* PAGE CONTAINER */}
      <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(135deg,#f4f6f8,#eef2f3)",
          py: 6,
          px: { xs: 2, md: 6 },
        }}
      >
        {/* TITLE */}
        <Typography
          variant="h4"
          fontWeight={800}
          textAlign="center"
          mb={5}
          color="#0b3d3b"
        >
          Manage Campaigns
        </Typography>

        {/* MEDIA GRID */}
        <Grid container spacing={4} justifyContent="center">
          {mediaList.map((item, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={4} 
              key={index}
            >
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 4,
                  overflow: "hidden",
                  boxShadow: "0 18px 45px rgba(0,0,0,0.1)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 30px 70px rgba(0,0,0,0.2)",
                  },
                }}
              >
                {item.type === "image" ? (
                  <CardMedia
                    component="img"
                    image={item.src}
                    alt={`Campaign ${index + 1}`}
                    sx={{
                      height: 220,
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <CardMedia
                    component="video"
                    src={item.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    sx={{
                      height: 220,
                      width: "100%",
                      objectFit: "cover",
                      backgroundColor: "#000",
                    }}
                  />
                )}

                <CardContent
                  sx={{
                    flexGrow: 1,
                    textAlign: "center",
                    background:
                      "linear-gradient(180deg,#ffffff,#f7f7f7)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography fontWeight={600} variant="subtitle1">
                    Campaign {index + 1}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.type === "video"
                      ? "Video Campaign"
                      : "Image Campaign"}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
