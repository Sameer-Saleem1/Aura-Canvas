import { Box } from "@mui/material";
import HeroSection from "./LandingPageComponents/HeroSection/HeroSection";
import MainNav from "./LandingPageComponents/MainNav";
import Brand from "./LandingPageComponents/BuildBrand/Brand";
import Benefits from "./LandingPageComponents/Benefits/Benefits";
import Manufacture from "./LandingPageComponents/Manufacture/Manufacture";

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
        <Brand />
        <Benefits />
        <Manufacture />
      </Box>
    </>
  );
};

export default LandingPage;
