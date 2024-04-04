import { Components, Theme } from "@mui/material/styles";

export default {
  styleOverrides: {
    tooltip: ({ theme }) => ({
      backgroundColor: theme.palette.grey[500],
      color: theme.palette.common.white,
      fontSize: "0.625rem",
      lineHeight: "0.875rem",
      fontWeight: "regular",
    }),
    arrow: ({ theme }) => ({
      color: theme.palette.grey[500],
    }),
  },
} as Components<Theme>["MuiTooltip"];
