/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff3333",
        secondary: {
          100: "#9dc3ff",
          200: "#5b9aff"
        }
      },
      fontFamily: {
        font_body: ["googleapis"]
      }
    },
  },
  plugins: [],
}

