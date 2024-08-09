/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      height: {
        'max-content':'max-content',
        '150v':'150vh',
        '40v':'40vh'
      }
    },
  },
  plugins: [],
}

