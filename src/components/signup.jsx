import React, { useState } from "react";
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
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

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
    console.log("Sign Up Data:", formData);
  };

  return (
    <Box
      sx={{
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
            margin="normal"
            variant="outlined"
            slotProps={{
              startAdornment: (
                <InputAdornment position="start">📝</InputAdornment>
              ),
            }}
            value={formData.fullName}
            onChange={handleChange}
          />
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
            }}
            value={formData.username}
            onChange={handleChange}
          />
          <TextField
            name="email"
            label="Email"
            fullWidth
            margin="normal"
            variant="outlined"
            slotProps={{
              startAdornment: (
                <InputAdornment position="start">📧</InputAdornment>
              ),
            }}
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            fullWidth
            margin="normal"
            variant="outlined"
            slotProps={{
              startAdornment: (
                <InputAdornment position="start">🔒</InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    onClick={() => togglePasswordVisibility("password")}
                    sx={{ minWidth: 0, p: 0, color: "inherit" }}
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
            margin="normal"
            variant="outlined"
            slotProps={{
              startAdornment: (
                <InputAdornment position="start">🔒</InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    onClick={() => togglePasswordVisibility("confirmPassword")}
                    sx={{ minWidth: 0, p: 0, color: "inherit" }}
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
            control={<Checkbox color="primary" />}
            label={
              <>
                I Agree with{" "}
                <Link href="#" underline="hover" color="primary">
                  privacy
                </Link>{" "}
                and{" "}
                <Link href="#" underline="hover" color="primary">
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
              borderRadius: 3,
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
