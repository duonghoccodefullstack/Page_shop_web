/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Popins', 'sans-serif'],
      input_san:['Montserrat','sans-serif']
      
    },
    gridAutoColumns: {
      '2fr': 'minmax(0, 2fr)',
    },
    backgroundColor: {
      "blue_login":"#2148C0",
      "bg_header":"#607D8B",
      "icon_from":"white",
    },
    height:{
      "height_screen": "100vh",
      "height_input_form" :"45px"
    
    },
  },
  plugins: [],
}