import { cva } from 'class-variance-authority';

export const breadcrumbVariants = cva('flex items-center text-sm', {
  variants: {
    color: {
      default: 'text-default-700 dark:text-default-300',
      contrast: 'text-default-900 dark:text-contrast',
      muted: 'text-muted-500 dark:text-muted-400',
      primary: 'text-primary-600 dark:text-primary-400',
      info: 'text-info-600 dark:text-info-400',
      success: 'text-success-600 dark:text-success-400',
      warning: 'text-warning-600 dark:text-warning-400',
      danger: 'text-danger-600 dark:text-danger-400',
    },
  },
  defaultVariants: {
    color: 'default',
  },
});
