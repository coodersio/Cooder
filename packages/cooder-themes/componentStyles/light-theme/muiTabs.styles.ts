import { Components, Theme } from "@mui/material/styles";

export default {
  styleOverrides: {
    root: ({ ownerState, theme }) => ({
      "& .MuiTab-root": {
        color: ownerState.textColor !== "inherit" && theme.palette.grey[600],
      },
    }),
  },
} as Components<Theme>["MuiTabs"];
