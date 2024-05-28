/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/components/common/*.{js,jsx,ts,tsx}",
    "./src/components/new/**/*.{js,jsx,ts,tsx}",
    "./src/components/Preview/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xxs': '220px',
        'xs': '298px',
        'xsm': '400px',
      },
    },
  },
  plugins: [],
}
