const colors = require("tailwindcss/colors");

const defaultTheme = {
  primary: "#EEECE8",
  secondary: "#262227",
  accent1: "#0D393A",
  accent2: "#50B4A2",
  accent3: "#DD4D1D",
};

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      ...{
        primary: defaultTheme.primary,
        secondary: defaultTheme.secondary,
        accent1: defaultTheme.accent1,
        accent2: defaultTheme.accent2,
        accent3: defaultTheme.accent3,
      },
    },
  },
  extends: {
    boxShadow: {
      allSide: "0px 0px 0px 5px rgba(0,0,0,1)",
    },
  },
  plugins: [],
};
