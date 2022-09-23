/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "*"],
  theme: {
    extend: {
      backgroundImage: {
        hero: " linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url('/img/herobg.jpg')",
      },
    },
  },
  plugins: [],
};
