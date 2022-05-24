module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "about-ktf": "url('/about-ktf-bg.webp')",
      },
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
    }
  },
  plugins: [],
}
