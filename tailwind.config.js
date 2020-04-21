/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      transitionProperty: {
        height: "height"
      },
      colors: {
        primary: colors.blue
      },
      opacity: {
        "90": ".9"
      }
    }
  }
};
