import { alpha, Components, Theme } from "@mui/material/styles";

export default {
  styleOverrides: {
    root: ({ ownerState, theme }) => {
      const baseColor = ownerState.color
        ? ownerState.color !== "inherit"
          ? theme.palette[ownerState.color][100]
          : "none"
        : theme.palette.primary[50];
      return ownerState.variant === "buffer"
        ? {}
        : {
            backgroundColor: baseColor,
          };
    },
    bar2Buffer: ({ ownerState, theme }) => {
      const baseColor = ownerState.color
        ? ownerState.color !== "inherit"
          ? theme.palette[ownerState.color][100]
          : "none"
        : theme.palette.primary[50];
      return {
        backgroundColor: baseColor,
      };
    },
    dashed: ({ ownerState, theme }) => {
      const baseColor = alpha(
        ownerState.color
          ? ownerState.color !== "inherit"
            ? theme.palette[ownerState.color].main
            : theme.palette.common.black
          : theme.palette.primary.main,
        0.6,
      );
      return {
        backgroundImage: `radial-gradient(${baseColor} 0%, ${baseColor} 16%, transparent 42%);`,
      };
    },
  },
} as Components<Theme>["MuiLinearProgress"];
