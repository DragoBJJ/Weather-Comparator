/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{tsx,ts,js,jsx}', './index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primaryBlack: 'rgba(32,32,32)',
        primaryWhite: 'rgba(255,255,255)',
        primaryGray: 'rgba(0, 0, 0, 0.05)',
        primaryRed: 'rgba(164,42,55)',
        oceanBlue: 'rgba(5,67,190)',
        cashmere: 'rgba(228,201,164)',
        glassCard: 'linear-gradient(to right bottom, rgba(255,255,255,0.7), rgba(255,255,255,0.3))',
      },
    },
    variants: {
      display: ['group-hover'],
    },
  },
  plugins: [],
};
