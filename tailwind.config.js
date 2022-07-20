/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.html',
  ],
  theme: {
    screens: {
      'sm': '22.5rem', // mobile
      'md': '48rem', // tablet
      'lg': '90rem', // 720p
      'xl': '120rem', // 1440p
      '2xl': '240rem', // 4K
    },
    extend: {},
  },
  plugins: [],
}
