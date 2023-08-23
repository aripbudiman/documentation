/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Quicksand', 'sans-serif'],
    },
    colors: {
      clifford: '#da373d',
      customGray:{
          1:'#e9e9e9',
          2:'#212529',
          3:'#343a40'
      }
    },
    },
  },
  plugins: [],
}

