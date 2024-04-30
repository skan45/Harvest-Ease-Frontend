/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"],
  theme: {
    extend: {
      colors:{
      darkGrey:'#A0A8A9',
      darkBlue:'#3B4D61',
      pastelGreen:'#B0CDB3',
      lightGreen:'#D8E4D9',
  
      },
     
  },
  plugins: [
],
}
}

