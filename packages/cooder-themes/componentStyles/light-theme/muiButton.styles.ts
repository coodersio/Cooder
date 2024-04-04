import { Components, Theme } from "@mui/material/styles";

export default {
  styleOverrides: {
    root: ({ ownerState, theme }) => ({
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
      fontWeight: 700,
      borderRadius: Number(theme.shape.borderRadius) * 2,
    }),
    outlined: ({ ownerState, theme }) => ({
      borderColor:
        ownerState?.color === "inherit"
          ? "inherit"
          : theme.palette[ownerState?.color || "primary"].main,
      "&.Mui-disabled": {
        borderColor: theme.palette.action.disabled,
      },
    }),
  },
} as Components<Theme>["MuiButton"];
