import { alpha, Components, Theme } from "@mui/material/styles";

export default {
  styleOverrides: {
    root: ({ theme }) => ({
      "&.Mui-selected": {
        backgroundColor: alpha(theme.palette.primary.main, 0.08),
      },
      "& .MuiListItemButton-root:hover": {
        backgroundColor: theme.palette.action.hover,
      },
      "& .MuiListItemAvatar-root .MuiAvatar-root": {
        height: 40,
        width: 40,
      },
    }),
  },
} as Components<Theme>["MuiListItemButton"];
