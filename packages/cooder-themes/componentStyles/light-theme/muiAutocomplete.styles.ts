import { alpha, Components, Theme } from "@mui/material/styles";

export default {
  styleOverrides: {
    listbox: ({ theme }) => ({
      backgroundColor: theme.palette.background.paper,
      "& .MuiAutocomplete-option": {
        "&.Mui-focused, &:hover, &:focus": {
          backgroundColor: alpha(theme.palette.primary[300], 0.04),
        },
      },
    }),
    root: ({ theme }) => ({
      /**
       * This is a special style overwrite for the autocomplete,just for the search style, not for the normal autocomplete. it is used as below:
       *  <Autocomplete className={'NexusSearch'} {...otherProps />
       **/
      "&.NexusSearch": {
        "&.Mui-focused .MuiAutocomplete-inputRoot:hover": {
          backgroundColor: alpha(theme.palette.grey[800], 0.04),
        },
        "& .MuiAutocomplete-inputRoot": {
          backgroundColor: alpha(theme.palette.grey[800], 0.04),
          "&:hover": {
            backgroundColor: alpha(theme.palette.grey[800], 0.12),
          },
          focused: {
            backgroundColor: alpha(theme.palette.grey[800], 0.04),
          },
          "&:not(.Mui-focused):not(.Mui-disabled):not(.Mui-error) .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "transparent",
            },
          "&:hover:not(.Mui-focused):not(.Mui-disabled):not(.Mui-error) .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "transparent",
            },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.primary.light,
          },
        },
      },
    }),
  },
} as Components<Theme>["MuiAutocomplete"];
