/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");



module.exports = withMT({
    content: ["./src/**/*.{html,js,jsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
      extend: {
        backgroundImage: { 'background': "url('/src/assets/bas-bg.jpg')", },
        colors: {
          deepGreen: '#007F73',
          orangeOne: '#F2AA4C'
        }
      },
    },
    plugins: [],
  });