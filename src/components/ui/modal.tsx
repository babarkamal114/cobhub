'use client';
import { X } from 'lucide-react';
import React, { type FC, useEffect, useRef } from 'react';

import { ModalProps } from 'types';
import { IconButton } from 'ui-components';

const Modal: FC<ModalProps> = ({
  open,
  size = 'md',
  classes,
  children,
  onBackdropClick,
  onClose,
  title,
  description,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && modalRef.current) {
      modalRef.current.focus();
    }
  }, [open]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) {
        onClose?.();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto overflow-x-hidden p-4 ${
        classes?.wrapper || ''
      }`}
    >
      <div
        role="button"
        className={`fixed inset-0 bg-muted-800/70 dark:bg-muted-900/80 ${classes?.backdrop || ''}`}
        onClick={() => {
          onBackdropClick?.();
        }}
        aria-label="Close modal"
      ></div>

      <div
        className={`relative z-[10000] mx-auto w-full transform transition-all duration-300
          ${size === 'sm' ? 'max-w-sm' : ''}
          ${size === 'md' ? 'max-w-md' : ''}
          ${size === 'lg' ? 'max-w-xl' : ''}
          ${size === 'xl' ? 'max-w-2xl' : ''}
          ${size === '2xl' ? 'max-w-3xl' : ''}
          ${size === '3xl' ? 'max-w-5xl' : ''}
        `}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
        aria-describedby={description ? 'modal-description' : undefined}
      >
        <div
          ref={modalRef}
          tabIndex={-1}
          className={`relative flex min-h-fit w-full flex-col rounded-lg bg-white p-6 border border-slate-200 dark:border-slate-700 shadow-lg dark:bg-slate-800 ${
            classes?.dialog || ''
          }`}
        >
          {title && <h2 className="sr-only">{title}</h2>}
          {description && (
            <p id="modal-description" className="sr-only">
              {description}
            </p>
          )}

          {children}

          {onClose && (
            <IconButton
              aria-label="Close"
              onClick={onClose}
              className="absolute top-4 right-4"
              variant="outlined"
              color="default"
              size="xs"
              shape="rounded"
            >
              <X className="text-slate-800 dark:text-slate-50" />
              <span className="sr-only">Close</span>
            </IconButton>
          )}
        </div>
      </div>
    </div>
  );
};

Modal.displayName = 'Modal';

export { Modal };
