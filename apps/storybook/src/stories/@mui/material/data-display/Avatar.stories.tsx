import React from "react";
import { Meta } from "@storybook/react";
import {
  Avatar as MuiAvatar,
  AvatarGroup,
  AvatarProps,
  Stack,
  Typography,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import avatarSrc from "../../../assets/avatar.jpeg";

export default {
  title: "@MUI/Material/Data Display/Avatar",
  component: MuiAvatar,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/jVhjeIcVU89TlCWFyTLObZ/XD-HMI-Components?node-id=25%3A157",
    },
  },
} as Meta<typeof MuiAvatar>;

export const Avatar: React.FC = () => {
  const variants: AvatarProps["variant"][] = ["circular", "rounded", "square"];
  const sizes = [40, 32, 24];

  return (
    <>
      {sizes.map((size) => (
        <React.Fragment key={`Stack-${size}`}>
          {variants.map((variant) => (
            <Stack
              key={`Stack-${variant}-${size}`}
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              sx={{ width: "100%", mb: 4, p: 4 }}
            >
              <Typography
                variant={"button"}
                sx={{ minWidth: 200, color: "inherit" }}
              >{`${variant} (${size})`}</Typography>
              <Stack direction={"row"} key={`MUI-Button-${variant}-${size}`}>
                <MuiAvatar
                  variant={variant}
                  sx={{ width: size, height: size, mr: 2 }}
                >
                  {"AB"}
                </MuiAvatar>
                <MuiAvatar
                  variant={variant}
                  sx={{ width: size, height: size, mr: 2 }}
                >
                  <AccountCircle fontSize={"small"} />
                </MuiAvatar>
                <MuiAvatar
                  variant={variant}
                  sx={{ width: size, height: size, mr: 2 }}
                  src={avatarSrc}
                />
                <AvatarGroup
                  max={4}
                  sx={{ ml: 2 }}
                  componentsProps={{
                    additionalAvatar: { sx: { width: size, height: size } },
                  }}
                >
                  {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                    <MuiAvatar
                      key={i}
                      sx={{ width: size, height: size }}
                      src={avatarSrc}
                    />
                  ))}
                </AvatarGroup>
              </Stack>
            </Stack>
          ))}
        </React.Fragment>
      ))}
    </>
  );
};
