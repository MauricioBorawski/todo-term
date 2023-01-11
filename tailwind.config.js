/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        custom: "93vh",
      },
      animation: {
        "blink-caret": "blink .75s linear infinite",
      },
      keyframes: {
        blink: {
          "0%": {
            "border-color": "transparent",
          },
          "50%": {
            "border-color": "#cbd5e1"
          },
        },
      },
    },
  },
  plugins: [],
};
