/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        // Vibrant Spring Palette
        brand: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981', // Emerald 500 - Vivid Primary
          600: '#059669', // Emerald 600
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        spring: {
          tulip: '#db2777', // Pink 600 - Vivid Magenta
          sun: '#eab308',   // Yellow 500 - Sunflower
          iris: '#7c3aed',  // Violet 600 - Deep Purple
          poppy: '#ea580c', // Orange 600 - Vibrant Orange
          sky: '#0ea5e9',   // Sky 500 - Bright Blue
          leaf: '#65a30d',  // Lime 600 - Zesty Green
        },
        paper: '#fefce8', // Very light warm yellow/cream background (Yellow 50)
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'slideUp': 'slideUp 0.8s ease-out forwards',
        'morph': 'morph 8s ease-in-out infinite',
        'morph-slow': 'morph 12s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        morph: {
          '0%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
          '100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
        }
      }
    },
  },
  plugins: [],
}
