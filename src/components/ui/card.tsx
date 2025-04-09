import type { VariantProps } from 'class-variance-authority';
import React from 'react';

import { cn } from '@/lib/utils';
import { cardVariants } from 'variants';

interface CardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>,
    VariantProps<typeof cardVariants> {}

const Card = ({
  children,
  color = 'default',
  shape = 'smooth',
  shadow = 'none',
  className,
  ...props
}: CardProps) => {
  return (
    <div className={cn(cardVariants({ color, shape, shadow }), className)} {...props}>
      {children}
    </div>
  );
};

export default Card;
