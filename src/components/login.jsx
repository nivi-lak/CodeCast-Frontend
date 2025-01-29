import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  Divider,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", formData);
  };

  return (
    <Box
      sx={{
        position: "fixed", // Fix the page in place
        top: 0,
        left: 0,
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        bgcolor: "rgba(18, 18, 18, 1)",
      }}
    >
      <Box
        sx={{
          width: 350,
          p: 3,
          bgcolor: "rgba(38, 38, 38, 1)",
          color: "white",
          borderRadius: 3,
          boxShadow: 4,
        }}
      >
        <Typography variant="h4" align="center" fontWeight="bold" mb={3}>
          Log In
        </Typography>

        <form onSubmit={handleLogin}>
          <TextField
            name="username"
            label="Username"
            fullWidth
            margin="normal"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">👤</InputAdornment>
              ),
              sx: {
                color: "lightblue", // Text color
                "&::placeholder": {
                  color: "lightgreen", // Placeholder color
                },
              },
            }}
            InputLabelProps={{
              sx: {
                color: "lightgray", // Label color
              },
            }}
            value={formData.username}
            onChange={handleChange}
          />
          <TextField
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            fullWidth
            margin="normal"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">🔒</InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    onClick={togglePasswordVisibility}
                    sx={{ minWidth: 0, p: 0, color: "inherit" }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </Button>
                </InputAdornment>
              ),
              sx: {
                color: "lightblue", // Text color
                "&::placeholder": {
                  color: "lightgreen", // Placeholder color
                },
              },
            }}
            InputLabelProps={{
              sx: {
                color: "lightgray", // Label color
              },
            }}
            value={formData.password}
            onChange={handleChange}
          />

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 1,
            }}
          >
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="Remember Me"
            />
            <Link href="#" underline="hover" color="primary">
              Forgot Password?
            </Link>
          </Box>

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
              borderRadius: 3,
            }}
          >
            Log In
          </Button>
        </form>

        <Divider sx={{ my: 2 }}>x</Divider>

        <Button
          fullWidth
          variant="outlined"
          startIcon={<GoogleIcon />}
          sx={{
            borderColor: "rgba(86, 86, 86, 1)",
            color: "grey.300",
            ":hover": { borderColor: "grey.400", color: "white" },
          }}
        >
          Continue with Google
        </Button>

        <Typography align="center" mt={2}>
          Don’t have an account?{" "}
          <Link href="/signup" underline="hover" color="secondary">
            Sign up
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginPage;
