import React from "react";
import {
  Box,
  Button,
  Typography,
  Grid,
  Paper,
  Container,
  CssBaseline,
  keyframes,
  useMediaQuery,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "./Footer";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";

const creamBg = "#F7F4EC";
const navyText = "#1F2F3F";
const olive = "#7C8F29";
const gold = "#D68910";
const mutedText = "#5F6F7E";

const theme = createTheme({
  typography: {
    fontFamily: `"Poppins", "Roboto", "Helvetica", "Arial", sans-serif`,
    h2: { fontWeight: 900 },
    h4: { fontWeight: 800 },
    h5: { fontWeight: 700 },
    h6: { fontWeight: 600 },
  },
});

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const spotlightMove = keyframes`
  0% { transform: translate(-20%, -20%); opacity: 0; }
  20% { opacity: 1; }
  80% { opacity: 1; }
  100% { transform: translate(120%, 120%); opacity: 0; }
`;

/* 🔥 NEW ANIMATIONS (ADDED – NOT CHANGED) */
const slideFromLeft = keyframes`
  from { opacity: 0; transform: translateX(-60px); }
  to { opacity: 1; transform: translateX(0); }
`;

const slideFromRight = keyframes`
  from { opacity: 0; transform: translateX(60px); }
  to { opacity: 1; transform: translateX(0); }
`;

function BubblesBackground() {
  return (
    <Box sx={{ position: "fixed", inset: 0, zIndex: 1, pointerEvents: "none" }}>
      {[...Array(40)].map((_, i) => {
        const size = Math.random() * 20 + 8;
        const left = Math.random() * 100;
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 20;

        return (
          <Box
            key={i}
            sx={{
              position: "absolute",
              bottom: "-30px",
              left: `${left}%`,
              width: size,
              height: size,
              borderRadius: "50%",
              backgroundColor: "rgba(214,137,16,0.45)",
              boxShadow: "0 0 15px rgba(214,137,16,0.3)",
              animation: `floatUp ${duration}s linear infinite`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}

      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0); opacity: 0; }
          20% { opacity: 0.7; }
          100% { transform: translateY(-450vh); opacity: 0; }
        }
      `}</style>
    </Box>
  );
}

export default function Careers() {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box sx={{ background: `linear-gradient(180deg, ${creamBg}, #fff)` }}>
        <BubblesBackground />

        <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
          {/* HEADER */}
          <Box
            sx={{
              backgroundColor: "#111827",
              borderRadius: 4,
              py: { xs: 10, md: 15 },
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
              mb: 8,
            }}
          >
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(circle, rgba(214,137,16,0.25), transparent 70%)",
                filter: "blur(60px)",
                animation: `${spotlightMove} 6s infinite`,
              }}
            />

            <Typography
              variant={isMobile ? "h4" : "h2"}
              sx={{ color: "#fff", fontWeight: 900 }}
            >
              Our <span style={{ color: gold }}>Careers</span>
            </Typography>

            <Typography sx={{ color: "rgba(255,255,255,0.7)", mt: 3 }}>
              Explore • Participate • Grow
            </Typography>
          </Box>

          <Typography
            variant="h5"
            fontWeight={800}
            textAlign="center"
            sx={{ mb: 4 }}
          >
            Join us get Involved view openings
          </Typography>

          {/* JOB CARDS */}
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <JobCard
                title="Internship"
                location="Tambaram, Chennai, Tamil Nadu, India"
                desc="This is not your usual internship. At Sai Nisha Foundation, you will get to be part of one of India’s largest youth-run NGOs. You will learn real-world skills."
                type="Internship"
                date="09/08/2025"
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <JobCard
                title="Content writer"
                location="Tambaram, Chennai, Tamil Nadu, India"
                desc="Help us tell stories that matter. You will be responsible for creating engaging content that connects our mission with the hearts of thousands."
                type="Full time"
                date="12/08/2025"
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <JobCard
                title="Business Development"
                location="Tambaram, Chennai, Tamil Nadu, India"
                desc="Drive our growth and partnerships. You will identify opportunities and build relationships with corporate partners to scale our impact."
                type="Full time"
                date="15/08/2025"
              />
            </Grid>
          </Grid>

          {/* 🔥 WHY JOIN INVOLVE –*/}
         <Box sx={{ mt: 12 }}>
  <Typography
    variant="h4"
    fontWeight={800}
    textAlign="center"
    sx={{ color: navyText, mb: 6 }}
  >
    Why Join <span style={{ color: gold }}>Involve Here's the Scope</span>
  </Typography>

  <Grid container spacing={4} justifyContent="center">
    {/* CARD 1 */}
    <Grid item xs={12} md={4} display="flex" justifyContent="center">
      <Paper
        sx={{
          p: 4,
          borderRadius: 5,
          width: "100%",
          maxWidth: 320, 
          animation: `${slideFromLeft} 1s ease-out`,
        }}
      >
        <Typography fontWeight={700} sx={{ color: olive, mb: 1 }}>
          Purpose-Driven Work
        </Typography>
        <Typography fontSize={14} sx={{ color: mutedText }}>
          Work on purpose-driven projects that address real challenges in education,
          healthcare, and community upliftment. At Involve, every initiative is
          designed to create positive change on the ground, allowing you to see the
          real-world impact of your time, skills, and dedication.
        </Typography>
      </Paper>
    </Grid>

    {/* CARD 2 */}
    <Grid item xs={12} md={4} display="flex" justifyContent="center">
      <Paper
        sx={{
          p: 4,
          borderRadius: 5,
          width: "100%",
          maxWidth: 320,
          animation: `${slideFromRight} 1s ease-out`,
        }}
      >
        <Typography fontWeight={700} sx={{ color: olive, mb: 1 }}>
          Learn & Grow
        </Typography>
        <Typography fontSize={14} sx={{ color: mutedText }}>
          Build leadership, communication, and workplace skills through real-world
          challenges and meaningful mentorship. This hands-on experience helps you
          grow professionally, enhances your confidence, and equips you with skills
          that extend far beyond the classroom.
        </Typography>
      </Paper>
    </Grid>

    {/* CARD 3 */}
    <Grid item xs={12} md={4} display="flex" justifyContent="center">
      <Paper
        sx={{
          p: 4,
          borderRadius: 5,
          width: "100%",
          maxWidth: 320,
          animation: `${slideFromLeft} 1s ease-out`,
        }}
      >
        <Typography fontWeight={700} sx={{ color: olive, mb: 1 }}>
          Nationwide Impact
        </Typography>
        <Typography fontSize={14} sx={{ color: mutedText }}>
          Collaborate with a diverse team from across India and take part in projects
          that make a real difference. By working across regions and communities, you
          gain exposure to varied perspectives while helping initiatives that touch
          thousands of lives.
        </Typography>
      </Paper>
    </Grid>
  </Grid>
</Box>

{/* ===== FAQ SECTION ===== */}
<Box
  sx={{
    mt: 14,
    py: { xs: 8, md: 12 },
    background: "linear-gradient(135deg, #bae90e, #e8eb25)",
    borderRadius: 6,
    color: "#fff",
  }}
>
  <Container maxWidth="lg">
    <Grid container spacing={6} alignItems="flex-start">
      
      {/* LEFT CONTENT */}
      <Grid item xs={12} md={4}>
        <Typography variant="h4" fontWeight={800} mb={2}>
          Frequently asked questions
        </Typography>

        <Typography sx={{ opacity: 0.9, mb: 4 }}>
          Can’t find what you’re looking for?
          <br />
          We are always here to help.
        </Typography>

        <Paper
          sx={{
            p: 3,
            borderRadius: 4,
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <WhatsAppIcon sx={{ fontSize: 40, color: "#22c55e" }} />

          <Box>
            <Typography fontWeight={700} color="#111827">
              Reach out to us
            </Typography>
            <Typography fontSize={14} color="text.secondary">
              hello@sainisha.in
            </Typography>
            <Typography fontSize={14} color="text.secondary">
              Call us: +91 9962290875
            </Typography>
          </Box>
        </Paper>
      </Grid>

      {/* RIGHT FAQ ACCORDION */}
      <Grid item xs={12} md={8}>
        {[
          {
            q: "What is Sai Nisha Foundation?",
            a: "Sai Nisha Foundation is a youth-driven NGO focused on education, healthcare, and community development initiatives across India.",
          },
          {
            q: "How long does the recruitment process take?",
            a: "The recruitment process usually takes 1–2 weeks depending on the role and application volume.",
          },
          {
            q: "Is the internship paid or unpaid?",
            a: "Our internships are primarily learning-focused. Some roles may offer stipends based on performance and duration.",
          },
          {
            q: "Can I apply if I am still studying?",
            a: "Yes! Students are encouraged to apply. We offer flexible roles that can be balanced alongside academics.",
          },
          {
            q: "Who can I contact for more information?",
            a: "You can reach us via email or WhatsApp, and our team will be happy to assist you.",
          },
        ].map((item, index) => (
          <Accordion
            key={index}
            sx={{
              mb: 2,
              backgroundColor: "rgba(255,255,255,0.1)",
              color: "#fff",
              borderRadius: 2,
              "&:before": { display: "none" },
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}>
              <Typography fontWeight={600}>{item.q}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ opacity: 0.9 }}>{item.a}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Grid>
    </Grid>
  </Container>
</Box>


        </Container>

        <Footer />
      </Box>
    </ThemeProvider>
  );
}

function JobCard({ title, location, desc, type, date }) {
  return (
    <Paper
      sx={{
        p: 3,
        width: 320,
        borderRadius: 6,
        backdropFilter: "blur(10px)",
        transition: "0.3s",
        "&:hover": { transform: "translateY(-6px)" },
      }}
    >
      <Typography fontWeight={800} sx={{ color: olive }}>
        {title}
      </Typography>
      <Typography fontSize={13} sx={{ color: gold }}>
        {location}
      </Typography>
      <Typography fontSize={14} sx={{ color: mutedText, mt: 1 }}>
        {desc}
      </Typography>
      <Typography fontSize={12} sx={{ mt: 2 }}>
        {type} • Posted: {date}
      </Typography>
    </Paper>
  );
}
