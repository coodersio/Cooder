import { Components, Theme } from "@mui/material/styles";

export default {
  styleOverrides: {
    root: ({ theme }) => ({
      "&.Mui-disabled .MuiRating-icon": {
        color: theme.palette.action.disabled,
      },
    }),
    icon: ({ theme }) => ({
      color: theme.palette.secondary.main,
    }),
    iconEmpty: ({ theme }) => ({
      color: theme.palette.grey[400],
    }),
  },
} as Components<Theme>["MuiRating"];
