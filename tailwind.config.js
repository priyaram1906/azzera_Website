/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fefdf8',
          100: '#fdf9e7',
          200: '#faf0c4',
          300: '#f6e497',
          400: '#f0d568',
          500: '#e8c547',
          600: '#d4af37',
          700: '#b8941f',
          800: '#967a1e',
          900: '#7a651f',
          950: '#46390f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}