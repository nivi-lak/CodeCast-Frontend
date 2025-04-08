import React, { useState } from "react";
import {
    Box, Typography, IconButton, Button, Dialog, DialogTitle, DialogContent,
    TextField, DialogActions
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';
import { InputAdornment } from "@mui/material"; // Import InputAdornment
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const HomePage = () => {
    const [openPopup, setOpenPopup] = useState(false);
    const [openPop, setOpenPop] = useState(false);
    const [ccPin, setCcPin] = useState("");
    const [password, setPassword] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [roomUrl, setRoomUrl] = useState("");

    //   const generateRoomUrl = () => {
    //     const roomId = Math.random().toString(36).substr(2, 8);
    //     const url =` ${window.location.origin}/room/${roomId}`;
    //     setRoomUrl(url);
    //   };


    //   const generateRoomCredentials = () => {
    //     const randomLetters = () => {
    //       return Array.from({ length: 3 }, () => 
    //         String.fromCharCode(97 + Math.floor(Math.random() * 26))
    //       ).join("");
    //     };

    //     const randomPin = ${randomLetters()}/${randomLetters()}/${randomLetters()};
    //     const randomPassword = Math.random().toString(36).slice(-8);



    //     setCcPin(randomPin);
    //     setPassword(randomPassword);
    //     generateRoomUrl();
    //   };

    return (
        <Box
            sx={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                background: "rgba(18, 18, 18, 1)",
                color: "white",
                overflow: "hidden",
            }}
        >
            <Box
                sx={{
                    position: "relative",
                    width: "100vw",
                    height: "40px",
                    background: "rgba(38, 38, 38, 1)",
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: "10px",
                }}
            >
                <IconButton sx={{ position: "absolute", right: 100, color: "white", transform: "scale(1.5)" }}>
                    <AccountCircleIcon />
                </IconButton>
                <IconButton sx={{ position: "absolute", right: 50, color: "white", transform: "scale(1.5)" }}>
                    <SettingsIcon />
                </IconButton>
                <Typography variant="h5" sx={{ marginLeft: 6 }}>
                    CC
                </Typography>
            </Box>

            <Box
                sx={{
                    width: "100vw",
                    height: "40px",
                    display: "flex",
                    paddingLeft: "15px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                }}>
                <Button
                    onClick={() => setOpenPop(true)}
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
                }}
            >
                <Box
                    sx={{
                        position: "relative",
                        width: "150px",
                        height: "150px",
                        backgroundColor: "transparent",
                        border: "2px dashed #565656",
                        borderRadius: 3,
                        boxShadow: 3,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <IconButton
                        onClick={() => {
                            generateRoomCredentials();
                            setOpenPopup(true);
                        }}
                        sx={{ color: "white", transform: "scale(1.5)", marginBottom: "8px" }}
                    >
                        <AddIcon />
                    </IconButton>

                    <Button
                        onClick={() => {
                            generateRoomCredentials();
                            setOpenPopup(true);
                        }}
                        sx={{
                            color: "white",
                            fontFamily: "Arial, sans-serif",
                            fontWeight: "normal",
                            textTransform: "none",

                            top: 20
                        }}
                    >
                        Create Room
                    </Button>
                </Box>
            </Box>

            <Dialog
                open={openPopup}
                onClose={() => setOpenPopup(false)}
                sx={{
                    bgcolor: '2A2A2A',
                    color: 'white',
                    width: '450px',
                    height: '400px'
                }}
                PaperProps={{
                    style: {
                        backgroundColor: '#2A2A2A',
                        color: 'white',
                        width: '450px',
                        height: '400px'
                    }
                }}
            >


                <DialogTitle style={{ textAlign: 'center' }}>Create Room</DialogTitle>
                <DialogContent>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                        {/* CC PIN */}
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Typography variant="subtitle1" sx={{ color: "white", width: "120px", textAlign: "left" }}>
                                CC Pin:
                            </Typography>
                            <TextField
                                margin="dense"
                                value={ccPin}
                                InputProps={{
                                    readOnly: true,
                                    sx: {
                                        height: "40px",
                                        padding: "10px",
                                        backgroundColor: "#1F1F1F",
                                        borderRadius: "5px"
                                    }
                                }}
                                sx={{
                                    input: {
                                        color: "white",
                                        height: "50px",
                                        padding: "0 10px"
                                    },
                                    backgroundColor: "#1F1F1F",
                                    width: "350px"
                                }}
                            />

                        </Box>

                        {/* PASSWORD */}
                        <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
                            <Typography
                                variant="subtitle1"
                                sx={{ color: "white", width: "120px", textAlign: "left" }}
                            >
                                Password:
                            </Typography>

                            <TextField
                                margin="dense"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                InputProps={{
                                    readOnly: !isEditing,
                                    disableUnderline: true,
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={() => setIsEditing(!isEditing)}
                                                sx={{
                                                    color: "white",
                                                    padding: "1px",
                                                    transform: "scale(0.8)"
                                                }}
                                            >
                                                <EditIcon />
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                                sx={{
                                    input: {
                                        color: "white",
                                        padding: "8px 10px",
                                        height: "25px"
                                    },
                                    backgroundColor: "#1F1F1F",
                                    borderRadius: "4px",
                                    width: "350px"
                                }}
                            />

                        </Box>

                        {/* ROOM URL */}
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Typography variant="subtitle1" sx={{ color: "white", width: "120px", textAlign: "left" }}>
                                URL:
                            </Typography>
                            <TextField
                                margin="dense"
                                value={roomUrl}
                                InputProps={{
                                    readOnly: true,
                                    sx: {
                                        height: "40px",
                                        padding: "10px",
                                        backgroundColor: "#1F1F1F",
                                        borderRadius: "5px"
                                    },
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={() => {
                                                    navigator.clipboard.writeText(roomUrl);
                                                    setCopied(true);
                                                    setTimeout(() => setCopied(false), 1500); // Reset after 1.5 sec
                                                }}
                                                sx={{ color: "white", transform: "scale(0.8)" }}
                                            >
                                                <ContentCopyIcon />
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                                sx={{
                                    input: {
                                        color: "white",
                                        height: "30px",
                                        padding: "0 10px"
                                    },
                                    backgroundColor: "#1F1F1F",
                                    width: "350px"
                                }}
                            />
                        </Box>

                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenPopup(false)} color="secondary">Cancel</Button>
                    <Button href={roomUrl} onClick={() => setOpenPopup(false)} sx={{
                        bgcolor: "#A50EB2",
                        ":hover": { bgcolor: "#8A0B90" }
                    }} variant="contained">Create</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default HomePage;