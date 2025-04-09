import { cva } from 'class-variance-authority';

export const inputVariants = cva(
  'flex w-full rounded-rounded border px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium bg-gray-50 dark:bg-slate-800 placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 dark:ring-offset-gray-950 dark:placeholder:text-gray-400 dark:focus-visible:ring-blue-500',
  {
    variants: {
      variant: {
        default:
          'border-gray-100 dark:border-gray-600 focus-visible:ring-primary-solid dark:focus-visible:ring-primary-solid focus-visible:ring-offset-blue-100 dark:focus-visible:ring-offset-blue-950',
        error:
          'border-danger-solid focus-visible:ring-danger-solid dark:border-danger-solid dark:focus-visible:ring-danger-solid',
        success:
          'border-success-solid focus-visible:ring-success-solid dark:border-success-solid dark:focus-visible:ring-success-solid',
        disabled:
          'border-gray-300 bg-gray-100 text-gray-500 cursor-not-allowed dark:border-gray-700 dark:bg-gray-800 dark:text-gray-500',
        loading:
          'border-warning-solid bg-warning-pastel text-warning-outlined dark:border-warning-solid dark:bg-warning-pastel dark:text-warning-outlined',
      },
      inputSize: {
        sm: 'h-8 px-2 text-xs',
        md: 'h-10 px-3 text-sm',
        lg: 'h-12 px-4 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      inputSize: 'md',
    },
  }
);
