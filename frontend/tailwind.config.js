module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'slate-gray': '#6B818C',
        'lavender-web': '#D8E4FF',
        'spring-green': '#31E981',
        'carolina-blue': '#8FBFE0',
        'tropical-indigo': '#7C77B9',
        'cardinal': '#8D2A32',
        'xanthous': '#F2AF29',
        'ultra':'#5A53A2',
        'ultra-violet':'#433E79',
        'violet': '#716BB3'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};