import React from "react";
import { Meta } from "@storybook/react";
import { AppBar, Stack, Tab, Tabs as MuiTabs, TabsProps } from "@mui/material";

import { Notifications } from "@mui/icons-material";

export default {
  title: "@MUI/Material/Navigation/Tabs",
  component: MuiTabs,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/jVhjeIcVU89TlCWFyTLObZ/XD-HMI-Components?node-id=4211%3A9084",
    },
    multiThemeDirection: "column",
  },
} as Meta<typeof MuiTabs>;

export const Tabs: React.FC = () => {
  const options: Array<{
    variant: TabsProps["variant"];
    orientation: TabsProps["orientation"];
    centered: boolean;
  }> = [
    { orientation: "horizontal", variant: "standard", centered: false },
    { orientation: "horizontal", variant: "standard", centered: true },
    { orientation: "horizontal", variant: "fullWidth", centered: false },
    { orientation: "horizontal", variant: "scrollable", centered: false },
    { orientation: "vertical", variant: "standard", centered: false },
    { orientation: "vertical", variant: "scrollable", centered: false },
  ];
  const labels = ["text", "icon", "both"];

  return (
    <Stack>
      {["alternate", "blue"].map((bg) => (
        <Stack key={bg} sx={{ p: 4 }}>
          {options.map((o) => (
            <Stack
              key={`${o.orientation}-${o.variant}-${o.centered}`}
              direction={o.orientation === "vertical" ? "row" : "column"}
              sx={{ mb: 12 }}
            >
              {labels.map((label) => {
                const innerContents = (
                  <MuiTabs
                    key={label}
                    value={2}
                    centered={o.centered}
                    variant={o.variant}
                    orientation={o.orientation}
                    textColor={bg === "blue" ? "inherit" : "primary"}
                    sx={{
                      mb: bg === "blue" ? 0 : 4,
                      mr: 4,
                      width: o.orientation === "vertical" ? 200 : undefined,
                      maxHeight: 400,
                    }}
                  >
                    {[
                      ...new Array(o.variant === "scrollable" ? 25 : 5).keys(),
                    ].map((i) => (
                      <Tab
                        key={i}
                        label={label !== "icon" ? `Item ${i}` : undefined}
                        icon={label !== "text" ? <Notifications /> : undefined}
                        iconPosition="start"
                      />
                    ))}
                  </MuiTabs>
                );
                return bg === "blue" ? (
                  <AppBar
                    key={label}
                    position={"static"}
                    sx={{
                      mb: 4,
                      mr: 4,
                      width: o.orientation === "vertical" ? 200 : undefined,
                      maxHeight: 400,
                    }}
                  >
                    {innerContents}
                  </AppBar>
                ) : (
                  innerContents
                );
              })}
            </Stack>
          ))}
        </Stack>
      ))}
    </Stack>
  );
};
