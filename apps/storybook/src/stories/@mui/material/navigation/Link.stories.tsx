import React from "react";
import { Meta } from "@storybook/react";
import { Link as MuiLink, LinkProps, Stack } from "@mui/material";

export default {
  title: "@MUI/Material/Navigation/Link",
  component: MuiLink,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/jVhjeIcVU89TlCWFyTLObZ/XD-HMI-Components?node-id=4481%3A15593",
    },
  },
} as Meta<typeof MuiLink>;

export const Link: React.FC = () => {
  const colors: LinkProps["color"][] = ["primary", "secondary", "inherit"];
  const underlines: LinkProps["underline"][] = ["always", "hover", "none"];
  const variants: LinkProps["variant"][] = [
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "subtitle1",
    "subtitle2",
    "body1",
    "body2",
    "button",
    "caption",
    "overline",
    "inherit",
  ];
  return (
    <Stack direction={"row"}>
      {underlines.map((underline) => (
        <Stack key={underline} sx={{ flex: "1 1 0px" }}>
          {colors.map((color) =>
            variants.map((variant) => (
              <MuiLink
                key={`${color}-${variant}`}
                color={color}
                href="#"
                underline={underline}
                variant={variant}
                sx={{ mb: 4 }}
              >{`Link`}</MuiLink>
            )),
          )}
        </Stack>
      ))}
    </Stack>
  );
};
