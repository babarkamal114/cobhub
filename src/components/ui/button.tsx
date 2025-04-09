import { Slot } from '@radix-ui/react-slot';
import { LoaderCircle } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils';
import { ButtonProps } from 'types';
import { buttonVariants } from 'variants';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
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
      leftIcon,
      loadingText,
      rightIcon,
      shape,
      size,
      type = 'button',
      variant,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
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
        disabled={isButtonDisabled}
        role="button"
        type={type}
        aria-disabled={isButtonDisabled}
        aria-busy={isLoading}
        aria-label={ariaLabel}
        {...(isLoading && loadingText ? { 'aria-describedby': loadingId } : {})}
        {...props}
      >
        {isLoading && (
          <>
            <LoaderCircle className="animate-spin" />
            {loadingText && (
              <span id={loadingId} className="sr-only">
                {loadingText}
              </span>
            )}
          </>
        )}
        {leftIcon && !isLoading && (
          <span className="mr-2 inline-flex" aria-hidden="true">
            {leftIcon}
          </span>
        )}
        {children}
        {rightIcon && !isLoading && (
          <span className="ml-2 inline-flex" aria-hidden="true">
            {rightIcon}
          </span>
        )}
      </Comp>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
