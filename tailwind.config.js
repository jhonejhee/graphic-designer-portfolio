/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], 
      },
      colors: {
        accent: '#fe6100',
        beige: '#ffe6c8',
      },
    },
  },
  plugins: [],
}

