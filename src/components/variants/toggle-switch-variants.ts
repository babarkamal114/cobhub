import { cva } from 'class-variance-authority';

export const toggleSwitchVariants = cva(
  "bg-muted-100 dark:bg-muted-800 relative inline-block h-[26px] w-[46px] rounded-[23px] transition-all duration-300 ease-linear before:absolute before:start-0 before:h-[22px] before:w-[42px] before:rounded-[11px] before:bg-white before:transition-all before:duration-[250ms] before:ease-linear before:content-[''] before:[transform:translate3d(calc(2px_*_1),_2px,_0)_scale3d(1,_1,_1)] after:absolute after:start-0 after:h-[22px] after:w-[22px] after:rounded-full after:bg-white after:transition-all after:duration-200 after:ease-in-out after:content-[''] after:[box-shadow:0_2px_2px_rgba(0,_0,_0,_0.24)] after:[transform:translate3d(calc(2px_*_1),_2px,_0)] peer-checked:before:[transform:translate3d(calc(18px_*_1),_2px,_0)_scale3d(0,_0,_0)] peer-checked:after:[transform:translate3d(calc(22px_*_1),_2px,_0)] dark:before:bg-muted-900",
  {
    variants: {
      color: {
        default: 'peer-checked:bg-muted-200 dark:peer-checked:bg-muted-700/70',
        contrast: 'peer-checked:bg-contrast-500',
        muted: 'peer-checked:bg-muted-500 dark:peer-checked:bg-muted-600',
        primary: 'peer-checked:bg-primary-500',
        success: 'peer-checked:bg-success-500',
        info: 'peer-checked:bg-info-500',
        warning: 'peer-checked:bg-warning-500',
        danger: 'peer-checked:bg-danger-500',
      },
    },
    defaultVariants: {
      color: 'default',
    },
  }
);
