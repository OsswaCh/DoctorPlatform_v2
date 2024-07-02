/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "inner-custom": "#b2b2b2 0px 5px 5px 0px inset",
        "inner-custom-2": "#198a8d 0px 5px 5px 0px inset",
      },
    },
    colors: {
      "color-main": "#90E3B2",
      'color-client': "#8CCDCD",
      "color-client-dark": "#21B8BC",
      "color-text": "#35384E",
      'color-red': "#E36C6D",
      "color-input-box": "#ececec",
      "color-input-box-shadow": "#aeaeae",
      "color-white": "#ffffff",
      "color-border": "#343a40",
    },


    fontFamily: {
      body: ["Montserrat", "sans-serif"],
    },
  },
  variants: {
    extend: {
      boxShadow: ["hover", "focus"],
    },
  },
  plugins: [],
});
