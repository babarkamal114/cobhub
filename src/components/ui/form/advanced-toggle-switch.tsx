import { Icon } from '@iconify/react';
import React, { type FC } from 'react';

import { ToggleSwitchProps } from 'types';

const AdvancedToggleSwitch: FC<ToggleSwitchProps> = ({
  checked,
  startIcon = 'lucide:check',
  endIcon = 'lucide:lock',
  startColor = 'primary',
  endColor = 'danger',
  label,
  color,
  className: classes,
  ...props
}) => {
  return (
    <label
      className="relative block w-[60px] cursor-pointer select-none text-lg"
      htmlFor={props.id}
    >
      {label && <span className="sr-only">{label}</span>}
      <input
        type="checkbox"
        id={props.id}
        checked={checked}
        className="peer absolute cursor-pointer opacity-0"
        aria-checked={checked ? 'true' : 'false'}
        style={{ color: color as string }}
        {...props}
      />
      <span className="relative block h-5 w-[55px] rounded-full border-2 border-muted-200 bg-muted-200 dark:border-muted-800 dark:bg-muted-900 peer-checked:[&>.off]:translate-x-[85%] peer-checked:[&>.off]:rotate-[360deg] peer-checked:[&>.off]:opacity-100 peer-checked:[&>.on]:translate-x-full peer-checked:[&>.on]:rotate-[360deg] peer-checked:[&>.on]:opacity-0">
        <span
          className={`off absolute -start-0.5 -top-2 z-0 flex h-8 w-8 translate-x-0 rotate-0 items-center justify-center rounded-full opacity-0 transition-all duration-300 ease-in
            ${classes}
            ${
              endColor === 'default'
                ? 'border border-muted-200 bg-white text-muted-600 dark:border-muted-700 dark:bg-muted-800 dark:text-muted-100'
                : ''
            }  
            ${endColor === 'primary' ? 'border-primary-500 bg-primary-500 text-white' : ''}
            ${endColor === 'info' ? 'border-info-500 bg-info-500 text-white' : ''}
            ${endColor === 'success' ? 'border-success-500 bg-success-500 text-white' : ''}
            ${endColor === 'warning' ? 'border-warning-500 bg-warning-500 text-white' : ''}
            ${endColor === 'danger' ? 'border-danger-500 bg-danger-500 text-white' : ''}
          `}
        >
          <Icon className="h-4 w-4 text-current" icon={endIcon} />
        </span>
        <span
          className={`on absolute -start-0.5 -top-2 z-[1] flex h-8 w-8 translate-x-0 rotate-0 items-center justify-center rounded-full opacity-100 transition-all duration-300 ease-in 
            ${classes}  
            ${
              startColor === 'default'
                ? 'border border-muted-200 bg-white text-muted-600 dark:border-muted-700 dark:bg-muted-800 dark:text-muted-100'
                : ''
            }  
            ${startColor === 'primary' ? 'border-primary-500 bg-primary-500 text-white' : ''}
            ${startColor === 'info' ? 'border-info-500 bg-info-500 text-white' : ''}
            ${startColor === 'success' ? 'border-success-500 bg-success-500 text-white' : ''}
            ${startColor === 'warning' ? 'border-warning-500 bg-warning-500 text-white' : ''}
            ${startColor === 'danger' ? 'border-danger-500 bg-danger-500 text-white' : ''}
          `}
        >
          <Icon className="h-4 w-4 text-current" icon={startIcon} />
        </span>
      </span>
    </label>
  );
};

AdvancedToggleSwitch.displayName = 'AdvancedToggleSwitch';

export { AdvancedToggleSwitch };
