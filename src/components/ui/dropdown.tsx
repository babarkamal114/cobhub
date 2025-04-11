'use client';
import { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import React, { type FC, useRef, useState, useEffect, KeyboardEvent } from 'react';

import { useOnClickOutside } from 'hooks';

import { IconButton } from './icon-button';

interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  title?: string;
  toggleIcon?: LucideIcon;
  toggleImage?: string | React.ReactNode;
  indicator?: boolean;
  showAll?: string;
  toggleClassNames?: string;
  indicatorClasses?: string;
  orientation?: 'start' | 'end';
  shape?: 'straight' | 'rounded' | 'smooth' | 'curved';
  ariaLabel?: string;
}

const Dropdown: FC<DropdownProps> = ({
  className = '',
  children,
  title = '',
  toggleIcon,
  toggleImage,
  indicator = false,
  showAll,
  indicatorClasses = '',
  orientation = 'start',
  shape = 'smooth',
  ariaLabel = 'Toggle dropdown menu',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const firstFocusableElementRef = useRef<HTMLElement | null>(null);

  useOnClickOutside(dropdownRef, () => setIsOpen(false));

  useEffect(() => {
    if (isOpen && menuRef.current) {
      const focusableElements = menuRef.current.querySelectorAll(
        'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
      ) as NodeListOf<HTMLElement>;

      if (focusableElements.length > 0) {
        firstFocusableElementRef.current = focusableElements[0];
      }
    }
  }, [isOpen]);

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      buttonRef.current?.focus();
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (!isOpen && firstFocusableElementRef.current) {
      setTimeout(() => {
        firstFocusableElementRef.current?.focus();
      }, 100);
    }
  };

  const shapeClass = {
    straight: '',
    rounded: 'rounded-md',
    smooth: 'rounded-lg',
    curved: 'rounded-xl',
  }[shape];

  const orientationClass =
    orientation === 'start'
      ? '-start-3 before:end-[85.5%] after:end-[86%]'
      : '-end-3 before:start-[90%] after:start-[90%]';

  return (
    <div
      ref={dropdownRef}
      className={`group relative text-start ${className} ${isOpen ? 'active' : ''}`}
      onKeyDown={handleKeyDown}
    >
      <div className="relative inline-block">
        <IconButton
          variant="pastel"
          shape="smooth"
          color="primary"
          onClick={toggleDropdown}
          aria-haspopup="true"
          aria-expanded={isOpen}
          aria-label={ariaLabel}
        >
          {toggleImage ? toggleImage : toggleIcon && React.createElement(toggleIcon)}
        </IconButton>

        {indicator && (
          <span
            className={`absolute top-0 right-0 block h-2 w-2 rounded-full bg-primary-500 ${indicatorClasses}`}
            aria-hidden="true"
          ></span>
        )}
      </div>

      <div
        ref={menuRef}
        role="menu"
        aria-labelledby="dropdown-button"
        className={`before:content-[' '] after:content-[' '] absolute top-[4rem] z-[5] w-[300px] border border-muted-200 bg-white shadow-lg shadow-muted-300/30 transition-all duration-300 before:pointer-events-none before:absolute before:bottom-full before:-ms-3 before:h-0 before:w-0 before:border-[12px] before:border-transparent before:border-b-muted-200 after:pointer-events-none after:absolute after:bottom-full after:-ms-[11px] after:h-0 after:w-0 after:border-[11px] after:border-transparent after:border-b-white dark:border-muted-800 dark:bg-muted-950 dark:shadow-muted-800/30 dark:before:border-b-muted-800 dark:after:border-b-muted-950 
          ${isOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-[5px] opacity-0'}
          ${orientationClass}
          ${shapeClass}
        `}
      >
        <div className="relative h-full w-full">
          {title && (
            <div className="flex items-center justify-between border-b border-muted-200 px-4 py-3 dark:border-muted-700">
              <div className="font-sans text-base font-medium text-muted-700 dark:text-muted-300">
                <span id="dropdown-title">{title}</span>
              </div>

              {showAll && (
                <Link
                  href={showAll}
                  className="cursor-pointer font-sans text-xs font-semibold text-primary-500 underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-1"
                  role="menuitem"
                >
                  View all
                </Link>
              )}
            </div>
          )}

          <div
            className={`${title ? title.toLowerCase() + '-items' : 'dropdown-items'} py-2`}
            aria-labelledby={title ? 'dropdown-title' : undefined}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

Dropdown.displayName = 'Dropdown';

export { Dropdown };
