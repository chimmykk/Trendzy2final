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
        // For larger screens, display two cards per row
        'fluid': 'repeat(auto-fit, minmax(220px, 1fr))',

        // For smaller screens (e.g., mobile), display one card per row
        'fluid-mobile': 'repeat(auto-fit, minmax(160px, 1fr))',
      },
      backgroundColor: {
        bgGreen: "#25D366",
        hoverGreen: "#1EAC4F",
        bgGray: "#E4E6EB",
        bgDark: "#313338",
        darkLint: "#1E1F22"
      },
      textColor: {
        grayText: "#f1eeee",
        hoverGreen: "#1EAC4F",
        bgGreen: "#25D366",
        bgDark: "#313338",
      },
      borderColor: {
        borderC: "#25D366",
        bgDark: "#313338"
      },
      boxShadowColor: {
        bgGreen: "#25D366"
      }
      
    },
  },
  plugins: [],
}
