import { alpha, Components, Theme } from "@mui/material/styles";

export default {
  styleOverrides: {
    root: ({ theme }) => ({
      /**
       * This is a little bit of a hack:
       * The MUI Drawer doesn't have a color prop or any other props that we can tap into to easily integrate
       * this dark version of the Drawer from Figma. The MUI Drawer is basically just a wrapper that does
       * the drawer behavior and all of the contents are just built using MUI ListItem elements. Rather than put
       * all of this styling responsibility on the user to implement, I've defined the rules here and made them
       * available to the user by adding the 'NexusDark' class onto their MUI Drawer
       *
       * <Drawer className={'NexusDark'}>{...contents}</Drawer>
       *
       * It's probably worthwhile at some point to make our own Drawer component to help alleviate some of the
       * layout/style responsibilities currently facing the user.
       **/
      "&.NexusDark": {
        "& .MuiPaper-root": {
          background: `linear-gradient(0deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
          color: theme.palette.primary[50],
          "& .MuiListItemButton-root": {
            "&.Mui-selected": {
              backgroundColor: alpha(theme.palette.common.white, 0.12),
            },
            "&:hover": {
              backgroundColor: alpha(theme.palette.common.white, 0.08),
            },
          },
          "& .MuiSvgIcon-root": { color: theme.palette.primary[50] },
          "& .MuiListSubheader-root": { color: theme.palette.primary[50] },
          "& .MuiDivider-root": { borderColor: theme.palette.primary[50] },
        },
      },
      "& .MuiPaper-root": {
        borderRadius: 0,
      },
    }),
  },
} as Components<Theme>["MuiDrawer"];
