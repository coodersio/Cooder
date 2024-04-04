import { Components, Theme } from "@mui/material/styles";

export default {
  styleOverrides: {
    line: ({ theme }) => ({
      borderColor: theme.palette.grey[300],
    }),
  },
} as Components<Theme>["MuiStepConnector"];
