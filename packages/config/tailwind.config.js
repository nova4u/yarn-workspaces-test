/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/dist/*.{js,ts,tsx,jsx}",
  ],
  theme: {
    extend: {
      colors: {},
    },
  },
  plugins: [],
};
