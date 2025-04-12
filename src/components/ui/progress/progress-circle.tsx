import React, { type FC } from 'react';

import { CIRCUMFERENCE, RADIUS } from '@/lib/utils/constants';
import { ProgressProps } from 'types';

const ProgressCircle: FC<ProgressProps> = ({
  color = 'default',
  contrast = 'default',
  strockSize = 60,
  value,
  max = 100,
  thickness = 4,
  classNames,
  label = 'Progress',
  ...props
}) => {
  const computedValue = typeof value === 'number' ? Math.min(value, max) : undefined;
  const progress = computedValue !== undefined ? (computedValue / max) * 100 : 0;
  const strokeDashoffset = CIRCUMFERENCE - (progress / 100) * CIRCUMFERENCE;

  return (
    <svg
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuenow={computedValue}
      width={strockSize}
      height={strockSize}
      viewBox="0 0 45 45"
      className={['block -rotate-90', Array.isArray(classNames) ? classNames.join(' ') : classNames]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      <title>{`${label}: ${computedValue !== undefined ? `${progress.toFixed(0)}%` : 'Loading...'}`}</title>
      <circle
        className={`stroke-current text-muted-200 ${
          contrast === 'default' ? 'dark:text-muted-700' : 'dark:text-muted-900'
        }`}
        strokeWidth={thickness}
        fill="none"
        cx="50%"
        cy="50%"
        r={RADIUS}
      />
      <circle
        className={`stroke-current transition-all duration-500
          ${color === 'primary' ? 'text-primary-500' : ''}
          ${color === 'info' ? 'text-info-500' : ''}
          ${color === 'success' ? 'text-success-500' : ''}
          ${color === 'warning' ? 'text-warning-500' : ''}
          ${color === 'danger' ? 'text-danger-500' : ''}
          ${color === 'default' ? 'text-default-700' : ''}
          ${color === 'contrast' ? 'text-default-900' : ''}
        `}
        strokeWidth={thickness}
        strokeLinecap="round"
        fill="none"
        cx="50%"
        cy="50%"
        r={RADIUS}
        strokeDasharray={CIRCUMFERENCE}
        strokeDashoffset={value === undefined ? CIRCUMFERENCE : strokeDashoffset}
      ></circle>
    </svg>
  );
};

export { ProgressCircle };
