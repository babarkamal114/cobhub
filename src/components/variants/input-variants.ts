import { cva } from 'class-variance-authority';

export const inputVariants = cva(
  'flex w-full rounded-md border px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium bg-default-50 dark:bg-default-800 placeholder:text-default-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 dark:ring-offset-default-950 dark:placeholder:text-default-400 dark:focus-visible:ring-primary-500',
  {
    variants: {
      variant: {
        default:
          'border-default-100 dark:border-default-600 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-500 focus-visible:ring-offset-primary-100 dark:focus-visible:ring-offset-primary-950',
        error:
          'border-danger-500 focus-visible:ring-danger-500 dark:border-danger-500 dark:focus-visible:ring-danger-500',
        success:
          'border-success-500 focus-visible:ring-success-500 dark:border-success-500 dark:focus-visible:ring-success-500',
        disabled:
          'border-default-300 bg-default-100 text-default-500 cursor-not-allowed dark:border-default-700 dark:bg-default-800 dark:text-default-500',
        loading:
          'border-warning-500 bg-warning-100 text-warning-500 dark:border-warning-400 dark:bg-warning-700 dark:text-warning-300',
      },
      inputSize: {
        sm: 'h-8 px-2 text-xs',
        md: 'h-10 px-3 text-sm',
        lg: 'h-12 px-4 text-base',
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
      variant: 'default',
      inputSize: 'md',
      shape: 'smooth',
    },
  }
);
