import { alpha, Components, Theme } from "@mui/material/styles";

export default {
  defaultProps: {
    hover: true,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      "&.MuiTableRow-hover:hover": {
        backgroundColor: alpha(theme.palette.grey[600], 0.04),
      },
      "&.Mui-selected": {
        backgroundColor: alpha(theme.palette.primary[300], 0.04),
      },
    }),
  },
} as Components<Theme>["MuiTableRow"];
