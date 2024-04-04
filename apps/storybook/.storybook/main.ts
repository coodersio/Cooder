import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-actions",
    "@storybook/addon-viewport",
    "@storybook/addon-controls",
    "@storybook/addon-docs",
    "@storybook/addon-toolbars",
    "@storybook/addon-designs",
    "storybook-dark-mode",
    process.env.NODE_ENV === "development"
      ? "@storybook/addon-interactions"
      : "",
    process.env.NODE_ENV === "development" ? "@storybook/addon-a11y" : "",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
