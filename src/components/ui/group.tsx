import React, { type FC } from 'react';

import { GroupProps } from 'types';
import { groupVariants, groupElementClasses } from 'variants';

const Group: FC<GroupProps> = ({
  children,
  orientation = 'horizontal',
  spacing = 'none',
  className,
  ...props
}) => {
  const allElementClasses = Object.values(groupElementClasses).join(' ');

  return (
    <div
      className={`${groupVariants({ orientation, spacing, className })} ${allElementClasses}`}
      {...props}
      role="group"
      aria-label="Form element group"
    >
      {children}
    </div>
  );
};

Group.displayName = 'Group';
export { Group };
