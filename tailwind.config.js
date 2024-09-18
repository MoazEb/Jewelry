/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'maestro': ['maestro', 'serif'],
      'sunmora': ['sunmora', 'serif'],
    },
  },
  plugins: [],
}