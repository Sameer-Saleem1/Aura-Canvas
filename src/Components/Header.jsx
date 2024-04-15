import { Typography, useTheme, Box } from "@mui/material";
import { tokens } from "../Theme";

export default function Header({ title, subtitle }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box>
      <Typography
        variant="h2"
        color={
          theme.palette.mode === "dark"
            ? "colors.grey[100]"
            : "colors.grey[800]"
        }
        fontWeight="bold"
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
}
