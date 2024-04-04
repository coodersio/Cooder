import { lightTheme as cooderTheme } from "@cooder/themes";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const ShadowsTable = () => (
  <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead sx={{ bgcolor: "primary.100" }}>
        <TableRow>
          <TableCell>Elevation </TableCell>
          <TableCell>Effect</TableCell>
          <TableCell>Value</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {Object.entries(cooderTheme.shadows).map(([key, elevation]) => (
          <TableRow
            key={key}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row" align="center">
              {key}
            </TableCell>
            <TableCell>
              <Box
                sx={{
                  boxShadow: key,
                  width: "8rem",
                  height: "5rem",
                  bgcolor: (theme) =>
                    theme.palette.mode === "dark" ? "#101010" : "#fff",
                  color: (theme) =>
                    theme.palette.mode === "dark" ? "grey.300" : "grey.800",
                  p: 1,
                  m: 1,
                  borderRadius: 2,
                  textAlign: "center",
                  fontSize: "0.875rem",
                  fontWeight: "700",
                }}
              ></Box>
            </TableCell>
            <TableCell component="th" scope="row">
              {elevation}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default ShadowsTable;
