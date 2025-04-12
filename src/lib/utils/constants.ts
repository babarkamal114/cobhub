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
