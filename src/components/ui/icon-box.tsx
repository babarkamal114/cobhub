import { Icon } from '@iconify/react';
import React, { type FC } from 'react';

import { cn } from '@/lib/utils';
import { IconBoxProps } from 'types';
import { iconboxVariants } from 'variants';

const IconBox: FC<IconBoxProps> = ({
  variant,
  color = 'default',
  icon,
  shape = 'full',
  size = 'md',
  mask,
  shadow,
  className: classes = '',
  iconClasses = '',
  label,
  ...props
}) => {
  const isMaskApplicable = shape === 'straight' && variant !== 'outlined' && mask;

  const maskClass = isMaskApplicable ? (mask === 'hex' ? 'mask mask-hex' : `mask-${mask}`) : '';

  console.log({ maskClass });

  return (
    <div
      className={iconboxVariants({
        variant,
        color,
        shape,
        size,
        shadow,
        className: `relative flex items-center justify-center shrink-0 ${classes} 
        ${shape === 'straight' && variant !== 'outlined' && mask === 'hex' ? 'mask mask-hex' : ''} 
        ${shape === 'straight' && variant !== 'outlined' && mask === 'hexed' ? 'mask mask-hexed' : ''} 
        ${shape === 'straight' && variant !== 'outlined' && mask === 'blob' ? 'mask mask-blob' : ''} 
        ${shape === 'straight' && variant !== 'outlined' && mask === 'deca' ? 'mask mask-deca' : ''} 
        ${
          shape === 'straight' && variant !== 'outlined' && mask === 'diamond'
            ? 'mask mask-diamond'
            : ''
        }`,
      })}
      role="img"
      aria-label={label ?? (typeof icon === 'string' ? icon : 'icon')}
      tabIndex={0}
      {...props}
    >
      <Icon icon={icon} className={cn(iconClasses)} />
    </div>
  );
};

IconBox.displayName = 'IconBox';

export { IconBox };
