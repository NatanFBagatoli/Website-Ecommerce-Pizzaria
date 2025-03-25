import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '66': '16.5rem',
        '67': '16.75rem',
        '68': '17.25rem',
        '76': '19rem',
        '78': '19.5rem',
        '86': '21.5rem',
        '90': '22.5rem',
        '92': '23rem',
        '94': '23.5rem',
        '96': '24rem',
        '98': '24.5rem',
        '100': '25rem',
        '102': '25.5rem',
        '104': '26rem',
        '106': '26.5rem',
        '108': '27rem',
        '110': '27.5rem',
        '112': '28rem',
        '114': '28.5rem',
        '116': '29rem',
        '118': '29.5rem',
        '120': '30rem',
        '128': '32rem', 
        '132': '33rem',
        '136': '34rem',
        '138': '34.5rem',
        '140': '35rem',
        '144': '36rem', 
        '160': '40rem',
        '180': '45rem',
        '200': '50rem',
        '220': '55rem',
        '240': '60rem',
        '245': '61.25rem',
        '250': '62.5rem',
        '255': '63.75rem',
        '260': '65rem',
        '280': '70rem',
        '300': '75rem',
      },
    },
  },

  plugins: [],
};

export default config;