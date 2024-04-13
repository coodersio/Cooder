import React from "react";
import {
  Button as MuiButton,
  ButtonProps,
  IconButton as MuiIconButton,
  IconButtonProps,
  Stack,
  Typography,
} from "@mui/material";
import { Upload } from "@mui/icons-material";
import { Meta } from "@storybook/react";

export default {
  title: "@@MUI/Material/Inputs/Button",
  component: MuiButton,
  parameters: {
    design: [
      {
        type: "figma",
        name: "Button",
        url: "https://www.figma.com/file/jVhjeIcVU89TlCWFyTLObZ/XD-HMI-Components?node-id=27%3A168",
      },
      {
        type: "figma",
        name: "Icon Button",
        url: "https://www.figma.com/file/jVhjeIcVU89TlCWFyTLObZ/XD-HMI-Components?node-id=4807%3A27944",
      },
    ],
  },
} as Meta<typeof MuiButton>;

export const Button: React.FC = () => {
  const label = "Save theme";
  const variants: ButtonProps["variant"][] = ["contained", "outlined", "text"];
  const variations: ButtonProps[] = [
    { color: "primary" },
    { color: "secondary" },
    { color: "info" },
    { color: "success" },
    { color: "warning" },
    { color: "error" },
    { disabled: true },
  ];
  return (
    <>
      {variations.map(({ color, ...other }) => (
        <Stack
          key={`Stack-${color}`}
          direction={"row"}
          alignItems={"center"}
          spacing={2}
          sx={{
            width: "100%",
            mb: 4,
            p: 4,
            color: "inherit",
            backgroundColor: "background.default",
          }}
        >
          <Typography
            variant={"button"}
            sx={{ minWidth: 200, color: "inherit" }}
          >
            {color ?? (other.disabled ? "Disabled" : "Enabled")}
          </Typography>
          {variants.map((variant) => (
            <MuiButton
              key={`MUI-Button-${variant}-${color}`}
              variant={variant}
              color={color}
              {...other}
              disableElevation
            >
              {label}
            </MuiButton>
          ))}
        </Stack>
      ))}
    </>
  );
};

export const IconButton: React.FC = () => {
  const variations: IconButtonProps[] = [
    { color: "primary" },
    { color: "secondary" },
    { color: "info" },
    { color: "success" },
    { color: "warning" },
    { color: "error" },
    { disabled: true },
  ];
  return (
    <>
      {variations.map(({ color, ...other }) => (
        <Stack
          key={`Stack-${color}`}
          flexDirection={"row"}
          alignItems={"center"}
          sx={{
            width: "100%",
            mb: 4,
            p: 4,
            color: "inherit",
            backgroundColor: "background.default",
          }}
        >
          <Typography
            variant={"button"}
            sx={{ minWidth: 200, color: "inherit" }}
          >
            {color ?? (other.disabled ? "Disabled" : "Enabled")}
          </Typography>
          <MuiIconButton
            key={`MUI-Icon-Button-${color}`}
            color={color}
            {...other}
          >
            <Upload />
          </MuiIconButton>
        </Stack>
      ))}
    </>
  );
};
