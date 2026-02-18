import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  useMediaQuery,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import logo from "./component/page/image/ngo.jpeg";


import Home from "./component/page/Home";
import AboutUs from "./component/page/AboutUs";
import Events from "./component/page/Events";
import Services from "./component/page/Services";
import Careers from "./component/page/Careers";
import ContactUs from "./component/page/ContactUs";
import Payment from "./component/page/payment";
import VolunteerForm from "./component/page/VolunteerForm";
import Campaigns from "./component/page/Campaigns";
import Media from "./component/page/Media";
import Manage from "./component/page/Manage";
import Awareness from "./component/page/Awareness";
import PeerToPeer from "./component/page/PeertoPeer";


const creamBg = "#F3EEDC";
const navyText = "#2C3E50";
const greenBtn = "#7c8f29ff";
const goldBtn = "#D68910";

export default function App() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const isMobile = useMediaQuery("(max-width:900px)");


  const [pointer, setPointer] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e) =>
      setPointer({ x: e.clientX, y: e.clientY });

    const handleTouchMove = (e) => {
      if (e.touches[0]) {
        setPointer({
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Events", path: "/events" },
    { label: "Services", path: "/services" },
    { label: "Careers", path: "/careers" },
    { label: "Campaigns", path: "/campaigns" },
    { label: "Media", path: "/media" },
  ];

  return (
    <Router>
      <Box
        sx={{
          position: "fixed",
          top: pointer.y,
          left: pointer.x,
          width: 40,
          height: 40,
          borderRadius: "50%",
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          background: `radial-gradient(circle, ${goldBtn} 0%, transparent 70%)`,
          filter: "blur(10px)",
          opacity: 0.6,
          zIndex: 9999,
        }}
      />

      {/* NAVBAR */}
      <AppBar position="sticky" sx={{ bgcolor: creamBg, color: navyText }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <img src={logo} alt="Logo" style={{ width: 120, height: 60 }} />

          {isMobile ? (
            <IconButton onClick={() => setOpenDrawer(true)}>
              <MenuIcon sx={{ fontSize: 32, color: navyText }} />
            </IconButton>
          ) : (
            <Box sx={{ display: "flex", gap: 3 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.label}
                  component={Link}
                  to={item.path}
                  sx={{ color: navyText, fontWeight: 600 }}
                >
                  {item.label}
                </Button>
              ))}

           {/* <Button
  component={Link}
  to="/volunteer"
  variant="contained"
  color="success"
  sx={{ fontWeight: 700, px: 3 }}
>
  Volunteer
</Button> */}
              <Button
                component={Link}
                to="/payment"
                sx={{ bgcolor: goldBtn, color: "#000" }}
                variant="contained"
              >
                Donate
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Box sx={{ width: 260, bgcolor: creamBg, height: "100%" }}>
          <List>
            {menuItems.map((item) => (
              <ListItemButton
                key={item.label}
                component={Link}
                to={item.path}
                onClick={() => setOpenDrawer(false)}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
          </List>

          <Divider />

          {/* <Box sx={{ p: 2, display: "flex", flexDirection: "column", gap: 2 }}>
            <Button
              variant="contained"
              sx={{ bgcolor: greenBtn }}
              onClick={() => setOpenDrawer(false)}
            >
              Volunteer
            </Button>

            <Button
              variant="contained"
              component={Link}
              to="/payment"
              sx={{ bgcolor: goldBtn, color: "#000" }}
              onClick={() => setOpenDrawer(false)}
            >
              Donate
            </Button>
          </Box> */}
        </Box>
      </Drawer>

      {/* ROUTES */}
      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/services" element={<Services />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/volunteer" element={<VolunteerForm/>} />
           <Route path="/campaigns" element={<Campaigns/>} />
           <Route path="/media" element={<Media/>} />
           <Route path="/manage" element={<Manage/>} />
           <Route path="/awareness" element={<Awareness/>} />
           <Route path="/peertopeer" element={<PeerToPeer/>} />
        </Routes>
      </Container>
    </Router>
  );
}
