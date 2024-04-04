import React from "react";
import { Meta } from "@storybook/react";
import {
  AppBar as MuiAppbar,
  AppBarProps,
  Avatar,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

export default {
  title: "@MUI/Material/Surfaces/Appbar",
  component: MuiAppbar,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/jVhjeIcVU89TlCWFyTLObZ/XD-HMI-Components?node-id=4966%3A35062",
    },
  },
} as Meta<typeof MuiAppbar>;

export const Appbar: React.FC = () => {
  const colors: AppBarProps["color"][] = [
    "primary",
    "secondary",
    "default",
    "transparent",
    "inherit",
  ];
  return (
    <Stack>
      {colors.map((color) => (
        <Stack
          key={color}
          direction={"row"}
          alignItems={"center"}
          sx={{ mb: 12 }}
        >
          <Typography
            variant={"button"}
            sx={{ minWidth: 200, color: "inherit" }}
          >{`${color}`}</Typography>
          <MuiAppbar
            color={color}
            position={"static"}
            sx={{ flex: "1 1 0px" }}
            enableColorOnDark
          >
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                Title
              </Typography>
              <Avatar color="inherit">JB</Avatar>
            </Toolbar>
          </MuiAppbar>
        </Stack>
      ))}
    </Stack>
  );
};
