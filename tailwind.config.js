const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    colors: {
      // Generate colors using this, if desired: https://www.tailwindshades.com/
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.neutral
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // See https://www.npmjs.com/package/@tailwindcss/forms
    require('@tailwindcss/typography') // See https://www.npmjs.com/package/@tailwindcss/typography
  ]
}
