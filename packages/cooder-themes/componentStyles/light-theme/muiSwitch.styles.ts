import { Components, Theme } from "@mui/material/styles";

export default {
  styleOverrides: {
    switchBase: ({ theme }) => ({
      "&.Mui-disabled": {
        color: theme.palette.grey[50],
        "&.Mui-checked": {
          color: theme.palette.grey[50],
        },
        "+ .MuiSwitch-track": {
          backgroundColor: theme.palette.action.disabledBackground,
          opacity: 1,
        },
      },
    }),
    thumb: {
      // Special
      boxShadow:
        "0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)",
    },
  },
} as Components<Theme>["MuiSwitch"];
