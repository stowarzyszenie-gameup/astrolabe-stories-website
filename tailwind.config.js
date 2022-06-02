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
      backgroundImage: {
        stars: "url('/img/stars.png'), linear-gradient(to right, #000, #000)",
        twinkling: "url('/img/twinkling.png')",
        clouds: "url('/img/clouds.png')",
      },
      animation: {
        twink: "move-twinks 200s linear infinite",
        cloud: "move-clouds 200s linear infinite",
      },
    },
  },
  plugins: [],
};
