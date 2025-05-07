/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        black: '#000000',
        gray: colors.gray,
        indigo: colors.indigo,
        purple: colors.purple,
        emerald: colors.emerald,
        blue: colors.blue,
        yellow: colors.yellow,
        red: colors.red,
      },
    },
  },
  plugins: [],
}
