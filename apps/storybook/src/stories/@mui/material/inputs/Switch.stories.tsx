import React from "react";
import { Meta } from "@storybook/react";
import {
  Switch as MuiSwitch,
  FormControlLabel,
  Stack,
  Typography,
  SwitchProps,
} from "@mui/material";

export default {
  title: "@MUI/Material/Inputs/Switch",
  component: MuiSwitch,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/jVhjeIcVU89TlCWFyTLObZ/XD-HMI-Components?node-id=27%3A1779",
    },
  },
} as Meta<typeof MuiSwitch>;

export const Switch: React.FC = () => {
  const label = "Label";
  const sizes: SwitchProps["size"][] = ["small", "medium"];
  const disableds: SwitchProps["disabled"][] = [false, true];
  const colors: SwitchProps["color"][] = [
    "primary",
    "secondary",
    "success",
    "error",
    "info",
    "warning",
  ];

  return (
    <>
      {disableds.map((disabled) => (
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
                <React.Fragment key={`MUI-Switch-${color}-${size}-${disabled}`}>
                  <MuiSwitch disabled={disabled} size={size} color={color} />
                  <MuiSwitch
                    disabled={disabled}
                    size={size}
                    color={color}
                    checked
                  />
                </React.Fragment>
              ))}
              {sizes.map((size) => (
                <React.Fragment
                  key={`MUI-Switch-label-${color}-${size}-${disabled}`}
                >
                  <FormControlLabel
                    disabled={disabled}
                    control={<MuiSwitch size={size} color={color} />}
                    label={label}
                  />
                  <FormControlLabel
                    disabled={disabled}
                    control={<MuiSwitch size={size} color={color} checked />}
                    label={label}
                  />
                </React.Fragment>
              ))}
            </Stack>
          ))}
        </React.Fragment>
      ))}
    </>
  );
};
