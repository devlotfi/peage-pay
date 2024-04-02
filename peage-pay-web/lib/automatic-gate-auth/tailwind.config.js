import Config from "../../lib/tailwind-config/tailwind.config";

/** @type {import('tailwindcss').Config} */
export default {
  presets: [Config],
  content: ["../../lib/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
