import { Components, Theme } from "@mui/material/styles";

export default {
  defaultProps: {
    anchorOrigin: { vertical: "bottom", horizontal: "center" },
  },
  styleOverrides: {
    root: ({ theme }) => ({
      "& .MuiPaper-root": {
        borderRadius: Number(theme.shape.borderRadius) * 2,
        padding: theme.spacing(1, 4),
        flexGrow: "initial",
        "& .MuiAlert-action> .MuiButton-text": {
          fontSize: 14,
          color: "inherit",
        },
        "& .MuiAlert-action> .MuiIconButton-root": {
          color: "inherit",
        },
        "& .MuiSvgIcon-root": {
          width: 16,
          height: 16,
        },
      },
      "& .MuiAlert-root": {
        minWidth: 288,
        width: "fit-content",
        [theme.breakpoints.down("sm")]: {
          minWidth: 0,
        },
      },

      "& .MuiAlert-filledInfo": {
        backgroundColor: theme.palette.primary.main,
      },
      "& .MuiAlert-outlinedError": {
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.error.main,
        border: "1px solid",
      },
    }),
  },
} as Components<Theme>["MuiSnackbar"];
