import React from "react";
import { Meta } from "@storybook/react";
import { Paper as MuiPaper, Stack, Typography } from "@mui/material";

export default {
  title: "@MUI/Material/Surfaces/Paper",
  component: MuiPaper,
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/jVhjeIcVU89TlCWFyTLObZ/XD-HMI-Components?node-id=4803%3A29602",
    },
  },
} as Meta<typeof MuiPaper>;

export const Paper: React.FC = () => (
  <Stack direction={"row"}>
    {[false, true].map((square) => {
      const cards: JSX.Element[] = [];
      for (let i = 1; i <= 24; i += 1) {
        cards.push(
          <MuiPaper
            key={i}
            elevation={i}
            square={square}
            sx={{
              height: 128,
              width: 128,
              mb: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              textAlign={"center"}
              variant={"h3"}
              color={"text.secondary"}
            >
              {i}
            </Typography>
          </MuiPaper>,
        );
      }
      return (
        <Stack key={`${square}`} sx={{ flex: "1 1 0px" }} alignItems={"center"}>
          <Typography>{square ? "SQUARE" : "ROUNDED"}</Typography>
          <MuiPaper
            elevation={0}
            variant={"outlined"}
            square={square}
            sx={{
              height: 128,
              width: 128,
              mb: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              textAlign={"center"}
              variant={"h3"}
              color={"text.secondary"}
            >
              0
            </Typography>
          </MuiPaper>
          {cards}
        </Stack>
      );
    })}
  </Stack>
);
