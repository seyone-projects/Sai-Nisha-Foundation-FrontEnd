import React from "react";
import {
  Box,
  Typography,
  Link,
  Stack,
  Avatar,
  Grid,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import CloseIcon from "@mui/icons-material/Close";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const avatarData = [
    { img: "https://cdn-icons-png.flaticon.com/512/2909/2909764.png" },
    { img: "https://cdn-icons-png.flaticon.com/512/616/616408.png" },
    { img: "https://cdn-icons-png.flaticon.com/512/476/476863.png" },
    { img: "https://cdn-icons-png.flaticon.com/512/857/857455.png" },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#fff",
        borderTop: "1px solid #eee",
        py: 5,
        px: 2,
      }}
    >
      {/* TOP SECTION */}
      <Box sx={{ maxWidth: 1100, mx: "auto", mb: 8 }}>
        <Grid container spacing={4}>
          <Grid item size={{ xs: 12, md: 6 }}>

            <Typography sx={{ fontSize: 14, mb: 0.5 }}>
              📧 Email:{" "}
              <Link href="mailto:hello@sainisha.in">
                hello@sainisha.in
              </Link>
            </Typography>

            <Typography sx={{ fontSize: 14, mb: 0.5 }}>
              📞 Phone:{" "}
              <Link href="tel:+919876543210">
                +91 9962290875
              </Link>
            </Typography>

            <Typography sx={{ fontSize: 14 }}>
              Sai Nisha Foundation, <br />
              No. 10, Thiruvallur Street <br />
              Shanthi Nagar Irumbuliyur, <br />
               East Tambaram Chennai – 600059
            </Typography>
          </Grid>
          <Grid
            item
            size={{ xs: 12, md: 4 }}
            sx={{ ml: "auto", textAlign: "right" }}
          >
            <Stack spacing={1} alignItems="flex-end">
              <Link component={RouterLink} to="/about">About Us</Link>
              <Link component={RouterLink} to="/contactus">Contactus</Link>
              <Link component={RouterLink} to="/careers">Volunteer</Link>
              <Link component={RouterLink} to="/payment">Donate</Link>
              <Link component={RouterLink} to="/careers">Careers</Link>
            </Stack>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          maxWidth: 900,
          mx: "auto",
          display: "flex",
          justifyContent: "center",
          gap: { xs: 3, md: 6 },
          flexWrap: "wrap",
          mt: { xs: 0, md: "-200px" }, 
          mb: 4,
        }}
      >
        {avatarData.map((item, index) => (
          <MotionBox
            key={index}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: index * 0.3,
            }}
            whileHover={{
              scale: 1.15,
              boxShadow: "0 0 25px rgba(76,175,80,0.6)",
            }}
          >
            <Avatar
              src={item.img}
              sx={{
                width: 90,
                height: 90,
                border: "3px solid #4CAF50",
                backgroundColor: "#f5f5f5",
              }}
            />
          </MotionBox>
        ))}
      </Box>

      {/* BOTTOM SECTION */}
      <Box sx={{ textAlign: "center", mt: 2 }}>

        <Stack direction="row" justifyContent="center" spacing={2} sx={{ mb: 2 }}>
          <Link href="#"><WhatsAppIcon fontSize="small" /></Link>
          <Link href="#"><InstagramIcon fontSize="small" /></Link>
          <Link href="#"><LinkedInIcon fontSize="small" /></Link>
          <Link href="#"><YouTubeIcon fontSize="small" /></Link>
          <Link href="#"><FacebookIcon fontSize="small" /></Link>
          <Link href="#"><CloseIcon fontSize="small" /></Link>
        </Stack>

        <Typography sx={{ fontSize: 12, color: "text.secondary" }}>
          © {currentYear} Sai Nisha Foundation. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
}
