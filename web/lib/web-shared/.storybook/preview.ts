import '../src/tailwind.css';
import { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    mode: 'lol',
    backgrounds: {
      default: 'LIGHT',
      values: [
        {
          name: 'LIGHT',
          value: '#ffffff',
        },
        {
          name: 'DARK',
          value: '#313b4b',
        },
      ],
    },
  },
};

export default preview;
