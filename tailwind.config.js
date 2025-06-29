/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { 
            transform: 'translateY(0px) rotate(0deg)' 
          },
          '50%': { 
            transform: 'translateY(-20px) rotate(180deg)' 
          },
        }
      },
      backdropBlur: {
        xs: '2px',
        '4xl': '72px',
      },
      backgroundOpacity: {
        '15': '0.15',
      },
      borderOpacity: {
        '15': '0.15',
      }
    },
  },
  plugins: [
    // Add Firefox support for backdrop-filter
    function({ addVariant }) {
      addVariant('firefox', '@-moz-document url-prefix()')
    }
  ],
}