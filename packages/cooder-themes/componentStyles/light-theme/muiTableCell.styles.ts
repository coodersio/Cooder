import { alpha, Components, Theme } from "@mui/material/styles";

export default {
  styleOverrides: {
    root: ({ theme }) => ({
      borderBottomColor: alpha(theme.palette.common.black, 0.08),
    }),
  },
} as Components<Theme>["MuiTableCell"];
