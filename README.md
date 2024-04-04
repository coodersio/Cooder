# Cooder

Cooder is a design system for Shopify applications. 

## Commands

### `pnpm install`

installs all of the necessary dependencies for the packages and applications in the monorepo.

### `npx nx storybook storybook`

runs the storybook project

### `npx nx dev nextjs-demo`

runs the NextJS example project

### `npx nx dev vite-demo`

runs the Vite example project

### `npx nx format`

runs prettier to automatically format files according to the configuration

### `npx nx lint --fix`

runs eslint and fixes any linting errors that can be automatically resolved.

### `npx nx run-many -t build`

runs the build command for all packages and apps in order based on their dependency trees
