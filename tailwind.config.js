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
          darkblue: "#1E0F75",
          blue: "#1C1DAB",
          lightblue: "#3785D8",
          purple: "#ADC6E5",
          pink: "#1E0F75",
          lightpink: "#1E0F75",
          gray: "#1E0F75",
        },
      },
    },
  },
  plugins: [],
};
