import React from "react";
import { Meta } from "@storybook/react";
import { Avatar, Chip as MuiChip, ChipProps, Stack } from "@mui/material";

export default {
  title: "@MUI/Material/Data Display/Chip",
  component: MuiChip,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/jVhjeIcVU89TlCWFyTLObZ/XD-HMI-Components?node-id=27%3A187",
    },
  },
} as Meta<typeof MuiChip>;

export const Chip: React.FC = () => {
  const colors: ChipProps["color"][] = ["primary", "secondary", "default"];
  const variants: ChipProps["variant"][] = ["outlined", "filled"];
  const disableds: ChipProps["disabled"][] = [false, true];
  const sizes: ChipProps["size"][] = ["small", "medium"];

  return (
    <Stack flexDirection={"row"}>
      {colors.map((color) => (
        <Stack
          key={color}
          sx={{ flex: "1 1 0px", m: 4 }}
          flexDirection={"column"}
        >
          {sizes.map((size) =>
            disableds.map((disabled) => (
              <Stack
                alignItems={"center"}
                key={`MUI-Slider-${disabled}`}
                sx={{
                  minWidth: 200,
                  width: "100%",
                  p: 8,
                }}
              >
                {variants.map((variant) => (
                  <React.Fragment key={`MUI-Slider-${variant}`}>
                    <MuiChip
                      clickable
                      color={color}
                      variant={variant}
                      disabled={disabled}
                      size={size}
                      label={"Chip"}
                      sx={{ my: 2 }}
                    />
                    <MuiChip
                      clickable
                      color={color}
                      variant={variant}
                      disabled={disabled}
                      size={size}
                      avatar={<Avatar>F</Avatar>}
                      label={"Chip"}
                      sx={{ my: 2 }}
                    />
                    <MuiChip
                      clickable
                      color={color}
                      variant={variant}
                      disabled={disabled}
                      size={size}
                      onDelete={() => {}}
                      label={"Chip"}
                      sx={{ my: 2 }}
                    />
                    <MuiChip
                      clickable
                      color={color}
                      variant={variant}
                      disabled={disabled}
                      size={size}
                      avatar={<Avatar>F</Avatar>}
                      onDelete={() => {}}
                      label={"Chip"}
                      sx={{ my: 2 }}
                    />
                  </React.Fragment>
                ))}
              </Stack>
            )),
          )}
        </Stack>
      ))}
    </Stack>
  );
};
