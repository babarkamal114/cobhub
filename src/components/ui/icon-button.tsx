import { Icon } from '@iconify/react/dist/iconify.js';
import type { VariantProps } from 'class-variance-authority';
import React, { type ButtonHTMLAttributes, type FC } from 'react';

import { cn } from '@/lib/utils';
import { buttonIconVariants } from 'variants';

interface IconButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
    VariantProps<typeof buttonIconVariants> {
  children?: React.ReactNode;
  loading?: boolean;
}

const IconButton: FC<IconButtonProps> = ({
  variant,
  color,
  shape,
  size = 'md',
  className: classes,
  children,
  loading = false,
  ...props
}) => {
  const isButtonDisabled = loading;

  return (
    <button
      className={cn(
        buttonIconVariants({
          variant,
          shape,
          color,
          size,
        }),
        classes
      )}
      disabled={isButtonDisabled}
      aria-disabled={isButtonDisabled}
      {...props}
    >
      {loading ? (
        <Icon
          icon="line-md:loading-twotone-loop"
          className="animate-spin absolute text-current"
          width={24}
          height={24}
        />
      ) : (
        children
      )}
    </button>
  );
};

IconButton.displayName = 'IconButton';

export { IconButton };
