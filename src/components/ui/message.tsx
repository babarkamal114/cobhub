import { Icon } from '@iconify/react';
import React, { useState, type FC } from 'react';
import { useId } from 'react';

import { MessageProps } from 'types';
import { messageVariants, messageDismissButtonVariants } from 'variants';

const Message: FC<MessageProps> = ({
  children,
  icon,
  label,
  variant = 'default',
  shape = 'smooth',
  dismissible = true,
  onClose,
  className,
}) => {
  const [visible, setVisible] = useState(true);
  const descriptionId = useId();

  const handleClose = () => {
    setVisible(false);
    onClose?.();
  };

  if (!visible) {
    return null;
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape' && dismissible) {
      handleClose();
    }
  };

  const iconElement = icon ? (
    <span className="flex-shrink-0" aria-hidden="true">
      <Icon height={24} width={24} icon={icon} />
    </span>
  ) : null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-describedby={label || children ? descriptionId : undefined}
      className={messageVariants({ variant, shape, className })}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      data-testid="message"
    >
      {children ? (
        <>
          {iconElement}
          <div id={descriptionId} className="flex-1">
            {children}
          </div>
        </>
      ) : (
        <div className="flex items-center gap-3 w-full">
          {iconElement}
          <p id={descriptionId} className="text-sm flex-1">
            {label}
          </p>
        </div>
      )}

      {dismissible && (
        <button
          type="button"
          aria-label="Close message"
          className={messageDismissButtonVariants({ variant })}
          onClick={handleClose}
        >
          <Icon height={14} width={14} icon="lucide:x" aria-hidden="true" />
        </button>
      )}
    </div>
  );
};

Message.displayName = 'Message';
export { Message };
