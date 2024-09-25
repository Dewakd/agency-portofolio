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
    },
  },
  plugins: [],
};
