import React from "react";
import { Meta } from "@storybook/react";
import {
  Select as MuiSelect,
  FormControl,
  InputLabel,
  MenuItem,
  Stack,
  Typography,
  SelectProps,
  FormHelperText,
  InputAdornment,
} from "@mui/material";

import { Visibility } from "@mui/icons-material";

export default {
  title: "@MUI/Material/Inputs/Select",
  component: MuiSelect,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/jVhjeIcVU89TlCWFyTLObZ/XD-HMI-Components?node-id=4727%3A21520",
    },
  },
} as Meta<typeof MuiSelect>;

export const Select: React.FC = () => {
  const variants: SelectProps["variant"][] = ["filled", "outlined", "standard"];
  const errors: SelectProps["error"][] = [false, true];
  const disableds: SelectProps["disabled"][] = [false, true];

  return (
    <>
      {[false, true].map((adorned) =>
        variants.map((variant) => (
          <React.Fragment key={`Stack-${variant}`}>
            <Stack
              key={`Stack-${variant}`}
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              sx={{ width: "100%", mb: 4, p: 4 }}
            >
              <Typography
                variant={"button"}
                sx={{ minWidth: 200, color: "inherit" }}
              >{`${variant}`}</Typography>
              {errors.map((error) =>
                disableds.map((disabled) => (
                  <Stack
                    key={`MUI-Autocomplete-${variant}-${disabled}-${error}`}
                    sx={{ minWidth: 200 }}
                  >
                    <FormControl
                      sx={{ mr: 2, minWidth: 120 }}
                      fullWidth
                      error={error}
                      variant={variant}
                      disabled={disabled}
                    >
                      <InputLabel>Label</InputLabel>
                      <MuiSelect
                        size={"medium"}
                        defaultValue={""}
                        variant={variant}
                        label="Label"
                        fullWidth
                        disabled={disabled}
                        startAdornment={
                          adorned && (
                            <InputAdornment position="start">
                              <Visibility />
                            </InputAdornment>
                          )
                        }
                      >
                        <MenuItem value={1}>Option 1</MenuItem>
                        <MenuItem value={2}>Option 2</MenuItem>
                        <MenuItem value={3}>Option 3</MenuItem>
                      </MuiSelect>
                      <FormHelperText>Helper Text</FormHelperText>
                    </FormControl>
                    <FormControl
                      sx={{ mt: 4, mr: 2, minWidth: 120 }}
                      fullWidth
                      error={error}
                      variant={variant}
                      disabled={disabled}
                    >
                      <InputLabel>Label</InputLabel>
                      <MuiSelect
                        size={"medium"}
                        defaultValue={1}
                        variant={variant}
                        label="Label"
                        fullWidth
                        disabled={disabled}
                        startAdornment={
                          adorned && (
                            <InputAdornment position="start">
                              <Visibility />
                            </InputAdornment>
                          )
                        }
                      >
                        <MenuItem value={1}>Option 1</MenuItem>
                        <MenuItem value={2}>Option 2</MenuItem>
                        <MenuItem value={3}>Option 3</MenuItem>
                      </MuiSelect>
                      <FormHelperText>Helper Text</FormHelperText>
                    </FormControl>
                  </Stack>
                )),
              )}
            </Stack>
          </React.Fragment>
        )),
      )}
    </>
  );
};
