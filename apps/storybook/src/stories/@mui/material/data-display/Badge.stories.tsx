import React from "react";
import { Meta } from "@storybook/react";
import {
  Avatar,
  Badge as MuiBadge,
  BadgeProps,
  Stack,
  Typography,
} from "@mui/material";
import { Mail } from "@mui/icons-material";

export default {
  title: "@MUI/Material/Data Display/Badge",
  component: MuiBadge,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/jVhjeIcVU89TlCWFyTLObZ/XD-HMI-Components?node-id=27%3A44",
    },
  },
} as Meta<typeof MuiBadge>;

export const Badge: React.FC = () => {
  const variants: BadgeProps["variant"][] = ["standard", "dot"];
  const origins: BadgeProps["anchorOrigin"][] = [
    { horizontal: "left", vertical: "bottom" },
    { horizontal: "left", vertical: "top" },
    { horizontal: "right", vertical: "top" },
    { horizontal: "right", vertical: "bottom" },
  ];
  const contents: BadgeProps["badgeContent"][] = [1, 100, 1000];
  const colors: BadgeProps["color"][] = [
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "default",
  ];

  return (
    <>
      {colors.map((color) => (
        <React.Fragment key={`Stack-${color}`}>
          {variants.map((variant) => (
            <Stack
              key={`Stack-${variant}-${color}`}
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              sx={{ width: "100%", mb: 4, p: 4 }}
            >
              <Typography
                variant={"button"}
                sx={{ minWidth: 200, color: "inherit" }}
              >{`${variant} (${color})`}</Typography>
              <Stack>
                <Stack direction={"row"}>
                  {origins.map((origin, ind) => (
                    <Stack
                      direction={"row"}
                      key={`MUI-Button-${variant}-${color}-${origin}${ind}`}
                    >
                      {contents.map((content) => (
                        <MuiBadge
                          key={content?.toString()}
                          sx={{ m: 4 }}
                          color={color}
                          variant={variant}
                          anchorOrigin={origin}
                          badgeContent={content}
                          max={999}
                        >
                          <Mail />
                        </MuiBadge>
                      ))}
                    </Stack>
                  ))}
                </Stack>
                <Stack direction={"row"}>
                  {origins.map((origin, ind) => (
                    <Stack
                      direction={"row"}
                      key={`MUI-Button-${variant}-${color}-${origin}${ind}`}
                    >
                      {contents.map((content) => (
                        <MuiBadge
                          key={content?.toString()}
                          sx={{ m: 4 }}
                          color={color}
                          variant={variant}
                          anchorOrigin={origin}
                          badgeContent={content}
                          max={999}
                          overlap={"circular"}
                        >
                          <Avatar>AB</Avatar>
                        </MuiBadge>
                      ))}
                    </Stack>
                  ))}
                </Stack>
              </Stack>
            </Stack>
          ))}
        </React.Fragment>
      ))}
    </>
  );
};
