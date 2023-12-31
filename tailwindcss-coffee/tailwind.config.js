/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
    extend: {
      fontFamily:{
        Karla:['Karla', 'sans-serif']
      },
      colors:{
        'coffee': {
          50: 'r8d6d0',
        200 :  '#c89f94',
        400: '#a25f4b',
        600: '#744888'

        }
      },
      keyframes: {
        slideDown: {
          '0% ': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        }
      },
      animation: {
        slideDown: 'slideDown .6s ease-in-out ',
      }
    },
  },
  plugins: [],
}

