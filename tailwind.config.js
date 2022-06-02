module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: ["Montserrat", "Arial", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#9B7340",
        secondary: "rgb(16, 37, 66)",
      },
    },
  },
  plugins: [],
};
