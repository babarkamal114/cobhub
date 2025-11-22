import { cva } from 'class-variance-authority';

export const comboBoxVariants = cva(
  'relative w-full leading-tight font-sans disabled:opacity-50 disabled:cursor-not-allowed outline-none transition-all duration-300',
  {
    variants: {
      size: {
        xxxs: 'h-6 text-xs',
        xxs: 'h-7 text-xs',
        xs: 'h-8 text-sm',
        sm: 'h-9 text-sm',
        md: 'h-10 text-sm',
        lg: 'h-12 text-base',
        xl: 'h-14 text-lg',
      },
      shape: {
        straight: '',
        rounded: 'rounded-md',
        smooth: 'rounded-lg',
        curved: 'rounded-xl',
        full: 'rounded-full',
      },
      variant: {
        default:
          'border-default-100 dark:border-default-600 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-500 focus-visible:ring-offset-primary-100 dark:focus-visible:ring-offset-primary-950',
        error:
          'border-danger-500 focus-visible:ring-danger-500 dark:border-danger-500 dark:focus-visible:ring-danger-500',
        success:
          'border-success-500 focus-visible:ring-success-500 dark:border-success-500 dark:focus-visible:ring-success-500',
        disabled:
          'border-default-300 bg-default-100 text-default-500 cursor-not-allowed dark:border-default-700 dark:bg-default-800 dark:text-default-500',
        loading:
          'border-warning-500 bg-warning-100 text-warning-500 dark:border-warning-400 dark:bg-warning-700 dark:text-warning-300',
      },
      color: {
        default:
          'border border-muted-200 bg-white text-muted-600 placeholder:text-muted-400 hover:enabled:border-muted-300 focus-visible:ring-muted-300 dark:border-muted-700 dark:bg-muted-800/30 dark:text-muted-300 dark:placeholder:text-muted-600 dark:hover:enabled:border-muted-600 dark:focus-visible:ring-muted-700',
        contrast:
          'border border-default-800 bg-default-950 text-default-200 placeholder:text-default-400 hover:enabled:border-default-600 focus-visible:ring-default-400 dark:bg-black/30 dark:text-white dark:placeholder:text-default-500',
        muted:
          'border border-muted-300 bg-muted-100 text-muted-700 placeholder:text-muted-400 hover:enabled:border-muted-400 focus-visible:ring-muted-400 dark:border-muted-700 dark:bg-muted-800/30 dark:text-muted-300 dark:placeholder:text-muted-600',
        primary:
          'border border-primary-500 bg-primary-50 text-primary-700 placeholder:text-primary-400 hover:enabled:border-primary-600 focus-visible:ring-primary-500 dark:border-primary-700 dark:bg-primary-900/30 dark:text-primary-300 dark:placeholder:text-primary-600',
        info: 'border border-info-500 bg-info-50 text-info-700 placeholder:text-info-400 hover:enabled:border-info-600 focus-visible:ring-info-500 dark:border-info-700 dark:bg-info-900/30 dark:text-info-300 dark:placeholder:text-info-600',
        success:
          'border border-success-500 bg-success-50 text-success-700 placeholder:text-success-400 hover:enabled:border-success-600 focus-visible:ring-success-500 dark:border-success-700 dark:bg-success-900/30 dark:text-success-300 dark:placeholder:text-success-600',
        warning:
          'border border-warning-500 bg-warning-50 text-warning-700 placeholder:text-warning-400 hover:enabled:border-warning-600 focus-visible:ring-warning-500 dark:border-warning-700 dark:bg-warning-900/30 dark:text-warning-300 dark:placeholder:text-warning-600',
        danger:
          'border border-danger-500 bg-danger-50 text-danger-700 placeholder:text-danger-400 hover:enabled:border-danger-600 focus-visible:ring-danger-500 dark:border-danger-700 dark:bg-danger-900/30 dark:text-danger-300 dark:placeholder:text-danger-600',
        mutedContrast:
          'border border-muted-200 bg-muted-100 dark:border-muted-800 dark:bg-muted-950 text-muted-600 dark:text-muted-300 dark:placeholder:text-muted-700 dark:hover:enabled:border-muted-700 placeholder:text-muted-400/60 hover:enabled:border-muted-300 focus-visible:border-muted-300 focus-visible:outline-none focus-visible:shadow-lg focus-visible:shadow-muted-300/30 dark:focus-visible:shadow-muted-950/20',
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
    },
    compoundVariants: [
      // No left element - regular padding
      { size: 'sm', hasLeftElement: false, className: 'px-2' },
      { size: 'md', hasLeftElement: false, className: 'px-3' },
      { size: 'lg', hasLeftElement: false, className: 'px-4' },

      // With icon - icon padding
      { size: 'sm', leftElementType: 'icon', className: 'pe-2 ps-8' },
      { size: 'md', leftElementType: 'icon', className: 'pe-3 ps-10' },
      { size: 'lg', leftElementType: 'icon', className: 'pe-4 ps-12' },

      // With image - image padding (slightly different)
      { size: 'sm', leftElementType: 'image', className: 'pe-2 ps-8' },
      { size: 'md', leftElementType: 'image', className: 'pe-3 ps-11' },
      { size: 'lg', leftElementType: 'image', className: 'pe-4 ps-12' },
    ],
    defaultVariants: {
      size: 'md',
      shape: 'smooth',
      variant: 'default',
      color: 'default',
      hasLeftElement: false,
      leftElementType: 'none',
    },
  }
);
