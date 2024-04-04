import { Components, Theme } from "@mui/material/styles";

export default {
  styleOverrides: {
    root: ({ theme }) => ({
      height: 32, // default to medium size
      width: 32, // default to medium size
      backgroundColor: theme.palette.grey[400],
      color: theme.palette.common.white,
      fontWeight: 700,
      fontSize: 12,
      lineHeight: "16px",
    }),
  },
} as Components<Theme>["MuiAvatar"];
