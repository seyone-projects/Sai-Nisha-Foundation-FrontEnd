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

/* IMAGES 
  Note: I have reused img1 and img2 to fill 9 slots. 
  Replace these with your actual imports (img3, img4, etc.) 
*/
import img1 from "../page/image/home1.jpg";
import img2 from "../page/image/home.jpg";
import img3 from "../page/image/images_1.jpg";
import img4 from "../page/image/images_2.jpg";
import img5 from "../page/image/images_3.jpg";
import img6 from "../page/image/images_4.jpg";
import img7 from "../page/image/images_5.jpg";
import img8 from "../page/image/images_6.jpg";
import img9 from "../page/image/images_7.jpg";
import img10 from "../page/image/images_8.jpg";
import img11 from "../page/image/images_9.jpg";


const theme = createTheme({
  typography: {
    fontFamily: `"Poppins","Roboto","Helvetica","Arial",sans-serif`,
  },
});

// Array containing 9 items
const mediaList = [
  { type: "image", src: img1, title: "Healthcare Outreach" },
  { type: "image", src: img2, title: "Education for All" },
  { type: "image", src: img3, title: "Rural Development" },
  { type: "image", src: img4, title: "Clean Water Initiative" },
  { type: "image", src: img5, title: "Food Distribution" },
  { type: "image", src: img6, title: "Women Empowerment" },
  { type: "image", src: img7, title: "Environmental Care" },
  { type: "image", src: img8, title: "Youth Mentorship" },
  { type: "image", src: img9, title: "Elderly Support" },
  { type: "image", src: img10, title: "Elderly Support" },
  { type: "image", src: img11, title: "Elderly Support" },
];

export default function Manage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* PAGE CONTAINER */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          background: "linear-gradient(135deg,#f4f6f8,#eef2f3)",
        }}
      >
        <Box
          sx={{
            py: 6,
            px: { xs: 2, md: 6 },
            flex: 1, // Pushes anything below (like a footer) to the bottom
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
                xs={12}    // 1 card per row on mobile
                sm={6}     // 2 cards per row on tablets
                md={4}     // 3 cards per row on desktop
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
                  <CardMedia
                    component="img"
                    image={item.src}
                    alt={item.title}
                    sx={{
                      height: 240, // Increased height slightly for better visual balance
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />

                  <CardContent
                    sx={{
                      flexGrow: 1,
                      textAlign: "center",
                      background: "linear-gradient(180deg,#ffffff,#f7f7f7)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      py: 3,
                    }}
                  >
                    <Typography fontWeight={700} variant="subtitle1" color="#0b3d3b">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                      Campaign #{index + 1}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
        
        {/* If you want to add your Footer here later, just import and place it below this comment */}
      </Box>
    </ThemeProvider>
  );
}