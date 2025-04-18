import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500 active:ring-2 active:ring-offset-2 active:ring-primary-500 disabled:pointer-events-none disabled:opacity-70 cursor-pointer',
  {
    variants: {
      variant: {
        solid: 'border border-transparent',
        pastel: 'border border-transparent',
        outlined: 'bg-transparent border',
      },
      size: {
        sm: 'h-8 px-2.5 py-2',
        md: 'h-10 px-4 py-2',
        lg: 'h-12 px-5 py-2',
        xl: 'h-14 px-8 text-lg min-w-[7rem]',
        xs: 'h-6 px-2 text-xxs min-w-[3rem]',
        xxs: 'h-5 px-1 text-xxxs min-w-[2.5rem]',
        xxxs: 'h-4 px-1 text-xxxs min-w-[2rem]',
        icon: 'h-10 w-10',
      },
      shape: {
        straight: 'rounded-none',
        rounded: 'rounded-md',
        smooth: 'rounded-lg',
        curved: 'rounded-xl',
        full: 'rounded-full',
      },
      color: {
        default: '',
        contrast: '',
        muted: '',
        primary: '',
        info: '',
        success: '',
        warning: '',
        danger: '',
        violet: '',
      },
      isDisabled: {
        true: 'opacity-70 cursor-not-allowed',
      },
      isLoading: {
        true: 'opacity-80 cursor-wait',
      },
    },
    compoundVariants: [
      {
        variant: 'solid',
        color: 'muted',
        className:
          'bg-muted-100 hover:enabled:bg-muted-50 active:enabled:bg-muted-100 hover:enabled:border-muted-300 dark:hover:enabled:border-muted-600 dark:border-muted-700 text-muted-600 dark:text-muted-200 dark:bg-muted-800 dark:hover:enabled:bg-muted-700 dark:active:enabled:bg-muted-800 focus-visible:ring-muted-500 active:ring-muted-500',
      },
      {
        variant: 'solid',
        color: 'primary',
        className:
          'bg-primary-500 text-white enabled:hover:bg-primary-600 active:enabled:bg-primary-400 border border-primary-500 focus-visible:ring-primary-500 active:ring-primary-500',
      },
      {
        variant: 'solid',
        color: 'info',
        className:
          'bg-info-500 text-white enabled:hover:bg-info-600 active:enabled:bg-info-400 border border-info-500 focus-visible:ring-info-500 active:ring-info-500',
      },
      {
        variant: 'solid',
        color: 'success',
        className:
          'bg-success-500 text-white enabled:hover:bg-success-600 active:enabled:bg-success-400 border border-success-500 focus-visible:ring-success-500 active:ring-success-500',
      },
      {
        variant: 'solid',
        color: 'warning',
        className:
          'bg-warning-500 text-white enabled:hover:bg-warning-600 active:enabled:bg-warning-400 border border-warning-500 focus-visible:ring-warning-500 active:ring-warning-500',
      },
      {
        variant: 'solid',
        color: 'danger',
        className:
          'bg-danger-500 text-white enabled:hover:bg-danger-600 active:enabled:bg-danger-400 border border-danger-500 focus-visible:ring-danger-500 active:ring-danger-500',
      },
      {
        variant: 'solid',
        color: 'default',
        className:
          'bg-white hover:enabled:bg-muted-50 active:enabled:bg-muted-100 hover:enabled:border-muted-300 dark:hover:enabled:border-muted-600 border border-muted-200 dark:border-muted-700 text-default-700 dark:text-default-200 dark:bg-muted-800 dark:hover:enabled:bg-muted-700 dark:active:enabled:bg-muted-800 focus-visible:ring-muted-500 active:ring-muted-500',
      },
      {
        variant: 'solid',
        color: 'contrast',
        className:
          'bg-white hover:enabled:bg-muted-50 active:enabled:bg-muted-100 hover:enabled:border-muted-300 dark:hover:enabled:border-muted-700 border border-muted-200 dark:border-muted-800 text-muted-800 dark:text-muted-100 dark:bg-muted-950 dark:hover:enabled:bg-muted-900 dark:active:enabled:bg-muted-950 focus-visible:ring-muted-500 active:ring-muted-500',
      },
      {
        variant: 'outlined',
        color: 'default',
        className:
          'border border-muted-300 dark:border-muted-700 text-muted-500 hover:bg-white hover:enabled:bg-muted-100 dark:hover:enabled:bg-muted-800 active:enabled:bg-muted-50 dark:active:enabled:bg-muted-700 hover:enabled:text-muted-600 dark:hover:enabled:text-muted-100 focus-visible:ring-muted-500 active:ring-muted-500',
      },
      {
        variant: 'outlined',
        color: 'contrast',
        className:
          'border border-muted-300 dark:border-muted-700 text-muted-500 hover:bg-white hover:enabled:bg-muted-100 dark:hover:enabled:bg-muted-950 active:enabled:bg-muted-50 dark:active:enabled:bg-muted-900 hover:enabled:text-muted-600 dark:hover:enabled:text-muted-100 focus-visible:ring-muted-500 active:ring-muted-500',
      },
      {
        variant: 'outlined',
        color: 'muted',
        className:
          'border border-muted-300 dark:border-muted-700 text-muted-500 hover:bg-white hover:enabled:bg-muted-100 dark:hover:enabled:bg-muted-800 active:enabled:bg-muted-50 dark:active:enabled:bg-muted-700 hover:enabled:text-muted-600 dark:hover:enabled:text-muted-100 focus-visible:ring-muted-500 active:ring-muted-500',
      },
      {
        variant: 'outlined',
        color: 'primary',
        className:
          'border border-primary-500 text-primary-500 hover:bg-primary-500 active:enabled:bg-primary-400 hover:text-white focus-visible:ring-primary-500 active:ring-primary-500',
      },
      {
        variant: 'outlined',
        color: 'info',
        className:
          'border border-info-500 text-info-500 hover:bg-info-500 active:enabled:bg-info-400 hover:text-white focus-visible:ring-info-500 active:ring-info-500',
      },
      {
        variant: 'outlined',
        color: 'success',
        className:
          'border border-success-500 text-success-500 hover:bg-success-500 active:enabled:bg-success-400 hover:text-white focus-visible:ring-success-500 active:ring-success-500',
      },
      {
        variant: 'outlined',
        color: 'warning',
        className:
          'border border-warning-500 text-warning-500 hover:bg-warning-500 active:enabled:bg-warning-400 hover:text-white focus-visible:ring-warning-500 active:ring-warning-500',
      },
      {
        variant: 'outlined',
        color: 'danger',
        className:
          'border border-danger-500 text-danger-500 hover:bg-danger-500 active:enabled:bg-danger-400 hover:text-white focus-visible:ring-danger-500 active:ring-danger-500',
      },
      {
        variant: 'pastel',
        color: 'default',
        className:
          'bg-muted-300/30 dark:bg-muted-300/10 text-muted-500 dark:text-muted-300 enabled:hover:bg-muted-300/60 dark:enabled:hover:bg-muted-300/20 active:enabled:bg-muted-300/30 dark:active:enabled:bg-muted-300/10 focus-visible:ring-muted-500 active:ring-muted-500',
      },
      {
        variant: 'pastel',
        color: 'contrast',
        className:
          'bg-muted-300/30 dark:bg-muted-300/10 text-muted-500 dark:text-muted-300 enabled:hover:bg-muted-300/60 dark:enabled:hover:bg-muted-300/20 active:enabled:bg-muted-300/30 dark:active:enabled:bg-muted-300/10 focus-visible:ring-muted-500 active:ring-muted-500',
      },
      {
        variant: 'pastel',
        color: 'muted',
        className:
          'bg-muted-300/30 dark:bg-muted-300/10 text-muted-500 dark:text-muted-300 enabled:hover:bg-muted-300/60 dark:enabled:hover:bg-muted-300/20 active:enabled:bg-muted-300/30 dark:active:enabled:bg-muted-300/10 focus-visible:ring-muted-500 active:ring-muted-500',
      },
      {
        variant: 'pastel',
        color: 'primary',
        className:
          'bg-primary-500/10 dark:bg-primary-500/20 text-primary-600 dark:text-primary-200 enabled:hover:bg-primary-500/20 dark:enabled:hover:bg-primary-500/30 active:enabled:bg-primary-500/10 dark:active:enabled:bg-primary-500/10 focus-visible:ring-primary-500 active:ring-primary-500',
      },
      {
        variant: 'pastel',
        color: 'info',
        className:
          'bg-info-500/10 dark:bg-info-500/20 text-info-600 dark:text-info-500 enabled:hover:bg-info-500/20 dark:enabled:hover:bg-info-500/30 active:enabled:bg-info-500/10 dark:active:enabled:bg-info-500/10 focus-visible:ring-info-500 active:ring-info-500',
      },
      {
        variant: 'pastel',
        color: 'success',
        className:
          'bg-success-500/10 dark:bg-success-500/20 text-success-600 dark:text-success-500 enabled:hover:bg-success-500/20 dark:enabled:hover:bg-success-500/30 active:enabled:bg-success-500/10 dark:active:enabled:bg-success-500/10 focus-visible:ring-success-500 active:ring-success-500',
      },
      {
        variant: 'pastel',
        color: 'warning',
        className:
          'bg-warning-500/10 dark:bg-warning-500/20 text-warning-600 dark:text-warning-500 enabled:hover:bg-warning-500/20 dark:enabled:hover:bg-warning-500/30 active:enabled:bg-warning-500/10 dark:active:enabled:bg-warning-500/10 focus-visible:ring-warning-500 active:ring-warning-500',
      },
      {
        variant: 'pastel',
        color: 'danger',
        className:
          'bg-danger-500/10 dark:bg-danger-500/20 text-danger-600 dark:text-danger-500 enabled:hover:bg-danger-500/20 dark:enabled:hover:bg-danger-500/30 active:enabled:bg-danger-500/10 dark:active:enabled:bg-danger-500/10 focus-visible:ring-danger-500 active:ring-danger-500',
      },
    ],

    defaultVariants: {
      color: 'default',
      variant: 'solid',
      shape: 'smooth',
      size: 'md',
    },
  }
);
