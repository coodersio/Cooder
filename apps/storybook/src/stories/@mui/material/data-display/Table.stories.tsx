import React from "react";
import { Meta } from "@storybook/react";
import {
  TableContainer,
  Paper,
  Table as MuiTable,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Checkbox,
  TablePagination,
} from "@mui/material";

export default {
  title: "@MUI/Material/Data Display/Table",
  component: MuiTable,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/jVhjeIcVU89TlCWFyTLObZ/XD-HMI-Components?node-id=4977%3A36281",
    },
  },
} as Meta<typeof MuiTable>;

export const Table: React.FC = () => (
  <>
    {[false, true].map((isDense) =>
      [false, true].map((hasCheckbox) => (
        <Paper
          key={`${hasCheckbox}${isDense}`}
          sx={{
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? "background.paper"
                : "background.default",
            backgroundImage: (t) =>
              t.palette.mode === "dark" ? "unset" : undefined,
          }}
        >
          <TableContainer sx={{ maxHeight: 600, mt: 4 }}>
            <MuiTable
              sx={{ minWidth: 650 }}
              size={isDense ? "small" : "medium"}
            >
              <TableHead>
                <TableRow>
                  {hasCheckbox && (
                    <TableCell padding="checkbox">
                      <Checkbox />
                    </TableCell>
                  )}
                  <TableCell>Dessert (100g serving)</TableCell>
                  <TableCell align="right">Calories</TableCell>
                  <TableCell align="right">Fat&nbsp;(g)</TableCell>
                  <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                  <TableCell align="right">Protein&nbsp;(g)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {[1, 2, 3, 4, 5].map((row) => (
                  <TableRow key={row} selected={row % 2 === 0}>
                    {hasCheckbox && (
                      <TableCell padding="checkbox">
                        <Checkbox color="primary" checked={row % 2 === 0} />
                      </TableCell>
                    )}
                    <TableCell>{"Food Item"}</TableCell>
                    <TableCell align="right">{150}</TableCell>
                    <TableCell align="right">{13}</TableCell>
                    <TableCell align="right">{25}</TableCell>
                    <TableCell align="right">{4}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </MuiTable>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={999}
            rowsPerPage={5}
            page={3}
            onPageChange={() => {}}
          />
        </Paper>
      )),
    )}
  </>
);
