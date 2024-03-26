/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        IBM: ['IBM', 'sans-serif'],
        Inter: ['Inter', 'sans-serif']
      },
    },
  },
  plugins: [],
}

