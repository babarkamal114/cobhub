import React, { type FC, useMemo } from 'react';

import { cn } from '@/lib/utils';
import { ProgressProps } from 'types';
import { progressBarVariants, progressWrapperVariants } from 'variants';

const ProgressBar: FC<ProgressProps> = React.memo(
  ({ color, contrast, shape, size, value, max = 100, classNames, label = 'Progress' }) => {
    const computedValue = useMemo(
      () => (typeof value === 'number' ? Math.min(value, max) : undefined),
      [value, max]
    );

    const isIndeterminate = useMemo(() => value === undefined, [value]);

    const progressWidth = useMemo(
      () => (computedValue !== undefined ? `${(computedValue / max) * 100}%` : undefined),
      [computedValue, max]
    );

    return (
      <div
        role="progressbar"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={computedValue}
        className={cn(progressWrapperVariants({ size, shape, contrast }), classNames)}
      >
        <div
          className={progressBarVariants({ color, shape, indeterminate: isIndeterminate })}
          style={{ width: progressWidth }}
        />
      </div>
    );
  }
);

ProgressBar.displayName = 'Progress';

export { ProgressBar };
