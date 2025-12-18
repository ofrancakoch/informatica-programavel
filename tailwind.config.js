/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'long-shot': ["Long Shot Regular", "sans-serif"],
      },
      keyframes: {
        "infinite-scroll": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-19%)" },
        },
      },
      animation: {
        "infinite-scroll": "infinite-scroll 10s linear infinite"
      },
    },
  },
  plugins: [],
}
