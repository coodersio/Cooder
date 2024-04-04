import React from "react";
import { Meta } from "@storybook/react";
import {
  Divider,
  Stack,
  Typography as MuiTypography,
  TypographyProps,
} from "@mui/material";

export default {
  title: "@MUI/Material/Data Display/Typography",
  component: MuiTypography,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/jVhjeIcVU89TlCWFyTLObZ/XD-HMI-Components?node-id=7984%3A37099",
    },
  },
} as Meta<typeof MuiTypography>;

export const Typography: React.FC = () => {
  const variants: Array<{
    variant: TypographyProps["variant"];
    label: string;
  }> = [
    { variant: "h1", label: "Header 1" },
    { variant: "h2", label: "Header 2" },
    { variant: "h3", label: "Header 3" },
    { variant: "h4", label: "Header 4" },
    { variant: "h5", label: "Header 5" },
    { variant: "h6", label: "Header 6" },
    { variant: "subtitle1", label: "Subtitle 1" },
    { variant: "subtitle2", label: "Subtitle 2" },
    {
      variant: "body1",
      label: `Body 1. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    },
    {
      variant: "body2",
      label: `Body 2. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    },
    { variant: "button", label: "Button" },
    {
      variant: "caption",
      label: `Caption. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    },
    {
      variant: "overline",
      label: `Overline: Lorem Ipsum is simply dummy text`,
    },
    { variant: "inherit", label: `Inherit` },
  ];
  return (
    <Stack
      alignItems={"stretch"}
      sx={{
        p: 10,
        backgroundColor: "background.paper",
        fontSize: 48,
        fontWeight: 900,
      }}
    >
      {variants.map((t, i) => (
        <Stack key={t.variant} alignItems={"center"} sx={{ width: "100%" }}>
          {i !== 0 && <Divider sx={{ my: 6, width: "50%" }} />}
          <MuiTypography variant={t.variant} sx={{ maxWidth: 600 }}>
            {t.label}
          </MuiTypography>
        </Stack>
      ))}
    </Stack>
  );
};
