/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0891BC",
        background: "#181414",
        secondary: {
          DEFAULT: "#343738",
          100: "#C6C6C6"
        }
      },
      fontFamily: {
        iblack: "Inter-Black",
        ibold: ["Inter-Bold", "sans"],
        iextrabold: ["Inter-ExtraBold", "sans"],
        iextralight: ["Inter-ExtraLight", "sans"],
        ilight: ["Inter-Light", "sans"],
        imedium: ["Inter-Medium", "sans"],
        iregular: ["Inter-Regular", "sans"],
        isemibold: ["Inter-SemiBold", "sans"],
        ithin: ["Inter-Thin", "sans"],
      }
    },
  },
  plugins: [],
}

