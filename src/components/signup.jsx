import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  InputAdornment,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePasswordVisibility = (field) => {
    if (field === "password") setShowPassword(!showPassword);
    else if (field === "confirmPassword") setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    signup();
  };

  const signup = () => {
    const signup_data = {
      name: formData.fullName,
      email: formData.email,
      password: formData.password,
    };

    axios
      .post("http://localhost:5000/users/register", signup_data ,{ withCredentials: true })
      .then((res) => {
        console.log(res.data);
        console.log(res.status);
        if (res.status === 200 || res.status === 201) {
          console.log("Successsss !!!")
          navigate("/home"); // Navigate to HomePage after signup
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 409) {
          alert("This email is already registered. Please log in or use a different email.");
        } else {
          console.error("Signup failed:", error);
          alert("Signup failed. Please try again later.");
        }
      });      
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "rgba(18, 18, 18, 1)",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: 350,
          p: 3,
          bgcolor: "rgba(33, 33, 33, 1)",
          color: "white",
          borderRadius: 3,
          boxShadow: 4,
        }}
      >
        <Typography variant="h4" align="center" fontWeight="bold" mb={3}>
          Sign Up
        </Typography>

        <form onSubmit={handleSignup}>
          <TextField
            name="fullName"
            label="Full Name"
            fullWidth
            sx={{
              input: { color: "white" },
              "& .MuiInputLabel-root": { color: "rgba(86, 86, 86, 1)" },
              "& .MuiInputLabel-root.Mui-focused": { color: "white" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "rgba(86, 86, 86, 1)" },
                "&:hover fieldset": { borderColor: "white" },
              },
            }}
            margin="normal"
            variant="outlined"
            value={formData.fullName}
            onChange={handleChange}
          />
          <TextField
            name="email"
            label="Email"
            fullWidth
            sx={{
              input: { color: "white" },
              "& .MuiInputLabel-root": { color: "rgba(86, 86, 86, 1)" },
              "& .MuiInputLabel-root.Mui-focused": { color: "white" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "rgba(86, 86, 86, 1)" },
                "&:hover fieldset": { borderColor: "white" },
              },
            }}
            margin="normal"
            variant="outlined"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            fullWidth
            sx={{
              input: { color: "white" },
              "& .MuiInputLabel-root": { color: "rgba(86, 86, 86, 1)" },
              "& .MuiInputLabel-root.Mui-focused": { color: "white" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "rgba(86, 86, 86, 1)" },
                "&:hover fieldset": { borderColor: "white" },
              },
            }}
            margin="normal"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    onClick={() => togglePasswordVisibility("password")}
                    sx={{
                      minWidth: 0,
                      p: 0,
                      color: "rgba(86, 86, 86, 1)",
                      background: "transparent",
                      "&:hover": { background: "transparent" },
                    }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </Button>
                </InputAdornment>
              ),
            }}
            value={formData.password}
            onChange={handleChange}
          />
          <TextField
            name="confirmPassword"
            label="Confirm Password"
            type={showConfirmPassword ? "text" : "password"}
            fullWidth
            sx={{
              input: { color: "white" },
              "& .MuiInputLabel-root": { color: "rgba(86, 86, 86, 1)" },
              "& .MuiInputLabel-root.Mui-focused": { color: "white" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "rgba(86, 86, 86, 1)" },
                "&:hover fieldset": { borderColor: "white" },
              },
            }}
            margin="normal"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    onClick={() => togglePasswordVisibility("confirmPassword")}
                    sx={{
                      minWidth: 0,
                      p: 0,
                      color: "rgba(86, 86, 86, 1)",
                      background: "transparent",
                      "&:hover": { background: "transparent" },
                    }}
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </Button>
                </InputAdornment>
              ),
            }}
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          <FormControlLabel
            control={<Checkbox sx={{ color: "rgba(165, 14, 178, 1)" }} />}
            label={
              <>
                I Agree with{" "}
                <Link href="#" underline="hover" color="rgba(165, 14, 178, 1)">
                  privacy
                </Link>{" "}
                and{" "}
                <Link href="#" underline="hover" color="rgba(165, 14, 178, 1)">
                  policy
                </Link>
              </>
            }
            sx={{ mt: 2 }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            sx={{
              bgcolor: "purple",
              mt: 2,
              mb: 2,
              ":hover": { bgcolor: "darkorchid" },
            }}
          >
            Sign Up
          </Button>
        </form>

        <Typography align="center">
          Already have an account?{" "}
          <Link href="/login" underline="hover" color="secondary">
            Log in
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default SignupPage;
