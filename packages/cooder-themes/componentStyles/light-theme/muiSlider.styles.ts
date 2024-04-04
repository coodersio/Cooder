import { alpha, Components, Theme } from "@mui/material/styles";

export default {
  styleOverrides: {
    root: ({ ownerState, theme }) => ({
      color: theme.palette[ownerState.color || "primary"].main,
      "&.Mui-disabled": {
        color: theme.palette.grey[300],
        "& .MuiSlider-rail": {
          backgroundColor: theme.palette.grey[100],
          opacity: 1,
        },
        "& .MuiSlider-valueLabel": {
          backgroundColor: theme.palette.grey[300],
          color: alpha(theme.palette.text.disabled, 0.25),
        },
      },
      "& .MuiSlider-rail": {
        backgroundColor: theme.palette[ownerState.color || "primary"].main,
        opacity: 0.38,
      },
    }),

    valueLabel: ({ theme }) => ({
      backgroundColor: theme.palette.grey[500],
      color: theme.palette.common.white,
      borderRadius: Number(theme.shape.borderRadius) * 2,
      top: `-${theme.spacing(3)}`,
      lineHeight: "24px",
      fontWeight: "bold",
    }),
  },
} as Components<Theme>["MuiSlider"];
