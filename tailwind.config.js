/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'custom': '400px',
        'custom-max': { 'max': '500px' }, 
      },
    },
  },
  plugins: [],
}

