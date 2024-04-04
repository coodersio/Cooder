import { alpha, Components, Theme } from "@mui/material/styles";

export default {
  styleOverrides: {
    root: ({ theme }) => ({
      "&:hover": {
        backgroundColor: alpha(theme.palette.primary[300], 0.04),
      },
    }),
  },
} as Components<Theme>["MuiMenuItem"];
