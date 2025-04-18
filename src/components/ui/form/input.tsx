'use client';
import { Eye, EyeOff, X } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils';
import { InputProps } from 'types';
import { inputVariants } from 'variants';

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      variant,
      inputSize,
      leftIcon,
      rightIcon,
      error,
      success,
      showPasswordToggle,
      onClear,
      showClearButton,
      label,
      labelFor,
      type,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const isPassword = type === 'password';
    const hasValue = props.value !== undefined && props.value !== '';

    return (
      <div className="relative w-full">
        {label && (
          <label
            htmlFor={labelFor}
            className="block text-sm font-medium text-gray-800 dark:text-gray-100 mb-1"
          >
            {label}
          </label>
        )}
        <div className="relative mt-1">
          {leftIcon && (
            <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
              {leftIcon}
            </div>
          )}
          <input
            id={labelFor}
            type={isPassword && showPassword ? 'text' : type}
            className={cn(
              inputVariants({
                variant: error ? 'error' : success ? 'success' : variant,
                inputSize,
              }),
              leftIcon && 'pl-10',
              (rightIcon || showPasswordToggle || (showClearButton && hasValue)) && 'pr-10',
              className
            )}
            ref={ref}
            {...props}
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
            {showClearButton && hasValue && (
              <button
                type="button"
                onClick={onClear}
                className="text-gray-600 hover:text-gray-800 dark:text-gray-600 dark:hover:text-gray-800"
              >
                <X className="h-4 w-4" />
              </button>
            )}
            {showPasswordToggle && isPassword && (
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            )}
            {rightIcon && !showPasswordToggle && !showClearButton && (
              <div className="text-gray-500">{rightIcon}</div>
            )}
          </div>
        </div>
        {(error || success) && (
          <p className={cn('mt-1 text-xs', error ? 'text-red-500' : 'text-green-500')}>
            {error || success}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input, inputVariants };
