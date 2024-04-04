import { Components, Theme } from "@mui/material/styles";

export default {
  styleOverrides: {
    root: ({ theme }) => ({
      "&.Mui-disabled.Mui-error": {
        color: theme.palette.error.light,
      },
    }),
  },
} as Components<Theme>["MuiFormHelperText"];
