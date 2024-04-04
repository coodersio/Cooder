import { Components, Theme } from "@mui/material/styles";

export default {
  styleOverrides: {
    label: {
      color: "inherit",
      "&.Mui-disabled": {
        color: "inherit",
        opacity: 0.5,
      },
    },
  },
} as Components<Theme>["MuiFormControlLabel"];
