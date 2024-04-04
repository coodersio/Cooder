import { Components, Theme } from "@mui/material/styles";

export default {
  styleOverrides: {
    root: ({ theme }) => ({
      "&.Mui-error": {
        color: theme.palette.text.secondary,
        "&.Mui-disabled": {
          color: theme.palette.text.disabled,
        },
      },
    }),
    shrink: ({ theme }) => ({
      "&.Mui-error": {
        color: theme.palette.error.main,
        "&.Mui-disabled": {
          color: theme.palette.error.light,
        },
      },
    }),
    asterisk: ({ theme }) => ({
      color: theme.palette.error.main,
    }),
  },
} as Components<Theme>["MuiInputLabel"];
