import { buttonVariants } from "variants";
import { cn } from "@/lib/utils";
import { type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import * as React from "react";

export type ButtonColor = "default" | "contrast" | "muted" | "primary" | "info" | "success" | "warning" | "danger";

export type ButtonSize = "sm" | "md" | "lg";

export type ButtonVariant = "solid" | "pastel" | "outlined";

export type ButtonShape = "straight" | "rounded" | "smooth" | "curved" | "full";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  color?: ButtonColor;
  isDisabled?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  loadingText?: string;
  rightIcon?: React.ReactNode;
  shape?: ButtonShape;
  size?: ButtonSize;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      "aria-label": ariaLabel,
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
      type = "button",
      variant,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    const isButtonDisabled = disabled || isDisabled || isLoading;

    const loadingId = React.useId();

    return (
      <Comp
        className={cn(buttonVariants({
          className,
          color,
          isDisabled: isButtonDisabled,
          isLoading,
          shape,
          size,
          variant,
        }))}
        ref={ref}
        disabled={isButtonDisabled}
        role="button"
        type={type}
        aria-disabled={isButtonDisabled}
        aria-busy={isLoading}
        aria-label={ariaLabel}
        {...(isLoading && loadingText
          ? { "aria-describedby": loadingId }
          : {}
        )}
        {...props}
      >
        {isLoading && (
          <>
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
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
Button.displayName = "Button";

export { Button, buttonVariants };