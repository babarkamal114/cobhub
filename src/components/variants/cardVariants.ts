import { cva } from 'class-variance-authority';

export const cardVariants = cva('relative w-full transition-all duration-300 p-4', {
  variants: {
    color: {
      default: 'bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700',
      primary: 'bg-primary-pastel text-primary-outlined border border-primary-outlined',
      secondary: 'bg-purple-100 text-purple-700 dark:text-purple-400 border border-purple-300',
      info: 'bg-cyan-100 text-cyan-700 dark:text-cyan-400 border border-cyan-300',
      success: 'bg-success-pastel text-success-outlined border border-success-outlined',
      warning: 'bg-warning-pastel text-warning-outlined border border-warning-outlined',
      danger: 'bg-danger-pastel text-danger-outlined border border-danger-outlined',
    },
    shape: {
      straight: '',
      rounded: 'rounded-rounded',
      smooth: 'rounded-smooth',
      curved: 'rounded-curved',
    },
    shadow: {
      flat: 'shadow-xl shadow-zinc-300/30 dark:shadow-zinc-800/20',
      hover: 'hover:shadow-xl hover:shadow-zinc-300/30 dark:hover:shadow-zinc-900/20',
      none: '',
    },
  },
  defaultVariants: {
    color: 'default',
    shape: 'smooth',
    shadow: 'none',
  },
});
