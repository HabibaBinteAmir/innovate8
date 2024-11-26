/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        
      },
      backgroundImage: {
        'banner': "url('/src/assets/bannerbg.png')",
        
      },
      fontFamily: {
        'open': ['"Open Sans"',],
        'papri': ['"Paprika"',],
        'nuni': ['"Nunito Sans"',],
      },
      colors: {
        'golla': 'rgba(255, 119, 40, 0.5)',
      },
    },
  },
  plugins: [],
}

