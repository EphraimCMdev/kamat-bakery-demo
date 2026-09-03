/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kamat: {
          yellow: '#FFD400',
          'yellow-light': '#FFE14D',
          'yellow-dark': '#E6BE00',
          'yellow-subtle': '#FFF8D6',
          orange: '#FF7A00',
          black: '#120E0D',
          dark: '#1C1614',
        },
        cream: {
          50: '#FAF7F2',
          100: '#F5EFEB',
          200: '#EDE4DC',
          300: '#E2D5C8',
        },
        chocolate: {
          950: '#120E0D',
          900: '#1C1614',
          800: '#2A201D',
          700: '#3D2E2A',
          600: '#54403B',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        editorial: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-luxury': '0.22em',
        'super-wide': '0.3em',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        }
      }
    },
  },
  plugins: [],
}
