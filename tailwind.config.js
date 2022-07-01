module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        body: "#2C2F33",
        "light-blue": "#7289DA",
        "anchor-blue": "#00b0f4",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      screens: {
        // => @media (min-width: ) { ... }
        md: { min: "768px" },
        mid: { min: "880px" },
        lg: { min: "1280px" },
        xl: { min: "1480px" },

        // => @media (max-width: ) { ... }
        "max-2xl": { max: "1535px" },
        "max-xl": { max: "1279px" },
        "max-lg": { max: "1023px" },
        "max-mid": { max: "916px" },
        "max-md": { max: "767px" },
      },
    },
  },
  plugins: [],
};
