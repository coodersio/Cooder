import { Components, Theme } from "@mui/material/styles";

export default {
  styleOverrides: {
    root: ({ theme }) => ({
      color: theme.palette.grey[600],
      "&.Mui-disabled": {
        color: theme.palette.action.disabled,
      },
    }),
    label: {
      fontSize: "0.75rem",
      "&.Mui-selected": {
        fontSize: "0.75rem",
      },
    },
  },
} as Components<Theme>["MuiBottomNavigationAction"];
