import '@moscowcss/fonts';
// Loads the design-token layer once so every story has the `:root` CSS
// custom properties the components' vanilla-extract styles consume.
import '@moscowcss/ui/theme';

const preview = {
  parameters: {
    backgrounds: {
      options: {
        light: { name: 'Light', value: '#ffffff' },
        dark: { name: 'Dark', value: '#0f172a' },
      },
    },
  },
};

export default preview;
