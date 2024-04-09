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
      },
      colors: {
        art: {
          "blue-100": "#1E0F75",
          "blue-200": "#1C1DAB",
          "blue-300": "#3785D8",
          "blue-400": "#ADC6E5",
          "pink-100": "#E893C5",
          "pink-200": "#EBB2C3",
          purple: "#BF8CE1",
          "purple-100": "#5F60D1",
          gray: "#CBD8E8",
        },
      },
    },
  },
  plugins: [],
};
