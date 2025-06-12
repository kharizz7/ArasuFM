/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideInLeft: {
          '0%': {
            transform: 'translateX(-100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        borderMotion: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
        
      },
      animation: {
        slideInLeft: 'slideInLeft 3s ease-out',
        borderMotion: 'borderMotion 4s linear infinite',
      },
      rotate: {
        '6': '6deg',
        '12': '12deg',
      },
    },
  },
  plugins: [],
};
