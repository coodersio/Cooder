import { Components, Theme } from "@mui/material/styles";
import muiDatePickerStyles from "./muiDatePicker.styles";

/**
 * Because there is no targettable component for the outermost element of the Date Pickers, we have
 * to style them in the context of their parent container(s). This is one of the possible containers
 * that could be used to render a DatePicker component.
 */
export default {
  ...muiDatePickerStyles,
} as unknown as Components<Theme>["MuiModal"];
