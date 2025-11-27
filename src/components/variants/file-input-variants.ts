import { cva } from 'class-variance-authority';

export const fileInputVariants = cva('flex w-full flex-col gap-4', {
  variants: {
    variant: {
      default: 'bg-white dark:bg-muted-800',
      error: 'bg-danger-200 text-danger-500 dark:text-danger-700',
      success: 'bg-success-200 text-success-500 dark:text-success-700',
      disabled:
        'bg-default-100 text-default-500 cursor-not-allowed dark:bg-default-800 dark:text-default-500',
      loading: 'bg-muted-100 text-muted-300 dark:bg-muted-300 dark:text-muted-300',
    },
    shape: {
      straight: '',
      rounded: 'rounded-md',
      smooth: 'rounded-lg',
      curved: 'rounded-xl',
      full: 'rounded-xl',
    },
    bordered: {
      true: '',
      false: '',
    },
  },
  compoundVariants: [
    // Bordered + variant combinations
    {
      bordered: true,
      variant: 'default',
      className: 'border border-muted-200 dark:border-muted-700',
    },
    {
      bordered: true,
      variant: 'error',
      className: 'border border-danger-400',
    },
    {
      bordered: true,
      variant: 'success',
      className: 'border border-success-300',
    },
    {
      bordered: true,
      variant: 'disabled',
      className: 'border border-default-300 dark:border-default-700',
    },
    {
      bordered: true,
      variant: 'loading',
      className: 'border border-muted-200 dark:border-muted-400',
    },
  ],
  defaultVariants: {
    variant: 'default',
    shape: 'smooth',
    bordered: false,
  },
});
