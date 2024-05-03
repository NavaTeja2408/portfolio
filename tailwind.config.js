/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: { min: "200px", max: "750px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: "751px", max: "10000px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }
    },

    extend: {},
    fontFamily: {
      signature: ["Great Vibes"],
    },
    plugins: [],
  },
};
