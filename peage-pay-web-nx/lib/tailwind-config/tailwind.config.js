const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');
const defaultTheme = require('tailwindcss/defaultTheme');

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
        primary: {
          100: 'var(--primary-100)',
          200: 'var(--primary-200)',
          transparent: 'var(--primary-transparent)',
        },
        success: {
          100: 'var(--success-100)',
          200: 'var(--success-200)',
          transparent: 'var(--success-transparent)',
        },
        error: {
          100: 'var(--error-100)',
          200: 'var(--error-200)',
          transparent: 'var(--error-transparent)',
        },
        warning: {
          100: 'var(--warning-100)',
          200: 'var(--warning-200)',
          transparent: 'var(--warning-transparent)',
        },
        'color-content': 'var(--color-content)',
        base: {
          100: 'var(--base-100)',
          200: 'var(--base-200)',
          300: 'var(--base-300)',
        },
        'base-content': 'var(--base-content)',
        edge: {
          100: 'var(--edge-100)',
          200: 'var(--edge-200)',
          300: 'var(--edge-300)',
        },
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        logo: ['Fugaz One', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
