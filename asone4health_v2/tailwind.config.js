/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}",],
    theme: {
      extend: {

        boxShadow: {
          'inner-custom': '#b2b2b2 0px 5px 5px 0px inset',
        },
        
      },
      colors:{
        'color-main': '#90E3B2',
        'color_client': '#8CCDCD',
        'color-client-dark': '#35384E',
        'color-text':'#35384E',
        'color_red': '#E36C6D',
        'color-input-box': '#ececec',
        'color-input-box-shadow': '#aeaeae',
    },

    fontFamily: {
      'body': ['Montserrat', 'sans-serif'],
    },

  },
  variants: {
    extend: {
      boxShadow: ['hover', 'focus'],
    },
  },
  plugins: [],
}

