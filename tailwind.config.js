/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ralewey: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          "base-100": "#f9f9f9",
          "base-content": "#373D3F",
        },
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          "base-100": "#121212",
          "base-content": "#EBECF0",
        },
      },
    ],
  },
};
