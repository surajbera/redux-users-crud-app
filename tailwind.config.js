/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
      fontSize: {
        x: '1.2rem',
        sm: '1.4rem',
        base: '1.6rem',
        lg: '1.8rem',
        xl: '2rem',
        '2xl': '2.4rem',
        '3xl': '3rem',
        '4xl': '3.6rem',
        '5xl': '4rem',
        '6xl': '5rem',
      },
      maxWidth: {
        xs: '32rem',
        sm: '38.4rem',
        md: '44.8rem',
        lg: '51.2rem',
        xl: '57.6rem',
        '2xl': '67.2rem',
        '3xl': '76.8rem',
        '4xl': '89.6rem',
        '5xl': '102.4rem',
        '6xl': '115.2rem',
        '7xl': '128rem',
      },
      width: {
        25: '25rem',
      },
    },
  },
  plugins: [],
}
