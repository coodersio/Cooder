import React from "react";
import { Meta } from "@storybook/react";
import {
  Alert as MuiAlert,
  AlertTitle,
  AlertProps,
  Button,
  Stack,
  IconButton,
} from "@mui/material";
import { Clear } from "@mui/icons-material";

export default {
  title: "@MUI/Material/Feedback/Alert",
  component: MuiAlert,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/jVhjeIcVU89TlCWFyTLObZ/XD-HMI-Components?node-id=4461%3A19413",
    },
  },
} as Meta<typeof MuiAlert>;

export const Alert: React.FC = () => {
  const variants: AlertProps["variant"][] = ["filled", "outlined", "standard"];
  const severities: AlertProps["severity"][] = [
    "error",
    "info",
    "success",
    "warning",
  ];
  return (
    <Stack direction={"row"}>
      {variants.map((variant) => (
        <Stack key={variant} sx={{ minWidth: 400 }}>
          {[false, true].map((hasTitle) =>
            [undefined, "icon", "button"].map((action) =>
              [...severities, "primary"].map((severity) => (
                <MuiAlert
                  key={`${hasTitle}-${action || "undefined"}-${severity}`}
                  variant={variant}
                  severity={
                    (severity !== "primary"
                      ? severity
                      : "info") as AlertProps["severity"]
                  }
                  color={severity as AlertProps["color"]}
                  action={
                    action === "button" ? (
                      <Button color="inherit">Close</Button>
                    ) : action === "icon" ? (
                      <IconButton color={"inherit"}>
                        <Clear />
                      </IconButton>
                    ) : undefined
                  }
                  sx={{ m: 4 }}
                >
                  {hasTitle && <AlertTitle>Title</AlertTitle>}
                  Alert Content
                </MuiAlert>
              )),
            ),
          )}
        </Stack>
      ))}
    </Stack>
  );
};
