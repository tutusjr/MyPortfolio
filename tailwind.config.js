/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '380px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      'screenh': '1358px',
      '2xl': '1536px',
    },
    extend: {
      transitionDuration: {
        '0': '0ms',
        '2000': '2000ms',
        '3000': '3000ms',
      },
      fontFamily: {
        'sans': ['Pathway Extreme', 'sans-serif']
      }
    },
  },
  plugins: [
  ],
}