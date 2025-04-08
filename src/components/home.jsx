import React, { useState } from "react";
import { Box, Typography, IconButton, Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';
import axios from "../api/axios.js";
import socket from "../api/socket.js"
import logo from "../assets/logo.svg"
const HomePage = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [openPop, setOpenPop] = useState(false);
  const [roomUrl, setRoomUrl] = useState("");
  const [cc_pin, setcc_pin] = useState("");
  const [password, setPassword] = useState("");
  const generateRoomUrl = () => {
    const roomId = Math.random().toString(36).slice(2, 10);
    setcc_pin(roomId) // Generate unique room ID
    const url = `${window.location.origin}/room/${roomId}`; // Construct the full URL
    setRoomUrl(url);
  };

  const joinroom = async () => {

    if (!socket) {
      console.log("socket is not connected");
    }
    if (!cc_pin) {
      console.log("cc_pin does not exists");
    }
    if (!password) {
      console.log("Password is not set");
    }

    await axios.post('/room/addUserToRoom', {
      cc_pin,
      password
    }).then((res) => {
      console.log(res);
      if (res.status == 200 || res.status == 201) {
        setPassword("");
        setcc_pin("")
        console.log("Room credentials coorect, the user can navigate")
        const url = `${window.location.origin}/room/${cc_pin}`; // Construct the full URL
        setRoomUrl(url);
        localStorage.setItem("creater", false)

        setOpenPopup(false);
        if (url) {
          // console.log("hiii")
          window.open(url, "_blank");
        }

      }
    }).catch((error) => {
      console.log(error)
    })
  }

  const createroom = async () => {
    console.log(socket)
    if (!socket) {
      console.log("socket is not connected");
    }
    if (!cc_pin) {
      console.log("cc_pin does not exists");
    }
    if (!password) {
      console.log("Password is not set");
    }

    await axios.post('/room/create-room', {
      cc_pin,
      password
    }).then((res) => {
      console.log(res);
      if (res.status == 200 || res.status == 201) {
        console.log("Room successfully created, the user can navigate")
        setPassword("");
        setcc_pin("")
        const url = `${window.location.origin}/room/${cc_pin}`;
        setRoomUrl(url);
        setOpenPopup(false);
        localStorage.setItem("creater", true)
        if (url) {
          console.log("hiii")
          window.open(url, "_blank");
        }

      }
    }).catch((error) => {
      console.log(error)
    })
  }

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
          height: "60px",
          background: "rgba(38, 38, 38, 1)",
          display: "flex",
          alignItems: "center", // Vertically center the content
          paddingLeft: "10px", // Add some padding to avoid touching the edges
        }}
      >
        <IconButton sx={{ position: "absolute", right: 100, color: "white", transform: "scale(1.5)" }}>
          <AccountCircleIcon />
        </IconButton>
        <IconButton sx={{ position: "absolute", right: 50, color: "white", transform: "scale(1.5)" }}>
          <SettingsIcon />
        </IconButton>
        <Box sx={{ p: 2 }}>
          <img src={logo} alt="Logo" style={{ height: 40 }} />
        </Box>
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
          paddingTop: "10px",
          paddingBottom: "10px",
        }}>
        <Button
          onClick={() => setOpenPop(true)}
          type="submit"
          variant="contained"

          sx={{
            padding: 1,
            fontWeight: "bold",
            width: "150px",
            bgcolor: "purple",
            borderRadius: "50px",
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
          padding: 2
        }}>
        <Box
          sx={{
            position: "relative", // Set position relative for child elements
            width: "150px",
            height: "150px",
            backgroundColor: "transparent",
            border: "2px dashed #565656",
            borderRadius: 3,
            boxShadow: 3,
            display: "flex",
            justifyContent: "center", // Center horizontally
            alignItems: "center", // Center vertically
          }}>
          <IconButton sx={{ position: "absolute", top: 40, color: "white", transform: "scale(1.2)" }}>
            <AddIcon />
          </IconButton>
          <Button
            onClick={() => {
              setOpenPopup(true);
              generateRoomUrl()
            }}
            sx={{
              color: "white",
              fontFamily: "Arial, sans-serif",
              fontweight: "normal",
              textTransform: "none",
              top: 20
            }}>
            Create Room
          </Button>
        </Box>
      </Box>


      <Dialog 
      open={openPopup}
      onClose={() => setOpenPopup(false)} 
      slotProps={{
        paper: {
          sx: {
            // bgcolor: '#2a2a2a',
            // color: 'white',
            padding: 2,
            borderRadius: 2,
          }
        }
      }}>
        <DialogTitle>Create Room</DialogTitle>
        <DialogContent>
          <TextField sx={{ input: { color: "white" } }} label="CC Pin" fullWidth margin="dense" variant="outlined" value={cc_pin} disabled />
          <TextField label="Password" variant="outlined" fullWidth margin="dense" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Box sx={{ display: "flex", height: "50px", border: "1px solid", borderColor: "rgba(150, 149, 149, 1)", borderRadius: 1 }}>
            <Typography variant="h7" sx={{ paddingTop: "10px", paddingLeft: "10px", color: "rgba(131, 131, 131, 1)" }}>
              Link
            </Typography>
            {roomUrl && (
              <Typography component="a" href={roomUrl} target="_blank" sx={{ paddingLeft: "10px", paddingTop: "10px", color: "cyan", textDecoration: "none", align: "center" }}>
                {roomUrl}
              </Typography>
            )}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenPopup(false)} color="secondary">
            Cancel
          </Button>
          <Button onClick={createroom} color="primary" variant="contained">
            Create
          </Button>
        </DialogActions>
      </Dialog>


      <Dialog open={openPop} onClose={() => setOpenPop(false)}>
        <DialogTitle>Join Room</DialogTitle>
        <DialogContent>

          <TextField label="Enter CC Pin" fullWidth margin="dense" value={cc_pin} onChange={(e) => { setcc_pin(e.target.value) }} />
          <TextField label="Enter Password" fullWidth margin="dense" type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenPop(false)} color="secondary">
            Cancel
          </Button>
          <Button onClick={joinroom} color="primary" variant="contained">
            Join
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default HomePage;