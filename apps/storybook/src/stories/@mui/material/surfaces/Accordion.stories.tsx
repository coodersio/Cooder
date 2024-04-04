import React from "react";
import { Meta } from "@storybook/react";
import {
  Box,
  Accordion as MuiAccordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

export default {
  title: "@MUI/Material/Surfaces/Accordion",
  component: MuiAccordion,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/jVhjeIcVU89TlCWFyTLObZ/XD-HMI-Components?node-id=4495%3A21263",
    },
  },
} as Meta<typeof MuiAccordion>;

export const Accordion: React.FC = () => (
  <Box>
    {[false, true].map((square) =>
      [false, true].map((disableGutters) => (
        <Box key={`${square}-${disableGutters}`} sx={{ mb: 16 }}>
          {[1, 2, 3].map((item) => (
            <MuiAccordion
              key={item}
              expanded={item === 2}
              disabled={item === 3}
              disableGutters={disableGutters}
              square={square}
            >
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography>{`Accordion ${item}`}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </MuiAccordion>
          ))}
        </Box>
      )),
    )}
  </Box>
);
