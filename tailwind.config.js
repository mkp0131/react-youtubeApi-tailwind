/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // 생상 변수 정의
      colors: {
        brand: "#ff0000",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
