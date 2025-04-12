import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './.storybook/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
      },
      screens: {
        xs: { max: '639px' },
        sm: '640px',
        md: '768px',
        lg: '1025px',
        xl: '1280px',
        xxl: '1536px',
        ptablet: {
          raw: '(min-width: 768px) and (max-width: 1024px) and (orientation: portrait)',
        },
        ltablet: {
          raw: '(min-width: 768px) and (max-width: 1024px) and (orientation: landscape)',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      colors: {
        default: colors.slate,
        contrast: colors.white,
        muted: colors.slate,
        primary: colors.indigo,
        info: colors.blue,
        success: colors.green,
        warning: colors.amber,
        danger: colors.red,
        violet: colors.violet,
      },
      keyframes: {
        indeterminate: {
          '0%': { 'margin-left': '-10%' },
          '100%': { 'margin-left': '100%' },
        },
        'circle-chart-fill': {
          to: {
            'stroke-dasharray': '0 100',
          },
        },
        wave: {
          '0%': {
            transform: 'scale(1)',
            opacity: '1',
          },

          '25%': {
            transform: 'scale(1)',
            opacity: '1',
          },

          '100%': {
            transform: 'scale(4.5)',
            opacity: '0',
          },
        },
        fadeInUp: {
          from: {
            transform: 'translate3d(0, 20px, 0)',
          },

          to: {
            transform: 'translate3d(0, 0, 0)',
            opacity: '1',
          },
        },
        fadeInLeft: {
          from: {
            transform: 'translate3d(20px, 0, 0)',
            opacity: '0',
          },
          to: {
            transform: 'translate3d(0, 0, 0)',
            opacity: '1',
          },
        },
        spinAround: {
          from: {
            transform: 'rotate(0deg)',
          },

          to: {
            transform: 'rotate(359deg)',
          },
        },
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'spin-fast': 'spin 0.65s linear infinite',
        indeterminate: 'indeterminate 1s cubic-bezier(0.4, 0, 0.2, 1) infinite',
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('progress-container', '&::-webkit-progress-bar');
      addVariant('progress-bar', [
        '&::-webkit-progress-value',
        '&::-moz-progress-bar',
        '&::-ms-fill',
      ]);
    }),
    plugin(({ addBase, theme }) => {
      function extractColorVars(obj: any, prefix = '') {
        return Object.entries(obj).reduce(
          (vars, [key, val]) => {
            if (typeof val === 'string') {
              vars[`--color${prefix}-${key}`] = val;
            } else {
              Object.assign(vars, extractColorVars(val, `${prefix}-${key}`));
            }
            return vars;
          },
          {} as Record<string, string>
        );
      }

      addBase({
        ':root': extractColorVars(theme('colors')),
      });
    }),
  ],
};

export default config;
