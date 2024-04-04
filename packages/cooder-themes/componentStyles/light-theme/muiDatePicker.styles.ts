import { Components, Theme } from "@mui/material/styles";
import { cooderFontFamily } from "../../theme.typography";

/**
 * Because there is no targettable component for the outermost element of the Date Pickers, we have
 * to style them in the context of their parent container(s). This can be either a Static wrapper, a
 * Modal, or a Popper (from what I have seen), so these styles are re-used in the styleOverrides
 * for the PickerStaticWrapper, the Modal, and the Popper.
 *
 * These styleOverrides are, admittedly, a bit of a mess - the MUI X Date/Time picker classes have some
 * very inconsistent class naming conventions and DOM structures, making them very annoying to try to
 * style. Hence, these styles are on the brittle side (some being based on DOM structure where classes
 * are not avaialable) and sometimes repetitive (because of inconsistencies in parent class names between
 * different pickers).
 */
export default {
  styleOverrides: {
    root: ({ theme }: { theme: Theme }) => ({
      "& .PrivatePickersToolbar-root, & .MuiPickersToolbar-root": {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        "& > .MuiTypography-root": {
          color: "inherit",
          fontFamily: cooderFontFamily,
        },
        "+ div": {
          '& > [role="presentation"]': {
            color: "inherit",
            fontFamily: cooderFontFamily,
          },
        },
        "& .PrivatePickersToolbar-dateTitleContainer": {
          "& .MuiTypography-root": {
            color: theme.palette.common.white,
            fontFamily: cooderFontFamily,
          },
          "& .PrivateTimePickerToolbar-hourMinuteLabel": {
            "& .MuiTypography-root": {
              color: theme.palette.common.white,
            },
          },
          "& .PrivateTimePickerToolbar-ampmSelection": {
            "& > .MuiButton-root > .MuiTypography-root": {
              color: theme.palette.common.white,
              fontFamily: cooderFontFamily,
              "&.Mui-selected": {
                color: theme.palette.primary.main,
                backgroundColor: theme.palette.common.white,
              },
            },
          },
        },
        "& .MuiPickersToolbar-content": {
          ".MuiTypography-root": {
            color: theme.palette.common.white,
            fontFamily: cooderFontFamily,
            fontWeight: 400,
          },
        },
      },
      "& .MuiDateRangePickerDay-rangeIntervalDayHighlight": {
        backgroundColor: theme.palette.background.alternate,
        "& .MuiDateRangePickerDay-dayInsideRangeInterval": {
          color: theme.palette.text.primary,
        },
      },
    }),
  },
} as Components<Theme>["MuiDatePicker"];
