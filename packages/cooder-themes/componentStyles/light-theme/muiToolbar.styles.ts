import { Components, Theme } from "@mui/material/styles";

export default {
  styleOverrides: {
    gutters: ({ theme }) => ({
      paddingLeft: "0.75rem",
      paddingRight: "0.75rem",
      [theme.breakpoints.up("sm")]: {
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
      },
    }),
  },
} as Components<Theme>["MuiToolbar"];
