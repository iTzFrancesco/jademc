/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'jade-dark': '#051a0a',
        'jade-light': '#a5f3dc',
        'jade-glow': '#00ffa3',
      },
      backgroundImage: {
        'jade-texture': "url('/src/assets/frost.png')",
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
