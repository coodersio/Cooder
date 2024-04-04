import { alpha, Components, Theme } from "@mui/material/styles";
import { RadioProps } from "@mui/material/Radio";

const getBaseColors: (props: { color: RadioProps["color"]; theme: Theme }) => {
  baseColor: string;
  hoverColor: string;
  focusColor: string;
} = ({ color, theme }) => ({
  baseColor:
    color && color !== "default"
      ? theme.palette[color].main
      : theme.palette.text.primary,
  hoverColor: alpha(
    color && color !== "default"
      ? theme.palette[color].main
      : theme.palette.text.primary,
    0.04,
  ),
  focusColor: alpha(
    color && color !== "default"
      ? theme.palette[color].main
      : theme.palette.text.primary,
    0.12,
  ),
});

export default {
  styleOverrides: {
    root: ({ ownerState, theme }) => {
      const { baseColor, hoverColor, focusColor } = getBaseColors({
        color: ownerState.color,
        theme,
      });
      return {
        color: baseColor,
        "&:hover": {
          backgroundColor: hoverColor,
        },
        "&.Mui-focusVisible": {
          backgroundColor: focusColor,
          "& .MuiTouchRipple-root": {
            color: focusColor,
          },
        },
      };
    },
  },
} as Components<Theme>["MuiRadio"];
