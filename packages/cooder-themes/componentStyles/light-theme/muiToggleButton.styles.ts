import { alpha, Components, Theme } from "@mui/material/styles";
import { ToggleButtonProps } from "@mui/material/ToggleButton";

const getBaseColors: (props: {
  color: ToggleButtonProps["color"];
  theme: Theme;
}) => {
  baseColor: string;
  hoverColor: string;
  focusColor: string;
  checkedColor: string;
  disabledColor: string;
} = ({ color, theme }) => ({
  baseColor:
    color && color !== "standard"
      ? theme.palette[color].main
      : theme.palette.text.primary,
  hoverColor: alpha(
    color && color !== "standard"
      ? theme.palette[color]["300"]
      : theme.palette.text.primary,
    0.04,
  ),
  checkedColor:
    color && color !== "standard"
      ? alpha(theme.palette[color].main, 0.08)
      : theme.palette.action.selected,
  focusColor:
    color && color !== "standard"
      ? theme.palette[color].dark
      : theme.palette.text.primary,
  disabledColor: alpha(
    theme.palette.grey[200],
    theme.palette.action.disabledOpacity,
  ),
});

export default {
  styleOverrides: {
    root: ({ ownerState, theme }) => {
      const { baseColor, hoverColor, focusColor, checkedColor, disabledColor } =
        getBaseColors({
          color: ownerState.color,
          theme,
        });

      return {
        borderColor: baseColor,
        "& .MuiSvgIcon-root": {
          color: baseColor,
        },

        "&:hover": {
          backgroundColor: hoverColor,
          "&.Mui-selected": {
            backgroundColor: checkedColor,
          },
        },

        "& .MuiTouchRipple-root": {
          color: focusColor,
        },

        "&.Mui-selected": {
          backgroundColor: checkedColor,
        },

        "&.Mui-disabled": {
          "& .MuiSvgIcon-root": {
            color: theme.palette.action.disabled,
          },
          "&.Mui-selected": {
            backgroundColor: disabledColor,
          },
        },
      };
    },
  },
} as Components<Theme>["MuiToggleButton"];
