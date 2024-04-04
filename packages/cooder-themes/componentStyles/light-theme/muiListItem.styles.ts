import { Components, Theme } from "@mui/material/styles";

export default {
  styleOverrides: {
    root: ({ theme }) => ({
      "& .MuiListItemButton-root:hover": {
        backgroundColor: theme.palette.action.hover,
      },
      "& .MuiListItemAvatar-root .MuiAvatar-root": {
        height: 40,
        width: 40,
      },
    }),
  },
} as Components<Theme>["MuiListItem"];
