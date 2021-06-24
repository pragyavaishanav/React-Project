module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize:{
      '6xl': '4rem',
      '7xl': '5rem',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
