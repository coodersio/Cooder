import React from "react";
import { Meta } from "@storybook/react";
import { Slider as MuiSlider, SliderProps, Stack } from "@mui/material";

export default {
  title: "@MUI/Material/Inputs/Slider",
  component: MuiSlider,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/jVhjeIcVU89TlCWFyTLObZ/XD-HMI-Components?node-id=27%3A1760",
    },
  },
} as Meta<typeof MuiSlider>;

export const Slider: React.FC = () => {
  const colors: SliderProps["color"][] = ["primary", "secondary"];
  const disableds: SliderProps["disabled"][] = [false, true];
  const sizes: SliderProps["size"][] = ["medium", "small"];
  const labels: SliderProps["valueLabelDisplay"][] = ["off", "on"];

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
                key={`MUI-Slider-${disabled}`}
                sx={{
                  minWidth: 200,
                  width: "100%",
                  p: 8,
                }}
              >
                {labels.map((label) => (
                  <React.Fragment key={`MUI-Slider-${label}`}>
                    <MuiSlider
                      size={size}
                      color={color}
                      disabled={disabled}
                      defaultValue={34}
                      marks={[
                        { value: 0, label: "0" },
                        { value: 100, label: "100" },
                      ]}
                      valueLabelDisplay={label}
                      sx={{ mt: 8 }}
                    />
                    <MuiSlider
                      size={size}
                      color={color}
                      disabled={disabled}
                      defaultValue={[20, 52]}
                      marks={[
                        { value: 0, label: "0" },
                        { value: 100, label: "100" },
                      ]}
                      valueLabelDisplay={label}
                      sx={{ mt: 8 }}
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
