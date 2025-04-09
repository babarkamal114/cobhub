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
        className: 'text-gray-800 bg-white hover:bg-gray-100 active:bg-gray-200',
      },
      {
        variant: 'solid',
        color: 'contrast',
        className: 'text-white bg-black hover:bg-gray-800 active:bg-gray-700',
      },
      {
        variant: 'solid',
        color: 'muted',
        className:
          'text-gray-500 bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700',
      },
      {
        variant: 'solid',
        color: 'primary',
        className: 'text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-500',
      },
      {
        variant: 'solid',
        color: 'info',
        className: 'text-white bg-teal-500 hover:bg-teal-600 active:bg-teal-400',
      },
      {
        variant: 'solid',
        color: 'success',
        className: 'text-white bg-green-500 hover:bg-green-600 active:bg-green-400',
      },
      {
        variant: 'solid',
        color: 'warning',
        className: 'text-white bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-400',
      },
      {
        variant: 'solid',
        color: 'danger',
        className: 'text-white bg-red-500 hover:bg-red-600 active:bg-red-400',
      },
      {
        variant: 'solid',
        color: 'yellow',
        className: 'text-white bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-400',
      },
      {
        variant: 'solid',
        color: 'violet',
        className: 'text-white bg-violet-500 hover:bg-violet-600 active:bg-violet-400',
      },
      {
        variant: 'outlined',
        color: 'default',
        className:
          'border border-gray-500 dark:border-gray-200 text-gray-600 hover:bg-gray-50 focus-visible:ring-gray-400',
      },
      {
        variant: 'outlined',
        color: 'contrast',
        className: 'border border-black text-black hover:bg-gray-50 focus-visible:ring-gray-400',
      },
      {
        variant: 'outlined',
        color: 'muted',
        className:
          'border border-gray-400 text-gray-600 hover:bg-gray-50 focus-visible:ring-gray-400',
      },
      {
        variant: 'outlined',
        color: 'primary',
        className:
          'border border-blue-600 text-blue-600 hover:bg-blue-50 focus-visible:ring-blue-400',
      },
      {
        variant: 'outlined',
        color: 'info',
        className: 'border border-sky-600 text-sky-600 hover:bg-sky-50 focus-visible:ring-sky-400',
      },
      {
        variant: 'outlined',
        color: 'success',
        className:
          'border border-green-600 text-green-600 hover:bg-green-50 focus-visible:ring-green-400',
      },
      {
        variant: 'outlined',
        color: 'warning',
        className:
          'border border-amber-600 text-amber-600 hover:bg-amber-50 focus-visible:ring-amber-400',
      },
      {
        variant: 'outlined',
        color: 'danger',
        className: 'border border-red-600 text-red-600 hover:bg-red-50 focus-visible:ring-red-400',
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
        className: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus-visible:ring-gray-400',
      },
      {
        variant: 'pastel',
        color: 'contrast',
        className: 'bg-black text-white hover:bg-gray-800 focus-visible:ring-gray-400',
      },
      {
        variant: 'pastel',
        color: 'muted',
        className: 'bg-gray-100 text-gray-600 hover:bg-gray-200 focus-visible:ring-gray-400',
      },
      {
        variant: 'pastel',
        color: 'primary',
        className: 'bg-blue-100 text-blue-900 hover:bg-blue-200 focus-visible:ring-blue-400',
      },
      {
        variant: 'pastel',
        color: 'info',
        className: 'bg-sky-100 text-sky-900 hover:bg-sky-200 focus-visible:ring-sky-400',
      },
      {
        variant: 'pastel',
        color: 'success',
        className: 'bg-green-100 text-green-900 hover:bg-green-200 focus-visible:ring-green-400',
      },
      {
        variant: 'pastel',
        color: 'warning',
        className: 'bg-amber-100 text-amber-900 hover:bg-amber-200 focus-visible:ring-amber-400',
      },
      {
        variant: 'pastel',
        color: 'danger',
        className: 'bg-red-100 text-red-900 hover:bg-red-200 focus-visible:ring-red-400',
      },
      {
        variant: 'pastel',
        color: 'yellow',
        className:
          'bg-yellow-100 text-yellow-900 hover:bg-yellow-200 focus-visible:ring-yellow-400',
      },
      {
        variant: 'pastel',
        color: 'violet',
        className:
          'bg-violet-100 text-violet-900 hover:bg-violet-200 focus-visible:ring-violet-400',
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
