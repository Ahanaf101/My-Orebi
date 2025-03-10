/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dm': ['DM Sans' , 'serif' ]
        
      },
      colors:{
        primary:"#262626"
      },
    },
  },
  plugins: [],
}
