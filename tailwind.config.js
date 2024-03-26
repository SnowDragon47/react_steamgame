/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    fontFamily:{
      'bebas' : 'Bebas Neue',
    },
    screens:{
      // 'xs' : '320px',
      'sm' : '319px',
      'md' : '880px',
      // 'mmd' : '1024px',
      'lg' : '1440px',
      
    },
    extend: {},
  },
  plugins: [],
}

