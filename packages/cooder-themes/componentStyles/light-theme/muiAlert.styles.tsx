import { darken, Components, Theme } from "@mui/material/styles";
import CheckCircleOutline from "@mui/icons-material/CheckCircleOutline";

export default {
  defaultProps: {
    iconMapping: {
      success: <CheckCircleOutline fontSize={"inherit"} />,
    },
  },
  styleOverrides: {
    root: {
      fontWeight: 400,
      "& .MuiAlert-icon": { padding: "9px 0" },
      "& .MuiAlertTitle-root": {
        fontWeight: 700,
        marginTop: 0,
        marginBottom: "4px",
      },
      "& .MuiAlert-action": {
        paddingTop: 0,
        height: "40px",
        alignItems: "center",
      },
    },
    filled: ({ theme }) => ({
      // Per FIGMA, the text on these is 'white'
      // But 'white' on our status colors does not pass WCAG AA accessibility threshhold
      // We can change our default contrast ratio (currently 3) to 4.5 to handle this
      // automatically, but it will have additional consequences for status-able components
      // like buttons.
      color: theme.palette.common.white,
    }),
    outlined: ({ ownerState, theme }) => ({
      padding: "7px 16px", // keeps outlined the size base height as filled
      color: darken(theme.palette[ownerState.severity || "info"].dark, 0.6),
    }),
  },
} as Components<Theme>["MuiAlert"];
