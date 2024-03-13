import { Box } from "@mui/material";
import HeroSection from "./LandingPageComponents/HeroSection";
import MainNav from "./LandingPageComponents/MainNav";

const LandingPage = () => {
  return (
    <>
      <MainNav />
      <Box
        sx={{
          bgcolor: "#FFF9F1",
          marginTop: "4rem",
          width: "100%",
        }}
      >
        <HeroSection />
      </Box>
    </>
  );
};

export default LandingPage;
