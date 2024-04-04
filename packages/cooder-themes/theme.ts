import { alpha, createTheme, Shadows } from '@mui/material/styles';
import { lightThemePalette } from './theme.palette';
import themeTypography from './theme.typography';
import { HighlightPalette, ShadesPalette } from './type';
import type { Color } from './colors';

declare module '@mui/material/styles' {
  interface Theme {
    highlight: HighlightPalette;
    shades: ShadesPalette;
  }
  interface ThemeOptions {
    highlight?: HighlightPalette;
    shades?: ShadesPalette;
  }

  // Allows us to access the .main, .dark, .light AND all of the numerical shades from the theme object
  interface PaletteColor extends Color {}

  interface Palette {
    alternate: Palette['primary'];
  }

  interface PaletteOptions {
    alternate: PaletteOptions['primary'];
  }

  interface TypeBackground {
    alternate: string;
  }

  interface TypographyVariants {
    display: React.CSSProperties;
    bodyL: React.CSSProperties;
    body: React.CSSProperties;
    bodyS: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    display?: React.CSSProperties;
    bodyL?: React.CSSProperties;
    body?: React.CSSProperties;
    bodyS?: React.CSSProperties;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    alternate: true;
  }
}
declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
    alternate: true;
  }
}
declare module '@mui/material/Checkbox' {
  interface CheckboxPropsColorOverrides {
    alternate: true;
  }
}
declare module '@mui/material/Fab' {
  interface FabPropsColorOverrides {
    alternate: true;
  }
}
declare module '@mui/material/Radio' {
  interface RadioPropsColorOverrides {
    alternate: true;
  }
}
declare module '@mui/material/Slider' {
  interface SliderPropsColorOverrides {
    alternate: true;
  }
}
declare module '@mui/material/Switch' {
  interface SwitchPropsColorOverrides {
    alternate: true;
  }
}
declare module '@mui/material/ToggleButtonGroup' {
  interface ToggleButtonGroupPropsColorOverrides {
    alternate: true;
  }
}
declare module '@mui/material/ToggleButton' {
  interface ToggleButtonPropsColorOverrides {
    alternate: true;
  }
}
declare module '@mui/material/Chip' {
  interface ChipPropsColorOverrides {
    alternate: true;
  }
}
declare module '@mui/material/Alert' {
  interface AlertPropsColorOverrides {
    primary: true;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    display: true;
    bodyL: true;
    body: true;
    bodyS: true;
  }
}

const sharedThemeConfig = createTheme({
  spacing: (factor) => `${0.25 * factor}rem`,
  highlight: {
    mint: '#009F62',
    turquoise: '#48DBCF',
    bluejay: '#547CDE',
    cerulean: '#58A8E8',
    radiantYellow: '#FC9F19',
    sunshine: '#F7C50C',
    blueberry: '#A144EA',
    candy: '#F569E2'
  },
  typography: themeTypography.typography,
  shape: {
    borderRadius: 4
  }
});

export const lightTheme = createTheme({
  ...sharedThemeConfig,
  palette: lightThemePalette.palette,
  shades: {
    primary: {
      '4p': alpha(lightThemePalette.palette.primary.main, 0.04),
      '8p': alpha(lightThemePalette.palette.primary.main, 0.08),
      '12p': alpha(lightThemePalette.palette.primary.main, 0.12),
      '30p': alpha(lightThemePalette.palette.primary.main, 0.3),
      '50p': alpha(lightThemePalette.palette.primary.main, 0.5)
    },
    secondary: {
      '4p': alpha(lightThemePalette.palette.secondary.main, 0.04),
      '8p': alpha(lightThemePalette.palette.secondary.main, 0.08),
      '12p': alpha(lightThemePalette.palette.secondary.main, 0.12),
      '30p': alpha(lightThemePalette.palette.secondary.main, 0.3),
      '50p': alpha(lightThemePalette.palette.secondary.main, 0.5)
    }
  }
  // Shifts the shadows up by 1 and inserts our own 'light' shadow as #1
  // shadows: ['', ...lightThemePalette.shadows]
  //   .map((shadow, index) => {
  //     if (index === 0) return 'none';
  //     if (index === 1) {
  //       // 'light' shadow
  //       return '0px 8px 24px -16px rgba(0, 0, 0, 0.25)';
  //     }
  //     // Lighten the color/opacity used in the default MUI shadows, but keep the offsets/blur/etc.
  //     return shadow.replace('0.12', '0.08').replace('0.2', '0.12').replace('0.14', '0.06');
  //   })
  //   .slice(0, 25)
});
