import { Components, Theme } from "@mui/material/styles";

export default {
  defaultProps: {
    elevation: 0,
  },
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      ...((ownerState.color === undefined ||
        ownerState.color === "inherit") && {
        borderBottom: `1px solid ${theme.palette.divider}`,
      }),
      borderRadius: 0,
    }),
  },
} as Components<Theme>["MuiAppBar"];
