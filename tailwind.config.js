module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"], 
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'], // Change '__Montserrat_b1da2a' to 'Montserrat' or the correct font name
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        teal: {
          light: "#46A9B6",
          DEFAULT: '#337C86',
          dark: "#25656E",
        },
        blue: {
          DEFAULT: "#06ABDC",
          dark: "#088BB2",
        },
        green: {
          light: "#64E1C6",
          DEFAULT: "#2EE09F",
        },
        gray: {
          light: "#F6F6F6",
          DEFAULT: "#ACACAC",
          dark: "#868686",
        },
        black: {
          DEFAULT: "#101820",
        },
      },
    },
  },
  plugins: [],
};
