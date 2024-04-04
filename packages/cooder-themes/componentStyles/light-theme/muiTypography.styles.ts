import { Components, Theme } from "@mui/material/styles";

export default {
  defaultProps: {
    variant: "body1",
    variantMapping: {
      display1: "h1",
      display2: "h1",
      display3: "h1",
      h1: "h1",
      h2: "h2",
      h3: "h3",
      h4: "h4",
      h5: "h5",
      h6: "h6",
      subtitle1: "h6",
      subtitle2: "h6",
      body1: "p",
      body2: "p",
      body3: "p",
      label1: "p",
      label2: "p",
      caption1: "p",
      caption2: "p",
      inherit: "p",
    },
  },
} as Components<Theme>["MuiTypography"];
