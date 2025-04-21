import { cva } from 'class-variance-authority';

export const progressWrapperVaraints = cva('relative w-full overflow-hidden', {
  variants: {
    size: {
      sm: 'h-1.5',
      xs: 'h-1',
      xxs: 'h-0.5',
      xxxs: 'h-0.5',
      md: 'h-2',
      lg: 'h-3',
      xl: 'h-4',
    },
    shape: {
      straight: 'rounded-none',
      rounded: 'rounded-md',
      smooth: 'rounded-lg',
      curved: 'rounded-xl',
      full: 'rounded-full',
    },
    contrast: {
      default: 'bg-muted-200 dark:bg-muted-700',
      contrast: 'bg-muted-200 dark:bg-muted-900',
    },
  },
  defaultVariants: {
    size: 'sm',
    shape: 'full',
    contrast: 'default',
  },
});

export const progressBarVaraints = cva(
  'absolute start-0 top-0 h-full transition-all duration-300',
  {
    variants: {
      color: {
        default: 'bg-default-300',
        contrast: 'bg-default-900',
        muted: 'bg-muted-200 dark:bg-muted-600',
        primary: 'bg-primary-600',
        info: 'bg-info-600',
        success: 'bg-success-600',
        warning: 'bg-warning-600',
        danger: 'bg-danger-600',
      },
      shape: {
        straight: 'rounded-none',
        rounded: 'rounded-md',
        smooth: 'rounded-lg',
        curved: 'rounded-xl',
        full: 'rounded-full',
      },
      indeterminate: {
        true: 'animate-indeterminate w-full',
        false: '',
      },
    },
    defaultVariants: {
      color: 'primary',
      shape: 'full',
      indeterminate: false,
    },
  }
);
