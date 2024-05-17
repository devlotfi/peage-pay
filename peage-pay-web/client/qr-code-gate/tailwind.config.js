import Config from '../../lib/tailwind-config/tailwind.config'

/** @type {import('tailwindcss').Config} */
export default {
  presets: [Config],
  content: [
    './src/renderer/index.html',
    './src/renderer/**/*.{js,ts,jsx,tsx}',
    '../../lib/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {}
  },
  plugins: []
}
