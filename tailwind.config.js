/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}","./src/*.{js,jsx,ts,tsx}"
],
  theme: {
    extend: {
      colors:{
        main_theme:{
       600: '#715BA8'
        }
      }
    },
    fontFamily:{
      Raleway : ['Raleway', 'sans-serif'],
      Open_Sans: ['Open Sans', 'sans-serif'],
    }
  },
  plugins: [],
}

