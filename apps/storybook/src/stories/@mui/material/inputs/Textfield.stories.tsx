import React from "react";
import { Meta } from "@storybook/react";
import {
  InputAdornment,
  Stack,
  TextField as MuiTextField,
  TextFieldProps,
  Typography,
} from "@mui/material";

import { Visibility } from "@mui/icons-material";

export default {
  title: "@MUI/Material/Inputs/Text Field",
  component: MuiTextField,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/jVhjeIcVU89TlCWFyTLObZ/XD-HMI-Components?node-id=4717%3A21517",
    },
  },
} as Meta<typeof MuiTextField>;

export const TextField: React.FC = () => {
  const disableds: TextFieldProps["disabled"][] = [false, true];
  const errors: TextFieldProps["error"][] = [false, true];
  const variants: TextFieldProps["variant"][] = [
    "filled",
    "outlined",
    "standard",
  ];

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
                    <MuiTextField
                      variant={variant}
                      error={error}
                      disabled={disabled}
                      label={"Label"}
                      helperText={"Helper text"}
                      InputProps={{
                        endAdornment: adorned && (
                          <InputAdornment position="end">
                            <Visibility />
                          </InputAdornment>
                        ),
                        startAdornment: adorned && (
                          <InputAdornment position="start">Kg</InputAdornment>
                        ),
                      }}
                      sx={{ mr: 4 }}
                    />
                    <MuiTextField
                      variant={variant}
                      error={error}
                      disabled={disabled}
                      label={"Label"}
                      helperText={"Helper text"}
                      value={"Value"}
                      InputProps={{
                        endAdornment: adorned && (
                          <InputAdornment position="end">
                            <Visibility />
                          </InputAdornment>
                        ),
                        startAdornment: adorned && (
                          <InputAdornment position="start">Kg</InputAdornment>
                        ),
                      }}
                      sx={{ mt: 4, mr: 4 }}
                    />
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
