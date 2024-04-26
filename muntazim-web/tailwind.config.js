/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // 'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        blue: "#38A4BD",
        yellow: "#FCB813",
      },
      fontFace: {
        "work-sans": {
          fontFamily: "Work Sans",
          fontOpticalSizing: "auto",
          // You can customize the weight as needed
          fontWeight: "<weight>",
          fontStyle: "normal",
        },
      },
    },
  },
  plugins: [
    // require('flowbite/plugin')
  ],
  darkMode: "class",
};
