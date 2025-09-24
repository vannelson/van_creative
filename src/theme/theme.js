"use client";

import { createTheme } from "@mui/material/styles";

// Dark UI with emerald/green accent
const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: "dark",
    background: {
      default: "#0f1012",
      paper: "#1a1c1f",
    },
    text: {
      primary: "#eaeaea",
      secondary: "#b5b8bd",
    },
    primary: {
      main: "#22c55e", // emerald 500
      dark: "#16a34a",
      light: "#34d399",
      contrastText: "#06140a",
    },
    divider: "#2a2d33",
  },
  shape: { borderRadius: 12 },
  components: {
    MuiPaper: {
      defaultProps: { elevation: 0, variant: "elevation" },
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { textTransform: "none", fontWeight: 600 },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: { backgroundImage: "none", border: "1px solid #24262b" },
      },
    },
  },
  typography: {
    fontFamily: "var(--font-geist-sans), ui-sans-serif, system-ui",
    h3: { fontWeight: 700 },
    h5: { fontWeight: 600 },
  },
});

export default theme;
