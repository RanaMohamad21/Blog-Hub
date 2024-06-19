/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'custom-black': '#E7E8EB',
      },
    },
    colors: {
      white: "#FFFFFF",
      black: "#000",
      darkGray:"#696969",
      gray: "#E7E8EB",
    },
    fontSize: {
      xl: "20px",
      base: "16px",
      "5xl": "24px",
      lgi: "19px",
      "13xl": "32px",
      "7xl": "26px",
      "9xl": "28px",
      "77xl": "96px",
      "29xl": "48px",
      "10xl": "29px",
      "3xl": "22px",
      "17xl": "36px",
      inherit: "inherit",
    }
  },
  plugins: [],
};
