import React from "react";
import { Meta } from "@storybook/react";
import {
  Tooltip as MuiTooltip,
  IconButton,
  TooltipProps,
  Paper,
  Stack,
} from "@mui/material";
import { Help } from "@mui/icons-material";

export default {
  title: "@MUI/Material/Data Display/Tooltip",
  component: MuiTooltip,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/jVhjeIcVU89TlCWFyTLObZ/XD-HMI-Components?node-id=64%3A500",
    },
    // pauseAnimationAtEnd to take a screenshot because of animations
    chromatic: { pauseAnimationAtEnd: true },
    multiThemeDirection: "column",
  },
} as Meta<typeof MuiTooltip>;

export const Tooltip: React.FC = () => {
  const placements: TooltipProps["placement"][] = [
    "bottom-end",
    "bottom-start",
    "bottom",
    "left-end",
    "left-start",
    "left",
    "right-end",
    "right-start",
    "right",
    "top-end",
    "top-start",
    "top",
  ];
  return (
    <Paper>
      <Stack direction={"row"}>
        {[false, true].map((hasArrow) => (
          <Stack
            key={`arrow-${hasArrow}`}
            alignItems={"center"}
            sx={{ flex: "1 1 0px" }}
          >
            {placements.map((placement) => (
              <MuiTooltip
                key={placement}
                arrow={hasArrow}
                placement={placement}
                open={true}
                title={`Tooltip Message (${placement})`}
                sx={{ m: 6 }}
              >
                <IconButton>
                  <Help />
                </IconButton>
              </MuiTooltip>
            ))}
          </Stack>
        ))}
      </Stack>
    </Paper>
  );
};
