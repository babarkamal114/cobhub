import { cva } from 'class-variance-authority';

export const tagVariants = cva(
  'relative inline-flex h-7 items-center justify-center font-sans whitespace-nowrap px-3 text-center text-xs gap-1 leading-10 transition-all duration-300',
  {
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
      },
      variant: {
        solid: '',
        outlined: '',
        pastel: '',
      },
      shape: {
        straight: '',
        rounded: 'rounded-md',
        smooth: 'rounded-lg',
        curved: 'rounded-xl',
        full: 'rounded-full',
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
        variant: 'outlined',
        color: 'default',
        className:
          'border border-muted-300 dark:border-muted-700 text-muted-500 dark:text-muted-400',
      },
      {
        variant: 'outlined',
        color: 'contrast',
        className:
          'border border-muted-300 dark:border-muted-700 text-muted-500 dark:text-muted-400',
      },
      {
        variant: 'outlined',
        color: 'muted',
        className:
          'border border-muted-300 dark:border-muted-700 text-muted-500 dark:text-muted-400',
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
    ],
    defaultVariants: {
      variant: 'solid',
      color: 'default',
      shape: 'smooth',
    },
  }
);
