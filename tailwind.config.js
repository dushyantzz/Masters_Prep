/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff5eb',
          100: '#ffe6cc',
          200: '#ffd1a3',
          300: '#ffb366',
          400: '#ff8c1a',
          500: '#ff751a',
          600: '#e65c00',
          700: '#cc4d00',
          800: '#993a00',
          900: '#662600',
        },
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
    },
  },
  plugins: [],
};