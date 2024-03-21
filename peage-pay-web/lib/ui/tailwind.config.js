import Config from "../tailwind-config/tailwind.config";

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [Config],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
