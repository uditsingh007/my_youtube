/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        filsonRegular: ["regular"],
        filsonMedium: ["medium"],
        filsonBold: ["bold"],
      },
    },
  },
  plugins: [],
};
