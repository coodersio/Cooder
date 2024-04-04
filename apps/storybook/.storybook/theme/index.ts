import { create } from "@storybook/theming";
import { lightTheme } from "@cooder/themes";

export const CooderLight = create({
  base: "light",
  brandTitle: "Cooder",
  appBg: lightTheme.palette.background.default,
  appContentBg: lightTheme.palette.background.paper,
  appBorderColor: lightTheme.palette.divider,
  appBorderRadius: lightTheme.shape.borderRadius,

  // Typography
  fontBase: lightTheme.typography.fontFamily,
  fontCode: "monospace",

  // Text colors
  textColor: lightTheme.palette.text.primary,
  // textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: lightTheme.palette.text.primary,
  barSelectedColor: lightTheme.palette.primary.light,
  barBg: lightTheme.palette.background.default,

  // Form colors
  inputBg: lightTheme.palette.background.paper,
  inputBorder: lightTheme.palette.divider,
  inputTextColor: lightTheme.palette.text.primary,
  inputBorderRadius: lightTheme.shape.borderRadius,
});

export default CooderLight;
