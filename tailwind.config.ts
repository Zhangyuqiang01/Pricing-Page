import type { Config } from "tailwindcss";

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          400: '#94a3b8',
          500: '#64748b',
          900: '#202d4d',
        },
        stone: {
          400: '#a8a29e',
          500: '#78716c',
          900: '#202d4d',
        },
      },
    },
  },
  plugins: [],
};
