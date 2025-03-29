// .storybook/preview.ts
import type { Preview } from "@storybook/react";
import "../src/app/globals.css"; // Import your global CSS that includes Tailwind

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

export default preview;