/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#FF4157",
        lightRed: "#dc3545",
        darkBold: "#0b1016",
        darkGray: "#0d161d",
        lightDark: "#343a40",
        text: "#a2a9bf",
        light: "#f8f9fa",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        "fun-background":
          "url('https://images.pexels.com/photos/708392/pexels-photo-708392.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
      },
      backgroundBlendMode: {
        multiply: "multiply",
      },
    },
  },
  plugins: [],
};
