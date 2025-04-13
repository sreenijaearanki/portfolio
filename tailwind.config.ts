module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in-zoom': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in-zoom': 'fade-in-zoom 0.8s ease-out forwards',
      },
      colors: {
        'aqua-mint': '#d4f3f2',
      },
      fontFamily: {
        figtree: ['"Figtree"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}  