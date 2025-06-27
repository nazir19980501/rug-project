module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        sans: ["Titillium Web", "sans-serif"],
      },
      colors: {
        cyan: "hsl(180, 66%, 49%)",
        cyanLight: "hsl(180, 66%, 69%)",
        darkViolet: "hsl(257, 27%, 26%)",
        red: "hsl(0, 87%, 67%)",
        greyishViolet: "hsl(257, 7%, 63%)",
        veryDarkblue: "hsl(255, 11%, 22%)",
        veryDarkviolet: "hsl(260, 8%, 14%)",
      },
      spacing: {
        180: "32rem",
      },
    },
  },
  plugins: [],
};

