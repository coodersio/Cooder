import { Components, Theme } from "@mui/material/styles";

export default {
  styleOverrides: {
    root: () => ({
      "& > :first-of-type": {
        paddingLeft: 16,
        paddingRight: 16,
        '& > [role="presentation"]': {
          fontWeight: 400,
        },
      },
      "& .MuiPickersYear-yearButton, & .MuiPickersMonth-monthButton": {
        fontWeight: 400,
      },
    }),
  },
} as Components<Theme>["MuiDateCalendar"];
