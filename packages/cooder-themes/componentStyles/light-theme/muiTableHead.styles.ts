import { Components, Theme } from "@mui/material/styles";

export default {
  styleOverrides: {
    root: {
      "& .MuiTableCell-root": {
        fontWeight: 700,
      },
      "& .MuiTableRow-root.MuiTableRow-hover:hover": {
        backgroundColor: "unset",
      },
    },
  },
} as Components<Theme>["MuiTableHead"];
