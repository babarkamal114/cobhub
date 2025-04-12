import React, { type FC } from 'react';

import { ProgressProps } from 'types';
import { progressBarVaraints, progressWrapperVaraints } from 'variants';

const ProgressBar: FC<ProgressProps> = ({
  color,
  contrast,
  shape,
  size,
  value,
  max = 100,
  classNames,
  label = 'Progress',
}) => {
  const computedValue = typeof value === 'number' ? Math.min(value, max) : undefined;
  const isIndeterminate = value === undefined;

  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuenow={computedValue}
      className={[
        progressWrapperVaraints({ size, shape, contrast }),
        Array.isArray(classNames) ? classNames.join(' ') : classNames,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div
        className={progressBarVaraints({ color, shape, indeterminate: isIndeterminate })}
        style={{
          width: computedValue !== undefined ? `${(computedValue / max) * 100}%` : undefined,
        }}
      />
    </div>
  );
};

ProgressBar.displayName = 'Progress';

export { ProgressBar };
