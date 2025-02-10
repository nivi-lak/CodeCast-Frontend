import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const LandingPage = () => {
  return (
    <Box
      sx={{
        position: "fixed", // Fix the page in place
        top: 0,
        left: 0,
        width: "100vw", // Full viewport width
        height: "100vh", // Full viewport height
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(to bottom,rgba(165, 14, 178, 1), #000)",
        color: "white",
        overflow: "hidden", // Prevent scrolling
      }}
    >
      {/* Navbar */}
      <AppBar position="static" sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
            CodeCast
          </Typography>
          <Box>
            <Button color="inherit" href="#aboutus" sx={{ textTransform: "none" }}>
              AboutUs
            </Button>
            <Button color="inherit" href="/login" sx={{ textTransform: "none" }}>
              Login
            </Button>
            <Button color="inherit" href="/signup" sx={{ textTransform: "none" }}>
              Signup
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2 }}>
          CodeCast
        </Typography>
        <Typography variant="h6" sx={{ fontStyle: "italic" }}>
          "Real Time CODING, Real Time LEARNING"
        </Typography>
      </Box>
    </Box>
  );
};

export default LandingPage;
