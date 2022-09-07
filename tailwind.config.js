module.exports = {
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#230fb1',
          secondary: '#f6d860',
          accent: '#230fb1',
          neutral: '#3d4451',
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
        menu: '#FDFDFE',
        accent: '#230FB1',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        lota: ['lota'],
        darker: ['Darker Grotesque', 'sans-serif'],
      },
    },
  },
}
