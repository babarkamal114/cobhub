import { cva } from 'class-variance-authority';

export const radioVariants = cva(
  'relative start-[.5px] z-[2] h-2 w-2 scale-0 transition-transform delay-150 duration-300 peer-checked:scale-100',
  {
    variants: {
      color: {
        default: 'text-muted-500 dark:text-white',
        contrast: 'text-muted-700 dark:text-white',
        muted: 'text-muted-400 dark:text-muted-300',
        primary: 'text-primary-500',
        success: 'text-success-500',
        info: 'text-info-500',
        warning: 'text-warning-500',
        danger: 'text-danger-500',
      },
    },
    defaultVariants: {
      color: 'default',
    },
  }
);
