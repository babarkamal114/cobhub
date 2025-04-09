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
        straight: 'rounded-straight',
        rounded: 'rounded-rounded',
        smooth: 'rounded-smooth',
        curved: 'rounded-curved',
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
          'bg-default-solid text-white hover:bg-default-solid-hover focus-visible:ring-default-solid-ring',
      },
      {
        variant: 'solid',
        color: 'primary',
        className:
          'bg-primary-solid text-white hover:bg-primary-solid-hover focus-visible:ring-primary-solid-ring',
      },
      {
        variant: 'solid',
        color: 'success',
        className:
          'bg-success-solid text-white hover:bg-success-solid-hover focus-visible:ring-success-solid-ring',
      },
      {
        variant: 'solid',
        color: 'warning',
        className:
          'bg-warning-solid text-white hover:bg-warning-solid-hover focus-visible:ring-warning-solid-ring',
      },
      {
        variant: 'solid',
        color: 'danger',
        className:
          'bg-danger-solid text-white hover:bg-danger-solid-hover focus-visible:ring-danger-solid-ring',
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
          'border-default-outlined text-default-outlined hover:bg-default-outlined-hover focus-visible:ring-default-outlined-ring',
      },
      {
        variant: 'outlined',
        color: 'primary',
        className:
          'border-primary-outlined text-primary-outlined hover:bg-primary-outlined-hover focus-visible:ring-primary-outlined-ring',
      },
      {
        variant: 'outlined',
        color: 'success',
        className:
          'border-success-outlined text-success-outlined hover:bg-success-outlined-hover focus-visible:ring-success-outlined-ring',
      },
      {
        variant: 'outlined',
        color: 'warning',
        className:
          'border-warning-outlined text-warning-outlined hover:bg-warning-outlined-hover focus-visible:ring-warning-outlined-ring',
      },
      {
        variant: 'outlined',
        color: 'danger',
        className:
          'border-danger-outlined text-danger-outlined hover:bg-danger-outlined-hover focus-visible:ring-danger-outlined-ring',
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
