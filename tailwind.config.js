/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Add JSX, TS, and TSX support
    "./components/**/*.{js,jsx,ts,tsx}", // Include components folder if separate
    "./pages/**/*.{js,jsx,ts,tsx}" // If using Next.js
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
