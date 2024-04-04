import { Components, Theme } from "@mui/material/styles";

export default {
  styleOverrides: {
    root: ({ ownerState }) => ({
      textTransform: "none",
      fontSize:
        ownerState.size === "large"
          ? 16
          : ownerState.size === "small"
            ? 14
            : 15,
      lineHeight:
        ownerState.size === "large"
          ? 1.5
          : ownerState.size === "small"
            ? 1.7
            : 1.6,
    }),
  },
} as Components<Theme>["MuiFab"];
