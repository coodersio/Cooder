import React from "react";
import { Meta } from "@storybook/react";
import {
  Avatar,
  Checkbox,
  Divider,
  ListItemIcon,
  ListItemText,
  Menu as MuiMenu,
  MenuItem,
  MenuList,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import {
  ContentCut,
  ContentCopy,
  ContentPaste,
  Cloud,
  Check,
  Logout,
  PersonAdd,
  Settings,
} from "@mui/icons-material";

export default {
  title: "@MUI/Material/Navigation/Menu",
  component: MuiMenu,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/jVhjeIcVU89TlCWFyTLObZ/XD-HMI-Components?node-id=4783%3A29661",
    },
  },
} as Meta<typeof MuiMenu>;

export const Menu: React.FC = () => (
  <Stack direction={"row"} alignItems={"flex-start"} flexWrap={"wrap"}>
    {/* Simple Menu */}
    <Paper sx={{ m: 4 }}>
      <MenuItem>Profile</MenuItem>
      <MenuItem selected>My account</MenuItem>
      <MenuItem>Logout</MenuItem>
    </Paper>

    {/* Icon Menu */}
    <Paper sx={{ width: 320, m: 4 }}>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <ContentCut fontSize="small" />
          </ListItemIcon>
          <ListItemText>Cut</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘X
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ContentCopy fontSize="small" />
          </ListItemIcon>
          <ListItemText>Copy</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘C
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ContentPaste fontSize="small" />
          </ListItemIcon>
          <ListItemText>Paste</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘V
          </Typography>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Cloud fontSize="small" />
          </ListItemIcon>
          <ListItemText>Web Clipboard</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>

    {/* Dense Menu */}
    <Paper sx={{ width: 320, m: 4 }}>
      <MenuList dense>
        <MenuItem>
          <ListItemText inset>Single</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>1.15</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>Double</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Check />
          </ListItemIcon>
          Custom: 1.2
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText>Add space before paragraph</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>Add space after paragraph</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText>Custom spacing...</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>

    {/* Account Menu */}
    <Paper sx={{ width: 320, m: 4 }}>
      <MenuList>
        <MenuItem>
          <Avatar sx={{ ml: -1, mr: 2 }} /> Profile
        </MenuItem>
        <MenuItem>
          <Avatar sx={{ ml: -1, mr: 2 }} /> My account
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </MenuList>
    </Paper>

    {/* Checkboxes */}
    <Paper sx={{ width: 320, m: 4 }}>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <Checkbox edge={"start"} />
          </ListItemIcon>
          <ListItemText>Menu Item</ListItemText>
        </MenuItem>
        <MenuItem selected>
          <ListItemIcon>
            <Checkbox edge={"start"} checked />
          </ListItemIcon>
          <ListItemText>Menu Item</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Checkbox edge={"start"} />
          </ListItemIcon>
          <ListItemText>Menu Item</ListItemText>
        </MenuItem>
        <MenuItem selected>
          <ListItemIcon>
            <Checkbox edge={"start"} checked />
          </ListItemIcon>
          <ListItemText>Menu Item</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Checkbox edge={"start"} />
          </ListItemIcon>
          <ListItemText>Menu Item</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Checkbox edge={"start"} />
          </ListItemIcon>
          <ListItemText>Menu Item</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Checkbox edge={"start"} />
          </ListItemIcon>
          <ListItemText>Menu Item</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Checkbox edge={"start"} />
          </ListItemIcon>
          <ListItemText>Menu Item</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  </Stack>
);
