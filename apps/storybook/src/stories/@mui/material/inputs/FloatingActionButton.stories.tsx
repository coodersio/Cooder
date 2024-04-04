import React from "react";
import { Meta } from "@storybook/react";
import { Fab, FabProps, Stack, Typography } from "@mui/material";
import { Add } from "@mui/icons-material";

export default {
  title: "@MUI/Material/Inputs/Floating Action Button",
  component: Fab,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/jVhjeIcVU89TlCWFyTLObZ/XD-HMI-Components?node-id=4989%3A40022",
    },
  },
} as Meta<typeof Fab>;

export const FloatingActionButton: React.FC = () => {
  const label = "Button";
  const variants: FabProps["variant"][] = ["circular", "extended"];
  const colors: FabProps["color"][] = [
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "inherit",
  ];
  const disableds: FabProps["disabled"][] = [false, true];
  const sizes: FabProps["size"][] = ["large", "medium", "small"];

  return (
    <>
      {sizes.map((size) => (
        <React.Fragment key={`Stack-${size}`}>
          {colors.map((color) => (
            <Stack
              key={`Stack-${color}-${size}`}
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
              >{`${color} (${size})`}</Typography>
              {variants.map((variant) =>
                disableds.map((disabled) => (
                  <Fab
                    key={`MUI-Fab-${variant}-${size}-${color}-${disabled}`}
                    variant={variant}
                    color={color}
                    disabled={disabled}
                    size={size}
                  >
                    <Add sx={{ mr: variant === "extended" ? 2 : 0 }} />
                    {variant === "extended" && label}
                  </Fab>
                )),
              )}
            </Stack>
          ))}
        </React.Fragment>
      ))}
    </>
  );
};
