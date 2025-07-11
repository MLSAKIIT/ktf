module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      flex: {
        '2': '2 2 0%',
        '3': '3 3 0%',
        '4': '4 4 0%',
        '5': '5 5 0%',
        '6': '6 6 0%'
      }
    },
    letterSpacing: {
      widest: '.25em',
    },
    fontFamily: {
      Poppins: ['Poppins', 'sans-serif'],
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
