import React, { useState, type FC } from 'react';

import { TooltipProps } from 'types';
import {
  tooltipVariants,
  tooltipWrapperVariants,
  tooltipChildrenVariants,
  tooltipContentVariants,
} from 'variants';

const Tooltip: FC<TooltipProps> = ({
  tooltipContent,
  children,
  position = 'top',
  className,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={tooltipWrapperVariants()} {...props}>
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
        <div className={tooltipVariants({ position, className })} role="tooltip">
          <div id="tooltip-content" className={tooltipContentVariants()}>
            {tooltipContent}
          </div>
        </div>
      )}
    </div>
  );
};

Tooltip.displayName = 'Tooltip';
export { Tooltip };
