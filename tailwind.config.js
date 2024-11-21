/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from 'tailwind-scrollbar';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        "rubik" : ['Rubik', 'san-serif']
      }

      //  ['Inter', 'sans-serif']
    },
  },
  plugins: [tailwindScrollbar],
}