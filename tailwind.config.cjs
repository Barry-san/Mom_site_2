/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Rubik: ["Rubik", "sans-serif"],
        Inter: ["'Inter'", "sans-serif"],
        Roboto: ["'Roboto'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
