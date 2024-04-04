import { alpha, Components, Theme } from "@mui/material/styles";
import themeTypography, { cooderFontFamily } from "../../theme.typography";

export default {
  styleOverrides: {
    root: ({ theme }: { theme: Theme }) => ({
      border: 0,
      "& .MuiDataGrid-columnHeaders": {
        borderBottom: `1px solid ${theme.palette.divider}`,
        "& .MuiDataGrid-columnHeaderTitle": {
          fontFamily: cooderFontFamily,
          ...themeTypography.typography.body2,
          fontWeight: 700,
          color: theme.palette.text.primary,
        },
      },
      "& .MuiDataGrid-columnHeader, & .MuiDataGrid-cell": {
        "&:focus, &:focus-within": {
          outline: 0,
        },
        "&.MuiDataGrid-cell--editing": {
          boxShadow: theme.shadows[2],
          zIndex: 100,
          "&:focus, &:focus-within": {
            outline: `3px solid ${theme.palette.primary[50]}`,
            outlineOffset: -3,
          },
        },
      },
      "& .MuiDataGrid-row": {
        borderBottom: `1px solid ${theme.palette.divider}`,
        "&.Mui-selected": {
          backgroundColor: alpha(theme.palette.primary[300], 0.04),
        },
        "& .MuiDataGrid-cellAction-onHover": {
          visibility: "hidden",
        },
        "&:hover": {
          "& .MuiDataGrid-cellAction-onHover": {
            visibility: "visible",
          },
        },
        "& .MuiDataGrid-cell": {
          border: 0,
          "& .MuiDataGrid-cellContent": {
            fontFamily: cooderFontFamily,
            ...themeTypography.typography.body2,
            color: theme.palette.text.primary,
          },
        },
      },
      // Optional Zebra Striping: <DataGrid className={'zebra'} />
      "&.zebra": {
        "& .MuiDataGrid-row:nth-of-type(odd):not(.Mui-selected)": {
          backgroundColor: theme.palette.grey[50],
          "&:hover": {
            backgroundColor: theme.palette.grey[100],
          },
        },
      },
    }),
    panel: {
      "& .MuiDataGrid-panelWrapper": {
        padding: 8,
      },
    },
  },
} as Components<Theme>["MuiDataGrid"];
