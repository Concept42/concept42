module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      color: {},
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      plugins: [require('daisyui')],
    },
  },
}
