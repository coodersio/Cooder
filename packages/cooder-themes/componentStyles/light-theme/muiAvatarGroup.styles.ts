import { Components, Theme } from "@mui/material/styles";

export default {
  styleOverrides: {
    root: ({ theme }) => ({
      avatar: {
        width: 32, // default size medium
        height: 32,
        border: `2px solid ${theme.palette.common.white}`,
      },
    }),
  },
} as Components<Theme>["MuiAvatarGroup"];
