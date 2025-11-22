import React, { type FC, useMemo } from 'react';

import { cn } from '@/lib/utils';
import { CIRCUMFERENCE, RADIUS } from '@/lib/utils/constants';
import { ProgressProps } from 'types';

const ProgressCircle: FC<ProgressProps> = React.memo(
  ({
    color = 'default',
    contrast = 'default',
    strokeSize = 60,
    value,
    max = 100,
    thickness = 4,
    classNames,
    label = 'Progress',
    ...props
  }) => {
    const computedValue = useMemo(
      () => (typeof value === 'number' ? Math.min(value, max) : undefined),
      [value, max]
    );

    const progress = useMemo(
      () => (computedValue !== undefined ? (computedValue / max) * 100 : 0),
      [computedValue, max]
    );

    const strokeDashoffset = useMemo(
      () => CIRCUMFERENCE - (progress / 100) * CIRCUMFERENCE,
      [progress]
    );

    const contrastClass = useMemo(
      () => (contrast === 'default' ? 'dark:text-muted-700' : 'dark:text-muted-900'),
      [contrast]
    );

    const colorClass = useMemo(() => {
      switch (color) {
        case 'primary':
          return 'text-primary-500';
        case 'info':
          return 'text-info-500';
        case 'success':
          return 'text-success-500';
        case 'warning':
          return 'text-warning-500';
        case 'danger':
          return 'text-danger-500';
        case 'contrast':
          return 'text-default-900';
        case 'default':
        default:
          return 'text-default-700';
      }
    }, [color]);

    return (
      <svg
        role="progressbar"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={computedValue}
        width={strokeSize}
        height={strokeSize}
        viewBox="0 0 45 45"
        className={cn('block -rotate-90', classNames)}
        {...props}
      >
        <title>{`${label}: ${computedValue !== undefined ? `${progress.toFixed(0)}%` : 'Loading...'}`}</title>
        <circle
          className={cn('stroke-current text-muted-200', contrastClass)}
          strokeWidth={thickness}
          fill="none"
          cx="50%"
          cy="50%"
          r={RADIUS}
        />
        <circle
          className={cn('stroke-current transition-all duration-500', colorClass)}
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
  }
);

ProgressCircle.displayName = 'ProgressCircle';

export { ProgressCircle };
