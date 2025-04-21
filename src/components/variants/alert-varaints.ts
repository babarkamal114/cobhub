import { cva } from 'class-variance-authority';

export const alertVariants = cva('flex items-center gap-2 border py-3 pe-2 ps-4', {
  variants: {
    color: {
      default:
        'border-muted-300 bg-white text-muted-800 dark:border-muted-700 dark:bg-muted-800 dark:text-muted-100',
      contrast:
        'border-muted-300 bg-white text-muted-800 dark:border-muted-800 dark:bg-muted-950 dark:text-muted-100',
      muted:
        'border-muted-300 bg-muted-200 text-muted-800 dark:border-muted-700 dark:bg-muted-800 dark:text-muted-100',
      primary:
        'border-primary-500 bg-primary-500/10 text-primary-500 dark:border-primary-400 dark:bg-primary-400/10 dark:text-primary-300',
      info: 'border-info-500 bg-info-500/10 text-info-500 dark:border-info-400 dark:bg-info-400/10 dark:text-info-300',
      success:
        'border-success-500 bg-success-500/10 text-success-500 dark:border-success-400 dark:bg-success-400/10 dark:text-success-300',
      warning:
        'border-warning-500 bg-warning-500/10 text-warning-500 dark:border-warning-400 dark:bg-warning-400/10 dark:text-warning-300',
      danger:
        'border-danger-500 bg-danger-500/10 text-danger-500 dark:border-danger-400 dark:bg-danger-400/10 dark:text-danger-300',
    },

    shape: {
      straight: 'rounded-none',
      rounded: 'rounded-md',
      smooth: 'rounded-lg',
      curved: ['rounded-xl', 'xxxs:rounded-lg'],
      full: 'rounded-full',
    },
  },
  defaultVariants: {
    color: 'default',
    shape: 'smooth',
  },
});

export const dismissButtonVariants = cva(
  'ms-auto flex h-8 w-8 items-center justify-center rounded-full border-none bg-none transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2',
  {
    variants: {
      color: {
        default:
          'text-muted-500 hover:bg-muted-100 dark:text-muted-200 dark:hover:bg-muted-700 focus:ring-muted-300 dark:focus:ring-muted-600',
        contrast:
          'text-muted-500 hover:bg-muted-100 dark:text-muted-100 dark:hover:bg-muted-800 focus:ring-muted-300 dark:focus:ring-muted-600',
        muted:
          'text-muted-700 hover:bg-muted-100 dark:text-muted-200 dark:hover:bg-muted-700 focus:ring-muted-400 dark:focus:ring-muted-600',
        primary:
          'text-primary-500 hover:bg-primary-500/20 focus:ring-primary-300 dark:focus:ring-primary-500',
        info: 'text-info-500 hover:bg-info-500/20 focus:ring-info-300 dark:focus:ring-info-500',
        success:
          'text-success-500 hover:bg-success-500/20 focus:ring-success-300 dark:focus:ring-success-500',
        warning:
          'text-warning-500 hover:bg-warning-500/20 focus:ring-warning-300 dark:focus:ring-warning-500',
        danger:
          'text-danger-500 hover:bg-danger-500/20 focus:ring-danger-300 dark:focus:ring-danger-500',
      },
    },
    defaultVariants: {
      color: 'default',
    },
  }
);
