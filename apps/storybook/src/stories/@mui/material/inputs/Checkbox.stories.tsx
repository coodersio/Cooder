import React from "react";
import {
  Checkbox as MuiCheckbox,
  CheckboxProps,
  FormControlLabel,
  Stack,
  Typography,
} from "@mui/material";
import { Meta } from "@storybook/react";

export default {
  title: "@@MUI/Material/Inputs/Checkbox",
  component: MuiCheckbox,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/jVhjeIcVU89TlCWFyTLObZ/XD-HMI-Components?node-id=27%3A1444",
    },
  },
} as Meta<typeof MuiCheckbox>;

export const Checkbox: React.FC = () => {
  const label = "Label";
  const variations: CheckboxProps[] = [
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
          justifyContent={"space-between"}
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
            {color ?? other.disabled ? "Disabled" : "Enabled"}
          </Typography>

          <FormControlLabel
            disabled={other.disabled}
            control={<MuiCheckbox color={color} {...other} />}
            label={label}
          />
          <FormControlLabel
            control={<MuiCheckbox color={color} checked {...other} />}
            label={label}
          />
          <FormControlLabel
            control={<MuiCheckbox color={color} indeterminate {...other} />}
            label={label}
          />
        </Stack>
      ))}
    </>
  );
};
