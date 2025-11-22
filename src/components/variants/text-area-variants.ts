import { cva } from 'class-variance-authority';

export const textareaVariants = cva(
  'relative inline-flex w-full max-w-full items-center font-sans text-sm disabled:opacity-50 disabled:cursor-not-allowed px-3 py-2 leading-snug outline-none transition-all duration-300 focus:outline-none',
  {
    variants: {
      color: {
        default:
          'border border-muted-200 bg-white dark:border-muted-700 dark:bg-muted-800 text-muted-600 dark:text-muted-300 placeholder:text-muted-400 dark:placeholder:text-muted-600 focus-visible:border-muted-300 focus-visible:shadow-muted-300/30 dark:focus-visible:shadow-muted-800/20',

        contrast:
          'border border-muted-200 bg-white dark:border-muted-800 dark:bg-muted-950 text-muted-600 dark:text-muted-300 placeholder:text-muted-400 dark:placeholder:text-muted-700 focus-visible:border-muted-300 focus-visible:shadow-muted-300/30 dark:focus-visible:shadow-muted-950/20',

        muted:
          'border border-muted-200 bg-muted-100 dark:border-muted-700 dark:bg-muted-800 text-muted-600 dark:text-muted-300 placeholder:text-muted-400/60 dark:placeholder:text-muted-600 focus-visible:border-muted-300 focus-visible:shadow-muted-300/30 dark:focus-visible:shadow-muted-800/20',

        primary:
          'border border-primary-300 bg-primary-50 text-primary-700 placeholder:text-primary-400 focus-visible:border-primary-500 focus-visible:shadow-primary-300/30 dark:border-primary-600 dark:bg-primary-900 dark:text-primary-300 dark:placeholder:text-primary-600 dark:focus-visible:shadow-primary-700/30',

        success:
          'border border-success-300 bg-success-50 text-success-700 placeholder:text-success-400 focus-visible:border-success-500 focus-visible:shadow-success-300/30 dark:border-success-600 dark:bg-success-900 dark:text-success-300 dark:placeholder:text-success-600 dark:focus-visible:shadow-success-700/30',

        info: 'border border-info-300 bg-info-50 text-info-700 placeholder:text-info-400 focus-visible:border-info-500 focus-visible:shadow-info-300/30 dark:border-info-600 dark:bg-info-900 dark:text-info-300 dark:placeholder:text-info-600 dark:focus-visible:shadow-info-700/30',

        warning:
          'border border-warning-300 bg-warning-50 text-warning-700 placeholder:text-warning-400 focus-visible:border-warning-500 focus-visible:shadow-warning-300/30 dark:border-warning-600 dark:bg-warning-900 dark:text-warning-300 dark:placeholder:text-warning-600 dark:focus-visible:shadow-warning-700/30',

        danger:
          'border border-danger-300 bg-danger-50 text-danger-700 placeholder:text-danger-400 focus-visible:border-danger-500 focus-visible:shadow-danger-300/30 dark:border-danger-600 dark:bg-danger-900 dark:text-danger-300 dark:placeholder:text-danger-600 dark:focus-visible:shadow-danger-700/30',
      },

      shape: {
        straight: '',
        rounded: 'rounded-md',
        smooth: 'rounded-lg',
        curved: 'rounded-xl',
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      shape: 'smooth',
      color: 'default',
    },
  }
);
