/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html', './app/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        display: ['Fredoka One', 'sans-serif'],
        body: ['Montserrat', 'sans-serif'],
        code: ['Source Code Pro', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
