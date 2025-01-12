/** @type {import('tailwindcss').Config} */
const fontsizes = require('./tailwind.config.fontsizes');

module.exports = {
  content: [
    './**/*.{html,md}',
    './assets/js/*.js'
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '22.5rem', // mobile
      'md': '48rem', // tablet
      'lg': '90rem', // 720p
      'xl': '120rem', // 1440p
      '2xl': '240rem', // 4K
    },
    fontFamily: {
      'sans': ['Merriweather Sans', 'Helvetica Neue', 'Helvetica', 'sans-serif'],
      'serif': ['Merriweather', 'Times New Roman', 'serif'],
      'mono': ['Fira Code', 'monospace']
    },
    extend: {
      maxWidth: {
        'sm': '24rem',
        'md': '48rem',
      },
      spacing: {
        'mainBodyPadding': 'clamp(1.5rem, 2.5vw, 5rem)'
      },
      fontSize: fontsizes,
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
  corePlugins: {
    aspectRatio: false,
  }
}
