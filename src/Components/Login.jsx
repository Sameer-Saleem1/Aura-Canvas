import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Typography, TextField, Button, Box } from "@mui/material";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //email and password to the console
    console.log("Email:", formData.email);
    console.log("Password:", formData.password);
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          border: "1px solid white",
          borderRadius: "15px",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow: "5px 5px 25px  rgba(255,255,255,0.2)",
        }}
      >
        <Typography component="h1" variant="h1">
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <TextField
            type="email"
            margin="normal"
            required
            fullWidth
            id="email"
            name="email"
            label="Email Address"
            autoComplete="email"
            autoFocus
            value={formData.email}
            onChange={handleChange}
            InputProps={{
              sx: {
                borderBottom: "1px solid white",
                "&::placeholder": { borderBottom: "1px solid white" },
              },
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            value={formData.password}
            onChange={handleChange}
            InputProps={{
              sx: {
                borderBottom: "1px solid white",
                "&::placeholder": { borderBottom: "1px solid white" },
              },
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              color: "black",
              bgcolor: "white",
              "&:hover": { color: "white" },
            }}
          >
            Sign In
          </Button>
        </Box>
        <Typography sx={{ mt: 2 }} component="div">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="link-hover"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            Sign Up
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Login;
