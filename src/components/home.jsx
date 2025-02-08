//import React from "react";
import React, { useState } from "react";
import { Box, Typography, IconButton, Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';

const HomePage = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [openPop, setOpenPop] = useState(false);
  return (
    <Box
      sx={{
        position: "fixed", // Fix the page in place
        top: 0,
        left: 0,
        width: "100vw", 
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "rgba(18, 18, 18, 1)",
        color: "white",
        overflow: "hidden", // Prevent scrolling
      }}
    >
      <Box
        sx={{
          position: "relative", // Set position relative for child elements
          width: "100vw",
          height: "40px",
          background: "rgba(38, 38, 38, 1)",
          display: "flex",
          alignItems: "center", // Vertically center the content
          paddingLeft: "10px", // Add some padding to avoid touching the edges
        }}
      >
        <IconButton sx={{ position: "absolute", right: 100, color:"white",transform: "scale(1.5)"}}>
          <AccountCircleIcon/>
        </IconButton>
        <IconButton sx={{ position: "absolute", right: 50, color:"white", transform: "scale(1.5)"}}>
          <SettingsIcon/>
        </IconButton>
        <Typography variant="h5" sx={{ marginLeft: 6 }}>
          CC
        </Typography>
      </Box>
      <Box 
      sx={{
        position: "relative", // Set position relative for child elements
        width: "100vw",
        height: "40px",
        background: "rgba(18, 18, 18, 1)",
        display: "flex",
        alignItems: "left", 
        paddingLeft: "15px",
        paddingTop:"10px",
        paddingBottom:"10px",
      }}>
        <Button
        onClick={() => setOpenPop(true)}
        type="submit"
        variant="contained"
        
        sx={{
          padding: 1,
          fontWeight: "bold",
          width:"150px",
          bgcolor:"purple",
          borderRadius:"50px",
          ":hover": { bgcolor: "darkorchid" },
        }}
        >
          Join Room
        </Button>
      </Box>
      <Box
      sx={{
        width: "100vw", 
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "rgba(18, 18, 18, 1)",
        padding:2
      }}>
        <Box
        sx={{
          position: "relative", // Set position relative for child elements
          width: "150px",
          height: "150px",
          backgroundColor: "transparent",
          border:"2px dashed #565656",
          borderRadius: 3,
          boxShadow: 3,
          display: "flex",
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically
        }}>
        <IconButton sx={{ position: "absolute",top:40,color:"white",transform: "scale(1.2)"}}>
          <AddIcon/>
        </IconButton>
        <Button
        onClick={() => setOpenPopup(true)}
        sx={{
          color:"white",
           fontFamily: "Arial, sans-serif",
          fontweight:"normal",
          textTransform:"none",
          top:20        
          }}>
          Create Room
        </Button>
        </Box>
      </Box>


      <Dialog open={openPopup} onClose={() => setOpenPopup(false)}>
        <DialogTitle>Create Room</DialogTitle>
        <DialogContent>

          <TextField label="CC Pin" fullWidth margin="dense" />
          <TextField label="Password" fullWidth margin="dense" />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenPopup(false)} color="secondary">
            Cancel
          </Button>
          <Button href="/room" onClick={() => setOpenPopup(false)} color="primary" variant="contained">
            Create
          </Button>
        </DialogActions>
      </Dialog>


      <Dialog open={openPop} onClose={() => setOpenPop(false)}>
        <DialogTitle>Join Room</DialogTitle>
        <DialogContent>

          <TextField label="Enter CC Pin" fullWidth margin="dense" />
          <TextField label="Enter Password" fullWidth margin="dense" />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenPop(false)} color="secondary">
            Cancel
          </Button>
          <Button href="/room" onClick={() => setOpenPop(false)} color="primary" variant="contained">
            Join
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default HomePage;
