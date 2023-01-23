/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#0D3161",
        white: "#FFFFFF",
        transparentWhite: "rgba(255, 255, 255, 0.75)",
        blue: "#BDE1FF",
        veryLightBlue: "#EEF5FF",
        darkBlue: "#174A8B",
        grayOne: "#9B9CA1",
        grayTwo: "#DBDADF",
        grayThree: "#F8F9FE",
        violetOne: "#514E93",
        violetTwo: "#483EFF",
        lightViolet: "#F8F9FE",
        red: "#BE4153",
      },
    },
  },
  plugins: [],
};
