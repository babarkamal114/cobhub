import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './.storybook/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Base colors
        default: {
          solid: {
            DEFAULT: 'rgb(55, 65, 81)',
            hover: 'rgb(31, 41, 55)',
            ring: 'rgb(107, 114, 128)',
          },
          pastel: {
            DEFAULT: 'rgb(229, 231, 235)',
            hover: 'rgb(209, 213, 219)',
            ring: 'rgb(156, 163, 175)',
          },
          outlined: {
            DEFAULT: 'rgb(107, 114, 128)',
            hover: 'rgb(243, 244, 246)',
            ring: 'rgb(156, 163, 175)',
          },
        },
        primary: {
          solid: {
            DEFAULT: 'rgb(37, 99, 235)',
            hover: 'rgb(30, 64, 175)',
            ring: 'rgb(59, 130, 246)',
          },
          pastel: {
            DEFAULT: 'rgb(219, 234, 254)',
            hover: 'rgb(191, 219, 254)',
            ring: 'rgb(147, 197, 253)',
          },
          outlined: {
            DEFAULT: 'rgb(37, 99, 235)',
            hover: 'rgb(239, 246, 255)',
            ring: 'rgb(147, 197, 253)',
          },
        },
        success: {
          solid: {
            DEFAULT: 'rgb(22, 163, 74)',
            hover: 'rgb(21, 128, 61)',
            ring: 'rgb(34, 197, 94)',
          },
          pastel: {
            DEFAULT: 'rgb(220, 252, 231)',
            hover: 'rgb(187, 247, 208)',
            ring: 'rgb(134, 239, 172)',
          },
          outlined: {
            DEFAULT: 'rgb(22, 163, 74)',
            hover: 'rgb(240, 253, 244)',
            ring: 'rgb(134, 239, 172)',
          },
        },
        warning: {
          solid: {
            DEFAULT: 'rgb(217, 119, 6)',
            hover: 'rgb(180, 83, 9)',
            ring: 'rgb(245, 158, 11)',
          },
          pastel: {
            DEFAULT: 'rgb(254, 249, 195)',
            hover: 'rgb(254, 240, 138)',
            ring: 'rgb(253, 224, 71)',
          },
          outlined: {
            DEFAULT: 'rgb(217, 119, 6)',
            hover: 'rgb(255, 251, 235)',
            ring: 'rgb(253, 224, 71)',
          },
        },
        danger: {
          solid: {
            DEFAULT: 'rgb(220, 38, 38)',
            hover: 'rgb(153, 27, 27)',
            ring: 'rgb(248, 113, 113)',
          },
          pastel: {
            DEFAULT: 'rgb(254, 226, 226)',
            hover: 'rgb(254, 202, 202)',
            ring: 'rgb(252, 165, 165)',
          },
          outlined: {
            DEFAULT: 'rgb(220, 38, 38)',
            hover: 'rgb(254, 242, 242)',
            ring: 'rgb(252, 165, 165)',
          },
        },
      },
      borderRadius: {
        straight: '0px',
        rounded: '0.375rem',
        smooth: '0.5rem',
        curved: '0.75rem',
        full: '9999px',
      },
      spacing: {
        xxxs: '0.5rem',
        xxs: '0.75rem',
        xs: '1rem',
        sm: '1.25rem',
        md: '1.5rem',
        lg: '2rem',
        xl: '2.5rem',
      },
      fontSize: {
        xxxs: ['0.7rem', { lineHeight: '1rem' }],
        xxs: ['0.75rem', { lineHeight: '1rem' }],
        xs: ['0.875rem', { lineHeight: '1.25rem' }],
        sm: ['0.875rem', { lineHeight: '1.5rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
    },
  },
  plugins: [],
};

export default config;
