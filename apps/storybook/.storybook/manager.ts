import { addons } from "@storybook/manager-api";
import CooderTheme from "./theme";

addons.setConfig({
  theme: CooderTheme,
  toolbar: {
    title: { hidden: true },
    zoom: { hidden: true },
    eject: { hidden: true },
    copy: { hidden: true },
    fullscreen: { hidden: true },
  },
});
