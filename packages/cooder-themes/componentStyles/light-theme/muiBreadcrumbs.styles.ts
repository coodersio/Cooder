import { Components, Theme } from "@mui/material/styles";

export default {
  styleOverrides: {
    root: ({ theme }) => ({
      "& .MuiLink-root:hover": {
        color: theme.palette.primary.main,
      },
    }),
    li: ({ theme }) => ({
      "&:last-of-type": {
        color: theme.palette.primary.main,
        fontWeight: 700,
      },
    }),
    separator: ({ theme }) => ({
      color: theme.palette.grey[300],
      marginLeft: 10,
      marginRight: 10,
    }),
  },
} as Components<Theme>["MuiBreadcrumbs"];
