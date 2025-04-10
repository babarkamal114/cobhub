import { cva } from 'class-variance-authority';

export const typographyVariants = cva('text-foreground', {
  variants: {
    variant: {
      h1: 'text-default-900 dark:text-default-100 text-[48px] font-bold leading-[56px]',
      h2: 'text-default-900 dark:text-default-100 text-[36px] font-bold leading-[44px]',
      h3: 'text-default-900 dark:text-default-100 text-[30px] font-bold leading-[36px]',
      h4: 'text-default-900 dark:text-default-100 text-[24px] font-bold leading-[32px]',
      h5: 'text-default-900 dark:text-default-100 text-[20px] font-semibold leading-[28px]',
      h6: 'text-default-900 dark:text-default-100 text-[18px] font-semibold leading-[24px]',
      'text-2xl': 'text-default-700 dark:text-default-300 text-[24px] font-normal leading-[32px]',
      'text-2xl-medium':
        'text-default-700 dark:text-default-300 text-[24px] font-medium leading-[32px]',
      'text-2xl-semibold':
        'text-default-700 dark:text-default-300 text-[24px] font-semibold leading-[32px]',
      'text-2xl-bold':
        'text-default-700 dark:text-default-300 text-[24px] font-bold leading-[32px]',
      'text-xl': 'text-default-700 dark:text-default-300 text-[20px] font-normal leading-[28px]',
      'text-xl-medium':
        'text-default-700 dark:text-default-300 text-[20px] font-medium leading-[28px]',
      'text-xl-semibold':
        'text-default-700 dark:text-default-300 text-[20px] font-semibold leading-[28px]',
      'text-xl-bold': 'text-default-700 dark:text-default-300 text-[20px] font-bold leading-[28px]',
      'text-base': 'text-default-700 dark:text-default-300 text-[16px] font-normal leading-[24px]',
      'text-base-medium':
        'text-default-700 dark:text-default-300 text-[16px] font-medium leading-[24px]',
      'text-base-semibold':
        'text-default-700 dark:text-default-300 text-[16px] font-semibold leading-[24px]',
      'text-base-bold':
        'text-default-700 dark:text-default-300 text-[16px] font-bold leading-[24px]',
      'text-sm': 'text-default-700 dark:text-default-300 text-[14px] font-normal leading-[20px]',
      'text-sm-medium':
        'text-default-700 dark:text-default-300 text-[14px] font-medium leading-[20px]',
      'text-sm-semibold':
        'text-default-700 dark:text-default-300 text-[14px] font-semibold leading-[20px]',
      'text-sm-bold': 'text-default-700 dark:text-default-300 text-[14px] font-bold leading-[20px]',
      'text-xs': 'text-default-700 dark:text-default-300 text-[12px] font-normal leading-[16px]',
      'text-xs-medium':
        'text-default-700 dark:text-default-300 text-[12px] font-medium leading-[16px]',
      'text-xs-semibold':
        'text-default-700 dark:text-default-300 text-[12px] font-semibold leading-[16px]',
      'text-xs-bold': 'text-default-700 dark:text-default-300 text-[12px] font-bold leading-[16px]',
      'text-xxs': 'text-default-700 dark:text-default-300 text-[10px] font-normal leading-[14px]',
      'text-xxs-medium':
        'text-default-700 dark:text-default-300 text-[10px] font-medium leading-[14px]',
      'text-xxs-semibold':
        'text-default-700 dark:text-default-300 text-[10px] font-semibold leading-[14px]',
      'text-xxs-bold':
        'text-default-700 dark:text-default-300 text-[10px] font-bold leading-[14px]',
      'text-xxxs': 'text-default-700 dark:text-default-300 text-[8px] font-normal leading-[12px]',
      'text-xxxs-medium':
        'text-default-700 dark:text-default-300 text-[8px] font-medium leading-[12px]',
      'text-xxxs-semibold':
        'text-default-700 dark:text-default-300 text-[8px] font-semibold leading-[12px]',
      'text-xxxs-bold':
        'text-default-700 dark:text-default-300 text-[8px] font-bold leading-[12px]',
    },
  },
  defaultVariants: {
    variant: 'text-base',
  },
});
