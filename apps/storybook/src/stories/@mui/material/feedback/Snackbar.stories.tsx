import React from "react";
import { Meta } from "@storybook/react";
import {
  Snackbar as MuiSnackbar,
  Button,
  IconButton,
  Alert,
  AlertProps,
  Stack,
} from "@mui/material";
import { Clear } from "@mui/icons-material";

export default {
  title: "@MUI/Material/Feedback/Snackbar",
  component: MuiSnackbar,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/jVhjeIcVU89TlCWFyTLObZ/XD-HMI-Components?node-id=64%3A469",
    },
  },
} as Meta<typeof MuiSnackbar>;

export const Snackbar: React.FC = () => {
  return (
    <Stack spacing={4} sx={{ mt: 4 }}>
      {[undefined, "icon", "button"].map((action) => (
        <MuiSnackbar
          key={`snackbar-${action}`}
          open
          message={"Snackbar Message"}
          action={
            action === "button" ? (
              <Button>Close</Button>
            ) : action === "icon" ? (
              <IconButton>
                <Clear />
              </IconButton>
            ) : undefined
          }
          sx={{ position: "relative" }}
        />
      ))}
    </Stack>
  );
};

export const AlertSnackbar: React.FC = () => {
  const variants: AlertProps["variant"][] = ["filled", "outlined", "standard"];
  const severities: AlertProps["severity"][] = ["info", "success", "error"];

  return (
    <Stack spacing={4} sx={{ mt: 4 }}>
      {[undefined, "icon", "button"].map((action) =>
        variants.map((variant) =>
          severities.map((severity) => (
            <MuiSnackbar
              key={`${variant}-${severity}-${action}`}
              open
              sx={{ position: "relative" }}
            >
              <Alert
                elevation={2}
                icon={false}
                key={`${action || "undefined"}-${severity}`}
                variant={variant}
                severity={severity}
                action={
                  action === "button" ? (
                    <Button>Close</Button>
                  ) : action === "icon" ? (
                    <IconButton>
                      <Clear />
                    </IconButton>
                  ) : undefined
                }
              >
                {`${variant} - ${severity} message`}
              </Alert>
            </MuiSnackbar>
          )),
        ),
      )}
    </Stack>
  );
};
