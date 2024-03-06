import React from "react";

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "white",
        color: "black",
      }}
    >
      <Box
        sx={{
          boxShadow:
            "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset",
        }}
      >
        <Toolbar>
          <Typography
            variant="h2"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bold" }}
          >
            AuraCanvas
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                onClick={handleClick}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose} component={Link} to="#about">
                  About Us
                </MenuItem>
                <MenuItem
                  onClick={handleClose}
                  component={Link}
                  to="#documentation"
                >
                  Documentation
                </MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/login">
                  Login
                </MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/signup">
                  Sign Up
                </MenuItem>
              </Menu>
            </>
          ) : (
            <div id="MenuButton">
              <Button color="inherit" component={Link} to="#about">
                About Us
              </Button>
              <Button color="inherit" component={Link} to="#documentation">
                Documentation
              </Button>
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
              <Button color="inherit" component={Link} to="/signup">
                Sign Up
              </Button>
            </div>
          )}
        </Toolbar>
      </Box>
    </AppBar>
  );
}
