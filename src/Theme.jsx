import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens export

// white: {
//   100: "#fffeff",
//   200: "#fffdfe",
//   300: "#fffcfe",
//   400: "#fffbfd",
//   500: "#fffafd",
//   600: "#ccc8ca",
//   700: "#999698",
//   800: "#666465",
//   900: "#333233"
// },
// purple: {
//   100: "#e8dbe2",
//   200: "#d2b6c6",
//   300: "#bb92a9",
//   400: "#a56d8d",
//   500: "#8e4970",
//   600: "#723a5a",
//   700: "#552c43",
//   800: "#391d2d",
//   900: "#1c0f16"
// },
// yellow: {
//   100: "#fff3d4",
//   200: "#ffe7a8",
//   300: "#ffda7d",
//   400: "#ffce51",
//   500: "#ffc226",
//   600: "#cc9b1e",
//   700: "#997417",
//   800: "#664e0f",
//   900: "#332708"
// },
// red: {
//   100: "#f8dcdb",
//   200: "#f1b9b7",
//   300: "#e99592",
//   400: "#e2726e",
//   500: "#db4f4a",
//   600: "#af3f3b",
//   700: "#832f2c",
//   800: "#58201e",
//   900: "#2c100f"
// },
// indigo: {
//   100: "#e1e2fe",
//   200: "#c3c6fd",
//   300: "#a4a9fc",
//   400: "#868dfb",
//   500: "#6870fa",
//   600: "#535ac8",
//   700: "#3e4396",
//   800: "#2a2d64",
//   900: "#151632"
// },

export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        grey: {
          100: "#fffeff",
          200: "#fffdfe",
          300: "#fffcfe",
          400: "#fffbfd",
          500: "#fffafd",
          600: "#ccc8ca",
          700: "#999698",
          800: "#666465",
          900: "#333233",
        },
        primary: {
          100: "#e8dbe2",
          200: "#d2b6c6",
          300: "#bb92a9",
          400: "#a56d8d",
          500: "#8e4970",
          600: "#723a5a",
          700: "#552c43",
          800: "#391d2d",
          900: "#1c0f16",
        },
        greenAccent: {
          100: "#fff3d4",
          200: "#ffe7a8",
          300: "#ffda7d",
          400: "#ffce51",
          500: "#ffc226",
          600: "#cc9b1e",
          700: "#997417",
          800: "#664e0f",
          900: "#332708",
        },
        redAccent: {
          100: "#f8dcdb",
          200: "#f1b9b7",
          300: "#e99592",
          400: "#e2726e",
          500: "#db4f4a",
          600: "#af3f3b",
          700: "#832f2c",
          800: "#58201e",
          900: "#2c100f",
        },
        blueAccent: {
          100: "#e3e8e3",
          200: "#c7d1c8",
          300: "#acb9ac",
          400: "#90a291",
          500: "#748b75",
          600: "#5d6f5e",
          700: "#465346",
          800: "#2e382f",
          900: "#171c17",
        },
      }
    : {
        grey: {
          100: "#fffeff",
          200: "#fffdfe",
          300: "#fffcfe",
          400: "#fffbfd",
          500: "#fffafd",
          600: "#ccc8ca",
          700: "#999698",
          800: "#666465",
          900: "#333233",
        },
        primary: {
          100: "#1c0f16",
          200: "#391d2d",
          300: "#552c43",
          400: "#723a5a",
          500: "#8e4970",
          600: "#a56d8d",
          700: "#bb92a9",
          800: "#d2b6c6",
          900: "#e8dbe2",
        },
        greenAccent: {
          100: "#332708",
          200: "#664e0f",
          300: "#997417",
          400: "#cc9b1e",
          500: "#ffc226",
          600: "#ffce51",
          700: "#ffda7d",
          800: "#ffe7a8",
          900: "#fff3d4",
        },
        redAccent: {
          100: "#2c100f",
          200: "#58201e",
          300: "#832f2c",
          400: "#af3f3b",
          500: "#db4f4a",
          600: "#e2726e",
          700: "#e99592",
          800: "#f1b9b7",
          900: "#f8dcdb",
        },
        blueAccent: {
          100: "#171c17",
          200: "#2e382f",
          300: "#465346",
          400: "#5d6f5e",
          500: "#748b75",
          600: "#90a291",
          700: "#acb9ac",
          800: "#c7d1c8",
          900: "#e3e8e3",
        },
      }),
});

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            // palette values for light mode
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};
