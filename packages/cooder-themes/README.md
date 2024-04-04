# TODO Update

# Cooder Themes

This package contains simple MUI themes that you can drop in to your React application to achieve the intended look and feel for Hexagon applications.

## Installation

```sh
# With yarn:
yarn add @cooder/theme

# With npm:
npm install --save @cooder/theme
```

### Peer Dependencies

Our themes expect that you have the following dependencies installed in your project. You can install them quickly with the following commands if you haven't already:

```sh
# With yarn:
yarn add @mui/material @emotion/react @emotion/styled @mui/x-data-grid @mui/x-date-pickers @mui/x-tree-view

# With npm:
npm install --save @mui/material @emotion/react @emotion/styled @mui/x-data-grid @mui/x-date-pickers @mui/x-tree-view
```

## Usage

### Basic Theme

In your main React application entry point, wrap your whole app with the ThemeProvider and pass in a Cooder theme to the `theme` prop. You should also include the `CssBaseline` component from MUI — this component includes a CSS reset to standardize default styles across browsers for a more consistent experience.

```tsx
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@cooder/theme';
...

<ThemeProvider theme={theme}>
  <CssBaseline />
  {/* Your Application Contents Here */}
</ThemeProvider>
```

### Supporting Light & Dark Theme

If you want to support both `light` and `dark` themes in your application, you can dynamically switch which theme you pass into the `ThemeProvider`.

```tsx
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import lightTheme, {
  LanguageType,
  useThemeWithLocale
} from "@cooder/theme";

const themeMode = localStorage.getItem("theme") || "light"; // Or read from redux
const theme = themeMode === "dark" ? darkTheme : lightTheme;

<ThemeProvider theme={theme}>
  <CssBaseline />
  {/* Your Application Contents Here */}
</ThemeProvider>;
```
