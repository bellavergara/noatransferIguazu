/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'noa-green': '#D0F0C0',       // fondo suave
        'noa-green-dark': '#2F6F4E',  // títulos y botones
        'noa-yellow': '#FFD166',      // acentos
        'noa-blue': '#A0E7E5',        // detalles agua
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'tucan-pattern': "url('./assets/icons/tucan.svg')",
      },
    },
  },
  plugins: [],
}
