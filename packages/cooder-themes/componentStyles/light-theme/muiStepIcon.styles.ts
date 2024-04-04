import { Components, Theme } from "@mui/material/styles";

export default {
  styleOverrides: {
    root: ({ theme }) => ({
      "&.Mui-completed": {
        color: theme.palette.success.main,
      },
    }),
  },
} as Components<Theme>["MuiStepIcon"];
