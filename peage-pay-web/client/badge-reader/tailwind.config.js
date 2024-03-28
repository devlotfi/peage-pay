import Config from '../../lib/tailwind-config/tailwind.config';

/** @type {import('tailwindcss').Config} */
export default {
  presets: [Config],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    '../../lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
