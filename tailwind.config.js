/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        urbanist: "var(--urbanist-font)",
        nunito: ["Nunito", "sans-serif"],
      },
      colors: {
        art: {
          "blue-100": "#1E0F75",
          "pink-100": "#E893C5",
          "pink-400": "#EAD5F1",
          "purple-100": "#5F60D1",
          "purple-200": "#C28DDF",
          "purple-300": "#DEBFEB",
          // "purple-400": "#cda4e5",
          // "gray": "#CBD8E8",
          // "pink-200": "#EBB2C3",
          // "blue-200": "#1C1DAB",
          // "blue-300": "#3785D8",
          // "blue-400": "#ADC6E5",
          // "purple": "#BF8CE1",
          // "pink-300": "#E894C6",
        },
      },
      fontFamily: {
        lora: ["var(--font-lora)"],
      },
    },
  },
  plugins: [],
};
