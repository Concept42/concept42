module.exports = {
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        myTheme: {
          primary: '#0071F2',
          secondary: '#FF6784',
          text: '#444655',
          accent: '#E42253',
          'base-100': '#A8AABC',
          neutral: '#F5F5F5',
        },
      },
    ],
  },
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '500px',
      md: '768px',
      lg: '1024px',
      xl: '1400px',
    },

    extend: {
      color: {},
      fontFamily: {
        roboto: ['Roboto'],
        Sora: ['Sora'],
      },
    },
  },
}
