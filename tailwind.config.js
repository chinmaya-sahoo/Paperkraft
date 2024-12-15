module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        scroll: "scroll 30s linear infinite",
      },
      keyframes: {
        scroll: {
          // from: { transform: "translateX(0)" },
          to: {
            left: "-200px",

            },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
};
