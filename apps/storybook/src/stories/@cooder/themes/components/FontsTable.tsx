import { lightTheme as cooderTheme } from "@cooder/themes";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography, { TypographyProps } from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { TypographyVariants } from "@mui/material/styles";

const displayText = "Display";
const headingText = "Heading";
const bodyText =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.";
const shortText = "text";

const textMapping = {
  display1: displayText,
  display2: displayText,
  display3: displayText,
  h1: headingText,
  h2: headingText,
  h3: headingText,
  h4: headingText,
  body1: bodyText,
  body2: bodyText,
  body3: bodyText,
  caption1: shortText,
  caption2: shortText,
  label1: shortText,
  label2: shortText,
  mono: shortText,
};

const toPx: (rem: number) => string = (rem) => `${rem * 16}px`;
const variants: Array<keyof TypographyVariants> = [
  "display1",
  "display2",
  "display3",
  "h1",
  "h2",
  "h3",
  "h4",
  "body1",
  "body2",
  "body3",
  "caption1",
  "caption2",
  "label1",
  "label2",
  "mono",
];
const FontsTable = () => (
  <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead sx={{ bgcolor: "primary.100" }}>
        <TableRow>
          <TableCell>Typography</TableCell>
          <TableCell>Size (xs)</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {variants.map((key) => {
          const value = cooderTheme.typography[key] as TypographyProps;
          const fontSize = value?.fontSize as string || '';
          return (
            <TableRow
              key={key}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>
                <Typography
                  variant={key as TypographyProps["variant"]}
                  sx={{ minWidth: 200, color: "inherit", border: 0 }}
                >
                  {`${key}. ${textMapping[key as keyof typeof textMapping]}`}
                </Typography>
              </TableCell>
              <TableCell component="th" scope="row">
                <Stack>
                  <Typography
                    variant={"h4"}
                    sx={{ minWidth: 200, color: "inherit" }}
                  >
                    {fontSize}
                  </Typography>
                  <Typography
                    variant={"caption"}
                    sx={{ minWidth: 200, color: "inherit" }}
                  >
                    {`(${toPx(parseFloat(fontSize.substring(0, fontSize.length - 3)))})`}
                  </Typography>
                </Stack>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  </TableContainer>
);

export default FontsTable;
