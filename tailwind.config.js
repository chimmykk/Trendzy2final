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
        bgGreen: "#25FF79",
        bgGray: "#f1eeee"
      },
      textColor: {
        grayText: "#f1eeee",
        bgGreen: "#25FF79"
      },
      borderColor: {
        borderC: "#25FF79"
      } 
      
    },
  },
  plugins: [],
}
