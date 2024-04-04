import { Components, Theme } from "@mui/material/styles";

export default {
  styleOverrides: {
    root: {
      "&.Mui-disabled": {
        opacity: 0.5,
      },
    },
    label: {
      "&.Mui-active, &.Mui-completed, &.Mui-error": {
        fontWeight: 700,
      },
    },
  },
} as Components<Theme>["MuiStepLabel"];
