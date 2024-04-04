import { Components, Theme } from "@mui/material/styles";

export default {
  styleOverrides: {
    root: ({ theme }) => ({
      "&.Mui-disabled": {
        "& .MuiOutlinedInput-notchedOutline": {
          borderStyle: "dashed",
        },
      },
      "&:not(.Mui-focused):not(.Mui-disabled):not(.Mui-error) .MuiOutlinedInput-notchedOutline":
        {
          borderColor: theme.palette.grey[200],
        },
      "&:hover:not(.Mui-focused):not(.Mui-disabled):not(.Mui-error) .MuiOutlinedInput-notchedOutline":
        {
          borderColor: theme.palette.grey[700],
        },
    }),
  },
} as Components<Theme>["MuiOutlinedInput"];
