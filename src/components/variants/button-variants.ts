import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-70 cursor-pointer',
  {
    variants: {
      variant: {
        solid: 'border border-transparent',
        pastel: 'border border-transparent',
        outlined: 'bg-transparent border',
      },
      size: {
        sm: 'h-8 px-3 text-xs min-w-[4rem]',
        md: 'h-10 px-4 text-sm min-w-[5rem]',
        lg: 'h-12 px-6 text-base min-w-[6rem]',
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
        color: 'default',
        className:
          'text-default-50 bg-default-600 hover:bg-default-700 active:bg-default-500 focus-visible:ring-default-500 focus-visible:ring-offset-2',
      },
      {
        variant: 'solid',
        color: 'contrast',
        className:
          'text-contrast bg-default-900 hover:bg-default-800 active:bg-default-700 focus-visible:ring-contrast-500 focus-visible:ring-offset-2',
      },
      {
        variant: 'solid',
        color: 'muted',
        className:
          'text-muted-600 bg-muted-200 hover:bg-muted-300 dark:bg-muted-600 dark:hover:bg-muted-700 focus-visible:ring-muted-500 focus-visible:ring-offset-2',
      },
      {
        variant: 'solid',
        color: 'primary',
        className:
          'text-contrast bg-primary-600 hover:bg-primary-700 active:bg-primary-500 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
      },
      {
        variant: 'solid',
        color: 'info',
        className:
          'text-contrast bg-info-600 hover:bg-info-700 active:bg-info-500 focus-visible:ring-info-500 focus-visible:ring-offset-2',
      },
      {
        variant: 'solid',
        color: 'success',
        className:
          'text-contrast bg-success-600 hover:bg-success-700 active:bg-success-500 focus-visible:ring-success-500 focus-visible:ring-offset-2',
      },
      {
        variant: 'solid',
        color: 'warning',
        className:
          'text-contrast bg-warning-600 hover:bg-warning-700 active:bg-warning-500 focus-visible:ring-warning-500 focus-visible:ring-offset-2',
      },
      {
        variant: 'solid',
        color: 'danger',
        className:
          'text-contrast bg-danger-600 hover:bg-danger-700 active:bg-danger-500 focus-visible:ring-danger-500 focus-visible:ring-offset-2',
      },
      {
        variant: 'solid',
        color: 'violet',
        className:
          'text-contrast bg-violet-600 hover:bg-violet-700 active:bg-violet-500 focus-visible:ring-violet-500 focus-visible:ring-offset-2',
      },
      {
        variant: 'pastel',
        color: 'default',
        className:
          'bg-default-200 text-default-900 hover:bg-default-300 focus-visible:ring-default-400 focus-visible:ring-offset-2',
      },
      {
        variant: 'pastel',
        color: 'contrast',
        className:
          'bg-default-900 text-contrast hover:bg-default-800 focus-visible:ring-default-400 focus-visible:ring-offset-2',
      },
      {
        variant: 'pastel',
        color: 'muted',
        className:
          'bg-muted-100 text-muted-600 hover:bg-muted-200 focus-visible:ring-muted-400 focus-visible:ring-offset-2',
      },
      {
        variant: 'pastel',
        color: 'primary',
        className:
          'bg-primary-100 text-primary-900 hover:bg-primary-200 focus-visible:ring-primary-400 focus-visible:ring-offset-2',
      },
      {
        variant: 'pastel',
        color: 'info',
        className:
          'bg-info-100 text-info-900 hover:bg-info-200 focus-visible:ring-info-400 focus-visible:ring-offset-2',
      },
      {
        variant: 'pastel',
        color: 'success',
        className:
          'bg-success-100 text-success-900 hover:bg-success-200 focus-visible:ring-success-400 focus-visible:ring-offset-2',
      },
      {
        variant: 'pastel',
        color: 'warning',
        className:
          'bg-warning-100 text-warning-900 hover:bg-warning-200 focus-visible:ring-warning-400 focus-visible:ring-offset-2',
      },
      {
        variant: 'pastel',
        color: 'danger',
        className:
          'bg-danger-100 text-danger-900 hover:bg-danger-200 focus-visible:ring-danger-400 focus-visible:ring-offset-2',
      },
      {
        variant: 'pastel',
        color: 'violet',
        className:
          'bg-violet-100 text-violet-900 hover:bg-violet-200 focus-visible:ring-violet-400 focus-visible:ring-offset-2',
      },
      {
        variant: 'outlined',
        color: 'default',
        className:
          'border border-default-500 text-default-600 hover:bg-default-200 focus-visible:ring-default-400 focus-visible:ring-offset-2',
      },
      {
        variant: 'outlined',
        color: 'contrast',
        className:
          'border border-black text-black hover:bg-default-200 focus-visible:ring-contrast-400 focus-visible:ring-offset-2',
      },
      {
        variant: 'outlined',
        color: 'muted',
        className:
          'border border-muted-400 text-muted-600 hover:bg-default-200 focus-visible:ring-muted-400 focus-visible:ring-offset-2',
      },
      {
        variant: 'outlined',
        color: 'primary',
        className:
          'border border-primary-600 text-primary-600 hover:bg-primary-100 focus-visible:ring-primary-400 focus-visible:ring-offset-2',
      },
      {
        variant: 'outlined',
        color: 'info',
        className:
          'border border-info-600 text-info-600 hover:bg-info-100 focus-visible:ring-info-400 focus-visible:ring-offset-2',
      },
      {
        variant: 'outlined',
        color: 'success',
        className:
          'border border-success-600 text-success-600 hover:bg-success-100 focus-visible:ring-success-400 focus-visible:ring-offset-2',
      },
      {
        variant: 'outlined',
        color: 'warning',
        className:
          'border border-warning-600 text-warning-600 hover:bg-warning-50 focus-visible:ring-warning-400 focus-visible:ring-offset-2',
      },
      {
        variant: 'outlined',
        color: 'danger',
        className:
          'border border-danger-600 text-danger-600 hover:bg-danger-50 focus-visible:ring-danger-400 focus-visible:ring-offset-2',
      },
      {
        variant: 'outlined',
        color: 'violet',
        className:
          'border border-violet-600 text-violet-600 hover:bg-violet-50 focus-visible:ring-violet-400 focus-visible:ring-offset-2',
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
