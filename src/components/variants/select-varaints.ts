import { cva } from 'class-variance-authority';

export const selectVariants = cva(
  'relative font-sans disabled:opacity-50 px-2 disabled:cursor-not-allowed block w-full cursor-pointer appearance-none leading-snug outline-none transition-all duration-300 focus:outline-none',
  {
    variants: {
      color: {
        default:
          'border border-muted-200 bg-white text-muted-600 placeholder:text-muted-400 hover:enabled:border-muted-300 focus-visible:ring-muted-300 dark:border-muted-700 dark:bg-muted-800/30 dark:text-muted-300 dark:placeholder:text-muted-600 dark:hover:enabled:border-muted-600 dark:focus-visible:ring-muted-700',
        contrast:
          'border border-default-800 bg-default-950 text-default-200 placeholder:text-default-400 hover:enabled:border-default-600 focus-visible:ring-default-400 dark:bg-black/30 dark:text-white dark:placeholder:text-default-500',
        muted:
          'border border-muted-300 bg-muted-100 text-muted-700 placeholder:text-muted-400 hover:enabled:border-muted-400 focus-visible:ring-muted-400 dark:border-muted-700 dark:bg-muted-800/30 dark:text-muted-300 dark:placeholder:text-muted-600',
        primary:
          'border border-primary-500 bg-primary-50 text-primary-700 placeholder:text-primary-400 hover:enabled:border-primary-600 focus-visible:ring-primary-500 dark:border-primary-700 dark:bg-primary-900/30 dark:text-primary-300 dark:placeholder:text-primary-600',
        warning:
          'border border-warning-500 bg-warning-50 text-warning-700 placeholder:text-warning-400 hover:enabled:border-warning-600 focus-visible:ring-warning-500 dark:border-warning-700 dark:bg-warning-900/30 dark:text-warning-300 dark:placeholder:text-warning-600',
        danger:
          'border border-danger-500 text-danger-700 placeholder:text-danger-400 hover:enabled:border-danger-600 focus-visible:ring-danger-500 dark:border-danger-700 dark:text-danger-700 dark:bg-danger-900/30 dark:placeholder:text-danger-600',
        success:
          'border border-success-500 bg-success-50 text-success-700 placeholder:text-success-400 hover:enabled:border-success-600 focus-visible:ring-success-500 dark:border-success-700 dark:bg-success-900/30 dark:text-success-300 dark:placeholder:text-success-600',
        info: 'border border-info-500 bg-info-50 text-info-700 placeholder:text-info-400 hover:enabled:border-info-600 focus-visible:ring-info-500 dark:border-info-700 dark:bg-info-900/30 dark:text-info-300 dark:placeholder:text-info-600',
      },
      shape: {
        straight: '',
        rounded: 'rounded-md',
        smooth: 'rounded-lg',
        curved: 'rounded-xl',
        full: 'rounded-full',
      },
      size: {
        sm: 'h-8 py-1.5 pe-8 text-sm',
        md: 'h-10 py-2 pe-10 text-sm',
        lg: 'h-12 py-2 pe-12 text-base',
      },
    },
    defaultVariants: {
      shape: 'smooth',
      color: 'default',
      size: 'md',
    },
  }
);
