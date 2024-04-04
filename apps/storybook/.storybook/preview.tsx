/** @type { import('@storybook/react').Preview } */
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Typography } from '@mui/material';
import { lightTheme } from '@cooder/themes';

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
};

const storybookProvider = (Story, context) => {
  return (
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Story {...context} />
      </ThemeProvider>
  );
};

export const decorators = [storybookProvider];

export default preview;
