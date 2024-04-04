import { alpha, Components, Theme } from "@mui/material/styles";

export default {
  styleOverrides: {
    outlined: ({ ownerState, theme }) => {
      const hoverColor = alpha(
        ownerState.color && ownerState.color !== "default"
          ? theme.palette[ownerState.color].main
          : theme.palette.grey[500],
        0.04,
      );
      return {
        "&.MuiChip-clickable:hover": {
          backgroundColor: hoverColor,
        },
      };
    },
    filled: ({ ownerState, theme }) => {
      const hoverColor =
        ownerState.color && ownerState.color !== "default"
          ? theme.palette[ownerState.color][600]
          : theme.palette.grey[200];
      return {
        "&.MuiChip-clickable:hover": {
          backgroundColor: hoverColor,
        },
      };
    },
    label: {
      fontSize: "0.875rem",
      lineHeight: "1.5rem",
    },

    avatar: ({ ownerState, theme }) => {
      const baseColor =
        ownerState.color && ownerState.color !== "default"
          ? theme.palette[ownerState.color][600]
          : theme.palette.grey[400];
      return {
        backgroundColor: baseColor,
        color: ownerState.color === "default" && theme.palette.common.white,
      };
    },
  },
} as Components<Theme>["MuiChip"];
