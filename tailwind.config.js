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
      'green': '#22c55e',
      'yellow': '#F1BA53',
      'black' : '#000000',
      'gray': '#606261',
      'light': '#f8f8f8',
      'bgdark': '#161618',
      'gray200': '#dce0e5',
      'greenhover': '#089c44',
      'greenbajo': '#eafee3',
      'bodycolor' : '#c4c5c7',
      'red': 'red',
      'bgcard': '#222427'
    },
    extend: {},
  },
  plugins: [
  ],
}

