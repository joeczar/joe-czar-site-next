/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat-alternates': ['Montserrat Alternates', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      colors: {
        'blue-gray': {
          '900': '#1a202c',
          '950': '#0f172a',

      },
        'sunset-orange': {
          '50': '#fef6f5', 
          '100': '#fdeceb', 
          '200': '#fbd0cd', 
          '300': '#f9b3af', 
          '400': '#f47a72', 
          '500': '#ef4136', 
          '600': '#d73b31', 
          '700': '#b33129', 
          '800': '#8f2720', 
          '900': '#75201a'
      },'turquoise': {
          '50': '#f6fdfc', 
          '100': '#eefbfa', 
          '200': '#d3f4f2', 
          '300': '#b9edea', 
          '400': '#85e0db', 
          '500': '#50d2cb', 
          '600': '#48bdb7', 
          '700': '#3c9e98', 
          '800': '#307e7a', 
          '900': '#276763'
      },'sinbad': {
          '50': '#fafdfd', 
          '100': '#f6fbfa', 
          '200': '#e8f5f3', 
          '300': '#dbefec', 
          '400': '#bfe3de', 
          '500': '#a4d7d0', 
          '600': '#94c2bb', 
          '700': '#7ba19c', 
          '800': '#62817d', 
          '900': '#506966'
      },'razzmatazz': {
          '50': '#fef4f7', 
          '100': '#fde9ef', 
          '200': '#fac8d7', 
          '300': '#f7a7bf', 
          '400': '#f2668e', 
          '500': '#ec245e', 
          '600': '#d42055', 
          '700': '#b11b47', 
          '800': '#8e1638', 
          '900': '#74122e'
      },'narvik': {
          '50': '#fefffe', 
          '100': '#fdfefe', 
          '200': '#fafefb', 
          '300': '#f7fdf9', 
          '400': '#f1fbf5', 
          '500': '#ebf9f0', 
          '600': '#d4e0d8', 
          '700': '#b0bbb4', 
          '800': '#8d9590', 
          '900': '#737a76'
      },
      'purple-heart': {
        '50': '#f9f5fc', 
        '100': '#f3ecfa', 
        '200': '#e1cff2', 
        '300': '#cfb3ea', 
        '400': '#ac79da', 
        '500': '#8840ca', 
        '600': '#7a3ab6', 
        '700': '#663098', 
        '800': '#522679', 
        '900': '#431f63'
    }

      }
    },
  },
  plugins: [],
}

