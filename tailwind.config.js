/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    screens: {
      xl: { min: "1250px" },
      lg: { max: "1250px" },
      md: { max: "1000px" },
      sm: { max: "750px" },
      xs: { max: "600px" },
      vs: { max: "550px" },
    }
  },

  plugins: [],
}
