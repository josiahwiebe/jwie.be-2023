module.exports = {
  mode: 'jit',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        primaryInvert: 'var(--color-primary-invert)',
        trueblack: 'var(--color-trueblack)',
        black: 'var(--color-black)',
        darkgrey: 'var(--color-darkgrey)',
        mediumgrey: 'var(--color-mediumgrey)',
        lightgrey: 'var(--color-lightgrey)',
      },
      backgroundImage: {
        'gradient-primary':
          'linear-gradient(135deg, hsla(55, 61%, 85%, 1) 0%,hsla(196, 79%, 79%, 1) 50%,hsla(358, 82%, 71%, 1) 100%)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
