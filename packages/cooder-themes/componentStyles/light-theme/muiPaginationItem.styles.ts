import { alpha, Components, Theme } from "@mui/material/styles";

export default {
  defaultProps: {
    color: "primary",
  },
  styleOverrides: {
    root: ({ theme }) => ({
      "&.Mui-disabled.Mui-selected": {
        backgroundColor: alpha(theme.palette.grey[600], 0.04),
      },
    }),
    outlined: ({ ownerState, theme }) => ({
      "&.Mui-selected": {
        backgroundColor:
          ownerState.color && ownerState.color !== "standard"
            ? theme.palette[ownerState.color][50]
            : undefined,
      },
    }),
  },
} as Components<Theme>["MuiPaginationItem"];
