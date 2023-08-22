import type { Preview, StoryFn } from "@storybook/react";
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { GlobalStyles } from '../src/styles/GlobalStyle';
import CenterDecorator from "./centerDecorator";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles,
  }),
  CenterDecorator
]

export default preview;
