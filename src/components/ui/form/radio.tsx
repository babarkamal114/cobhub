import { Icon } from '@iconify/react';
import React, { type FC } from 'react';

import { RadioProps } from 'types';
import { radioVariants } from 'variants';

const colorBorderVariants: Record<string, string> = {
  default: 'border border-muted-300 dark:border-muted-700',
  contrast: 'border border-muted-700',
  muted: 'border border-muted-400',
  primary: 'border border-primary-500',
  success: 'border border-success-500',
  info: 'border border-info-500',
  warning: 'border border-warning-500',
  danger: 'border border-danger-500',
};

const Radio: FC<RadioProps> = ({ id, color, label, className: classes = '', ...props }) => {
  return (
    <div
      className={`radio-${color || 'default'} relative inline-block cursor-pointer leading-tight`}
    >
      <label
        htmlFor={id}
        className="flex items-center"
        role="radio"
        aria-checked={props.checked}
        tabIndex={0}
      >
        <span
          className={` shrink-0 relative flex h-5 w-5 items-center justify-center overflow-hidden rounded-full bg-muted-100 text-white transition-shadow duration-300 dark:bg-muted-800 ${colorBorderVariants[color || 'default']} `}
        >
          {' '}
          <input
            id={id}
            type="radio"
            className={`peer absolute top-0 start-0 z-[3] h-full w-full cursor-pointer appearance-none ${classes}`}
            aria-label={label}
            {...props}
          />
          <Icon
            icon="octicon:dot-fill-24"
            className={radioVariants({ color })}
            aria-hidden="true"
          />
          <span className="absolute top-0 start-0 z-[1] block h-full  w-full scale-0 rounded-full bg-white transition-transform duration-300 peer-checked:scale-[1.1] peer-checked:rounded-[.35rem] dark:bg-muted-900"></span>
        </span>
        <span className="ms-2 cursor-pointer text-[.9rem] text-muted-400" role="presentation">
          {label}
        </span>
      </label>
    </div>
  );
};

Radio.displayName = 'Radio';

export { Radio };
