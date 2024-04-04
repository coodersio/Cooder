import { Components, Theme } from "@mui/material/styles";

export default {
  styleOverrides: {
    badge: () => ({
      fontWeight: 600,
    }),
  },
} as Components<Theme>["MuiBadge"];
