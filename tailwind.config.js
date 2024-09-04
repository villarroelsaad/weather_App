/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        700: '700px',
        650: '650px',
        600: '600px',
        450: '450px',
          350:'350px'
      },
      maxWidth: {
        700: '700px',
        650: '650px',
        600: '600px'
      
    }},
  },
  plugins: [],
}