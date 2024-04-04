import { createTheme } from '@mui/material/styles';

const toRem: (px: number) => string = (px) => `${px / 16}rem`;
export const cooderFontFamily = ['-apple-system', 'BlinkMacSystemFont', 'San Francisco', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'sans-serif'].join(', ');
const themeTypography = createTheme();
themeTypography.typography = {
  ...themeTypography.typography,
  fontFamily: cooderFontFamily,
  h1: {
    fontSize: toRem(40),
    lineHeight: toRem(48),
    fontWeight: 700,
    letterSpacing: '-0.02em',
    // Mobile style
    [themeTypography.breakpoints.down('sm')]: {
      fontSize: toRem(32),
      lineHeight: toRem(28)
    }
  },
  h2: {
    fontSize: toRem(32),
    lineHeight: toRem(40),
    fontWeight: 700,
    letterSpacing: '-0.02em',
    // Mobile style
    [themeTypography.breakpoints.down('sm')]: {
      fontSize: toRem(24),
      lineHeight: toRem(28)
    }
  },
  h3: {
    fontSize: toRem(28),
    lineHeight: toRem(32),
    fontWeight: 600,
    letterSpacing: '-0.02em',
    // Mobile style
    [themeTypography.breakpoints.down('sm')]: {
      fontSize: toRem(20),
      lineHeight: toRem(24)
    }
  },
  h4: {
    fontSize: toRem(24),
    lineHeight: toRem(28),
    fontWeight: 600,
    letterSpacing: '-0.02em',
    // Mobile style
    [themeTypography.breakpoints.down('sm')]: {
      fontSize: toRem(20),
      lineHeight: toRem(24),
      letterSpacing: 'unset'
    }
  },
  h5: {
    fontSize: toRem(20),
    lineHeight: toRem(24),
    fontWeight: 600,
    // Mobile style
    [themeTypography.breakpoints.down('sm')]: {
      fontSize: toRem(16),
      lineHeight: toRem(20)
    }
  },
  h6: {
    fontSize: toRem(16),
    lineHeight: toRem(24),
    fontWeight: 600,
    // Mobile style
    [themeTypography.breakpoints.down('sm')]: {
      fontSize: toRem(16),
      lineHeight: toRem(24)
    }
  },
  subtitle1: {
    fontSize: toRem(14),
    lineHeight: toRem(20),
    fontWeight: 600,
    // Mobile style
    [themeTypography.breakpoints.down('sm')]: {
      fontSize: toRem(14),
      lineHeight: toRem(20)
    }
  },
  subtitle2: {
    fontSize: toRem(12),
    lineHeight: toRem(16),
    fontWeight: 600,
    // Mobile style
    [themeTypography.breakpoints.down('sm')]: {
      fontSize: toRem(12),
      lineHeight: toRem(16)
    }
  },
  bodyL: {
    fontFamily: cooderFontFamily,
    fontSize: toRem(16),
    lineHeight: toRem(20),
    fontWeight: 400,
    // Mobile style
    [themeTypography.breakpoints.down('sm')]: {
      fontSize: toRem(16),
      lineHeight: toRem(20)
    }
  },
  body: {
    fontFamily: cooderFontFamily,
    fontSize: toRem(14),
    lineHeight: toRem(20),
    fontWeight: 400,
    // Mobile style
    [themeTypography.breakpoints.down('sm')]: {
      fontSize: toRem(14),
      lineHeight: toRem(20)
    }
  },
  bodyS: {
    fontFamily: cooderFontFamily,
    fontSize: toRem(12),
    lineHeight: toRem(16),
    fontWeight: 400
    // Mobile style - no change
  },
  body1: {
    // alias for body
    fontSize: toRem(14),
    lineHeight: toRem(20),
    fontWeight: 400,
    // Mobile style
    [themeTypography.breakpoints.down('sm')]: {
      fontSize: toRem(14),
      lineHeight: toRem(20)
    }
  },
  body2: {
    // alias for bodyS
    fontSize: toRem(12),
    lineHeight: toRem(16),
    fontWeight: 400
    // Mobile style - no change
  },
  button: {
    fontSize: toRem(14),
    lineHeight: toRem(20),
    fontWeight: 600
    // Mobile style - no change
  },
  caption: {
    fontSize: toRem(12),
    lineHeight: toRem(16),
    fontWeight: 400
    // Mobile style - no change
  },
  overline: {
    fontSize: toRem(12),
    lineHeight: toRem(16),
    letterSpacing: '0.1em',
    fontWeight: 400,
    textTransform: 'uppercase'
    // Mobile style - no change
  }
};

export default themeTypography;
