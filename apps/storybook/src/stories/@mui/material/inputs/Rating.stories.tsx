import { Meta } from "@storybook/react";
import { Rating as MuiRating, RatingProps, Stack } from "@mui/material";

import React from "react";

export default {
  title: "@MUI/Material/Inputs/Rating",
  component: MuiRating,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/jVhjeIcVU89TlCWFyTLObZ/XD-HMI-Components?node-id=27%3A1487",
    },
  },
} as Meta<typeof MuiRating>;

export const Rating: React.FC = () => {
  const values: RatingProps["value"][] = [5, 4, 3, 2, 1, 0];
  const disableds: RatingProps["disabled"][] = [false, true];
  const sizes: RatingProps["size"][] = ["large", "medium", "small"];

  return (
    <>
      {disableds.map((disabled) => (
        <React.Fragment key={`Stack-${disabled}`}>
          {values.map((value) => (
            <Stack
              key={`Stack-${disabled}--${value}`}
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              sx={{ width: "100%", mb: 4, p: 4 }}
            >
              {sizes.map((size) => (
                <MuiRating
                  key={`MUI-Button-${value}-${size}-${disabled}`}
                  value={value}
                  disabled={disabled}
                  size={size}
                />
              ))}
            </Stack>
          ))}
        </React.Fragment>
      ))}
    </>
  );
};
