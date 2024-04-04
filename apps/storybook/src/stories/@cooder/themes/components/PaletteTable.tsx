import { lightTheme } from "@cooder/themes";
import { PaletteOptions } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const flattenPalette = (palette: PaletteOptions): Record<string, string> => {
  const leafValues: { [key: string]: string } = {};
  const generateKeys = (
    obj: PaletteOptions,
    prefix: string,
    finalVariables: { [key: string]: string },
  ) => {
    if (typeof obj !== "string") {
      Object.entries(obj).forEach(([key, value]) => {
        generateKeys(value, `${prefix}.${key}`, finalVariables);
      });
    } else if (obj !== "light" && obj !== "dark") {
      finalVariables[prefix] = obj;
    }
  };
  generateKeys(palette, "theme.palette", leafValues);
  return leafValues;
};

const PaletteTable = () => {
  const lightThemeValues = flattenPalette(lightTheme.palette);
  const paletteRows = Object.keys(lightThemeValues).map((key: string) => ({
    muiKey: key,
    lightColor: lightThemeValues[key]
  }));
  const TableNames = ["Palette"];
  return [paletteRows].map((rows, index) => (
    <>
      <Typography
        sx={{ my: 6 }}
        variant="h6"
      >{`${TableNames[index]}`}</Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ bgcolor: "primary.100" }}>
            <TableRow>
              <TableCell>MUI Color Name</TableCell>
              <TableCell>Light</TableCell>
              <TableCell>Dark</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow
                  key={row.muiKey}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.muiKey}
                  </TableCell>
                  <TableCell>
                    <Stack direction="row" alignItems="center">
                      <Box
                        sx={{
                          bgcolor: row.lightColor,
                          height: 30,
                          width: 30,
                          border: "1px solid #EEE",
                        }}
                      ></Box>
                      <Box sx={{ ml: 1 }}>{row.lightColor}</Box>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <Typography sx={{ color: "text.disabled" }}>
                      --
                    </Typography>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  ));
};

export default PaletteTable;
