import React, { useState } from "react";
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
  Menu,
  MenuItem,
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
import Manage from "./component/page/Manage";
import Awareness from "./component/page/Awareness";
import PeerToPeer from "./component/page/PeertoPeer";
import PhotoGallery from "./component/page/PhotoGallery";
import Newsandpublication from "./component/page/Newsandpublication";
import Magazine from "./component/page/Magazine";
import Partners from "./component/page/Partners";

const creamBg = "#F3EEDC";
const navyText = "#2C3E50";
const goldBtn = "#D68910";

export default function App() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const isMobile = useMediaQuery("(max-width:900px)");
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMediaHover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Events", path: "/events" },
    { label: "Services", path: "/services" },
    { label: "Careers", path: "/careers" },
    { label: "Campaigns", path: "/campaigns" },
  ];

  return (
    <Router>
      {/* NAVBAR */}
      <AppBar position="sticky" sx={{ bgcolor: creamBg, color: navyText, boxShadow: 1 }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Link to="/">
            <img src={logo} alt="Logo" style={{ width: 120, height: 60, display: "block" }} />
          </Link>

          {isMobile ? (
            <IconButton onClick={() => setOpenDrawer(true)}>
              <MenuIcon sx={{ fontSize: 32, color: navyText }} />
            </IconButton>
          ) : (
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              {menuItems.map((item) => (
                <Button
                  key={item.label}
                  component={Link}
                  to={item.path}
                  sx={{ color: navyText, fontWeight: 600, textTransform: "none" }}
                >
                  {item.label}
                </Button>
              ))}

              {/* MEDIA PARTNERS DROPDOWN */}
              <Box
                onMouseEnter={handleMediaHover}
                onMouseLeave={handleCloseMenu}
              >
                <Button
                  sx={{ color: navyText, fontWeight: 600, textTransform: "none" }}
                >
                  Media Partners
                </Button>

                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleCloseMenu}
                  MenuListProps={{ onMouseLeave: handleCloseMenu }}
                  PaperProps={{ sx: { bgcolor: creamBg } }}
                >
                  <MenuItem component={Link} to="/photo-gallery" onClick={handleCloseMenu}>
                    Photo Gallery
                  </MenuItem>
                  <MenuItem component={Link} to="/news" onClick={handleCloseMenu}>
                    News
                  </MenuItem>
                  <MenuItem component={Link} to="/partners" onClick={handleCloseMenu}>
                    Partners
                  </MenuItem>
                </Menu>
              </Box>

              <Button
                component={Link}
                to="/payment"
                sx={{ bgcolor: goldBtn, color: "#fff", "&:hover": { bgcolor: "#b3740d" } }}
                variant="contained"
              >
                Donate
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
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

            <Divider sx={{ my: 1 }} />
            <ListItemButton disabled>
               <ListItemText primary="Media Partners" sx={{ opacity: 0.6 }} />
            </ListItemButton>
            
            <ListItemButton
              component={Link}
              to="/photo-gallery"
              onClick={() => setOpenDrawer(false)}
              sx={{ pl: 4 }}
            >
              <ListItemText primary="Photo Gallery" />
            </ListItemButton>

            <ListItemButton
              component={Link}
              to="/news"
              onClick={() => setOpenDrawer(false)}
              sx={{ pl: 4 }}
            >
              <ListItemText primary="News" />
            </ListItemButton>

            {/* PARTNERS ADDED HERE */}
            <ListItemButton
              component={Link}
              to="/partners"
              onClick={() => setOpenDrawer(false)}
              sx={{ pl: 4 }}
            >
              <ListItemText primary="Partners" />
            </ListItemButton>
          </List>
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
          <Route path="/volunteer" element={<VolunteerForm />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/manage" element={<Manage />} />
          <Route path="/awareness" element={<Awareness />} />
          <Route path="/peertopeer" element={<PeerToPeer />} />
          <Route path="/photo-gallery" element={<PhotoGallery />} />
          <Route path="/news" element={<Newsandpublication />} />
          <Route path="/magazine" element={<Magazine />} />
          <Route path="/partners" element={<Partners />} />
        </Routes>
      </Container>
    </Router>
  );
}