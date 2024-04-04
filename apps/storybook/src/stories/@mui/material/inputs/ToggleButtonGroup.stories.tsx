import React from "react";
import { Meta } from "@storybook/react";
import {
  Stack,
  ToggleButton,
  ToggleButtonGroup as MuiToggleButtonGroup,
  ToggleButtonGroupProps,
  Typography,
} from "@mui/material";
import {
  FormatAlignLeft,
  FormatAlignCenter,
  FormatAlignRight,
  FormatAlignJustify,
} from "@mui/icons-material";

export default {
  title: "@MUI/Material/Inputs/Toggle Button Group",
  component: MuiToggleButtonGroup,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/jVhjeIcVU89TlCWFyTLObZ/XD-HMI-Components?node-id=27%3A1823",
    },
  },
} as Meta<typeof MuiToggleButtonGroup>;

export const ToggleButtonGroup: React.FC = () => {
  const sizes: ToggleButtonGroupProps["size"][] = ["small", "medium", "large"];
  const disableds: ToggleButtonGroupProps["disabled"][] = [false, true];
  const colors: ToggleButtonGroupProps["color"][] = [
    "primary",
    "secondary",
    "success",
    "error",
    "info",
    "warning",
    "standard",
  ];
  const orientations: ToggleButtonGroupProps["orientation"][] = [
    "horizontal",
    "vertical",
  ];

  return (
    <>
      {orientations.map((orientation) =>
        disableds.map((disabled) => (
          <React.Fragment key={`Stack-${disabled}`}>
            {colors.map((color) => (
              <Stack
                key={`Stack-${disabled}-${color}`}
                flexDirection={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
                sx={{
                  width: "100%",
                  mb: 4,
                  p: 4,
                }}
              >
                <Typography
                  variant={"button"}
                  sx={{ minWidth: 200, color: "inherit" }}
                >{`${color}${disabled ? " (disabled)" : ""}`}</Typography>
                {sizes.map((size) => (
                  <MuiToggleButtonGroup
                    key={`Mui-togglebuttongroup-${size}-${color}-${disabled}-${orientation}`}
                    orientation={orientation}
                    size={size}
                    color={color}
                    disabled={disabled}
                    value={"center"}
                  >
                    <ToggleButton value="left" aria-label="left aligned">
                      <FormatAlignLeft />
                    </ToggleButton>
                    <ToggleButton value="center" aria-label="centered">
                      <FormatAlignCenter />
                    </ToggleButton>
                    <ToggleButton value="right" aria-label="right aligned">
                      <FormatAlignRight />
                    </ToggleButton>
                    <ToggleButton value="justify" aria-label="justified">
                      <FormatAlignJustify />{" "}
                      <Typography sx={{ ml: 2, textTransform: "none" }}>
                        Label
                      </Typography>
                    </ToggleButton>
                  </MuiToggleButtonGroup>
                ))}
              </Stack>
            ))}
          </React.Fragment>
        )),
      )}
    </>
  );
};
