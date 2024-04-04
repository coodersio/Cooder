import { Components, Theme } from "@mui/material/styles";

export default {
  styleOverrides: {
    root: ({ theme }: { theme: Theme }) => ({
      borderRadius: Number(theme.shape.borderRadius) * 2,
    }),
  },
} as Components<Theme>["MuiCard"];
