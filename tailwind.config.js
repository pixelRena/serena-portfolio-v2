/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '128': '30rem',
      },
      width: {
        '128': '30rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    ],
}
