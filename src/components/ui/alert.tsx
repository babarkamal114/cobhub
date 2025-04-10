import { Icon } from '@iconify/react';
import React, { useState, useEffect, type FC } from 'react';
import { useId } from 'react';

import { AlertProps } from 'types';
import { alertVariants, dismissButtonVariants } from 'variants';

const Alert: FC<AlertProps> = ({
  children,
  icon,
  label,
  color = 'info',
  shape = 'rounded',
  dismissible = true,
  onDismiss,
  className,
  autoClose = false,
  autoCloseDelay = 5000,
}) => {
  const [visible, setVisible] = useState(true);
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    let autoCloseTimer: ReturnType<typeof setTimeout> | null = null;

    if (autoClose && visible) {
      autoCloseTimer = setTimeout(() => {
        handleDismiss();
      }, autoCloseDelay);
    }

    return () => {
      if (autoCloseTimer) {
        clearTimeout(autoCloseTimer);
      }
    };
  }, [autoClose, autoCloseDelay, visible]);

  const handleDismiss = () => {
    setVisible(false);
    onDismiss?.();
  };

  if (!visible) {
    return null;
  }

  const alertRole = color === 'danger' || color === 'warning' ? 'alert' : 'status';
  const alertTitle =
    color === 'danger'
      ? 'Error'
      : color === 'warning'
        ? 'Warning'
        : color === 'success'
          ? 'Success'
          : color === 'info'
            ? 'Information'
            : '';

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape' && dismissible) {
      handleDismiss();
    }
  };

  const iconElement = icon ? (
    <span className="flex-shrink-0" aria-hidden="true">
      <Icon height={24} width={24} icon={icon} />
    </span>
  ) : null;

  return (
    <div
      role={alertRole}
      aria-live={color === 'danger' ? 'assertive' : 'polite'}
      aria-labelledby={alertTitle ? titleId : undefined}
      aria-describedby={label || children ? descriptionId : undefined}
      className={alertVariants({ color, shape, className })}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      data-testid="alert"
    >
      {children ? (
        <>
          {iconElement}
          <div id={descriptionId}>{children}</div>
        </>
      ) : (
        <div className="flex items-center gap-3 w-full">
          {iconElement}
          {alertTitle && (
            <span id={titleId} className="font-medium">
              {alertTitle}
            </span>
          )}
          <p id={descriptionId} className="text-sm">
            {label}
          </p>
        </div>
      )}

      {dismissible && (
        <button
          type="button"
          aria-label="Dismiss alert"
          className={dismissButtonVariants({ color, className })}
          onClick={handleDismiss}
        >
          <Icon height={14} width={14} icon="lucide:x" aria-hidden="true" />
        </button>
      )}
    </div>
  );
};
Alert.displayName = 'Alert';
export default Alert;
