import { cva } from 'class-variance-authority';

export const typographyVariants = cva('text-foreground', {
  variants: {
    variant: {
      h1: 'text-[48px] font-bold leading-[56px]',
      h2: 'text-[36px] font-bold leading-[44px]',
      h3: 'text-[30px] font-bold leading-[36px]',
      h4: 'text-[24px] font-bold leading-[32px]',
      h5: 'text-[20px] font-semibold leading-[28px]',
      h6: 'text-[18px] font-semibold leading-[24px]',
      'text-2xl': 'text-[24px] font-normal leading-[32px]',
      'text-2xl-medium': 'text-[24px] font-medium leading-[32px]',
      'text-2xl-semibold': 'text-[24px] font-semibold leading-[32px]',
      'text-2xl-bold': 'text-[24px] font-bold leading-[32px]',
      'text-xl': 'text-[20px] font-normal leading-[28px]',
      'text-xl-medium': 'text-[20px] font-medium leading-[28px]',
      'text-xl-semibold': 'text-[20px] font-semibold leading-[28px]',
      'text-xl-bold': 'text-[20px] font-bold leading-[28px]',
      'text-base': 'text-[16px] font-normal leading-[24px]',
      'text-base-medium': 'text-[16px] font-medium leading-[24px]',
      'text-base-semibold': 'text-[16px] font-semibold leading-[24px]',
      'text-base-bold': 'text-[16px] font-bold leading-[24px]',
      'text-sm': 'text-[14px] font-normal leading-[20px]',
      'text-sm-medium': 'text-[14px] font-medium leading-[20px]',
      'text-sm-semibold': 'text-[14px] font-semibold leading-[20px]',
      'text-sm-bold': 'text-[14px] font-bold leading-[20px]',
      'text-xs': 'text-[12px] font-normal leading-[16px]',
      'text-xs-medium': 'text-[12px] font-medium leading-[16px]',
      'text-xs-semibold': 'text-[12px] font-semibold leading-[16px]',
      'text-xs-bold': 'text-[12px] font-bold leading-[16px]',
    },
  },
  defaultVariants: {
    variant: 'text-base',
  },
});
