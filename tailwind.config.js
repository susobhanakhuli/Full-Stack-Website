/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "300px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        ["2xl"]: "1536px",
      },
      fontFamily: {
        cursive: ["cursive", "sans"],
        fantasy: ["fantasy", "sans"],
        delicious: ["Delicious Handrawn", "sans"],
        urban: ["Urbanist", "sans-serif"],
      },
      textColor: {
        yellow: "#FFFF00",
      },
      backgroundColor: {
        yellow: "#FFFF00",
      },
      borderColor: {
        yellow: "#FFFF00",
      },
      outlineColor: {
        yellow: "#FFFF00",
      }
    },
  },
  plugins: [],
};
