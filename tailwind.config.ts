import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#A94438',      // Terracotta Red
        accent: '#D4AF37',       // Gold/Ochre
        background: '#FDF5E6',   // Off-White
        charcoal: '#333333',     // Charcoal Black
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'moroccan-pattern': "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 120'%3e%3cpath fill='%23A94438' fill-opacity='0.04' d='M40 120 V0 M80 120 V0 M120 120 V0 M160 120 V0 M0 40 H200 M0 80 H200'/%3e%3c/svg%3e\")",
      },
      animation: {
        'ken-burns': 'ken-burns 20s ease-out forwards',
      },
      keyframes: {
        'ken-burns': {
          '0%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
