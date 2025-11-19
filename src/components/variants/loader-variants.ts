import { cva } from 'class-variance-authority';

export const loaderVariants = cva(
  // Base classes - always applied
  'inline-block animate-spin',
  {
    variants: {
      // Size controls both width and height
      size: {
        xs: 'w-4 h-4', // 16px
        sm: 'w-6 h-6', // 24px
        md: 'w-8 h-8', // 32px
        lg: 'w-12 h-12', // 48px
        xl: 'w-16 h-16', // 64px
        xxs: 'w-8 h-8',
        xxxs: 'w-6 h-6',
      },

      // Color of the spinner
      color: {
        contrast: 'text-default-100', // Inherit from parent
        default: 'text-muted-500 dark:text-muted-400',
        primary: 'text-primary-500',
        info: 'text-info-500',
        success: 'text-success-500',
        warning: 'text-warning-500',
        danger: 'text-danger-500',
        muted: 'text-muted-200',
      },
    },

    defaultVariants: {
      size: 'md',
      color: 'default',
    },
  }
);
