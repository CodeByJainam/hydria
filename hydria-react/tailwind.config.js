/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeUp: "fadeUp 1s ease-out forwards",
        heroZoom: "heroZoom 12s ease-in-out forwards",
        waterFloat: "waterFloat 12s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        heroZoom: {
          "0%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1)" },
        },
        waterFloat: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(8px)" },
        },
      },

    },

  },
  plugins: [],
}

