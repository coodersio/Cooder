import React from "react";
import { Meta } from "@storybook/react";
import {
  BottomNavigation as MuiBottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import {
  Favorite,
  Folder,
  LocationOn,
  Person,
  Restore,
  Settings,
} from "@mui/icons-material";

export default {
  title: "@MUI/Material/Navigation/Bottom Navigation",
  component: MuiBottomNavigation,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/jVhjeIcVU89TlCWFyTLObZ/XD-HMI-Components?node-id=4969%3A33625",
    },
  },
} as Meta<typeof MuiBottomNavigation>;

export const BottomNavigation: React.FC = () => {
  const numTabs = [3, 4, 5, 6];
  return (
    <>
      {[true, false].map((showLabels) =>
        numTabs.map((tabs) => (
          <MuiBottomNavigation
            key={`${showLabels}-${tabs}`}
            showLabels={showLabels}
            value={"1"}
            sx={{ mb: 12 }}
          >
            {[
              <BottomNavigationAction
                key={1}
                label="Restore"
                value={"1"}
                icon={<Restore />}
              />,
              <BottomNavigationAction
                key={2}
                label="Favorite"
                value={"2"}
                icon={<Favorite />}
              />,
              <BottomNavigationAction
                key={3}
                label="Disabled"
                value={"3"}
                disabled
                icon={<LocationOn />}
              />,
              <BottomNavigationAction
                key={4}
                label="Folder"
                value={"4"}
                icon={<Folder />}
              />,
              <BottomNavigationAction
                key={5}
                label="Account"
                value={"5"}
                icon={<Person />}
              />,
              <BottomNavigationAction
                key={6}
                label="Settings"
                value={"6"}
                icon={<Settings />}
              />,
            ].slice(0, tabs)}
          </MuiBottomNavigation>
        )),
      )}
    </>
  );
};
