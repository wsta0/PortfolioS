module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto'],
      },
      colors: {
        brand: {
          DEFAULT: '#ff3f81', // vibrant magenta (like Vanta circles)
          600: '#e63673',     // slightly darker
          700: '#cc2d65',     // even deeper magenta
        },
      },
      boxShadow: {
        soft: '0 8px 30px rgba(0,0,0,.08)',
      },
    },
  },
  plugins: [],
}
