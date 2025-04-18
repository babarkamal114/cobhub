import { cva } from 'class-variance-authority';

export const buttonIconVariants = cva(
  'cursor-pointer relative inline-flex items-center justify-center gap-1 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
  {
    variants: {
      variant: {
        solid: '',
        pastel: '',
        outlined: '',
      },
      size: {
        sm: 'h-8 w-8',
        md: 'h-10 w-10',
        lg: 'h-12 w-12',
        xl: 'h-14 w-14',
        xs: 'h-6 w-6',
        xxs: 'h-5 w-5',
        xxxs: 'h-4 w-4',
      },
      shape: {
        straight: '',
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
        color: 'default',
        className:
          'bg-default-100 hover:enabled:bg-default-200 active:enabled:bg-default-100 hover:enabled:border-default-300 dark:hover:enabled:border-default-600 border border-default-200 dark:border-default-700 text-default-600 dark:text-default-100 dark:bg-default-800 dark:hover:enabled:bg-default-700 dark:active:enabled:bg-default-800 focus-visible:ring-default-500',
      },
      {
        variant: 'solid',
        color: 'contrast',
        className:
          'bg-white hover:enabled:bg-muted-50 active:enabled:bg-muted-100 hover:enabled:border-muted-300 dark:hover:enabled:border-muted-700 border border-muted-200 dark:border-muted-800 text-muted-800 dark:text-muted-100 dark:bg-muted-950 dark:hover:enabled:bg-muted-900 dark:active:enabled:bg-muted-950 focus-visible:ring-muted-500',
      },
      {
        variant: 'solid',
        color: 'muted',
        className:
          'border border-muted-200 dark:border-muted-700 bg-muted-200 dark:bg-muted-800 text-muted-500 dark:text-muted-100 enabled:hover:bg-muted-300 dark:enabled:hover:bg-muted-700 active:enabled:bg-muted-100 dark:active:enabled:bg-muted-800 focus-visible:ring-muted-500',
      },
      {
        variant: 'solid',
        color: 'primary',
        className:
          'border border-primary-500 bg-primary-500 text-white enabled:hover:bg-primary-600 active:enabled:bg-primary-400 focus-visible:ring-primary-500',
      },
      {
        variant: 'solid',
        color: 'info',
        className:
          'border border-info-500 bg-info-500 text-white enabled:hover:bg-info-600 active:enabled:bg-info-400 focus-visible:ring-info-500',
      },
      {
        variant: 'solid',
        color: 'success',
        className:
          'border border-success-500 bg-success-500 text-white enabled:hover:bg-success-600 active:enabled:bg-success-400 focus-visible:ring-success-500',
      },
      {
        variant: 'solid',
        color: 'warning',
        className:
          'border border-warning-500 bg-warning-500 text-white enabled:hover:bg-warning-600 active:enabled:bg-warning-400 focus-visible:ring-warning-500',
      },
      {
        variant: 'solid',
        color: 'danger',
        className:
          'border border-danger-500 bg-danger-500 text-white enabled:hover:bg-danger-600 active:enabled:bg-danger-400 focus-visible:ring-danger-500',
      },
      {
        variant: 'pastel',
        color: 'default',
        className:
          'border-none bg-default-300/30 dark:bg-muted-300/10 text-default-500 dark:text-muted-400 enabled:hover:bg-muted-300/60 dark:enabled:hover:bg-muted-300/20 active:enabled:bg-muted-300/30 dark:active:enabled:bg-muted-300/10 focus-visible:ring-default-500',
      },
      {
        variant: 'pastel',
        color: 'contrast',
        className:
          'border-none bg-muted-300/30 dark:bg-muted-300/10 text-muted-500 dark:text-muted-400 enabled:hover:bg-muted-300/60 dark:enabled:hover:bg-muted-300/20 active:enabled:bg-muted-300/30 dark:active:enabled:bg-muted-300/10 focus-visible:ring-muted-500',
      },
      {
        variant: 'pastel',
        color: 'muted',
        className:
          'bg-muted-300/30 dark:bg-muted-300/10 text-muted-500 dark:text-muted-400 enabled:hover:bg-muted-300/60 dark:enabled:hover:bg-muted-300/20 active:enabled:bg-muted-300/30 dark:active:enabled:bg-muted-300/10 focus-visible:ring-muted-500',
      },
      {
        variant: 'pastel',
        color: 'primary',
        className:
          'bg-primary-500/10 dark:bg-primary-500/20 text-primary-500 enabled:hover:bg-primary-500/20 dark:enabled:hover:bg-primary-500/30 active:enabled:bg-primary-500/10 dark:active:enabled:bg-primary-500/10 focus-visible:ring-primary-500',
      },
      {
        variant: 'pastel',
        color: 'info',
        className:
          'bg-info-500/10 dark:bg-info-500/20 text-info-500 enabled:hover:bg-info-500/20 dark:enabled:hover:bg-info-500/30 active:enabled:bg-info-500/10 dark:active:enabled:bg-info-500/10 focus-visible:ring-info-500',
      },
      {
        variant: 'pastel',
        color: 'success',
        className:
          'bg-success-500/10 dark:bg-success-500/20 text-success-500 enabled:hover:bg-success-500/20 dark:enabled:hover:bg-success-500/30 active:enabled:bg-success-500/10 dark:active:enabled:bg-success-500/10 focus-visible:ring-success-500',
      },
      {
        variant: 'pastel',
        color: 'warning',
        className:
          'bg-warning-500/10 dark:bg-warning-500/20 text-warning-500 enabled:hover:bg-warning-500/20 dark:enabled:hover:bg-warning-500/30 active:enabled:bg-warning-500/10 dark:active:enabled:bg-warning-500/10 focus-visible:ring-warning-500',
      },
      {
        variant: 'pastel',
        color: 'danger',
        className:
          'bg-danger-500/10 dark:bg-danger-500/20 text-danger-500 enabled:hover:bg-danger-500/20 dark:enabled:hover:bg-danger-500/30 active:enabled:bg-danger-500/10 dark:active:enabled:bg-danger-500/10 focus-visible:ring-danger-500',
      },
      {
        variant: 'outlined',
        color: 'default',
        className:
          'border border-muted-300 dark:border-muted-700 text-muted-500 hover:bg-white hover:enabled:bg-muted-100 dark:hover:enabled:bg-muted-800 active:enabled:bg-muted-50 dark:active:enabled:bg-muted-700 hover:enabled:text-muted-600 dark:hover:enabled:text-muted-100 focus-visible:ring-muted-500',
      },
      {
        variant: 'outlined',
        color: 'contrast',
        className:
          'border border-muted-300 dark:border-muted-700 text-muted-500 hover:bg-white hover:enabled:bg-muted-100 dark:hover:enabled:bg-muted-950 active:enabled:bg-muted-50 dark:active:enabled:bg-muted-900 hover:enabled:text-muted-600 dark:hover:enabled:text-muted-100 focus-visible:ring-muted-500',
      },
      {
        variant: 'outlined',
        color: 'muted',
        className:
          'border border-muted-300 dark:border-muted-700 text-muted-500 hover:bg-white hover:enabled:bg-muted-100 dark:hover:enabled:bg-muted-800 active:enabled:bg-muted-50 dark:active:enabled:bg-muted-700 hover:enabled:text-muted-600 dark:hover:enabled:text-muted-100 focus-visible:ring-muted-500',
      },
      {
        variant: 'outlined',
        color: 'primary',
        className:
          'border border-primary-500 text-primary-500 hover:bg-primary-500 active:enabled:bg-primary-400 hover:text-white focus-visible:ring-primary-500',
      },
      {
        variant: 'outlined',
        color: 'info',
        className:
          'border border-info-500 text-info-500 hover:bg-info-500 active:enabled:bg-info-400 hover:text-white focus-visible:ring-info-500',
      },
      {
        variant: 'outlined',
        color: 'success',
        className:
          'border border-success-500 text-success-500 hover:bg-success-500 active:enabled:bg-success-400 hover:text-white focus-visible:ring-success-500',
      },
      {
        variant: 'outlined',
        color: 'warning',
        className:
          'border border-warning-500 text-warning-500 hover:bg-warning-500 active:enabled:bg-warning-400 hover:text-white focus-visible:ring-warning-500',
      },
      {
        variant: 'outlined',
        color: 'danger',
        className:
          'border border-danger-500 text-danger-500 hover:bg-danger-500 active:enabled:bg-danger-400 hover:text-white focus-visible:ring-danger-500',
      },
    ],

    defaultVariants: {
      variant: 'solid',
      size: 'md',
      shape: 'rounded',
      color: 'default',
    },
  }
);
