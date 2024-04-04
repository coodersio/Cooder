import { Components, Theme } from "@mui/material/styles";

export default {
  styleOverrides: {
    root: {
      fontWeight: 400,
      textTransform: "none",
    },
    labelIcon: ({ theme, ownerState }) => ({
      "& .MuiTab-iconWrapper": {
        ...(ownerState.iconPosition === "start" && {
          marginRight: theme.spacing(2),
        }),
        ...(ownerState.iconPosition === "end" && {
          marginLeft: theme.spacing(2),
        }),
      },
    }),
  },
} as Components<Theme>["MuiTab"];
