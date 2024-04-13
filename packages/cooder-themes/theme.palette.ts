import { alpha, createTheme } from "@mui/material/styles";
import { grey, green, blue, red, yellow, teal, orange, purple } from "./colors";

export const lightThemePalette = createTheme({
  palette: {
    mode: "light",
    primary: {
      ...green,
      light: green[500],
      main: "#303030",
      dark: "#1a1a1a",
    },
    secondary: {
      // TBD
      ...red,
      light: red[500],
      main: red[700],
      dark: red[900],
    },
    // Status Colors
    info: {
      ...teal,
      light: teal[500],
      main: teal[700],
      dark: teal[900],
    },
    success: {
      ...green,
      light: green[500],
      main: green[700],
      dark: green[900],
    },
    warning: {
      ...orange,
      light: orange[300],
      main: orange[500],
      dark: orange[700],
    },
    error: {
      ...red,
      light: "#e51c00",
      main: "#e51c00",
      dark: "#b5260b",
    },
    alternate: {
      // TODO
      light: "#ffffff",
      main: "#ffffff",
      dark: "#ffffff",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    grey,
    background: {
      default: "#F6F6F7",
      paper: "#FFFFFF",
      alternate: "#EFF8FA",
    },
    divider: "#E1E3E5",
    text: {
      primary: "#202223",
      secondary: "#6D7175",
      disabled: "#8C9196",
    },
    action: {
      active: alpha("#000", 0.54),
      hover: alpha("#000", 0.04),
      selected: alpha("#000", 0.08),
      disabled: alpha("#000", 0.26),
      disabledBackground: alpha("#000", 0.12),
      focus: alpha("#000", 0.12),
    },
  },
});
