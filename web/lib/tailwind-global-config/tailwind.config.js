const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        success: 'var(--success)',
        error: 'var(--error)',
        warning: 'var(--warning)',
        'color-content': 'var(--color-content)',
        'base-100': 'var(--base-100)',
        'base-200': 'var(--base-200)',
        'base-300': 'var(--base-300)',
        'base-content': 'var(--base-content)',
        'edge-100': 'var(--edge-100)',
        'edge-200': 'var(--edge-200)',
        'edge-300': 'var(--edge-300)',
      },
    },
  },
  plugins: [],
};
