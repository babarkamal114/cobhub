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
      straight: 'rounded-none',
      rounded: 'rounded-md',
      smooth: 'rounded-lg',
      curved: ['rounded-xl', 'xxxs:rounded-lg'],
      full: 'rounded-full',
    },
    color: {
      default:
        'bg-default-900 text-contrast hover:bg-default-700 dark:bg-default-800 dark:hover:bg-default-700',
      contrast:
        'bg-default-100 text-default-900 hover:bg-default-200 dark:bg-default-100 dark:text-default-900 dark:hover:bg-default-200',
      muted:
        'bg-muted-200 text-default-900 hover:bg-muted-300 dark:bg-muted-700 dark:text-muted-300 dark:hover:bg-muted-600',
      primary:
        'bg-primary-600 text-contrast hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600',
      info: 'bg-info-600 text-contrast hover:bg-info-700 dark:bg-info-500 dark:hover:bg-info-600',
      success:
        'bg-success-600 text-contrast hover:bg-success-700 dark:bg-success-500 dark:hover:bg-success-600',
      warning:
        'bg-warning-600 text-contrast hover:bg-warning-700 dark:bg-warning-500 dark:hover:bg-warning-600',
      danger:
        'bg-danger-600 text-contrast hover:bg-danger-700 dark:bg-danger-500 dark:hover:bg-danger-600',
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
