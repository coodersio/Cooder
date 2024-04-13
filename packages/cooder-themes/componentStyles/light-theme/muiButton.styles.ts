import { Components, Theme } from "@mui/material/styles";

export default {
  defaultProps: {
    disableRipple: true,
  },
  styleOverrides: {
    root: ({ ownerState, theme }) => ({
      textTransform: "none",
      fontSize:
        ownerState.size === "large"
          ? 16
          : ownerState.size === "small"
            ? 14
            : 12,
      lineHeight:
        ownerState.size === "large"
          ? 1.5
          : ownerState.size === "small"
            ? 1.7
            : "16px",
      fontWeight: 550,
      borderRadius: Number(theme.shape.borderRadius) * 2,
    }),
    contained: ({ ownerState, theme }) => ({
      boxShadow:
        "0rem -0.0625rem 0rem 0.0625rem rgba(0,0,0,.8) inset,0rem 0rem 0rem 0.0625rem #303030 inset,0rem 0.03125rem 0rem 0.09375rem hsla(0,0%,100%,.25) inset",
      "&:hover": {
        boxShadow:
          "0rem -0.0625rem 0rem 0.0625rem rgba(0,0,0,.8) inset,0rem 0rem 0rem 0.0625rem #303030 inset,0rem 0.03125rem 0rem 0.09375rem hsla(0,0%,100%,.25) inset",
      },
      "&:active": {
        boxShadow: "0rem 0.1875rem 0rem 0rem #000 inset",
        backgroundColor:
          "linear-gradient(180deg,rgba(48,48,48,0) 63.53%,hsla(0,0%,100%,.15))",
        paddingTop: "7px",
        paddingBottom: "5px",
      },
    }),
    outlined: ({ ownerState, theme }) => ({
      boxShadow:
        "0rem -0.0625rem 0rem 0rem #b5b5b5 inset,0rem 0rem 0rem 0.0625rem rgba(0,0,0,.1) inset,0rem 0.03125rem 0rem 0.09375rem #fff inset",
      backgroundColor: "#fff",
      border: 0,
      "&.Mui-disabled": {
        borderColor: theme.palette.action.disabled,
      },
      "&:hover": {
        border: 0,
        backgroundColor: "#fafafa",
        boxShadow:
          "0rem -0.0625rem 0rem 0rem #b5b5b5 inset,0rem 0rem 0rem 0.0625rem rgba(0,0,0,.1) inset,0rem 0.03125rem 0rem 0.09375rem #fff inset",
      },
      "&:active": {
        boxShadow:
          "-0.0625rem 0rem 0.0625rem 0rem rgba(26,26,26,.122) inset,0.0625rem 0rem 0.0625rem 0rem rgba(26,26,26,.122) inset,0rem 0.125rem 0.0625rem 0rem rgba(26,26,26,.2) inset",
        backgroundColor: "#f7f7f7",
        paddingTop: "7px",
        paddingBottom: "5px",
        border: 0,
      },
    }),
    text: ({ ownerState, theme }) => ({
      "&:active": {
        boxShadow: "",
        backgroundColor: "rgba(0,0,0,.08)",
      },
    }),
  },
} as Components<Theme>["MuiButton"];
