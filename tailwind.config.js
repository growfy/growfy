/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'purplex': '#9B5A9C',
        'orangex': '#FD4C5C',
        'bluex': '#2E2B8C',
        'bluemsg': '#202447',
        'cianox': '#6CBFB0',
        'greenx': '#ACD97F',
        'todos': '#7C7C7C',
        'yellowx': '#E2CB52',
      },
      bg: {
        'footer': '#292F3A'
      }
    },
  },
  plugins: [],
}
