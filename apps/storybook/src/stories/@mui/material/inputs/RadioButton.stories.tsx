import React from "react";
import { Meta } from "@storybook/react";
import {
  Radio,
  FormControlLabel,
  RadioGroup,
  RadioProps,
  Stack,
  Typography,
} from "@mui/material";

export default {
  title: "@MUI/Material/Inputs/Radio Button",
  component: Radio,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/jVhjeIcVU89TlCWFyTLObZ/XD-HMI-Components?node-id=27%3A1470",
    },
  },
} as Meta<typeof Radio>;

export const RadioButton: React.FC = () => {
  const label = "Label";
  const sizes: RadioProps["size"][] = ["small", "medium"];
  const disableds: RadioProps["disabled"][] = [false, true];
  const colors: RadioProps["color"][] = ["primary"];

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
                <RadioGroup
                  row
                  defaultValue={1}
                  key={`MUI-Radio-${color}-${size}-${disabled}`}
                >
                  <Radio disabled={disabled} size={size} color={color} />
                  <Radio
                    disabled={disabled}
                    size={size}
                    color={color}
                    checked
                  />
                </RadioGroup>
              ))}
              {sizes.map((size) => (
                <RadioGroup
                  row
                  defaultValue={1}
                  key={`MUI-Radio-label-${color}-${size}-${disabled}`}
                >
                  <FormControlLabel
                    disabled={disabled}
                    control={<Radio size={size} color={color} />}
                    label={label}
                  />
                  <FormControlLabel
                    disabled={disabled}
                    control={<Radio size={size} color={color} checked />}
                    label={label}
                  />
                </RadioGroup>
              ))}
            </Stack>
          ))}
        </React.Fragment>
      ))}
    </>
  );
};
