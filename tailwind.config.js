/** @type {import('tailwindcss').Config} */
const { heroui } = require("@heroui/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx,ts,tsx,js,jsx}",
   
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [heroui(),]
}

