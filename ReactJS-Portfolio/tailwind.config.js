/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {    
      colors: {
        'plopnpurple':
        {
          100 : '#8088e4',
          200 : '#6262d3',
          300 : '#5151c5',
        } 
      },
    },

  },
  plugins: [],
}

