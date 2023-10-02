/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    fontFamily: {
      'roboto': ['Roboto Condensed', 'sans-serif'],
      'lato': ['Lato', 'sans-serif'],
    },
    extend: {
      colors: {
        lux: '#b49424',
        golden: '#9e821f',
      },
    },
  },
  plugins: [require("daisyui"), require('@tailwindcss/aspect-ratio'), require('flowbite/plugin')],
}
