/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          100: "#292F48",
          200: "#171A25",
        },
        customGreen: "#1DB56C",
        grey: {
          100: "#BBBCC2",
          200: "#D3D4D9",
        },
      },
    },
  },
  plugins: [],
};
