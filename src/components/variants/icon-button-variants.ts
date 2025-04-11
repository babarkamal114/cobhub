import { cva } from 'class-variance-authority';

export const buttonIconVariants = cva(
  'inline-flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-70 cursor-pointer',
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
        straight: '!rounded-none',
        rounded: '!rounded-md',
        smooth: '!rounded-lg',
        curved: '!rounded-xl',
        full: '!rounded-full',
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
        yellow: '',
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
        color: 'default',
        className:
          'text-default-200 bg-default-500 hover:bg-default-700 active:bg-default-500 focus-visible:ring-default-400',
      },
      {
        variant: 'solid',
        color: 'contrast',
        className:
          'text-default-200 bg-default-900 hover:bg-default-800 active:bg-default-700 focus-visible:ring-contrast-400',
      },
      {
        variant: 'solid',
        color: 'muted',
        className:
          'text-muted-600 bg-muted-200 hover:bg-muted-300 dark:bg-muted-600 dark:hover:bg-muted-700 focus-visible:ring-muted-400',
      },
      {
        variant: 'solid',
        color: 'primary',
        className:
          'text-default-200 bg-primary-500 hover:bg-primary-700 active:bg-primary-500 focus-visible:ring-primary-400',
      },
      {
        variant: 'solid',
        color: 'info',
        className:
          'text-contrast bg-info-600 hover:bg-info-700 active:bg-info-500 focus-visible:ring-info-400',
      },
      {
        variant: 'solid',
        color: 'success',
        className:
          'text-contrast bg-success-600 hover:bg-success-700 active:bg-success-500 focus-visible:ring-success-400',
      },
      {
        variant: 'solid',
        color: 'warning',
        className:
          'text-contrast bg-warning-600 hover:bg-warning-700 active:bg-warning-500 focus-visible:ring-warning-400',
      },
      {
        variant: 'solid',
        color: 'danger',
        className:
          'text-contrast bg-danger-600 hover:bg-danger-700 active:bg-danger-500 focus-visible:ring-danger-400',
      },
      {
        variant: 'solid',
        color: 'yellow',
        className:
          'text-contrast bg-yellow-600 hover:bg-yellow-700 active:bg-yellow-500 focus-visible:ring-yellow-400',
      },
      {
        variant: 'solid',
        color: 'violet',
        className:
          'text-contrast bg-violet-600 hover:bg-violet-700 active:bg-violet-500 focus-visible:ring-violet-400',
      },
      {
        variant: 'outlined',
        color: 'default',
        className:
          'border border-default-500 text-default-600 hover:bg-default-50 focus-visible:ring-default-400',
      },
      {
        variant: 'outlined',
        color: 'contrast',
        className:
          'border border-black text-black hover:bg-default-50 focus-visible:ring-contrast-400',
      },
      {
        variant: 'outlined',
        color: 'muted',
        className:
          'border border-muted-400 text-muted-600 hover:bg-default-50 focus-visible:ring-muted-400',
      },
      {
        variant: 'outlined',
        color: 'primary',
        className:
          'border border-primary-600 text-primary-600 hover:bg-primary-50 focus-visible:ring-primary-400',
      },
      {
        variant: 'outlined',
        color: 'info',
        className:
          'border border-info-600 text-info-600 hover:bg-info-50 focus-visible:ring-info-400',
      },
      {
        variant: 'outlined',
        color: 'success',
        className:
          'border border-success-600 text-success-600 hover:bg-success-50 focus-visible:ring-success-400',
      },
      {
        variant: 'outlined',
        color: 'warning',
        className:
          'border border-warning-600 text-warning-600 hover:bg-warning-50 focus-visible:ring-warning-400',
      },
      {
        variant: 'outlined',
        color: 'danger',
        className:
          'border border-danger-600 text-danger-600 hover:bg-danger-50 focus-visible:ring-danger-400',
      },
      {
        variant: 'outlined',
        color: 'yellow',
        className:
          'border border-yellow-600 text-yellow-600 hover:bg-yellow-50 focus-visible:ring-yellow-400',
      },
      {
        variant: 'outlined',
        color: 'violet',
        className:
          'border border-violet-600 text-violet-600 hover:bg-violet-50 focus-visible:ring-violet-400',
      },
      {
        variant: 'pastel',
        color: 'default',
        className:
          'bg-default-200 text-default-600 hover:bg-default-300 focus-visible:ring-default-400',
      },
      {
        variant: 'pastel',
        color: 'contrast',
        className:
          'bg-default-900 text-default-300 hover:bg-default-800 focus-visible:ring-default-400',
      },
      {
        variant: 'pastel',
        color: 'muted',
        className: 'bg-muted-100 text-muted-600 hover:bg-muted-200 focus-visible:ring-muted-400',
      },
      {
        variant: 'pastel',
        color: 'primary',
        className:
          'bg-primary-100 text-primary-600 hover:bg-primary-200 focus-visible:ring-primary-400',
      },
      {
        variant: 'pastel',
        color: 'info',
        className: 'bg-info-100 text-info-600 hover:bg-info-200 focus-visible:ring-info-400',
      },
      {
        variant: 'pastel',
        color: 'success',
        className:
          'bg-success-100 text-success-600 hover:bg-success-200 focus-visible:ring-success-400',
      },
      {
        variant: 'pastel',
        color: 'warning',
        className:
          'bg-warning-100 text-warning-600 hover:bg-warning-200 focus-visible:ring-warning-400',
      },
      {
        variant: 'pastel',
        color: 'danger',
        className:
          'bg-danger-100 text-danger-600 hover:bg-danger-200 focus-visible:ring-danger-400',
      },
      {
        variant: 'pastel',
        color: 'yellow',
        className:
          'bg-yellow-100 text-yellow-600 hover:bg-yellow-200 focus-visible:ring-yellow-400',
      },
      {
        variant: 'pastel',
        color: 'violet',
        className:
          'bg-violet-100 text-violet-600 hover:bg-violet-200 focus-visible:ring-violet-400',
      },
    ],
    defaultVariants: {
      variant: 'solid',
      size: 'md',
      shape: 'rounded',
      color: 'primary',
    },
  }
);
