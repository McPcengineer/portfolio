/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00ffc3', // Puedes cambiar este color a lo que tú quieras
      },
    },
  },
  plugins: [],
}
