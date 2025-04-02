import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { cpp } from "@codemirror/lang-cpp";
import { Box, Typography, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import socket from "../api/socket.js"

const RoomPage = () => {
  const [iscreater,setisCreater] = useState(false)
  const { id } = useParams(); // Get the room ID from URL
  const [code, setCode] = useState(""); // Store the code
  const [language, setLanguage] = useState(javascript()); // Default to JavaScript
  const [selectedLang, setSelectedLang] = useState("javascript"); // Track selected language
  const handleLanguageChange = (event) => {
    const lang = event.target.value;
    setSelectedLang(lang);
    setLanguage(
      lang === "javascript" ? javascript() :
        lang === "python" ? python() :
          cpp() // Used for both C and C++
    );
  };

  useEffect(() => {
    socket.emit('join_room', { cc_pin: id })
    socket.on('user_joined', () => {
      console.log("User successfully joined the room")
    })
    socket.on('user_error', (data) => {
      console.log("User could not join the room", data)
    })
    setisCreater(localStorage.getItem("creater") === "true")
    console.log("are you the creater?",iscreater)
  }, [])

  useEffect(() => {
    //if the user is the creater then only send the message
    // console.log("is still the creater but am i sending the message i need to?",iscreater)
    if (iscreater) {
      // console.log("message sent")
      socket.emit('code_message', { code: code, cc_pin: id })
    }
  }, [code])

  useEffect(() => {
    if (!iscreater) {
      // console.log("reciveingggg code,hi")
      socket.on('code', (data) => {
        setCode(data.code)
        // console.log("code recived", data)
      })
    }
  }, [socket])

  return (
    <Box sx={{
      position: "fixed", // Fix the page in place
      top: 0,
      left: 0,
      width: "100vw", // Full viewport width
      height: "100vh", // Full viewport height
      display: "flex", bgcolor: "black", color: "white"
    }}>

      <CodeMirror
        value={code}
        height="100vh"
        width="80vw"
        theme="dark"
        extensions={[language]}
        onChange={(value) => setCode(value)}
      />
    </Box>

  );
};

export default RoomPage;
