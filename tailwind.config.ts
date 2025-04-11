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
