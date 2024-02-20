import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  useTheme,
} from "@mui/material";
import logo from "./assets/user.png";

import { tokens } from "./Theme";
const Navbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "transparent",
        }}
      >
        <Toolbar>
          <IconButton color="inherit" aria-label="logo">
            <Button sx={{ padding: 0 }}>
              <img src={logo} width={60} />
            </Button>
          </IconButton>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            AuraCanvas
          </Typography>
          <Stack direction={"row"} spacing={2}>
            <Button
              sx={{
                bgcolor: `${colors.blueAccent[300]}`,
                ":hover": {
                  backgroundColor: `${colors.blueAccent[200]}`,
                },
              }}
            >
              Log in
            </Button>
            <Button
              sx={{
                bgcolor: `${colors.greenAccent[300]}`,
                ":hover": {
                  backgroundColor: `${colors.greenAccent[200]}`,
                },
              }}
            >
              Sign up
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
