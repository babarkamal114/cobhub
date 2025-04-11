import type { VariantProps } from 'class-variance-authority';
import React, { type FC } from 'react';

import { tagVariants } from 'variants';

interface TagProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'color'>,
    VariantProps<typeof tagVariants> {
  children: React.ReactNode;
}

const Tag: FC<TagProps> = ({
  children,
  variant,
  color,
  shape,
  className: classes = '',
  ...props
}) => {
  return (
    <span
      className={tagVariants({
        shape,
        variant,
        color,
        className: `${classes}`,
      })}
      {...props}
    >
      {children}
    </span>
  );
};

Tag.displayName = 'Tag';

export { Tag };
