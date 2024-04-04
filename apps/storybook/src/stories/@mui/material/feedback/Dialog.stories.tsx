import React from "react";
import { Meta } from "@storybook/react";
import {
  Dialog as MuiDialog,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";

export default {
  title: "@MUI/Material/Feedback/Dialog",
  component: MuiDialog,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/jVhjeIcVU89TlCWFyTLObZ/XD-HMI-Components?node-id=4534%3A19818",
    },
  },
} as Meta<typeof MuiDialog>;

export const Dialog: React.FC = () => (
  <MuiDialog
    open={true}
    onClose={() => {}}
    sx={{ position: "static" }}
    disablePortal
    disableScrollLock
  >
    <DialogTitle component={Typography} variant="h6" fontWeight={"700"}>
      {"Use Google's location service?"}
    </DialogTitle>
    <DialogContent>
      <DialogContentText>
        Let Google help apps determine location. This means sending anonymous
        location data to Google, even when no apps are running.
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={() => {}}>Disagree</Button>
      <Button onClick={() => {}} autoFocus variant={"contained"}>
        Agree
      </Button>
    </DialogActions>
  </MuiDialog>
);
