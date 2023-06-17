/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': {'max':'768px'},
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

