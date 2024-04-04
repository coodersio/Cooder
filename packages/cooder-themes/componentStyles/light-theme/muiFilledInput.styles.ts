import { alpha, Components, Theme } from "@mui/material/styles";

export default {
  styleOverrides: {
    root: ({ theme }) => ({
      "&.Mui-disabled": {
        backgroundColor: alpha(theme.palette.common.black, 0.06),
      },
    }),
  },
} as Components<Theme>["MuiFilledInput"];
