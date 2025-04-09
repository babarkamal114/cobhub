import { cva } from 'class-variance-authority';

export const breadcrumbVariants = cva('flex items-center text-sm', {
  variants: {
    color: {
      default: 'text-gray-700 dark:text-gray-300',
      contrast: 'text-black dark:text-white',
      muted: 'text-gray-500 dark:text-gray-400',
      primary: 'text-primary-outlined dark:text-primary-outlined',
      info: 'text-sky-600 dark:text-sky-400',
      success: 'text-success-outlined dark:text-success-outlined',
      warning: 'text-warning-outlined dark:text-warning-outlined',
      danger: 'text-danger-outlined dark:text-danger-outlined',
      yellow: 'text-yellow-600 dark:text-yellow-400',
      violet: 'text-violet-600 dark:text-violet-400',
    },
  },
  defaultVariants: {
    color: 'default',
  },
});
