import { cva } from 'class-variance-authority';

export const iconboxVariants = cva('shrink-0', {
  variants: {
    color: {
      default: '',
      contrast: '',
      muted: '',
      primary: '',
      info: '',
      success: '',
      warning: '',
      danger: '',
      yellow: '',
    },
    variant: {
      solid: '',
      pastel: '',
      outlined: '',
    },
    shape: {
      straight: '',
      rounded: 'rounded-md',
      smooth: 'rounded-lg',
      curved: 'rounded-xl',
      full: 'rounded-full',
    },
    size: {
      xs: 'h-8 w-8 [&>svg]:h-4 [&>svg]:w-4',
      sm: 'h-10 w-10 [&>svg]:h-5 [&>svg]:w-5',
      md: 'h-12 w-12 [&>svg]:h-6 [&>svg]:w-6',
      lg: 'h-14 w-14 [&>svg]:h-7 [&>svg]:w-7',
      xl: 'h-16 w-16 [&>svg]:h-8 [&>svg]:w-8',
    },

    shadow: {
      none: '',
      default: 'shadow-xl',
      contrast: 'shadow-xl',
      muted: 'shadow-xl',
      primary: 'shadow-xl shadow-primary-500/50 dark:shadow-primary-800/20',
      info: 'shadow-xl shadow-info-500/50 dark:shadow-info-800/20',
      success: 'shadow-xl shadow-success-500/50 dark:shadow-success-800/20',
      warning: 'shadow-xl shadow-warning-500/50 dark:shadow-warning-800/20',
      danger: 'shadow-xl shadow-danger-500/50 dark:shadow-danger-800/20',
    },
  },

  compoundVariants: [
    {
      variant: 'solid',
      color: 'default',
      className:
        'border border-muted-200 dark:border-muted-700 bg-white dark:bg-muted-800 text-muted-500 dark:text-muted-100',
    },
    {
      variant: 'solid',
      color: 'contrast',
      className:
        'border border-muted-200 dark:border-muted-800 bg-white dark:bg-muted-950 text-muted-500 dark:text-muted-100',
    },
    {
      variant: 'solid',
      color: 'muted',
      className: 'bg-muted-200 dark:bg-muted-800 text-muted-500 dark:text-muted-100',
    },
    {
      variant: 'solid',
      color: 'primary',
      className: 'bg-primary-500 text-white',
    },
    {
      variant: 'solid',
      color: 'info',
      className: 'bg-info-500 text-white',
    },
    {
      variant: 'solid',
      color: 'success',
      className: 'bg-success-500 text-white',
    },
    {
      variant: 'solid',
      color: 'warning',
      className: 'bg-warning-500 text-white',
    },
    {
      variant: 'solid',
      color: 'danger',
      className: 'bg-danger-500 text-white',
    },
    {
      variant: 'solid',
      color: 'yellow',
      className: 'bg-yellow-400 text-muted-800',
    },
    {
      variant: 'pastel',
      color: 'default',
      className: 'bg-muted-300/30 dark:bg-muted-300/10 text-muted-500 dark:text-muted-400',
    },
    {
      variant: 'pastel',
      color: 'contrast',
      className: 'bg-muted-300/30 dark:bg-muted-300/10 text-muted-500 dark:text-muted-400',
    },
    {
      variant: 'pastel',
      color: 'muted',
      className: 'bg-muted-300/30 dark:bg-muted-300/10 text-muted-500 dark:text-muted-400',
    },
    {
      variant: 'pastel',
      color: 'primary',
      className: 'bg-primary-500/10 dark:bg-primary-500/20 text-primary-500',
    },
    {
      variant: 'pastel',
      color: 'info',
      className: 'bg-info-500/10 dark:bg-info-500/20 text-info-500',
    },
    {
      variant: 'pastel',
      color: 'success',
      className: 'bg-success-500/10 dark:bg-success-500/20 text-success-500',
    },
    {
      variant: 'pastel',
      color: 'warning',
      className: 'bg-warning-500/10 dark:bg-warning-500/20 text-warning-500',
    },
    {
      variant: 'pastel',
      color: 'danger',
      className: 'bg-danger-500/10 dark:bg-danger-500/20 text-danger-500',
    },
    {
      variant: 'pastel',
      color: 'yellow',
      className: 'bg-yellow-400/10 dark:bg-yellow-400/20 text-yellow-400',
    },
    {
      variant: 'outlined',
      color: 'default',
      className: 'border border-muted-300 dark:border-muted-700 text-muted-500 dark:text-muted-400',
    },
    {
      variant: 'outlined',
      color: 'contrast',
      className: 'border border-muted-300 dark:border-muted-700 text-muted-500 dark:text-muted-400',
    },
    {
      variant: 'outlined',
      color: 'muted',
      className: 'border border-muted-300 dark:border-muted-700 text-muted-500 dark:text-muted-400',
    },
    {
      variant: 'outlined',
      color: 'primary',
      className: 'border border-primary-500 text-primary-500',
    },
    {
      variant: 'outlined',
      color: 'info',
      className: 'border border-info-500 text-info-500',
    },
    {
      variant: 'outlined',
      color: 'success',
      className: 'border border-success-500 text-success-500',
    },
    {
      variant: 'outlined',
      color: 'warning',
      className: 'border border-warning-500 text-warning-500',
    },
    {
      variant: 'outlined',
      color: 'danger',
      className: 'border border-danger-500 text-danger-500',
    },
    {
      variant: 'outlined',
      color: 'yellow',
      className: 'border border-yellow-500 text-yellow-500',
    },
  ],

  defaultVariants: {
    color: 'default',
    variant: 'solid',
    shape: 'full',
    shadow: 'none',
  },
});
