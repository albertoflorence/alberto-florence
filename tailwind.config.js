/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bgDark: '#0c151d',
        bgDarkLight: '#171F26',
        bgLight: '#e9ebec',
        gray: {
          50: '#d7d7d7',
          100: '#A3ABB2',
          200: '#575757',
          300: '#3D3D3D',
        },
        black: '#19191B',
        orange: '#d47559',
      },
    },
    keyframes: {
      swipeStart: {
        '0%': { transform: 'translateX(-40%)' },
        '100%': { transform: 'translateX(0)' },
      },
      swipeEnd: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(150%)' },
      },
    },
    animation: {
      swipeStart: 'swipeStart 0.2s ease-in-out',
      swipeEnd: 'swipeEnd 0.2s ease-in-out forwards',
    },
  },
  plugins: [],
};
