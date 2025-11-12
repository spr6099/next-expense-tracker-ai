// tailwind.config.js
export default {
  darkMode: ["class", '[data-theme="dark"]'], // ✅ allow both "class" and data attribute
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
