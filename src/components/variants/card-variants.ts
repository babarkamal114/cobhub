import { cva } from 'class-variance-authority';

export const cardVariants = cva('relative w-full transition-all duration-300 p-4', {
  variants: {
    color: {
      default:
        'bg-default-50 dark:bg-default-900 border border-default-200 dark:border-default-700',
      primary: 'bg-primary-100 text-primary-700 dark:text-primary-400 border border-primary-300',
      info: 'bg-info-100 text-info-700 dark:text-info-400 border border-info-300',
      success: 'bg-success-100 text-success-700 dark:text-success-400 border border-success-300',
      warning: 'bg-warning-100 text-warning-700 dark:text-warning-400 border border-warning-300',
      danger: 'bg-danger-100 text-danger-700 dark:text-danger-400 border border-danger-300',
      violet: 'bg-violet-100 text-violet-700 dark:text-violet-400 border border-violet-300',
      muted: 'bg-muted-100 text-muted-700 dark:text-muted-400 border border-muted-300',
      contrast:
        'bg-contrast-100 text-contrast-700 dark:text-contrast-400 border border-contrast-300',
    },
    shape: {
      straight: '',
      rounded: 'rounded-md',
      smooth: 'rounded-lg',
      curved: 'rounded-xl',
      full: 'rounded-full',
    },
    shadow: {
      flat: 'shadow-xl shadow-default-300/30 dark:shadow-default-800/20',
      hover: 'hover:shadow-xl hover:shadow-default-300/30 dark:hover:shadow-default-900/20',
      none: '',
    },
  },
  defaultVariants: {
    color: 'default',
    shape: 'smooth',
    shadow: 'none',
  },
});
