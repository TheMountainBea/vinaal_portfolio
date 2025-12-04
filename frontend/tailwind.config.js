/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#000000',
        'dark-bg-secondary': '#0a0a0a',
        'text-primary': '#ffffff',
        'text-secondary': '#dcdcdc',
        'accent-red': '#ff0000',
        'accent-red-hover': '#e63946',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'glow-slow': 'glow 3s ease-in-out infinite alternate',
        'fade-in': 'fadeIn 0.6s ease-in',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        glow: {
          '0%': { 
            boxShadow: '0 0 5px #ff0000, 0 0 10px #ff0000, 0 0 15px #ff0000',
            textShadow: '0 0 5px #ff0000, 0 0 10px #ff0000',
          },
          '100%': { 
            boxShadow: '0 0 10px #ff0000, 0 0 20px #ff0000, 0 0 30px #ff0000, 0 0 40px #ff0000',
            textShadow: '0 0 10px #ff0000, 0 0 20px #ff0000, 0 0 30px #ff0000',
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      perspective: {
        '1000': '1000px',
      },
    },
  },
  plugins: [],
}

