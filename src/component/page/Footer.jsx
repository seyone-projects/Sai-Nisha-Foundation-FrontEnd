import React from "react";
import {
  Box,
  Typography,
  Link,
  Stack,
  Grid,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import CloseIcon from "@mui/icons-material/Close";
import { Link as RouterLink } from "react-router-dom";

/* IMPORT BACKGROUND IMAGE */
// import footerBg from "../page/image/footer.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      // sx={{
      //   width: "100%",
      //   backgroundImage: `url(${footerBg})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   backgroundRepeat: "no-repeat",
      //   position: "relative",
      //   mt: 2,
      // }}
    >
      {/* OVERLAY */}
      <Box
        // sx={{
        //   backgroundColor: "rgba(255,255,255,0.92)",
        //   py: 5,
        //   px: 2,
        // }}
      >
        {/* TOP SECTION */}
        <Box sx={{ maxWidth: 1100, mx: "auto", mb: 8 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}><br /><br />
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
              xs={12}
              md={4}
              sx={{
                ml: { md: "auto" },
                textAlign: { xs: "center", md: "right" },
              }}
            >
              <Stack
  spacing={1}
  alignItems={{ xs: "center", md: "flex-end" }}
  sx={{ fontSize: "14px" }}
  mt={5}
>
  <Link component={RouterLink} to="/about">About Us</Link>
  <Link component={RouterLink} to="/contactus">Contact Us</Link>
  <Link component={RouterLink} to="/volunteer">Volunteer</Link>
  <Link component={RouterLink} to="/payment">Donate</Link>
  <Link component={RouterLink} to="/careers">Careers</Link>
</Stack>
            </Grid>
          </Grid>
        </Box>

        {/* BOTTOM SECTION */}
        <Box sx={{ textAlign: "center", mt: 2 }}>
          <Stack
            direction="row"
            justifyContent="center"
            spacing={2}
            sx={{ mb: 2 }}
          >
            <Link href="#"><WhatsAppIcon fontSize="small" /></Link>
            <Link href="#"><InstagramIcon fontSize="small" /></Link>
            <Link href="#"><LinkedInIcon fontSize="small" /></Link>
            <Link href="#"><YouTubeIcon fontSize="small" /></Link>
            <Link href="#"><FacebookIcon fontSize="small" /></Link>
            <Link href="#"><CloseIcon fontSize="small" /></Link>
          </Stack>

          <Typography sx={{ fontSize: 14, color: "text.primary" }}>
            © {currentYear} Sai Nisha Foundation. All Rights Reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
