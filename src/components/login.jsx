import React, { useState } from "react";
import { Box, Typography, TextField, Button, Link } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import GoogleIcon from '@mui/icons-material/Google';
import { Checkbox, FormControlLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useApi from "../hooks/useApi.js";
const theme = createTheme({
  palette: {
    primary: {
      main: "#A50EB2",
    },
  },
});

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const api = useApi();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    const logindata = {
      email: email,
      password: password
    }

     api.post('/users/login', logindata)
      .then((res) => {
        console.log(res);
        if (res.status == 200 || res.status == 201) {
          console.log("logged in successfully")
          navigate("/home");
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 409) {
          alert("This email is already registered. Please log in or use a different email.");
        } else {
          console.error("login failed:", error);
          alert("Login failed. Invalid credentials");
        }
      })

    // axios
    //   .post("http://localhost:5000/users/login", logindata,{ withCredentials: true })
    //   .then((res) => {
    //     console.log(res);
    //     if (res.status == 200 || res.status == 201) {
    //       console.log("logged in successfully")
    //       navigate("/home");

    //     }
    //   })
    //   .catch((error) => {
    //     if (error.response && error.response.status === 409) {
    //       alert("This email is already registered. Please log in or use a different email.");
    //     } else {
    //       console.error("login failed:", error);
    //       alert("Login failed. Invalid credentials");
    //     }
    //   });
  };



  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        minHeight: "100vh",
        width: "100vw",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(18, 18, 18, 1)",
        borderColor: "#565656",
        padding: 2,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 400,
          height: "400px",
          padding: 4,
          backgroundColor: "rgba(38, 38, 38, 1)",
          borderColor: "#565656",
          color: "white",
          borderRadius: 3,
          boxShadow: 3,
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{ textAlign: "center", fontWeight: "bold", marginBottom: 2 }}
        >
          Login
        </Typography>
        <form onSubmit={handleLogin}>
          <Box sx={{ marginBottom: 2 }}>
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              fullWidth

              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              InputProps={{
                style: { color: "#565656", height: "50px" }, // White text in input
              }}
              InputLabelProps={{
                style: { color: "#565656", height: "50px" }, // White label text
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#565656" }, // White border
                  "&:hover fieldset": { borderColor: "gray" }, // Hover color
                  "&.Mui-focused fieldset": { borderColor: "white" }, // Focus color

                }
              }}
            />

          </Box>
          <Box sx={{ marginBottom: 2 }}>
            <TextField
              id="password"
              label="Password"
              type="password"
              variant="outlined"

              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              InputProps={{
                style: { color: "white" },
              }}
              InputLabelProps={{
                style: {
                  color: "#565656 ", height: "50px"
                }
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#565656" },
                  "&:hover fieldset": { borderColor: "gray" },
                  "&.Mui-focused fieldset": { borderColor: "white" },

                },
              }}
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 2 }}>
            <FormControlLabel
              control={
                <Checkbox
                  value="rememberMe"
                  sx={{ color: "#A50EB2" }}
                />
              }
              label="Remember Me"
              sx={{
                color: "white",
                ".MuiFormControlLabel-label": { fontWeight: "normal" },
                display: "flex",
                justifyContent: "flex-start",
                paddingLeft: 0,
              }}
            />
            <Link href="#"
              sx={{
                color: "white",
                fontWeight: "normal",
                textDecoration: "none",
                alignSelf: "center",

                "&:hover": { color: "primary.main", textDecoration: "underline" },
                "& span:hover": {
                  color: "#1976d2", // Blue color on hover
                },
              }}
            >
              Forgot{" "}
              <Typography
                component="span"
                sx={{
                  color: "#A50EB2", // Purple color by default

                  "&:hover": { color: "#1976d2" }, // Blue on hover
                }}
              >
                Password
              </Typography>
              ?
            </Link>


          </Box>

          <ThemeProvider theme={theme}>
            <Button
              type="submit"
              variant="contained"
              color="primary"

              sx={{
                padding: 1,
                fontWeight: "bold",
                width: "278px",
                ":hover": { bgcolor: "darkorchid" },
              }}

            >
              Login
            </Button>
          </ThemeProvider>

        </form>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "300px",
            margin: "auto",
          }}
        >
          <Button
            variant="outlined"
            fullWidth
            startIcon={<GoogleIcon />}
            sx={{
              textTransform: "none",
              height: "26px",
              // justifyContent: "flex-start",
              justifyContent: "center",
              paddingLeft: 2,
              paddingRight: 2,
              fontWeight: "normal",
              color: "white",
              borderColor: "#565656",
              backgroundColor: "rgba(38, 38, 38, 1)",
              "&:hover": {
                backgroundColor: "rgba(38, 38, 38, 1)",
              },
              marginTop: 2,
            }}
          >
            Continue with Google
          </Button>
        </Box>
        <Typography
          variant="body2"
          sx={{ textAlign: "center", marginTop: 2, color: "white" }}
        >
          Don't have an account?{" "}
          <Link href="/SignUp" color="#A50EB" underline="hover"
            sx={{
              color: "#A50EB2",
              "&:hover": { color: "primary", }
            }}>
            Sign Up
          </Link>
        </Typography>

      </Box>
    </Box>
  );
};

export default LoginPage;