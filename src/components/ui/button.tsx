import { Icon } from '@iconify/react/dist/iconify.js';
import { Slot } from '@radix-ui/react-slot';
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
            <Icon
              icon="line-md:loading-twotone-loop"
              className="animate-spin"
              width={24}
              height={24}
            />
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
