import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { useContext, useState } from "react";
import { ColorModeContext, tokens } from "../../Theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";
import HelpIcon from "@mui/icons-material/Help";

const Topbar = () => {
  const [profile, setProfile] = useState(false);

  const handleProfile = () => {
    setProfile(!profile);
  };

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon onClick={handleProfile} />
          <Box
            backgroundColor={colors.primary[100]}
            position={"absolute"}
            top={"25px"}
            right={"10px"}
            sx={{
              height: "auto",
              width: "200px",
              padding: "10px 10px",
              borderRadius: "5px",
              zIndex: "2",
              textAlign: "left",
              visibility: `${profile === false ? "hidden" : "visible"}`,
            }}
          >
            <Typography
              variant="h5"
              fontWeight={"bold"}
              letterSpacing={"0.5px"}
              mt={"5px"}
              color={colors.primary[500]}
            >
              Sameer Saleem
            </Typography>
            <hr />
            <Box
              display={"flex"}
              alignItems={"center"}
              mt={"10px"}
              color={colors.primary[500]}
            >
              <SettingsOutlinedIcon sx={{ marginRight: "4px" }} />
              <Typography
                variant="h6"
                letterSpacing={"0.5px"}
                color={colors.primary[500]}
              >
                Account Settings
              </Typography>
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              mt={"10px"}
              color={colors.primary[500]}
            >
              <HelpIcon sx={{ marginRight: "4px" }} />
              <Typography variant="h6" letterSpacing={"0.5px"}>
                Help Center
              </Typography>
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              mt={"10px"}
              color={colors.primary[500]}
            >
              <LogoutIcon sx={{ marginRight: "4px" }} />
              <Typography variant="h6" letterSpacing={"0.5px"}>
                Logout
              </Typography>
            </Box>
          </Box>
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
