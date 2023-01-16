/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#557153",
        hover: "#7D8F69",
        secondary: "#3C6255",
      },
    },
    fontFamily: {
      primary: "Gilda Display",
      secondary: "Patrick Hand",
      third: "Rubik",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1140px",
    },
  },
  plugins: [],
};
