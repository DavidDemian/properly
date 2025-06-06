/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
    extend: {
      colors: {
        primary: "#3B82F6", // Blue color from the Properly logo
        secondary: "#FFD700", // Gold accent
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mixed: ['"Crimson Pro"', 'Righteous', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
