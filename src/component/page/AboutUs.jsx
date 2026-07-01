import React, { memo, useMemo } from "react";
// import backgroundVideo from "../page/image/vecteezy_young-mother-with-a-cute-new-born-baby_36023928 (1).mp4"; 
import { Box, Button, Typography, Grid, Container, Divider, CssBaseline, keyframes, GlobalStyles } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles"; import { motion } from "framer-motion";import Footer from "../page/Footer"; import useMediaQuery from "@mui/material/useMediaQuery";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";import HandshakeIcon from "@mui/icons-material/Handshake"; import GroupAddIcon from "@mui/icons-material/GroupAdd";
import aboutImg1 from "../page/image/pre photo 2.jpg";
import aboutImg2 from "../page/image/born 2.jpg";
const [navyText, olive, gold, mutedText, creamBg, cardBg] = ["#F1F5F9", "#84CC16", "#FACC15", "#94A3B8", "#0F172A", "#1E293B"];
const theme = createTheme({
  typography: {
    fontFamily: `"Poppins", "Roboto", "Helvetica", "Arial", sans-serif`,
    h2: { fontWeight: 900, lineHeight: 1.1 },
    h4: { fontWeight: 800, lineHeight: 1.2 },
    h5: { fontWeight: 700, lineHeight: 1.2 },
    body1: { fontWeight: 400, lineHeight: 1.3 },
  },
  palette: { mode: "dark" },
});
const rotateCircle = keyframes`from { transform: rotate(0deg); } to { transform: rotate(360deg); }`;
const spotlightMove = keyframes`0% { transform: translate(-20%, -20%); opacity: 0; } 20%, 80% { opacity: 1; } 100% { transform: translate(120%, 120%); opacity: 0; }`;
const anim = {
  thunder: { animate: { opacity: [1, 0.8, 1, 0.9, 1, 0.4, 1], scale: [1, 1.02, 1, 1, 1], transition: { duration: 0.2, repeat: Infinity, repeatType: "mirror", repeatDelay: 4 } } },
  fadeUp: { hidden: { opacity: 0, y: 70 }, visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } } },
  fadeDown: { hidden: { opacity: 0, y: -60 }, visible: { opacity: 1, y: 0, transition: { duration: 1 } } },
  stagger: { visible: { transition: { staggerChildren: 0.3 } } },
};
const BubblesBackground = memo(() => {
  const bubbles = useMemo(() => [...Array(40)].map((_, i) => ({
    size: Math.random() * 20 + 8, left: Math.random() * 100, duration: Math.random() * 10 + 10, delay: Math.random() * 20, isGold: i % 2 === 0,
  })), []);
  return (
    <Box sx={{ position: "fixed", inset: 0, zIndex: 1, overflow: "hidden", pointerEvents: "none" }}>
      <GlobalStyles styles={{ "@keyframes floatUp": { "0%": { transform: "translateY(0) scale(1)", opacity: 0 }, "10%": { opacity: 0.7 }, "90%": { opacity: 0.6 }, "100%": { transform: "translateY(-450vh) scale(1.4)", opacity: 0 } } }} />
      {bubbles.map((b, i) => (
        <Box key={i} sx={{ position: "absolute", bottom: "-30px", left: `${b.left}%`, width: b.size, height: b.size, bgcolor: b.isGold ? "rgba(250, 204, 21, 0.25)" : "rgba(101, 163, 13, 0.2)", borderRadius: "50%", boxShadow: `0 0 15px 4px ${b.isGold ? "rgba(250, 204, 21, 0.15)" : "rgba(101, 163, 13, 0.1)"}`, opacity: 0, animation: `floatUp ${b.duration}s linear infinite ${b.delay}s`, willChange: "transform, opacity" }} />
      ))}
    </Box> );});
const H4Center = ({ children, color, mt = 0 }) => (
  <Typography variant="h4" fontWeight={900} color={color} textAlign="center" mt={mt}>{children}</Typography>
);
export default function About() {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
   {/* BACKGROUND SECTION */}
      <Box sx={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, overflow: "hidden" }}>
        {/* <video autoPlay loop muted playsInline style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.6 }}>  <source src={backgroundVideo} type="video/mp4" /> </video> */}
        <Box sx={{ position: "absolute", inset: 0, bgcolor: "rgba(15, 23, 42, 0.4)" }} /> 
      </Box>  <Box sx={{ position: "fixed", bottom: 20, right: 20, zIndex: 9999 }}> <Button component="a" href="https://wa.me/919962290875" target="_blank" rel="noopener noreferrer" sx={{ minWidth: 0, width: 56, height: 56, borderRadius: "50%", bgcolor: "#25D366", color: "#fff", boxShadow: "0 10px 30px rgba(0,0,0,0.3)", "&:hover": { bgcolor: "#1EBE5D", transform: "scale(1.1)" }, transition: "transform 0.2s ease-in-out" }}><WhatsAppIcon sx={{ fontSize: 30 }} /></Button></Box> <Box sx={{ position: "relative", py: { xs: 10, md: 14 }, background: "transparent", overflow: "hidden", minHeight: "100vh" }}> <BubblesBackground />
        <Container sx={{ position: "relative", zIndex: 2, mt: -10 }}>
          <motion.div variants={anim.fadeDown} initial="hidden" animate="visible">
            <Box sx={{ position: "relative", bgcolor: "rgba(2, 6, 23, 0.3)", backdropFilter: "blur(2px)", borderRadius: 4, overflow: "hidden", py: { xs: 10, md: 15 }, mb: { xs: 6, md: 8 }, boxShadow: "0 20px 40px rgba(0,0,0,0.4)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", border: `1px solid rgba(255,255,255,0.05)` }}>
              <Box sx={{ position: "absolute", width: "350px", height: "350px", borderRadius: "50%", border: `2px solid ${gold}`, opacity: 0.6, filter: "blur(1px)", "&::before": { content: '""', position: "absolute", inset: "-10px", borderRadius: "50%", padding: "5px", background: `conic-gradient(from 0deg, transparent, ${gold}, transparent 40%, ${gold})`, WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", WebkitMaskComposite: "destination-out", maskComposite: "exclude", animation: `${rotateCircle} 2s linear infinite` } }} />
              <Box sx={{ position: "absolute", inset: 0, background: `radial-gradient(circle at center, rgba(250, 204, 21, 0.1) 0%, transparent 70%)`, filter: "blur(60px)", animation: `${spotlightMove} 6s infinite ease-in-out` }} />
              <motion.div variants={anim.thunder} animate="animate">
                <Typography variant={isMobile ? "h4" : "h2"} align="center" sx={{ height: 100, position: "relative", zIndex: 2, fontWeight: 900, letterSpacing: { xs: "0.1em", md: "0.18em" }, textTransform: "uppercase", color: "#FFFFFF", lineHeight: 1, textShadow: `0 0 20px ${gold}`,fontFamily: "'Playfair Display', serif" }}>About <span style={{ color: gold ,fontFamily: "'Playfair Display', serif" }}>Us</span></Typography>
              </motion.div>
              <Typography align="center" sx={{ position: "relative", zIndex: 2, color: "rgba(255,255,255,0.9)", letterSpacing: { xs: 3, md: 8 }, fontSize: { xs: 12, md: 14 }, mt: 3, fontWeight: 600, textTransform: "uppercase", lineHeight: 1, fontFamily: "'Playfair Display', serif"}}>Compassion • Purpose • Impact</Typography>
            </Box> </motion.div>
        <Box sx={{ mt: { xs: -4, md: -5 } }}>
            <Container><motion.div variants={anim.fadeUp} initial="hidden" whileInView="visible">
              <Box sx={{ background: "rgba(30, 41, 59, 0.4)", backdropFilter: "blur(4px)", borderRadius: 6, p: { xs: 4, md: 8 }, boxShadow: "0 40px 120px rgba(0,0,0,0.3)", border: `1px solid rgba(255,255,255,0.1)` }}>
                <H4Center color={navyText} mt={8}>Our  <span style={{ color: "#008080" , fontFamily: "'Playfair Display', serif", }}>Vision</span></H4Center>
                <Typography color={navyText} mt={2} lineHeight={1.8} sx={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' ,fontFamily: "'Playfair Display', serif"}}>A world where <Box component="span" sx={{ fontWeight: 700, color: "#008080" }}>no mother or newborn</Box> loses life due to <Box component="span" sx={{ color: "#008080", fontWeight: 600 }}>delayed care</Box>, <Box component="span" sx={{ color: "#008080", fontWeight: 600 }}>financial hardship</Box>, or lack of <Box component="span" sx={{ color: "#008080",fontWeight: 700 }}>medical support</Box>.<br /><br />We envision a future where <Box component="span" sx={{ color: navyText, fontWeight: 600 }}>every individual</Box> has the opportunity to <Box component="span" sx={{ color: "#008080", fontWeight: 700 }}>thrive</Box> through <Box component="span" sx={{ color: "#008080", fontWeight: 600 }}>sustainable support</Box>, <Box component="span" sx={{ color: "#008080", fontWeight: 600 }}>education</Box>, and <Box component="span" sx={{ color: "#008080", fontWeight: 700 }}>compassionate care</Box>.</Typography>
                <Divider sx={{ my: 4, borderColor: "rgba(255,255,255,0.2)" }} />
                <H4Center color={navyText} mt={8}>Our  <span style={{ color: "#EC5800" , fontFamily: "'Playfair Display', serif", }}>Mission</span></H4Center>
                <Typography color={navyText} mt={2} lineHeight={1.8} sx={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)', fontFamily: "'Playfair Display', serif" }}>We act <Box component="span" sx={{ color: "#EC5800" , fontWeight: 700 }}>swiftly</Box>, <Box component="span" sx={{ color: "#EC5800" , fontWeight: 700 }}>compassionately</Box>, and <Box component="span" sx={{ color: "#EC5800" , fontWeight: 700 }}>responsibly</Box> to <Box component="span" sx={{color: "#EC5800" , fontWeight: 700 }}>save lives</Box>, <Box component="span" sx={{color: "#EC5800" , fontWeight: 600 }}>empower families</Box>, and create meaningful impact during the <Box component="span" sx={{ color: navyText, fontWeight: 700 }}>most critical moments</Box>.<br /><br />Our mission is to <Box component="span" sx={{ color: "#EC5800" , fontWeight: 700 }}>empower underprivileged communities</Box> by providing <Box component="span" sx={{ color: "#EC5800" ,  fontWeight: 600 }}>essential resources</Box>, fostering <Box component="span" sx={{ color: "#EC5800" ,  fontWeight: 600 }}>self-reliance</Box>, and <Box component="span" sx={{ color: "#EC5800" ,  fontWeight: 700 }}>bridging the gap</Box> between <Box component="span" sx={{ color: "#EC5800" ,  fontWeight: 700 }}>crisis</Box> and <Box component="span" sx={{ color: "#EC5800" ,  fontWeight: 700 }}>stability</Box> through <Box component="span" sx={{ color: navyText, fontWeight: 700 }}>dedicated social service</Box>.</Typography>
                 <Divider sx={{ my: 4, borderColor: "rgba(255,255,255,0.2)" }} />
               <H4Center color={navyText} mt={8}>Our  <span style={{ color: "#EC5800" , fontFamily: "'Playfair Display', serif", }}>Impact Focus</span></H4Center>
                <Box mt={4}>{[{ l: "Pregnancy Emergency", v: 90 }, { l: "Newborn Emergency care", v: 90 }].map((item, i) => (
                  <Box key={i} mb={4}><Typography fontWeight={600} color={navyText}>{item.l}</Typography>
                    <Box sx={{ position: "relative", height: 16, borderRadius: 20, background: "rgba(51, 65, 85, 0.6)", overflow: "hidden", mt: 1 }}>
                      <motion.div initial={{ width: 0 }} whileInView={{ width: `${item.v}%` }} transition={{ duration: 1.2, ease: "easeOut" }} style={{ height: "100%", background: `linear-gradient(90deg, ${gold}, ${olive})`, borderRadius: 20 }} />
                      <motion.div animate={{ left: [`0%`, `${item.v}%`, `0%`] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} style={{ position: "absolute", top: "50%", transform: "translate(-50%, -50%)", width: 22, height: 22, borderRadius: "50%", background: gold, boxShadow: `0 0 12px ${gold}`, zIndex: 2 }} />
                    </Box></Box>
                ))}</Box>
               <Box sx={{ textAlign: "center", p: { xs: 3, md: 4 }, borderRadius: 4, background: `linear-gradient(135deg, rgba(15, 23, 42, 0.6), rgba(30, 41, 59, 0.6))`, color: "#fff", position: "relative", overflow: "hidden", border: `1px solid ${gold}44` }}>
                  <motion.div animate={{ opacity: [0.1, 0.3, 0.1] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} style={{ position: "absolute", inset: 0, background: `radial-gradient(circle at center, ${gold}33, transparent 70%)` }} />
                  <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} style={{ position: "relative", zIndex: 1 }}>
                    <Typography variant="h5" fontWeight={700} fontSize={20} sx={{ color: gold, textShadow: '2px 2px 4px rgba(0,0,0,0.5)', fontFamily: "'Playfair Display', serif" }}>“Saving one life may not change the world, but it changes the world for that one life.”</Typography>
                  </motion.div>
                </Box>  <Divider sx={{ my: 4, borderColor: "rgba(255,255,255,0.2)" }} /><H4Center color={navyText}>Get <span style={{ color: "#008080" , fontFamily: "'Playfair Display', serif" }}>Involved</span></H4Center>
               <Grid container spacing={4} sx={{ mb: -5, mt: 2 }} justifyContent="center"> {[ { t: "Support", i: <VolunteerActivismIcon />, c: gold, d: "Stand with us by supporting life-saving care for mothers and newborns during their most critical hours." }, { t: "Partner", i: <HandshakeIcon />, c: olive, d: "Collaborate with us to expand reach, strengthen healthcare access, and create sustainable community impact." }, { t: "Join", i: <GroupAddIcon />, c: "#3B82F6", d: "Become part of a compassionate movement dedicated to protecting life, dignity, and hope for the future." }].map((card, idx) => (
    <Grid item xs={12} sm={6} md={4} key={idx} sx={{ display: "flex", justifyContent: "center" }}>
      <Box component={motion.div} whileHover={{ y: -15, scale: 1.02 }} sx={{ width: "270px", p: 4, textAlign: "center", bgcolor: "rgba(15, 23, 42, 0.5)", backdropFilter: "blur(2px)", borderRadius: 6, boxShadow: "0 10px 30px rgba(0,0,0,0.3)", borderTop: `5px solid ${card.c}`, border: `1px solid rgba(255,255,255,0.1)`, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Box sx={{ color: card.c, mb: 2, transform: "scale(1.5)" }}>{card.i}</Box>
        <Typography variant="h6" fontWeight={800} gutterBottom color={card.c} sx={{ fontFamily: "'Playfair Display', serif" }}>
          {card.t}
        </Typography>
        <Typography color={navyText} fontSize="0.95rem" sx={{ fontFamily: "'Playfair Display', serif" }}>
          {card.d}
        </Typography>
      </Box>
    </Grid>
  ))}</Grid> </Box></motion.div></Container></Box>
           <motion.div variants={anim.fadeUp} initial="hidden" whileInView="visible">
            <Box sx={{ maxWidth: 980, mt: 3, mx: "auto", px: { xs: 3, md: 8 }, py: { xs: 4, md: 8 }, borderRadius: 6, background: "rgba(30, 41, 59, 0.4)", backdropFilter: "blur(4px)", boxShadow: "0 50px 140px rgba(0,0,0,0.4)", border: `1px solid rgba(255,255,255,0.1)` }}>
              <Typography lineHeight={1.8} color={navyText} fontSize="1.1rem" sx={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)', fontFamily: "'Playfair Display', serif" }}>
                &bull; <Box component="span" sx={{ color: "#EC5800" ,  fontWeight: 800 }}>Sai Nisha Foundation</Box> was born from <Box component="span" sx={{ color: "#EC5800" ,  fontWeight: 600 }}>love, loss, and resolve</Box> to protect <Box component="span" sx={{ color: navyText, fontWeight: 700 }}>fragile life</Box>.<br />
                &bull; We stand in the gap for families facing <Box component="span" sx={{color: "#EC5800" ,  fontWeight: 600 }}>fear and uncertainty</Box> during <Box component="span" sx={{ color: "#EC5800" ,  fontWeight: 700 }}>childbirth</Box>.<br />
                &bull; We prioritize support during the <Box component="span" sx={{ color: "#EC5800" ,  fontWeight: 600 }}>final weeks of pregnancy</Box> and <Box component="span" sx={{ color: "#EC5800" ,  fontWeight: 600 }}>first hours of birth</Box>.
              </Typography>
                <H4Center color={navyText} mt={8}>Our  <span style={{ color: "#008080" , fontFamily: "'Playfair Display', serif", }}>Roots</span></H4Center>
              <Divider sx={{ my: 2, borderColor: `${olive}33` }} />
              <Typography color={navyText} lineHeight={1.8} sx={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)',fontFamily: "'Playfair Display', serif"  }}>
                &bull; Established in <Box component="span" sx={{ fontWeight: 800, color: navyText, fontFamily: "'Playfair Display', serif" }}>2023</Box> by <Box component="span" sx={{ fontWeight: 800, color: "#008080" , fontFamily: "'Playfair Display', serif" }}>Ganesh and his spouse Udaya Rekha</Box> to honor a <Box component="span" sx={{ fontWeight: 600, color: "#008080" }}>deeply personal promise</Box>.<br />
                &bull; Named in loving memory of <Box component="span" sx={{ fontWeight: 800, color: "#008080", fontFamily: "'Playfair Display', serif" }}>Sai Nisha (child)  </Box>named after  <Box component="span" sx={{ fontWeight: 800, color: "#008080",fontFamily: "'Playfair Display', serif"}}>Nithya and Shanmugam (Ganesh parents) </Box>.<br />
                &bull; Born from the pain of <Box component="span" sx={{ fontWeight: 600, color: "#008080" , fontFamily: "'Playfair Display', serif" }}>losing a child</Box> due to <Box component="span" sx={{ fontWeight: 600, color: "#008080" , fontFamily: "'Playfair Display', serif" }}>delayed hospital care</Box>.
              </Typography>
              <H4Center color={navyText} mt={8}> Purpose <span style={{ color: "#008080" , fontFamily: "'Playfair Display', serif", }}> Forged Through Loss</span></H4Center>
              <Divider sx={{ my: 2, borderColor: "rgba(255,255,255,0.1)" }} />
              <Typography color={navyText} lineHeight={1.8} sx={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)', fontFamily: "'Playfair Display', serif" }}>
                &bull; Strengthened following the <Box component="span" sx={{ color: "#008080" , fontWeight: 600, fontFamily: "'Playfair Display', serif" }}>untimely loss</Box> of our founder.<br />
                &bull; Transforming <Box component="span" sx={{ color: "#008080" , fontWeight: 800 , fontFamily: "'Playfair Display', serif"}}>personal grief</Box> into <Box component="span" sx={{ color: "#008080" , fontWeight: 600 }}>compassionate action</Box>.<br />
                &bull; Guided by the belief that <Box component="span" sx={{ color: navyText, fontWeight: 800 ,fontFamily: "'Playfair Display', serif" }}>care delayed should never become care denied</Box>.
              </Typography>
             <H4Center color={navyText} mt={8}>What We<span style={{ color: "#EC5800" , fontFamily: "'Playfair Display', serif", }}> believe </span></H4Center>
              <Divider sx={{ my: 2, borderColor: "rgba(255,255,255,0.1)" }} />
              <Typography color={navyText} lineHeight={1.8} sx={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)',fontFamily: "'Playfair Display', serif" }}>&bull; <Box component="span" sx={{ fontWeight: 800, color: "#EC5800" , fontFamily: "'Playfair Display', serif" }}>Every mother</Box> deserves <Box component="span" sx={{ fontWeight: 600, color: "#EC5800" , }}>dignity and care</Box>.<br />&bull; <Box component="span" sx={{ fontWeight: 800, color: "#EC5800" , }}>Timely intervention</Box> saves <Box component="span" sx={{ fontWeight: 800, color: "#EC5800" , }}>entire families</Box>.</Typography>
              <H4Center color={navyText} mt={8}>Our<span style={{ color: "#008080", fontFamily: "'Playfair Display', serif", }}> Core Focus</span></H4Center>
              <Divider sx={{ my: 2, borderColor: "rgba(255,255,255,0.1)" }} />
              <Typography color={navyText} lineHeight={1.8} sx={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)',fontFamily: "'Playfair Display', serif" }}>&bull; <Box component="span" sx={{ fontWeight: 800, color: "#008080", fontFamily: "'Playfair Display', serif"}}>Supporting Mothers</Box> in the <Box component="span" sx={{ fontWeight: 600, color: "#008080" }}>Third Trimester</Box>.<br />&bull; <Box component="span" sx={{ fontWeight: 800, color: navyText }}>Emergency Support</Box> for <Box component="span" sx={{ fontWeight: 800, color: "#008080" }}>New Borns & NICU care</Box>.</Typography>
             <H4Center color={navyText} mt={8}>Compassion <span style={{ color: "#008080", fontFamily: "'Playfair Display', serif", }}> Beyond Boundaries </span></H4Center>
              <Divider sx={{ my: 2, borderColor: "rgba(255,255,255,0.1)" }} />
              <Typography color={navyText} lineHeight={1.8} sx={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)', fontFamily: "'Playfair Display', serif" }}>&bull; Children Striving <Box component="span" sx={{ color: "#008080", fontWeight: 800 ,fontFamily: "'Playfair Display', serif" }}>for education and sports excellence</Box>, and <Box component="span" sx={{ color: navyText, fontWeight: 700 }}>Injured elderly animals</Box>, <Box component="span" sx={{ color: "#008080", fontWeight: 800 }}>Mentally challenged elders facing neglect</Box>.</Typography>
              <H4Center color={navyText} mt={8}> Our <span style={{ color: "#EC5800" , fontFamily: "'Playfair Display', serif", }}> Promise </span></H4Center>
              <Divider sx={{ my: 2, borderColor: gold }} />
              <Typography color={navyText} lineHeight={1.8} textAlign="center" fontSize="1.1rem" sx={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)', fontFamily: "'Playfair Display', serif" }}>&bull; We promise <Box component="span" sx={{ color: "#EC5800" , fontWeight: 800 }}>presence</Box>, <Box component="span" sx={{ color: "#EC5800" , fontWeight: 800 }}>honesty</Box>, and <Box component="span" sx={{ color: navyText, fontWeight: 800 }}>compassion</Box> to every life we reach.<br />&bull; Because <Box component="span" sx={{ color: "#EC5800" , fontWeight: 900 }}>every life is worth fighting for</Box>.</Typography>
            </Box>
          </motion.div>
          <Box sx={{ mt: { xs: 8, md: 16 } }}>
            <motion.div variants={anim.stagger} initial="hidden" whileInView="visible"><Grid container spacing={{ xs: 3, md: 6 }} justifyContent="center">
              {[aboutImg1, aboutImg2].map((img, i) => (
                <Grid item xs={12} sm={6} key={i}><motion.img src={img} variants={anim.fadeUp} whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 1 : -1 }} style={{ width: "100%", maxWidth: "500px", height: "auto", aspectRatio: "3/2", objectFit: "cover", borderRadius: 24, border: `4px solid ${gold}`, boxShadow: "0 20px 50px rgba(0,0,0,0.5)" }} /></Grid>
              ))}
            </Grid></motion.div>
          </Box></Container></Box><Box sx={{ position: "relative", zIndex: 2, "& *": { color: "#FFFFFF !important" }, bgcolor: "rgba(2, 6, 23, 0.9)" }}><Footer /></Box> </ThemeProvider> );}