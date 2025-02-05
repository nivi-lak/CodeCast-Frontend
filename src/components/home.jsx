import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const HomePage = () => {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <Typography variant="h4" fontWeight="bold">
          Welcome to HomePage!
        </Typography>
      </Box>
    );
  };
  
  export default HomePage;
  