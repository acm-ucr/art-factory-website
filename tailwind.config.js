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
          "pink-200": "#C09EE5",
          "pink-300": "#D493D5",
          "pink-400": "#EAD5F1",
          "purple-100": "#5F60D1",
          "purple-200": "#C28DDF",
          "purple-300": "#DEBFEB",
        },
      },
      fontFamily: {
        lora: ["var(--font-lora)"],
      },
    },
  },
  plugins: [],
};
