const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      primary: colors.cupid,
      secundary: colors.blue,
      sucess: { 
        DEFAULT: '#ADD8E6',
        '50': '#FFFFFF',
        '100': '#FFFFFF',
        '200': '#FFFFFF',
        '300': '#FBFDFE',
        '400': '#D4EBF2',
        '500': '#ADD8E6',
        '600': '#86C5DA',
        '700': '#5FB3CE',
        '800': '#3A9FC0',
        '900': '#2E7E99'
       }
    }
  }
  }
}
