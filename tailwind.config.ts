import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      spacing: {
        '128': '32rem', 
        '144': '36rem', 
        '160': '40rem', 
      },
    },
  },

  plugins: [],
};

export default config;