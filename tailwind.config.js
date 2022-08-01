/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens : {
        sm: "640px",
        md: "764px",
        lg:"1024px",
        "2xl" : "1535px",
           }
    },
  },
  plugins: [],
}
