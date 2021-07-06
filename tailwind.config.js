module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        published: "#adacad",
        scheduled: "#3bc083",
        approval: "#f7be39",
        error: "#fb6551",
        notes: "#67b1f2",
        navbarDark: "#2a2f33",
        navbarLight: "#383d43",
        customRed: "#f45761"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
