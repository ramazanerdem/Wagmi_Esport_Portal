/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'wagmi-yellow': '#DEFF36',
        'wagmi-black': '#0F1016',
        'wagmi-darkgray': '#14151D',
        'wagmi-midblack': '#191B25',
        'wagmi-card': '#171717',
      },
      backgroundImage: {
        img1: "url('./src/image/valo1.jpg')",
      },
      fontSize: {
        '2xs': '0.55rem',
      },
      spacing: {
        26: '6.5rem',
        68: '17rem',
        110: '30rem',
        128: '32rem',
        156: '40rem',
        200: '55rem',
      },
    },
  },
  plugins: [],
}
