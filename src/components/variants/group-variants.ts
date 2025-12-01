import { cva } from 'class-variance-authority';

export const groupVariants = cva('flex', {
  variants: {
    orientation: {
      horizontal: 'flex-row',
      vertical: 'flex-col',
    },
    spacing: {
      none: 'gap-0',
      xs: 'gap-1',
      sm: 'gap-2',
      md: 'gap-3',
      lg: 'gap-4',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
    spacing: 'none',
  },
});

// Special classes for grouped elements
export const groupElementClasses = {
  button:
    '[&>button]:!border-e-0 [&>button:not(:first-child):not(:last-child)]:!rounded-none [&>button:first-child]:!rounded-e-none [&>button:last-child]:!rounded-s-none [&>button:last-child]:!border-e',

  input:
    '[&>div>div>input]:!border-e-0 [&>div:not(:first-child):not(:last-child)>div>input]:!rounded-none [&>div:first-child>div>input]:!rounded-e-none [&>div:last-child>div>input]:!rounded-s-none [&>div:last-child>div>input]:!border-e',

  select:
    '[&>div>div>div>select]:!border-e-0 [&>div:not(:first-child):not(:last-child)>div>div>select]:!rounded-none [&>div:first-child>div>div>select]:!rounded-e-none [&>div:last-child>div>div>select]:!rounded-s-none [&>div:last-child>div>div>select]:!border-e',

  combobox:
    '[&>div>div>div>input]:!border-e-0 [&>div:not(:first-child):not(:last-child)>div>div>input]:!rounded-none [&>div:first-child>div>div>input]:!rounded-e-none [&>div:last-child>div>div>input]:!rounded-s-none [&>div:last-child>div>div>input]:!border-e',

  listbox:
    '[&>div>div>div>button]:!border-e-0 [&>div:not(:first-child):not(:last-child)>div>div>button]:!rounded-none [&>div:first-child>div>div>button]:!rounded-e-none [&>div:last-child>div>div>button]:!rounded-s-none [&>div:last-child>div>div>button]:!border-e',
};
