import React from "react";
import { Meta } from "@storybook/react";
import {
  Box,
  Collapse,
  CSSObject,
  Divider,
  Drawer as MuiDrawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Stack,
  styled,
  Theme,
  DrawerProps,
} from "@mui/material";
import { ExpandLess, Star, WbSunny } from "@mui/icons-material";

export default {
  title: "@MUI/Material/Navigation/Drawer",
  component: MuiDrawer,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/jVhjeIcVU89TlCWFyTLObZ/XD-HMI-Components?node-id=4692%3A20109",
    },
  },
} as Meta<typeof MuiDrawer>;

const basicListItem = (
  index = 0,
  selected = false,
  indent = 0,
  expand = false,
) => (
  <ListItemButton key={index} selected={selected} sx={{ pl: 4 + 4 * indent }}>
    <ListItemIcon>
      <Star />
    </ListItemIcon>
    <ListItemText primary={"List Item"} />
    {expand && <ExpandLess color={"action"} />}
  </ListItemButton>
);

const drawerContent = () => (
  <Box
    sx={{
      width: 320,
      height: 1024,
      maxHeight: "100%",
      backgroundColor: "transparent",
    }}
    role="presentation"
  >
    <List disablePadding>
      <ListSubheader>Subheader</ListSubheader>
      {[...new Array(3).keys()].map((i) => basicListItem(i, i === 1))}
    </List>
    <Divider />
    <List disablePadding>
      {basicListItem()}
      {basicListItem(1, false, 0, true)}
      <Collapse in={true}>
        <List component="div" disablePadding>
          {basicListItem(0, false, 1, true)}
          <Collapse in={true}>
            <List component="div" disablePadding>
              {[...new Array(3).keys()].map((i) =>
                basicListItem(i, false, 2, false),
              )}
            </List>
          </Collapse>
        </List>
      </Collapse>
      {basicListItem(2)}
    </List>
    <Divider />
    <List disablePadding>
      <ListSubheader>Subheader</ListSubheader>
      {[...new Array(3).keys()].map((i) => basicListItem(i))}
    </List>
  </Box>
);
const drawerWidth = 320;

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `57px`,
});
const StyledDrawer = styled(Box)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...{
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  },
}));

// This MiniDrawer example was taken from the MUI documentation with some minor adjustments
function MiniDrawer() {
  return (
    <StyledDrawer>
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItemButton
            key={text}
            selected={index === 1}
            sx={{
              minHeight: 48,
              justifyContent: "center",
              px: 5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: "auto",
                justifyContent: "center",
              }}
            >
              {index % 2 === 0 ? <Star /> : <WbSunny />}
            </ListItemIcon>
          </ListItemButton>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItemButton
            key={text}
            sx={{
              minHeight: 48,
              justifyContent: "center",
              px: 5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: "auto",
                justifyContent: "center",
              }}
            >
              {index % 2 === 0 ? <Star /> : <WbSunny />}
            </ListItemIcon>
          </ListItemButton>
        ))}
      </List>
    </StyledDrawer>
  );
}

export const Drawer: React.FC = () => {
  const drawerSharedProps: DrawerProps = {
    variant: "permanent",
    open: true,
    sx: {
      "& .MuiPaper-root": { position: "static" },
      mr: 4,
    },
  };

  return (
    <Stack direction={"row"} sx={{ p: 4 }}>
      <MuiDrawer {...drawerSharedProps}>{drawerContent()}</MuiDrawer>
      <MuiDrawer {...drawerSharedProps}>
        <MiniDrawer />
      </MuiDrawer>
      <MuiDrawer {...drawerSharedProps} className={"NexusDark"}>
        {drawerContent()}
      </MuiDrawer>
      <MuiDrawer {...drawerSharedProps} className={"NexusDark"}>
        <MiniDrawer />
      </MuiDrawer>
    </Stack>
  );
};
