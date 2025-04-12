import { Slot } from '@radix-ui/react-slot';
import { LoaderCircle } from 'lucide-react';
import Link from 'next/link';
import * as React from 'react';

import { cn } from '@/lib/utils';
import { ButtonLinkProps } from 'types';
import { buttonVariants } from 'variants';

const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  (
    {
      'aria-label': ariaLabel,
      asChild = false,
      children,
      className,
      color,
      disabled,
      isDisabled = false,
      isLoading = false,
      shape,
      size,
      variant,
      href,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : Link;
    const isButtonDisabled = disabled || isDisabled || isLoading;

    const loadingId = React.useId();

    return (
      <Comp
        className={cn(
          buttonVariants({
            className,
            color,
            isDisabled: isButtonDisabled,
            isLoading,
            shape,
            size,
            variant,
          })
        )}
        ref={ref}
        href={href}
        role="button"
        aria-disabled={isButtonDisabled ? true : undefined}
        aria-label={ariaLabel}
        tabIndex={isButtonDisabled ? -1 : undefined}
        {...(isDisabled && { onClick: (e: React.MouseEvent) => e.preventDefault() })}
        {...(isLoading ? { 'aria-describedby': loadingId, 'aria-busy': 'true' } : {})}
        {...props}
      >
        {isLoading && (
          <>
            <LoaderCircle className="animate-spin" />
          </>
        )}

        {children}
      </Comp>
    );
  }
);
ButtonLink.displayName = 'ButtonLink';

export { ButtonLink };
