/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        width: {
          '200': '70rem'
      },
        height: {
          '550': '34rem'
        }
    },
    plugins: [],
  }
}