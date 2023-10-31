/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors:{
      'primary': '#00adb5',
      'white':'#fff',
      'gray':'#e5e7eb',
    },
    extend: {
      backgroundImage: {
        'homepage-image': "url('/src/assets/homepage-image.jpg')",
      }
    },
  },
  plugins: [],
}