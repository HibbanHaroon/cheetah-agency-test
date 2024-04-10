/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: {
        DEFAULT: "#114A4E",
        light: "#0D686D",
      },
      secondary: "#26C2AD",
      neutral: {
        DEFAULT: "#C5E4E7",
        light: "#E8F4F5",
      },
      white: "#FFFFFF",
      gray: "#979CA6",
    },
  },
  plugins: [],
};
