import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { cpp } from "@codemirror/lang-cpp";
import { Box, Typography, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const RoomPage = () => {
  const { id } = useParams(); // Get the room ID from URL
  const [code, setCode] = useState(""); // Store the code
  const [language, setLanguage] = useState(javascript()); // Default to JavaScript
  const [selectedLang, setSelectedLang] = useState("javascript"); // Track selected language

  // Handle language change
  const handleLanguageChange = (event) => {
    const lang = event.target.value;
    setSelectedLang(lang);
    setLanguage(
      lang === "javascript" ? javascript() :
      lang === "python" ? python() :
      cpp() // Used for both C and C++
    );
  };

  return (
    <Box sx={{ position: "fixed", // Fix the page in place
        top: 0,
        left: 0,
        width:"100vw", // Full viewport width
        height: "100vh", // Full viewport height
        display: "flex", bgcolor: "black", color: "white" }}>
      
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
