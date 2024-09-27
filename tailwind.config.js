/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#FF4157",
        darkRed: "#dc3545",
        darkBold: "#0b1016",
        darkGray: "#0d161d",
        lightGray: "#131d26",
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

        "work-banner-background":
          "url('https://images.pexels.com/photos/5553052/pexels-photo-5553052.jpeg?auto=compress&cs=tinysrgb&w=600')",
        whoWeAre: "url(./src/assets/img/whoweare.jpg)",
        award: "url(./src/assets/img/award.png)",
        imgBanner: "url(./src/assets/img/about/banner.png)",
        WhyChoose: "url(./src/assets/img/about/2.png)",
      },
      backgroundBlendMode: {
        multiply: "multiply",
      },
      backgroundSize: {
        "120%": "120%",
      },
    },
  },
  variants: {
    extend: {
      backgroundSize: ["hover"], // Aktifkan hover untuk backgroundSize
    },
  },
  plugins: [],
};
