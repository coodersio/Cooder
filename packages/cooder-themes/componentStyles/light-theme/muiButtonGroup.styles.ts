import { Components, Theme } from "@mui/material/styles";

export default {
  styleOverrides: {
    root: ({ theme }) => ({
      "& > .MuiButtonGroup-grouped": {
        "&:first-of-type": {
          borderTopLeftRadius: theme.shape.borderRadius,
          borderBottomLeftRadius: theme.shape.borderRadius,
        },
        "&:last-of-type": {
          borderTopRightRadius: theme.shape.borderRadius,
          borderBottomRightRadius: theme.shape.borderRadius,
        },
      },
    }),
  },
} as Components<Theme>["MuiButtonGroup"];
