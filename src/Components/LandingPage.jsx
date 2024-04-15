import { Box } from "@mui/material";
import HeroSection from "./LandingPageComponents/HeroSection/HeroSection";
import MainNav from "./LandingPageComponents/MainNav";
import Brand from "./LandingPageComponents/BuildBrand/Brand";
import Benefits from "./LandingPageComponents/Benefits/Benefits";
import Manufacture from "./LandingPageComponents/Manufacture/Manufacture";
import About from "./LandingPageComponents/About/About";
import Contact from "./LandingPageComponents/Contact/Contact";
import FAQ from "./LandingPageComponents/FAQ/FAQ";

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
        <About />
        <Contact />
        <FAQ />
      </Box>
    </>
  );
};

export default LandingPage;
