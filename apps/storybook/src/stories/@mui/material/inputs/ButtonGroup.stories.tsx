import React from "react";
import {
  Button,
  ButtonGroup as MuiButtonGroup,
  ButtonGroupProps,
  Stack,
  Typography,
} from "@mui/material";
import { Meta } from "@storybook/react";

export default {
  title: "@MUI/Material/Inputs/Button Group",
  component: MuiButtonGroup,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/jVhjeIcVU89TlCWFyTLObZ/XD-HMI-Components?node-id=4543%3A20479",
    },
    multiThemeDirection: "column",
  },
} as Meta<typeof MuiButtonGroup>;

export const ButtonGroup: React.FC = () => {
  const label = "Button";
  const variants: ButtonGroupProps["variant"][] = [
    "contained",
    "outlined",
    "text",
  ];
  const colors: ButtonGroupProps["color"][] = [
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "inherit",
  ];
  const disableds: ButtonGroupProps["disabled"][] = [false, true];
  const orientations: ButtonGroupProps["orientation"][] = [
    "horizontal",
    "vertical",
  ];

  return (
    <Stack direction={"row"}>
      {orientations.map((orientation) => (
        <Stack sx={{ mr: 8 }} key={orientation}>
          {disableds.map((disabled) => (
            <Stack direction={"row"} key={`Stack-${disabled}-${orientation}`}>
              {variants.map((variant) => (
                <Stack key={variant}>
                  {colors.map((color) => (
                    <Stack
                      key={`Stack-${variant}-${disabled}-${orientation}-${color}`}
                      flexDirection={"row"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                      sx={{ width: "100%", mb: 2, p: 2 }}
                    >
                      <Typography
                        variant={"button"}
                        sx={{ minWidth: 200, color: "inherit" }}
                      >{`${color}${disabled ? " (disabled)" : ""}`}</Typography>
                      <MuiButtonGroup
                        key={`MUI-ButtonGroup-${variant}-${disabled}-${orientation}-${color}`}
                        orientation={orientation}
                        sx={{ mr: 2 }}
                        color={color}
                        variant={variant}
                        disabled={disabled}
                      >
                        <Button>{label}</Button>
                        <Button>{label}</Button>
                        <Button>{label}</Button>
                      </MuiButtonGroup>
                    </Stack>
                  ))}
                </Stack>
              ))}
            </Stack>
          ))}
        </Stack>
      ))}
    </Stack>
  );
};
