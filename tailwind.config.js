/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: {
          "dark-blue": "#403F63",
          "light-gray": "#F0F0F8",
          cyan: "#0DD4FF",
          gray: "#8D9CAF",
          pink: "#FF8497",
          purple: "#9E6AF3",
        },
      },
      fontFamily: {
        body: "Plus Jakarta Sans, sans-serif",
      },
      maxWidth: {
        "8xl": "90em",
      },
    },
  },
  plugins: [],
};
