module.exports = {
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        myTheme: {
          primary: '#230fb1',
          secondary: '#f6d860',
          accent: '#332d7a',
          neutral: '#F5F5F5',
          menu: '#0f0c29',
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
      color: {
        menu: '#0f0c29',
        accent: '#230FB1',
      },
      fontFamily: {
        roboto: ['Roboto'],
        Sora: ['Sora'],
      },
    },
  },
}
