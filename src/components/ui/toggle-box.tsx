import { Icon } from '@iconify/react';
import React, { FC, useEffect, useRef, useState } from 'react';

import { ToggleBoxProps } from 'types';

import { Card } from './card';

const ToggleBox: FC<ToggleBoxProps> = ({
  header,
  children,
  title,
  shape = 'smooth',
  color = 'contrast',
  growOnExpand,
  spaced,
  isToggle = false,
  open = false,
}) => {
  const [panelOpened, setPanelOpened] = useState(open);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setPanelOpened(open);
  }, [open]);

  const handleToggle = () => {
    if (!isToggle) return;
    setPanelOpened(prev => !prev);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isToggle) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggle();
    }
  };

  return (
    <Card
      shape={shape}
      color={color}
      className={`${panelOpened && growOnExpand ? 'md:p-6' : ''} ${spaced ? 'p-6' : 'p-4'}`}
    >
      <div
        role={isToggle ? 'button' : undefined}
        tabIndex={isToggle ? 0 : undefined}
        aria-expanded={panelOpened}
        aria-controls="toggle-box-content"
        className={`flex items-center justify-between ${isToggle ? 'cursor-pointer' : ''}`}
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
      >
        {header ?? (
          <h5
            className="font-sans text-sm font-medium text-muted-800 dark:text-muted-100"
            id="toggle-box-title"
          >
            {title}
          </h5>
        )}
        <div
          aria-hidden="true"
          className={`pointer-events-none transition-transform duration-300 ${
            panelOpened ? 'rotate-90' : ''
          } ${
            isToggle
              ? 'flex h-8 w-8 items-center justify-center rounded-full text-muted-400 hover:bg-muted-100 dark:hover:bg-muted-800 [&>svg]:h-4'
              : ''
          }`}
        >
          <Icon icon="lucide:chevron-right" className="text-muted-400" />
        </div>
      </div>

      <div
        id="toggle-box-content"
        ref={contentRef}
        style={{
          maxHeight: panelOpened ? `${contentRef.current?.scrollHeight}px` : '0px',
        }}
        className={`grid grid-cols-1 gap-4 overflow-hidden transition-all duration-300 ease-in-out ${
          panelOpened ? 'mt-3' : 'mt-0'
        }`}
        aria-labelledby="toggle-box-content"
      >
        {children}
      </div>
    </Card>
  );
};

ToggleBox.displayName = 'ToggleBox';

export { ToggleBox };
