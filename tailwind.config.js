/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  darkMode: "class",
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'blueone': '#142257',
      'bluedos': '#1F3584',
      'yellow': '#F1BA53',
    },
    extend: {},
  },
  plugins: [
  ],
}

