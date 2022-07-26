/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter, sans-serif'],
      },

      backgroundImage: {
        'dash-header': "url('/src/assets/header_bg.png')",
        'dash-side': "url('/src/assets/dashSide.png')",
        'side-dash-card': "url('/src/assets/sideDashCard.png')"
      }
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
