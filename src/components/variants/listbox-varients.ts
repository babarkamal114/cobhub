import { cva } from 'class-variance-authority';

export const listBoxVarients = cva(
  'flex w-full items-center justify-between group/listbox-button relative text-start',
  {
    variants: {
      variant: {
        default: 'bg-white dark:bg-muted-800 dark:text-gray-400 text-default-500',
        error: 'bg-danger-200 text-danger-500 dark:bg-danger-900 dark:text-danger-400',
        success: 'bg-success-200 text-success-500 dark:bg-success-900 dark:text-success-400',
        disabled:
          'bg-default-100 text-default-500 dark:bg-default-800 dark:text-default-500 !pointer-events-none !cursor-not-allowed !opacity-50',
        loading:
          'bg-muted-100 text-muted-300 dark:bg-muted-300 dark:text-muted-300 !pointer-events-none !select-none',
      },
      bordered: {
        true: 'border-2',
        false: 'border-none',
      },
      shape: {
        straight: '',
        rounded: 'rounded-md',
        smooth: 'rounded-lg',
        curved: 'rounded-xl',
        full: 'rounded-full',
      },
      size: {
        sm: 'h-9 text-xs',
        md: 'h-10 text-sm',
        lg: 'h-12 text-base',
      },
      hasLeftElement: {
        true: '',
        false: '',
      },
      leftElementType: {
        icon: '',
        image: '',
        none: '',
      },
      hasError: {
        true: '!border-danger-500',
        false: '',
      },
    },
    compoundVariants: [
      // Bordered + variant combinations
      {
        variant: 'default',
        bordered: true,
        className:
          'border-muted-200 dark:border-muted-700 hover:border-muted-300 dark:hover:border-muted-600',
      },
      {
        variant: 'error',
        bordered: true,
        className: 'border-danger-400 dark:border-danger-600',
      },
      {
        variant: 'success',
        bordered: true,
        className: 'border-success-300 dark:border-success-600',
      },
      {
        variant: 'disabled',
        bordered: true,
        className: 'border-default-300 dark:border-default-700',
      },
      {
        variant: 'loading',
        bordered: true,
        className: 'border-muted-200 dark:border-muted-400',
      },
      // Size + leftElementType combinations for padding
      {
        size: 'sm',
        hasLeftElement: false,
        className: 'px-2',
      },
      {
        size: 'md',
        hasLeftElement: false,
        className: 'px-3',
      },
      {
        size: 'lg',
        hasLeftElement: false,
        className: 'px-4',
      },
      {
        size: 'sm',
        leftElementType: 'icon',
        className: 'pe-2 ps-8',
      },
      {
        size: 'md',
        leftElementType: 'icon',
        className: 'pe-3 ps-10',
      },
      {
        size: 'lg',
        leftElementType: 'icon',
        className: 'pe-4 ps-12',
      },
      {
        size: 'sm',
        leftElementType: 'image',
        className: 'pe-2 ps-8',
      },
      {
        size: 'md',
        leftElementType: 'image',
        className: 'pe-3 ps-11',
      },
      {
        size: 'lg',
        leftElementType: 'image',
        className: 'pe-4 ps-12',
      },
    ],
    defaultVariants: {
      variant: 'default',
      bordered: true,
      shape: 'smooth',
      size: 'md',
      hasLeftElement: false,
      leftElementType: 'none',
      hasError: false,
    },
  }
);

export const listBoxOptionsVariants = cva();
