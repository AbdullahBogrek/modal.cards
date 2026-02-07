/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: ["Poppins", "sans-serif"],
      secondary: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        'primary-hover': 'rgb(var(--color-primary-hover) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        'surface-alt': 'rgb(var(--color-surface-alt) / <alpha-value>)',
        'surface-elevated': 'rgb(var(--color-surface-elevated) / <alpha-value>)',
        border: 'rgb(var(--color-border) / <alpha-value>)',
        'border-light': 'rgb(var(--color-border-light) / <alpha-value>)',
        text: 'rgb(var(--color-text) / <alpha-value>)',
        'text-secondary': 'rgb(var(--color-text-secondary) / <alpha-value>)',
        'text-muted': 'rgb(var(--color-text-muted) / <alpha-value>)',
        'text-disabled': 'rgb(var(--color-text-disabled) / <alpha-value>)',
        'code-bg': 'rgb(var(--color-code-bg) / <alpha-value>)',
        'stats-bg': 'rgb(var(--color-stats-bg) / <alpha-value>)',
      },
      margin: {
        '1': "5px",
        '2': "10px",
        '3': "15px",
        '4': "20px",
        '5': "25px",
        '6': "30px",
        '7': "35px",
        '8': "40px",
        '9': "45px",
        '10': "50px",
        '11': "55px",
        '12': "60px",
        '13': "65px",
        '14': "70px",
        '15': "75px",
        '16': "80px",
        '17': "85px",
        '18': "90px",
        '21': "82px",
        '30': "120px",
        '38': "150px",
      },
      padding: {
        '8': "30px"
      },
      lineHeight: {
        '11': "44px",
        '12': "48px",
        '20': "80px"
      },
      letterSpacing: {
        tight: '-.015em',
      },
      fontSize: {
        xs: ['13px', '16px'],
      },
      boxShadow: {
        'template-button': '0px 5px 10px 2px rgba(125, 74, 234, 0.27)',
      },
      width: {
        'modal1-sm': '25rem',
        'modal1-md': '30rem',
        'modal1-lg': '35rem',
      },
      height: {
        'modal1-sm': '22.875rem',
        'modal1-md': '27.875rem',
        'modal1-lg': '32.875rem',
      }
    },
  },
  plugins: [],
}
