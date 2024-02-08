/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'news': "url('src/assets/newsletter-bg.jpg')",
      }
    },
  },
  plugins: [],
}