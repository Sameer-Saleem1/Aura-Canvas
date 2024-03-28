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

export default function MainNav() {
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
      sx={{
        bgcolor: "#ffff",
        color: "black",
        boxShadow: "none",
        paddingTop: "10px",
        paddingLeft: "5rem",
      }}
    >
      <Box>
        <Toolbar>
          <Typography
            variant="h3"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              color: "black",
              boxShadow: "none",
              letterSpacing: "1px",
            }}
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
                  Home
                </MenuItem>
                <MenuItem
                  onClick={handleClose}
                  component={Link}
                  to="#documentation"
                >
                  Contact us
                </MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="#blog">
                  Blog
                </MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="#about">
                  About
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
              <Button color="inherit" component={Link} to="#home">
                Home
              </Button>
              <Button color="inherit" component={Link} to="#contact">
                Contact Us
              </Button>
              <Button color="inherit" component={Link} to="#blog">
                Blog
              </Button>
              <Button color="inherit" component={Link} to="#about">
                About
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
