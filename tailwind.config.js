/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-mono)'],
      },
      screens: {
        xs: '375px',
      },
      colors: {
        bg: 'var(--color-bg)',
        'bg-secondary': 'var(--color-bg-secondary)',
        accent: 'var(--color-accent)',
        'accent-light': 'var(--color-accent-light)',
        text: 'var(--color-text)',
        'dark-1': 'var(--color-dark-1)',
        'dark-2': 'var(--color-dark-2)',
        'dark-3': 'var(--color-dark-3)',
      },
      gridTemplateColumns: {
        fluid: 'repeat(auto-fill, minmax(400px, 1fr))',
      },
    },
  },
  plugins: [],
};
