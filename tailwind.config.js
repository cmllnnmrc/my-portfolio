/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        logo: ['Poppins'],
      },
      colors: {
        'light': '#f5f5f5',
        'dark': '#030202',
        'primary': '#ff6f00',
        'grey': '#807a79',
      },
    },
  },
  plugins: [],
}

