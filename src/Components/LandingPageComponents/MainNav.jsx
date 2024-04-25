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
        boxShadow: " 5px 5px 15px rgba(0,0,0,0.3)",
        paddingTop: "10px",
      }}
    >
      <Box>
        <Toolbar sx={{ paddingLeft: isMobile ? "0" : "5rem" }}>
          <Typography
            variant="h3"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              color: "black",
              letterSpacing: "1px",
              ml: isMobile ? "1rem" : "0", // Adjust margin left for mobile view
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
                sx={{ mr: 2, bgcolor: "grey", color: "white" }} // Set background color for hamburger icon
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
              <Button
                color="inherit"
                component={Link}
                to="/dashboard"
                sx={{
                  span: {
                    transition: "transform 0.2s linear",
                  },
                  ":hover": {
                    span: {
                      transform: "translateX(7px)",
                    },
                  },
                }}
              >
                Check out our Dashboard{" "}
                <span
                  style={{
                    marginLeft: ".35rem",
                    marginBottom: ".3rem",
                    fontSize: "21px",
                    padding: "0",
                  }}
                >
                  &#x2192;
                </span>
              </Button>
            </div>
          )}
        </Toolbar>
      </Box>
    </AppBar>
  );
}
