/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'darkBlue': '#CEE2FF',
        'lightBlue': '#DDEBFF',
        'indigo':'#4F5372',
        'yellow':'#FFD68A',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

