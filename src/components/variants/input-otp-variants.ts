import { cva } from 'class-variance-authority';

export const inputOTPVariants = cva('w-12 h-12 text-center text-xl font-semibold', {
  variants: {
    loading: {
      true: '!pointer-event-none !opacity-50 !select-none',
      false: '',
    },
    disabled: {
      true: '!pointer-event-none bg-muted-300 dark:bg-gray-700 !select-none',
      false: '',
    },
  },
  defaultVariants: {
    disabled: false,
    loading: false,
  },
});
