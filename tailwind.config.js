/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes : {
        slidex :{
          from : {transform:'translateX(0%)'},
          to : {transform : 'translateX(100%)'}
        },
        slidey:{
          from : {transform:'translateY(0%)'},
          to : {transform : 'translateY(-100%)'}
        }
      },
      animation : {
       'slide-x' : ' slidex 1.5s linear infinite 2s',
       'slide-y' :'slidey 1.5s linear '

      }
    },
   
  },
  plugins: [],
}
