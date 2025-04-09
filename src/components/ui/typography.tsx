import { VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { typographyVariants } from '@/components/variants/typographyVariants';
import { cn } from '@/lib/utils';

interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  as?: React.ElementType;
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, as: Component = 'p', ...props }, ref) => {
    return (
      <Component ref={ref} className={cn(typographyVariants({ variant, className }))} {...props} />
    );
  }
);

Typography.displayName = 'Typography';

export { Typography, typographyVariants };
