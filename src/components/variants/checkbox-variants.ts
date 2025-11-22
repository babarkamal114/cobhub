import { cva } from 'class-variance-authority';

export const checkboxVariants = cva(
  'absolute top-0 start-0 z-[1] block h-full w-full scale-0 transition-transform duration-300 peer-checked:scale-[1.1]',
  {
    variants: {
      color: {
        default: 'bg-muted-300 dark:bg-muted-700',
        contrast: 'bg-muted-600 dark:bg-black',
        muted: 'bg-muted-500 border-muted-500',
        primary: 'bg-primary-500 border-primary-500',
        info: 'bg-info-500 border-info-500',
        success: 'bg-success-500 border-success-500',
        warning: 'bg-warning-500 border-warning-500',
        danger: 'bg-danger-500 border-danger-500',
      },
      shape: {
        straight: '',
        rounded: 'rounded',
        smooth: 'rounded-md',
        curved: 'rounded-lg',
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      color: 'default',
      shape: 'smooth',
    },
  }
);
