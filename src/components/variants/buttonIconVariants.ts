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
        straight: '!rounded-straight',
        rounded: '!rounded-rounded',
        smooth: '!rounded-smooth',
        curved: '!rounded-curved',
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
        className: 'text-gray-800 bg-white hover:bg-gray-100 active:bg-gray-200',
      },
      {
        variant: 'solid',
        color: 'primary',
        className:
          'text-white bg-primary-solid hover:bg-primary-solid-hover active:bg-primary-solid-ring',
      },
      {
        variant: 'solid',
        color: 'success',
        className:
          'text-white bg-success-solid hover:bg-success-solid-hover active:bg-success-solid-ring',
      },
      {
        variant: 'solid',
        color: 'warning',
        className:
          'text-white bg-warning-solid hover:bg-warning-solid-hover active:bg-warning-solid-ring',
      },
      {
        variant: 'solid',
        color: 'danger',
        className:
          'text-white bg-danger-solid hover:bg-danger-solid-hover active:bg-danger-solid-ring',
      },
      {
        variant: 'pastel',
        color: 'default',
        className:
          'bg-default-pastel text-gray-900 hover:bg-default-pastel-hover focus-visible:ring-default-pastel-ring',
      },
      {
        variant: 'pastel',
        color: 'primary',
        className:
          'bg-primary-pastel text-blue-900 hover:bg-primary-pastel-hover focus-visible:ring-primary-pastel-ring',
      },
      {
        variant: 'pastel',
        color: 'success',
        className:
          'bg-success-pastel text-green-900 hover:bg-success-pastel-hover focus-visible:ring-success-pastel-ring',
      },
      {
        variant: 'pastel',
        color: 'warning',
        className:
          'bg-warning-pastel text-amber-900 hover:bg-warning-pastel-hover focus-visible:ring-warning-pastel-ring',
      },
      {
        variant: 'pastel',
        color: 'danger',
        className:
          'bg-danger-pastel text-red-900 hover:bg-danger-pastel-hover focus-visible:ring-danger-pastel-ring',
      },
      {
        variant: 'outlined',
        color: 'default',
        className:
          'border border-default-outlined text-default-outlined hover:bg-default-outlined-hover focus-visible:ring-default-outlined-ring',
      },
      {
        variant: 'outlined',
        color: 'primary',
        className:
          'border border-primary-outlined text-primary-outlined hover:bg-primary-outlined-hover focus-visible:ring-primary-outlined-ring',
      },
      {
        variant: 'outlined',
        color: 'success',
        className:
          'border border-success-outlined text-success-outlined hover:bg-success-outlined-hover focus-visible:ring-success-outlined-ring',
      },
      {
        variant: 'outlined',
        color: 'warning',
        className:
          'border border-warning-outlined text-warning-outlined hover:bg-warning-outlined-hover focus-visible:ring-warning-outlined-ring',
      },
      {
        variant: 'outlined',
        color: 'danger',
        className:
          'border border-danger-outlined text-danger-outlined hover:bg-danger-outlined-hover focus-visible:ring-danger-outlined-ring',
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
