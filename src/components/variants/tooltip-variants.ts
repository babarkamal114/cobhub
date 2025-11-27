import { cva } from 'class-variance-authority';

export const tooltipVariants = cva(
  'absolute z-50 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm transition-opacity duration-300 dark:bg-gray-700',
  {
    variants: {
      position: {
        top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
        bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
        start: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
        end: 'left-full top-1/2 transform -translate-y-1/2 ml-2',
      },
    },
    defaultVariants: {
      position: 'top',
    },
  }
);

export const tooltipWrapperVariants = cva('relative inline-block');
export const tooltipChildrenVariants = cva('inline-block');
export const tooltipContentVariants = cva('text-xs');
