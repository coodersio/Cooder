import React from "react";
import {
  Autocomplete as MuiAutocomplete,
  Stack,
  TextField,
  TextFieldProps,
  Typography,
} from "@mui/material";
import { Meta } from "@storybook/react";
import { top100Films } from "../../../../shared-data/mockData";
import { FilmOptionType } from "../../../../shared-data/types";

export default {
  title: "@@MUI/Material/Inputs/Autocomplete",
  component: MuiAutocomplete,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/jVhjeIcVU89TlCWFyTLObZ/XD-HMI-Components?node-id=4289%3A15399",
    },
  },
} as Meta<typeof MuiAutocomplete>;

export const Autocomplete: React.FC = () => {
  const variations: Array<TextFieldProps & { multiple?: boolean }> = [
    { variant: "filled" },
    { variant: "outlined" },
    { variant: "standard" },
    { variant: "filled", multiple: true },
    { variant: "outlined", multiple: true },
    { variant: "standard", multiple: true },
  ];
  return (
    <>
      {variations.map(({ variant, multiple, ...other }) => (
        <Stack
          key={`Stack-${variant}-${multiple ? "multiple" : ""}`}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{ width: "100%", mb: 4, p: 4 }}
        >
          <Typography
            variant={"button"}
            sx={{ minWidth: 200, color: "inherit" }}
          >{`${variant} ${multiple ? "(Multiple)" : ""}`}</Typography>
          {[false, true].map((disabled) => (
            <MuiAutocomplete
              key={`MUI-Autocomplete-${variant}-${disabled}`}
              sx={{ mr: 2 }}
              fullWidth
              disabled={disabled}
              options={top100Films}
              // using this in the template definition is causing issues with inferring the data type of the options
              getOptionLabel={(option: FilmOptionType) => option.title}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant={variant}
                  label="Movie"
                  {...other}
                />
              )}
            />
          ))}
        </Stack>
      ))}
    </>
  );
};
