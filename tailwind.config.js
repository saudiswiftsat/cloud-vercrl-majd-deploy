/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-dark-color": "#23364D",
        "main-green-color": "#85C03E",
        "main-red-color": "#EE6A6E",
      },
    },
  },
  plugins: [],
};
