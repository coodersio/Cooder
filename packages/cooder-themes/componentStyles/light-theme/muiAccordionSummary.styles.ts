import { Components, Theme } from "@mui/material/styles";

export default {
  styleOverrides: {
    root: ({ theme }) => ({
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    }),
  },
} as Components<Theme>["MuiAccordionSummary"];
