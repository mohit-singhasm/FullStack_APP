/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4e6bff",
        primaryText: "#79808a",
        primaryHeading: "#181c31",
        primaryBg: "#f4f7fa",
        secondary: "#f36a8d"
      },

      animation: {
        'spin-slow': 'spin 30s linear infinite',
      },

      // keyframes: {
      //   beating: {
      //     "75%, 100%": {
      //       transform: "scale(2)",
      //       opacity: "0"
      //     }
      //   },
      // }
    },
  },
  plugins: [],
}