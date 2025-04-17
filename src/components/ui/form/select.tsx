import { Icon } from '@iconify/react';
import { LoaderCircle } from 'lucide-react';
import React, { type FC, useId } from 'react';

import { selectVariants } from '@/components/variants';
import { cn } from '@/lib/utils';
import { SelectProps } from 'types';

const Select: FC<SelectProps> = ({
  label,
  options,
  icon,
  color = 'default',
  shape,
  size = 'md',
  error,
  loading = false,
  className = '',
  containerClasses = '',
  id: providedId,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedby,
  required,
  ...props
}) => {
  const uniqueId = useId();
  const id = providedId || `select-${uniqueId}`;
  const errorId = error ? `${id}-error` : undefined;

  if (!Array.isArray(options)) {
    throw new Error('options must be an array!');
  }

  const transformedOptions = options.map(option =>
    typeof option === 'string' ? { label: option, value: option } : option
  );

  const combinedAriaDescribedby = [ariaDescribedby, errorId].filter(Boolean).join(' ') || undefined;

  const selectColor = error ? 'danger' : color;

  return (
    <div className={`w-full font-sans ${containerClasses}`}>
      {label && (
        <label htmlFor={id} className="font-sans text-sm text-muted-400 block mb-1">
          {label}
          {required && (
            <span className="text-danger-500 ms-1" aria-hidden="true">
              *
            </span>
          )}
        </label>
      )}
      <div className="relative">
        <div
          className={`
            group relative inline-block w-full 
            after:pointer-events-none after:absolute after:end-4 after:top-1/2 after:z-[4] 
            after:block after:h-2 after:w-2 after:rounded-sm
            after:border-b-2 after:border-s-2 
            after:border-muted-400 dark:after:border-muted-50 after:opacity-70
            after:transition-all after:duration-300 after:content-[''] 
            after:[transform:translateY(-50%)_rotate(-45deg)] 
            focus-within:after:[transform:translateY(-30%)_rotate(-225deg)]
            ${loading ? 'after:!border-transparent pointer-events-none' : ''}
          `}
        >
          <select
            id={id}
            className={selectVariants({
              size,
              color: selectColor,
              shape,
              className: `
                ${className}
                ${size === 'sm' && icon ? 'ps-8' : ''}
                ${size === 'md' && icon ? 'ps-9' : ''}
                ${size === 'lg' && icon ? 'ps-12' : ''}
                ${loading ? '!text-transparent !shadow-none !select-none' : ''}
              `,
            })}
            aria-invalid={error ? 'true' : 'false'}
            aria-required={required ? 'true' : 'false'}
            aria-describedby={combinedAriaDescribedby}
            aria-label={!label ? ariaLabel : undefined}
            aria-busy={loading ? 'true' : 'false'}
            disabled={loading || props.disabled}
            required={required}
            {...props}
          >
            {transformedOptions.map((opt, i) => (
              <option key={`${opt.value}-${i}`} value={opt.value} disabled={opt.disabled}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {icon && (
          <div
            className={`
              absolute start-0 top-0 flex h-full items-center justify-center 
              text-muted-400 transition-colors duration-300 pointer-events-none
              peer-focus-visible:text-primary-500 dark:text-muted-500 
              ${size === 'sm' ? 'ps-2.5 w-8' : ''} 
              ${size === 'md' ? 'ps-3 w-10' : ''} 
              ${size === 'lg' ? 'ps-4 w-12' : ''}
              ${error ? '!text-danger-500' : ''}
            `}
            aria-hidden="true"
          >
            <Icon
              icon={icon}
              className={`
                text-muted-500
                ${size === 'sm' ? 'h-3.5 w-3.5' : ''} 
                ${size === 'md' ? 'h-4.5 w-4.5' : ''} 
                ${size === 'lg' ? 'h-5 w-5' : ''}
              `}
            />
          </div>
        )}

        {loading && (
          <div
            className={`
              absolute end-0 top-0 flex h-full items-center justify-center 
              pe-3 text-muted-400 transition-colors duration-300 pointer-events-none
              ${size === 'sm' ? 'w-8' : ''} 
              ${size === 'md' ? 'w-10' : ''} 
              ${size === 'lg' ? 'w-12' : ''}
            `}
            aria-hidden="true"
          >
            <LoaderCircle
              className="animate-spin"
              size={size === 'lg' ? 20 : size === 'md' ? 16 : 14}
            />
          </div>
        )}
      </div>

      {error && (
        <p id={errorId} className={cn('mt-1 text-xs', error ? 'text-red-500' : 'text-green-500')}>
          {error}
        </p>
      )}
    </div>
  );
};

export default Select;
