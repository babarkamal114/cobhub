import React, { useState, type FC } from 'react';

import { TooltipProps } from 'types';
import {
  tooltipVariants,
  tooltipWrapperVariants,
  tooltipChildrenVariants,
  tooltipContentVariants,
} from 'variants';

const Tooltip: FC<TooltipProps> = ({ children, content, position = 'top', className }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={tooltipWrapperVariants()}>
      <div
        className={tooltipChildrenVariants()}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        tabIndex={0}
        role="tooltip"
        aria-describedby="tooltip-content"
      >
        {children}
      </div>

      {isHovered && (
        <div
          className={tooltipVariants({ position, className })}
          role="tooltip"
          id="tooltip-content"
        >
          <div className={tooltipContentVariants()}>{content}</div>
        </div>
      )}
    </div>
  );
};

Tooltip.displayName = 'Tooltip';
export { Tooltip };
