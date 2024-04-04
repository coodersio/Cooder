import { Components, Theme } from "@mui/material/styles";

export default {
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundColor: theme.palette.primary.main,
      flexGrow: "initial",
      "& .MuiSnackbarContent-action> .MuiButton-text": {
        fontSize: 14,
        color: "inherit",
      },
      "& .MuiSnackbarContent-action> .MuiIconButton-root": {
        color: "inherit",
      },
      "& .MuiSvgIcon-root": {
        width: 16,
        height: 16,
      },
    }),
  },
} as Components<Theme>["MuiSnackbarContent"];
