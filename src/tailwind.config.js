/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-primary': '#2E5A43',
        'green-light': '#F0F5F1',
        'green-accent': '#5E8C76',
        'gray-text': '#555',
      },
      fontFamily: {
        'sans': ['"Poppins"', 'sans-serif'],
        'serif': ['"Lora"', 'serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}