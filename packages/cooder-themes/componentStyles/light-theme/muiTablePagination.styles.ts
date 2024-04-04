import { Components, Theme } from "@mui/material/styles";

export default {
  styleOverrides: {
    root: {
      fontSize: "0.75rem",
    },
    selectLabel: {
      fontSize: "0.75rem",
      lineHeight: "1rem",
    },
    displayedRows: {
      fontSize: "0.75rem",
      lineHeight: "1rem",
    },
  },
} as Components<Theme>["MuiTablePagination"];
