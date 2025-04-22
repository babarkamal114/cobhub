import { Icon } from '@iconify/react/dist/iconify.js';
import React, { type FC, useId } from 'react';

import { TextAreaProps } from 'types';
import { textareaVariants } from 'variants';

const Textarea: FC<TextAreaProps> = ({
  label,
  error,
  color = 'default',
  shape = 'smooth',
  resize = false,
  loading = false,
  className: classes = '',
  id,
  ...props
}) => {
  const generatedId = useId();
  const textareaId = id || generatedId;
  const errorId = `${textareaId}-error`;

  return (
    <div className="w-full font-sans">
      {label && (
        <label htmlFor={textareaId} className="mb-1 block text-sm font-medium text-muted-400">
          {label}
        </label>
      )}

      <div className="relative w-full text-base">
        <textarea
          id={textareaId}
          rows={4}
          aria-invalid={!!error}
          aria-busy={loading}
          aria-describedby={error ? errorId : undefined}
          className={textareaVariants({
            color,
            shape,
            className: `
              ${classes}
              ${!resize ? 'resize-none' : ''}
              ${error ? '!border-danger-500' : ''}
              ${
                loading
                  ? 'pointer-events-none !text-transparent !shadow-none placeholder:!text-transparent !select-none'
                  : ''
              }
            `,
          })}
          {...props}
        />

        {loading && (
          <div className="absolute end-0 top-0 z-10 flex h-10 w-10 items-center justify-center text-muted-400 dark:text-muted-500">
            <>
              <Icon
                icon="line-md:loading-twotone-loop"
                className="animate-spin"
                width={24}
                height={24}
              />
            </>
          </div>
        )}

        {error && (
          <span id={errorId} className="-mt-1 block text-xs text-danger-500">
            {error}
          </span>
        )}
      </div>
    </div>
  );
};

Textarea.displayName = 'Textarea';

export { Textarea };
