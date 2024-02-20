import React from "react";
import Navbar from "./Navbar";
import { Box } from "@mui/material";

export default function LandingPage() {
  return (
    <Box
      height="100vh"
      sx={{
        background:
          "linear-gradient(222deg,   rgba(20, 27, 45)10%, rgba(42,53,81,1) 86%)",
      }}
    >
      <Navbar />
      <Box p="40px 60px">
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="140px"
          gap="20px"
        >
          <Box gridColumn="span 6">left</Box>
          <Box gridColumn="span 6">right</Box>
        </Box>
      </Box>
    </Box>
  );
}
