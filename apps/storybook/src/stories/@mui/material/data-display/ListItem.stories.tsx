import React from "react";
import { Meta } from "@storybook/react";
import {
  ListItem as MuiListItem,
  ListItemText,
  ListItemAvatar,
  ListItemIcon,
  Avatar,
  IconButton,
  Stack,
  ListItemButton,
  List,
  Checkbox,
} from "@mui/material";
import { ExpandLess, Star } from "@mui/icons-material";
import avatarSrc from "../../../assets/avatar.jpeg";

export default {
  title: "@MUI/Material/Data Display/List Item",
  component: MuiListItem,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/jVhjeIcVU89TlCWFyTLObZ/XD-HMI-Components?node-id=4189%3A9228",
    },
  },
} as Meta<typeof MuiListItem>;

export const ListItem: React.FC = () => {
  const hasEndIcon = [false, true];
  const hasTwoLines = [false, true];

  return (
    <Stack
      flexDirection={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      sx={{ width: "100%", mb: 4, p: 4 }}
    >
      {[false, true].map((selected) => (
        <Stack direction={"row"} key={`selected-${selected}`}>
          <List sx={{ m: 4 }} disablePadding>
            {hasTwoLines.map((twoLines) =>
              hasEndIcon.map((endIcon) => {
                const secondaryAction = endIcon && (
                  <IconButton edge={"end"}>
                    <ExpandLess />
                  </IconButton>
                );
                const itemProps = {
                  selected,
                  disablePadding: true,
                  sx: { minWidth: 400 },
                  secondaryAction,
                };
                return (
                  <React.Fragment
                    key={`endIcon-${endIcon}-twoLines-${twoLines}`}
                  >
                    {/* Basic */}
                    <MuiListItem {...itemProps}>
                      <ListItemButton>
                        <ListItemText
                          primary={"List Item"}
                          secondary={twoLines ? "Secondary" : undefined}
                        />
                      </ListItemButton>
                    </MuiListItem>

                    {/* Start Icon */}
                    <MuiListItem {...itemProps}>
                      <ListItemButton>
                        <ListItemIcon>
                          <Star />
                        </ListItemIcon>
                        <ListItemText
                          primary={"List Item"}
                          secondary={twoLines ? "Secondary" : undefined}
                        />
                      </ListItemButton>
                    </MuiListItem>

                    {/* Avatar */}
                    <MuiListItem {...itemProps}>
                      <ListItemButton>
                        <ListItemAvatar>
                          <Avatar src={avatarSrc} />
                        </ListItemAvatar>
                        <ListItemText
                          primary={"List Item"}
                          secondary={twoLines ? "Secondary" : undefined}
                        />
                      </ListItemButton>
                    </MuiListItem>

                    {/* Checkbox */}
                    <MuiListItem {...itemProps}>
                      <ListItemButton>
                        <ListItemIcon>
                          <Checkbox edge="start" disableRipple />
                        </ListItemIcon>
                        <ListItemText
                          primary={"List Item"}
                          secondary={twoLines ? "Secondary" : undefined}
                        />
                      </ListItemButton>
                    </MuiListItem>
                  </React.Fragment>
                );
              }),
            )}
          </List>
        </Stack>
      ))}
    </Stack>
  );
};
