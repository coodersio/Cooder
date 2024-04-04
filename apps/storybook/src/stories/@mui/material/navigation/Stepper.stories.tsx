import React from "react";
import { Meta } from "@storybook/react";
import {
  Step,
  StepLabel,
  Stepper as MuiStepper,
  Stack,
  Typography,
  StepperProps,
  Button,
  MobileStepper,
  Card,
  MobileStepperProps,
} from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

export default {
  title: "@MUI/Material/Navigation/Stepper",
  component: MuiStepper,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/jVhjeIcVU89TlCWFyTLObZ/XD-HMI-Components?node-id=4463%3A16358",
    },
    multiThemeDirection: "column",
  },
} as Meta<typeof MuiStepper>;

export const Stepper: React.FC = () => {
  const orientations: Array<{
    orientation: StepperProps["orientation"];
    alternate: boolean;
  }> = [
    { orientation: "horizontal", alternate: false },
    { orientation: "horizontal", alternate: true },
    { orientation: "vertical", alternate: false },
  ];

  return (
    <Stack sx={{ p: 4 }}>
      {orientations.map((o) => (
        <MuiStepper
          key={`${o.orientation}-${o.alternate}`}
          nonLinear
          activeStep={2}
          orientation={o.orientation}
          alternativeLabel={o.alternate}
          sx={{ mb: 8 }}
        >
          <Step completed>
            <StepLabel>Completed Step</StepLabel>
          </Step>
          <Step>
            <StepLabel error>Error Step</StepLabel>
          </Step>
          <Step>
            <StepLabel>Active Step</StepLabel>
          </Step>
          <Step disabled>
            <StepLabel>Disabled Step</StepLabel>
          </Step>
          <Step>
            <StepLabel
              optional={
                <Typography
                  display={"block"}
                  textAlign={o.alternate ? "center" : "inherit"}
                  variant={"caption"}
                >
                  Confirm
                </Typography>
              }
            >
              Optional Step
            </StepLabel>
          </Step>
        </MuiStepper>
      ))}
    </Stack>
  );
};

export const Mobile: React.FC = () => {
  const variants: MobileStepperProps["variant"][] = [
    "dots",
    "progress",
    "text",
  ];
  const steps = 5;
  const activeStep = [0, 2, 4];
  return (
    <Stack>
      {variants.map((variant) => (
        <Card key={variant} sx={{ maxWidth: 400, mb: 8 }}>
          {activeStep.map((active) => (
            <MobileStepper
              key={active}
              position={"static"}
              variant={variant}
              activeStep={active}
              steps={steps}
              nextButton={
                <Button
                  size="small"
                  endIcon={<ArrowForward />}
                  sx={{ minWidth: 100 }}
                >
                  {active === steps - 1 ? "Finish" : "Next"}
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  startIcon={<ArrowBack />}
                  disabled={active === 0}
                  sx={{
                    visibility: active === 0 ? "hidden" : undefined,
                    minWidth: 100,
                  }}
                >
                  Back
                </Button>
              }
            />
          ))}
        </Card>
      ))}
    </Stack>
  );
};
