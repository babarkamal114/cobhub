import { cva } from 'class-variance-authority';

export const tabListStyles = cva('flex space-x-1 bg-muted-100 p-1 dark:bg-muted-900', {
  variants: {
    shape: {
      straight: '',
      rounded: 'rounded-md',
      smooth: 'rounded-lg',
      curved: 'rounded-xl',
      full: 'rounded-full',
    },
  },
  defaultVariants: {
    shape: 'smooth',
  },
});

export const tabStyles = cva(
  'w-full py-2.5 text-sm font-medium leading-5 focus:outline-none focus:ring-2 ring-primary-500 ring-opacity-60 ring-offset-2 ring-offset-muted-100 dark:ring-offset-muted-900 transition-colors duration-200',
  {
    variants: {
      shape: {
        straight: '',
        rounded: 'rounded-md',
        smooth: 'rounded-lg',
        curved: 'rounded-xl',
        full: 'rounded-full',
      },
      selected: {
        true: 'bg-white text-primary-500 shadow dark:bg-muted-800',
        false: 'text-muted-400 hover:text-muted-500 dark:hover:text-muted-100',
      },
    },
    defaultVariants: {
      shape: 'smooth',
      selected: false,
    },
  }
);
