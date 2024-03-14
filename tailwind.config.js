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
      'ssm' : '320px',
      'sm' : '640px',
      'lg' : '1204px',
    },
    extend: {},
  },
  plugins: [],
}

