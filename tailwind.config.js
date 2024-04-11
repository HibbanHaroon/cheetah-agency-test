/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        image: "url('/images/image.webp')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      primary: {
        DEFAULT: "#7c6f5a",
        dark: "#968c7b",
        light: "#beb7ad",
      },
      secondary: "#d8d4ce",
      neutral: {
        DEFAULT: "#ded4cb",
        light: "#ECE9E4",
      },
      red: {
        DEFAULT: "#ef4444",
        dark: "#f87171",
        light: "#fca5a5",
      },
      white: "#FFFFFF",
      gray: "#6b7280",
      black: "#000000",
    },
  },
  plugins: [],
};
