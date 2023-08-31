/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
        gridTemplateColumns: {
        fluid: "repeat(auto-fit, minmax(300px, 1fr))",
      },    
      backgroundColor: {
        bgBlue: "#404EED",
        hoverBlue: "#2E39A6",
        bgGray: "#f1eeee",
        bgDark: "#313338",
        darkLint: "#1E1F22"
      },
      textColor: {
        grayText: "#f1eeee",
        hoverBlue: "#2E39A6.",
        bgBlue: "#404EED",
        bgDark: "#313338",
      },
      borderColor: {
        borderC: "#404EED",
        bgDark: "#313338"
      },
      boxShadowColor: {
        bgBlue: "#404EED"
      }
      
    },
  },
  plugins: [],
}
