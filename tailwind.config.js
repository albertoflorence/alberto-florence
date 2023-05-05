/** @type {import('tailwindcss').Config} */

import plugin from 'tailwindcss/plugin';
export const darkMode = 'class';
export const content = [
  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  './src/templates/**/*.{js,ts,jsx,tsx,mdx}',
];
export const theme = {
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
    textShadow: {
      DEFAULT: '0.1em 0.1em 0.3em var(--tw-shadow-color)',
      none: 'none',
    },
  },
};
export const plugins = [
  plugin(function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        'text-shadow': (value) => ({
          textShadow: value,
        }),
      },
      { values: theme('textShadow') },
    );
  }),
];
