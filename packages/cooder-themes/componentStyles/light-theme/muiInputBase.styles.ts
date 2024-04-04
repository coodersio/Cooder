import { alpha, Components, Theme } from "@mui/material/styles";

export default {
  styleOverrides: {
    root: ({ theme }) => ({
      [theme.breakpoints.down("sm")]: {
        lineHeight: "1.4375rem",
      },
      "&.MuiInput-root": {
        "&:before": {
          borderBottom: `1px solid ${alpha(theme.palette.common.black, 0.42)}`,
        },
        "&:hover:not(.Mui-disabled):before": {
          borderBottom: `2px solid ${theme.palette.action.active}`,
        },
        "&.Mui-disabled.Mui-error:after": {
          borderBottomColor: theme.palette.error.light,
        },
      },
      "&.MuiFilledInput-root": {
        "&:before": {
          borderBottom: `1px solid ${alpha(theme.palette.common.black, 0.42)}`,
        },
        "&:hover:not(.Mui-disabled)": {
          backgroundColor: theme.palette.action.focus,
        },
        "&:hover:not(.Mui-disabled):before": {
          borderBottom: `2px solid ${theme.palette.action.active}`,
        },
        "&.Mui-disabled.Mui-error:after": {
          borderBottomColor: theme.palette.error.light,
        },
      },
    }),
    input: {
      "&:focus:not(:hover)": {
        background: "none",
      },
      // https://github.com/mui/material-ui/blob/HEAD/packages/mui-material/src/InputBase/InputBase.js#L171
      // 23px, change unit from `em` to `rem`, so height will not be affected by small screen fontSize
      height: "1.4375rem",
    },
    adornedStart: ({ theme }) => ({
      "&.Mui-disabled .MuiInputAdornment-root": {
        color: theme.palette.action.disabled,
        "& .MuiTypography-root": {
          color: theme.palette.text.disabled,
        },
      },
    }),
    adornedEnd: ({ theme }) => ({
      "&.Mui-disabled .MuiInputAdornment-root": {
        color: theme.palette.action.disabled,
        "& .MuiTypography-root": {
          color: theme.palette.text.disabled,
        },
      },
    }),
    inputAdornedStart: ({ theme }) => ({
      "&.Mui-disabled .MuiInputAdornment-root": {
        color: theme.palette.action.disabled,
        "& .MuiTypography-root": {
          color: theme.palette.text.disabled,
        },
      },
    }),
    inputAdornedEnd: ({ theme }) => ({
      "&.Mui-disabled .MuiInputAdornment-root": {
        color: theme.palette.action.disabled,
        "& .MuiTypography-root": {
          color: theme.palette.text.disabled,
        },
      },
    }),
  },
} as Components<Theme>["MuiInputBase"];
