import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import logo from "../assets/logo.svg"
import home from "../assets/home.png"
import { AspectRatio } from "@mui/icons-material";
const LandingPage = () => {
  return (
    <Box
      sx={{
        bgcolor: "black",
        position: "fixed", // Fix the page in place
        top: 0,
        left: 0,
        width: "100vw", // Full viewport width
        height: "100vh", // Full viewport height
        display: "flex",
        flexDirection: "column",
        // background: "linear-gradient(to bottom,rgba(165, 14, 178, 1), #000)",
        color: "white",
        overflow: "hidden", // Prevent scrolling
      }}
    >
      <Box sx={{
        position: "absolute",
        top: "-20%",
        left: "15%",
        width: "400px",
        height: "400px",
        background: "radial-gradient(circle, rgba(165, 14, 178, 1) 0%, transparent 90%)",
        borderRadius: "50%",
        filter: "blur(130px)",
        zIndex: 0,
      }} />
      <Box sx={{
        position: "absolute",
        bottom: "-20%",
        right: "15%",
        width: "400px",
        height: "400px",
        background: "radial-gradient(circle, rgba(165, 14, 178, 1) 0%, transparent 90%)",
        borderRadius: "50%",
        filter: "blur(130px)",
        zIndex: 0,
      }} />
      {/* Navbar */}
      <AppBar position="static" sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
            CodeCast
          </Typography> */}
          <Box sx={{ p: 2 }}>
            <img src={logo} alt="Logo" style={{ height: 50 }} />
          </Box>
          <Box>
            <Button color="inherit" href="#aboutus" variant="text" sx={{ textTransform: "none" }}>
              AboutUs
            </Button>
            <Button color="inherit" href="/login" variant="text" sx={{ textTransform: "none" }}>
              Login
            </Button>
            <Button color="inherit" href="/signup" variant="contained" sx={{ textTransform: "none", backgroundColor: 'rgba(165, 14, 178, 1)' }}>
              Signup
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box sx={{
        display: "flex"
      }}>
        {/* <Box sx={{
          position: 'absolute',
        }}>
          <img src={home} alt="homepage" style={{ borderRadius: '20px', border: "2px solid grey" , height: '30' , width: 'auto' }} />
        </Box> */}
        <Box sx={{
          position: 'absolute',
          right: '100px',
          top: '150px'
        }}>
            <img src={home} alt="homepage" style={{ borderRadius: '20px', border: "2px solid #404040" , height: '500px',objectFit: 'contain' }} />
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "left",
            pl: 10,
            mt: 10
          }}
        >
          <Typography variant="h1" sx={{ fontWeight: "bold", font: "k2d", mb: 1, textAlign: 'left' }}>
            CodeCast
          </Typography>

          <Typography variant="h6" sx={{ fontStyle: "italic", mb: 5, textAlign: 'left' }}>
            Real-Time Hands-On coding
          </Typography>

          <Typography variant="h6" sx={{ mb: 2, textAlign: 'left' }}>
            Tired of just watching code fly by on screen?
          </Typography>

          <Typography variant="h6" sx={{ maxWidth: 500, textAlign: 'left', mb: 7 }}>
            With CodeCast code along in real-time, explore your own ideas with branches,
            and never miss a concept with breakpoints.
          </Typography>
          <Box sx={{
            display: "flex",

          }}>
            <Button variant="outlined" sx={{ borderColor: 'rgba(165, 14, 178, 1)', color: 'white', m: 1 }} >Create Room</Button>
            <Button variant="contained" sx={{ backgroundColor: 'rgba(165, 14, 178, 1)', color: 'white', m: 1 }}>Join Room</Button>
          </Box>
        </Box>

      </Box>
    </Box>
  );
};

export default LandingPage;
