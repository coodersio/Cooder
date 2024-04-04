import React from "react";
import { Meta } from "@storybook/react";
import { Box, Breadcrumbs as MuiBreadcrumbs, Link } from "@mui/material";
import { Home } from "@mui/icons-material";

export default {
  title: "@MUI/Material/Navigation/Breadcrumbs",
  component: MuiBreadcrumbs,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/jVhjeIcVU89TlCWFyTLObZ/XD-HMI-Components?node-id=4783%3A31545",
    },
  },
} as Meta<typeof MuiBreadcrumbs>;

export const Breadcrumbs: React.FC = () => {
  const links: JSX.Element[] = [];
  for (let i = 0; i < 7; i += 1)
    links.push(
      <Link
        key={i}
        underline="none"
        sx={{ display: "flex", alignItems: "center" }}
        color="inherit"
      >
        {i === 0 && <Home sx={{ mr: 3 }} fontSize="inherit" />}
        {`Link ${i}`}
      </Link>,
    );
  return (
    <Box sx={{ p: 4, backgroundColor: "background.paper" }}>
      <MuiBreadcrumbs>{links}</MuiBreadcrumbs>
      <MuiBreadcrumbs maxItems={4} sx={{ mt: 12 }}>
        {links}
      </MuiBreadcrumbs>
    </Box>
  );
};
