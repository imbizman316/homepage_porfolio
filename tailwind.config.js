/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: ".5" },
        },
        spinAndRest: {
          "0%": { transform: "rotate(-45deg)" },
          // "50%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(45deg)" },
        },
        firstword: {
          "0%": { content: "Dogs" },
          "50%": { content: "Water" },
          "100%": { content: "Movies" },
        },
      },
      animation: {
        "pulse-slow": "pulse 0.3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 3s linear infinite",
        spinAndRest: "spinAndRest 1.5s infinite",
        firstWord: "firstword 3s linear infinite alternate",
      },
    },
  },
  plugins: [],
};
