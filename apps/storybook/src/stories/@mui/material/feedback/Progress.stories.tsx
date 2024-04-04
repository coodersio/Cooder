import React from "react";
import { Meta } from "@storybook/react";
import {
  Box,
  CircularProgress,
  CircularProgressProps,
  LinearProgress,
  LinearProgressProps,
  Stack,
  Typography,
} from "@mui/material";

export default {
  title: "@MUI/Material/Feedback/Progress",
  component: CircularProgress,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/jVhjeIcVU89TlCWFyTLObZ/XD-HMI-Components?node-id=4463%3A15340",
    },
  },
} as Meta<typeof CircularProgress>;

export const Progress: React.FC = () => {
  const colors: LinearProgressProps["color"][] = [
    "primary",
    "secondary",
    "inherit",
  ];
  const variants: LinearProgressProps["variant"][] = [
    "determinate",
    "indeterminate",
    "buffer",
    "query",
  ];
  const colorsC: CircularProgressProps["color"][] = [
    "primary",
    "secondary",
    "error",
    "info",
    "success",
    "warning",
    "inherit",
  ];
  const variantsC: CircularProgressProps["variant"][] = [
    "determinate",
    "indeterminate",
  ];

  return (
    <Stack direction={"row"}>
      <Stack sx={{ minWidth: 400 }}>
        {colors.map((color) => (
          <Box key={color} sx={{ mb: 16 }}>
            {variants.map((variant) => (
              <LinearProgress
                key={variant}
                variant={variant}
                color={color}
                value={25}
                valueBuffer={35}
                sx={{ mt: 12 }}
              />
            ))}
          </Box>
        ))}
      </Stack>
      <Stack sx={{ ml: 4, minWidth: 400 }} alignItems={"center"}>
        {colorsC.map((color) => (
          <Stack key={color} sx={{ mb: 0 }}>
            {variantsC.map((variant) => (
              <Stack key={variant} direction={"row"} sx={{ mt: 8 }}>
                <CircularProgress color={color} variant={variant} value={75} />
                <Box
                  sx={{
                    position: "relative",
                    display: "flex",
                    ml: 8,
                    color: `${color !== "inherit" ? `${color}.dark` : "inherit"}`,
                  }}
                >
                  <CircularProgress
                    color={color}
                    variant={variant}
                    value={75}
                  />
                  <Box
                    sx={{
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      position: "absolute",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{ fontWeight: 700, color: "inherit" }}
                    >{`75%`}</Typography>
                  </Box>
                </Box>
              </Stack>
            ))}
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};
