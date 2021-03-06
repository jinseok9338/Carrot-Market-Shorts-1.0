module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      proxima: ["proxima-semibold", "PingFangSC", "sans-serif"],
    },
    fontFamily: {
      Montserrat: ["Montserrat"],
      sans: ["Segoe UI"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
      primary: "#fe2c55",
      tintBlack: "rgba(22, 24, 35)",
      tintBlue: "rgba(34, 90, 89)",
    },
    extend: {
      backgroundImage: {
        "Profile-background":
          "linear-gradient(180deg, #2DC9FA 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(159.93deg, #27B6E3 26.66%, rgba(116, 247, 184, 0.5) 86.62%)",
      },
      // that is animation class
      animation: {
        fade: "fadeOut 2s ease-in-out",
      },

      // that is actual animation
      keyframes: () => ({
        fadeOut: {
          "0%": { opacity: "100%", display: "hidden" },
          "50%": { opacity: "70%" },
          "100%": { opacity: "0%" },
        },
      }),
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
