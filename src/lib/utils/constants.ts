import { Size } from 'types';

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

export const RADIUS = 15.91549431;
export const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export const SIZE_CLASSES = {
  sm: {
    container: 'h-8 w-8',
    icon: 'h-3 w-3',
  },
  md: {
    container: 'h-10 w-10',
    icon: 'h-4 w-4',
  },
  lg: {
    container: 'h-12 w-12',
    icon: 'h-5 w-5',
  },
} as const;

// Shape mappings
export const SHAPE_CLASSES = {
  straight: '',
  rounded: 'rounded-md',
  smooth: 'rounded-lg',
  curved: 'rounded-xl',
  full: 'rounded-xl',
} as const;
