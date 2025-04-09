import { cva } from 'class-variance-authority';

export const avatarVariants = cva('relative flex shrink-0 items-center justify-center', {
  variants: {
    size: {
      xl: 'w-24 h-24 text-xl',
      lg: 'w-20 h-20 text-lg',
      md: 'w-16 h-16 text-lg',
      sm: 'w-12 h-12 text-base',
      xs: 'w-10 h-10 text-sm',
      xxs: 'w-8 h-8 text-xs',
      xxxs: 'w-6 h-6 text-[0.7rem]',
    },
    shape: {
      straight: 'rounded-straight',
      rounded: 'rounded-rounded',
      smooth: 'rounded-smooth',
      curved: ['rounded-curved', 'xxxs:rounded-smooth'],
      full: 'rounded-full',
    },
    color: {
      default:
        'bg-default-solid text-white hover:bg-default-solid-hover dark:bg-default-solid dark:hover:bg-default-solid-hover',
      contrast:
        'bg-white text-gray-900 hover:bg-gray-200 dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-gray-300',
      muted:
        'bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600',
      primary:
        'bg-primary-solid text-white hover:bg-primary-solid-hover dark:bg-primary-solid dark:hover:bg-primary-solid-hover',
      info: 'bg-cyan-600 text-white hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-600',
      success:
        'bg-success-solid text-white hover:bg-success-solid-hover dark:bg-success-solid dark:hover:bg-success-solid-hover',
      warning:
        'bg-warning-solid text-white hover:bg-warning-solid-hover dark:bg-warning-solid dark:hover:bg-warning-solid-hover',
      danger:
        'bg-danger-solid text-white hover:bg-danger-solid-hover dark:bg-danger-solid dark:hover:bg-danger-solid-hover',
      yellow:
        'bg-yellow-600 text-white hover:bg-yellow-700 dark:bg-yellow-500 dark:hover:bg-yellow-600',
      violet:
        'bg-violet-600 text-white hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-600',
    },
    overlaps: {
      true: '',
    },
  },
  compoundVariants: [
    {
      overlaps: true,
      shape: 'full',
      size: 'xxxs',
      className: '-ms-1.5 border first:ms-0',
    },
    {
      overlaps: true,
      shape: 'full',
      size: 'xxs',
      className: '-ms-2.5 border first:ms-0',
    },
    {
      overlaps: true,
      shape: 'full',
      size: 'xs',
      className: '-ms-3.5 border first:ms-0',
    },
    {
      overlaps: true,
      shape: 'full',
      size: 'sm',
      className: '-ms-3.5 border first:ms-0',
    },
    {
      overlaps: true,
      shape: 'full',
      size: 'md',
      className: '-ms-5 border first:ms-0',
    },
    {
      overlaps: true,
      shape: 'full',
      size: 'lg',
      className: '-ms-6 border first:ms-0',
    },
    {
      overlaps: true,
      shape: 'full',
      size: 'xl',
      className: '-ms-8 border first:ms-0',
    },
  ],
  defaultVariants: {
    size: 'md',
    shape: 'full',
    color: 'default',
    overlaps: false,
  },
});

import { Size } from '@/types';

export const sizes: Record<Size, number> = {
  xxxs: 24,
  xxs: 32,
  xs: 40,
  sm: 48,
  md: 64,
  lg: 80,
  xl: 96,
};

export const spacing: Record<Size, string> = {
  xl: '-space-x-8',
  lg: '-space-x-6',
  md: '-space-x-5',
  sm: '-space-x-4',
  xs: '-space-x-3',
  xxs: '-space-x-2',
  xxxs: '-space-x-1.5',
};
