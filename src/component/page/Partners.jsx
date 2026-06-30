import React, { useState, useRef, useEffect, useCallback } from "react";
import { Box, Typography, Container, useMediaQuery, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Footer from "./Footer";
import img1 from "../page/image/Guru ji.jpg"; import img2 from "../page/image/DSC06390.jpg";import img3 from "../page/image/DSC06321.jpg";import img4 from "../page/image/DSC06299.jpg"; import img5 from "../page/image/marconi.jpeg";
import videoSrc from "../page/image/partners video.mp4";
const gold = "#D68910";
const theme = createTheme({ typography: { fontFamily: "'Poppins', sans-serif" } });

const ORBIT_DURATION_MS = 25000; // one full revolution

export default function Partners() {
  const isMobile = useMediaQuery("(max-width:900px)");
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredName, setHoveredName] = useState(null);

  const partnersData = [
    { img: img1, name: "Guru Roopa Yogi", desc: "Guru Roopa Yogi  Sri La Sri Maha Narasimha Athmanatha Swamigal: Founder of Jai Kosha Foundation, a revered spiritual guide dedicated to spreading divine wisdom, guiding individuals toward inner harmony, and uplifting society through sacred traditions and spiritual service." },
    { img: img2, name: "R. Kannan", desc: "R. Kannan is recognized for his disciplined approach to filmmaking and his commitment to supporting new talent within the industry. Through his consistent contributions to the art of screenwriting and direction, he continues to inspire a new generation of technicians and storytellers in the world of Tamil cinema. " },
    { img: img3, name: "Jagan Purushottam", desc: "He is Popularly known as “Ayan Jagan,” he is widely recognized for his razor-sharp wit and versatile performances in Tamil cinema. From his breakout role as Chitti Babu to his engaging presence as a premier television host, Jagan continues to contribute significantly to the entertainment landscape." },
    { img: img4, name: "Kalaimamani Thiru Dhina", desc: "A legendary Music Director and widely recognized for his soul-stirring compositions and his dedicated mentorship of budding musical talent. Through his relentless pursuit of musical excellence, he continues to contribute significantly to the cultural heritage and cinematic landscape of Tamil Nadu." },
    { img: img5, name: "Emayavaramban Marconi", desc: "Emayavaramban Marconi Popularly known as “Vallal Nayagan,” Emayavaramban Marconi is widely recognized for his dedicated community services and temple renovation initiatives. Through his Marconi Foundation, he continues to contribute significantly to social welfare and community development in and around Sirkali." },
  ];

  const [activePartner, setActivePartner] = useState(partnersData[0]);

  // ── JS-driven orbit so we always know each photo's current angle ──
  const radius = isMobile ? 95 : 180;
  // The "front" angle is the point on the circle closest to the info card.
  // Row layout (desktop): card sits to the right -> front = 0deg (right side).
  // Column layout (mobile): card sits below -> front = 90deg (bottom).
  const frontAngle = isMobile ? 90 : 0;

  const [angleDeg, setAngleDeg] = useState(0);
  const rafRef = useRef(null);
  const startRef = useRef(null);
  const pausedAtRef = useRef(0);

  useEffect(() => {
    if (isPaused) {
      // Freeze: remember where we stopped, cancel the loop.
      pausedAtRef.current = angleDeg;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      return;
    }

    startRef.current = performance.now() - (pausedAtRef.current / 360) * ORBIT_DURATION_MS;

    const tick = (now) => {
      const elapsed = now - startRef.current;
      const newAngle = (elapsed / ORBIT_DURATION_MS) * 360 % 360;
      setAngleDeg(newAngle);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPaused]);

  // Smallest angular distance between two angles (0-360)
  const angularDistance = (a, b) => {
    const diff = Math.abs(a - b) % 360;
    return diff > 180 ? 360 - diff : diff;
  };

  // Whenever the orbit advances (and nobody is hovering a specific photo),
  // automatically highlight whichever partner is currently nearest the card.
  useEffect(() => {
    if (hoveredName) return; // hover takes priority, handled separately
    const step = 360 / partnersData.length;
    let closestIndex = 0;
    let closestDist = Infinity;
    partnersData.forEach((_, i) => {
      const itemAngle = (angleDeg + i * step) % 360;
      const dist = angularDistance(itemAngle, frontAngle);
      if (dist < closestDist) {
        closestDist = dist;
        closestIndex = i;
      }
    });
    const nearest = partnersData[closestIndex];
    setActivePartner(prev => (prev.name === nearest.name ? prev : nearest));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [angleDeg, hoveredName]);

  const handleEnter = (p) => {
    setHoveredName(p.name);
    setActivePartner(p);
    setIsPaused(true);
  };

  const handleLeave = () => {
    setHoveredName(null);
    setIsPaused(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* Background Video Section */}
      <Box sx={{ position: "fixed", inset: 0, zIndex: -1, bgcolor: "#000" }}>
        <video autoPlay loop muted playsInline  style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.5 }}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        {/* Dark Overlay for Readability */}
        <Box sx={{ position: "absolute", inset: 0, background: "radial-gradient(circle, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%)" }} />
      </Box>

      <Container maxWidth="lg" sx={{ pt: { xs: 4, md: 8 }, pb: 12, position: "relative", zIndex: 1 }}>
        <Typography
          variant={isMobile ? "h4" : "h2"}
          sx={{ color: gold, textAlign: "center", fontWeight: 900, mb: { xs: 4, md: 10 }, textTransform: "uppercase", letterSpacing: 2 , mt: -9 }}
        >
          Celebrities
        </Typography>

        <Box sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 2, md: 10 }
        }}>

          {/* Animated Orbit Container */}
          <Box sx={{
            position: "relative",
            width: { xs: "300px", md: "500px" },
            height: { xs: "300px", md: "500px" },
            display: "flex", alignItems: "center", justifyContent: "center"
          }}>
            {/* Background Dotted Ring */}
            <Box sx={{
              width: { xs: 180, md: 350 }, height: { xs: 180, md: 350 },
              border: `1px dashed ${gold}`, borderRadius: "50%", opacity: 0.3, position: "absolute"
            }} />

            {partnersData.map((p, i) => {
              const step = 360 / partnersData.length;
              const itemAngle = (angleDeg + i * step) % 360;
              const rad = (itemAngle * Math.PI) / 180;
              const x = radius * Math.cos(rad);
              const y = radius * Math.sin(rad);
              const isActive = activePartner.name === p.name;

              return (
                <Box key={i}
                  onMouseEnter={() => handleEnter(p)}
                  onMouseLeave={handleLeave}
                  onClick={() => handleEnter(p)}
                  sx={{
                    position: "absolute",
                    transform: `translate(${x}px, ${y}px)`,
                    cursor: "pointer",
                    zIndex: isActive ? 10 : 1
                  }}
                >
                  <Box
                    component="img"
                    src={p.img}
                    sx={{
                      width: { xs: 75, md: 120 },
                      height: { xs: 75, md: 120 },
                      borderRadius: "50%",
                      border: `3px solid ${isActive ? "#fff" : gold}`,
                      boxShadow: isActive ? `0 0 25px ${gold}` : "none",
                      transition: "border-color 0.4s ease, box-shadow 0.4s ease, transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                      objectFit: "cover",
                      "&:hover": { transform: "scale(1.2)" }
                    }}
                  />
                </Box>
              );
            })}
          </Box>

          {/* Celebrity Info Card */}
          <Box sx={{
            width: "100%",
            maxWidth: { xs: "100%", md: "600px" },
            p: { xs: 3, md: 5 },
            borderRadius: 4,
            bgcolor: "rgba(255,255,255,0.03)",
            backdropFilter: "blur(12px)",
            borderLeft: `5px solid ${gold}`,
            textAlign: isMobile ? "center" : "left",
            animation: "fadeIn 0.5s ease"
          }}>
            <Typography variant="overline" sx={{ color: gold, fontWeight: "bold", letterSpacing: 1 }}>Associate Spotlight</Typography>
            <Typography variant={isMobile ? "h4" : "h3"} sx={{ color: "white", fontWeight: 900, mb: 2 }}>{activePartner.name}</Typography>
            <Typography variant="body1" sx={{ color: "#ccc", lineHeight: 1.8, fontSize: "1.1rem" }}>{activePartner.desc}</Typography>
          </Box>
        </Box>
      </Container>

      {/* WhatsApp Floating Action Button */}
      <Box component="a" href="https://wa.me/919962290875" target="_blank" rel="noopener" sx={{
        position: "fixed", bottom: 25, right: 25, width: 60, height: 60, bgcolor: "#25D366", borderRadius: "50%",
        display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 20px rgba(0,0,0,0.5)", zIndex: 9999,
        transition: "0.3s", "&:hover": { transform: "scale(1.1)", bgcolor: "#1ebe5d" }
      }}><WhatsAppIcon sx={{ color: "#fff", fontSize: 32 }} /></Box>

      {/* Footer Container */}
      <Box sx={{ mt: 5, "& *": { color: "#fff !important" } }}>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
