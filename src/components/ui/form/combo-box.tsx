'use client';

import { Combobox, Transition } from '@headlessui/react';
import { Icon } from '@iconify/react';
import React, { type FC, Fragment, useCallback, useMemo, useState } from 'react';

import { comboBoxVariants } from '@/components/variants/comboBox-variants';
import { cn } from '@/lib/utils';
import { Shape } from '@/types';
import { ComboBoxProps } from '@/types/components';

import Avatar from '../avatar';
import { Loader } from '../loader';

// Helper function for shape classes
const getShapeClasses = (shape?: Shape | null) => {
  switch (shape) {
    case 'rounded':
      return 'rounded-md';
    case 'smooth':
      return 'rounded-lg';
    case 'curved':
      return 'rounded-xl';
    case 'full':
      return 'rounded-xl';
    default:
      return '';
  }
};

const ComboBox: FC<ComboBoxProps> = React.memo(
  ({
    items,
    selected,
    setSelected,
    label,
    error,
    loading = false,
    disabled = false,
    className,
    size,
    shape,
    color,
    noResultText = 'Nothing Found...',
    ...props
  }) => {
    const [query, setQuery] = useState('');

    const filteredItems = useMemo(
      () =>
        query === ''
          ? items
          : items.filter(item => {
              return item?.name
                ?.toLowerCase()
                .replace(/\s+/g, '')
                .includes(query.toLowerCase().replace(/\s+/g, ''));
            }),
      [items, query]
    );

    const handleQueryChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(event.target.value);
    }, []);

    const shapeClasses = useMemo(() => getShapeClasses(shape), [shape]);

    const sizeClasses = useMemo(() => {
      switch (size) {
        case 'sm':
          return 'h-8 w-8';
        case 'lg':
          return 'h-12 w-12';
        default:
          return 'h-10 w-10';
      }
    }, [size]);

    const iconSizeClasses = useMemo(() => {
      switch (size) {
        case 'sm':
          return 'h-3 w-3';
        case 'lg':
          return 'h-5 w-5';
        default:
          return 'h-4 w-4';
      }
    }, [size]);

    const avatarSize = useMemo(() => {
      return size === 'lg' ? 'xxs' : 'xxxs';
    }, [size]);

    const loaderColorClasses = useMemo(() => {
      return color === 'muted' || color === 'mutedContrast' ? 'text-muted-400' : 'text-muted-300';
    }, [color]);

    const borderColorClasses = useMemo(() => {
      switch (color) {
        case 'default':
          return 'border-muted-200 bg-white dark:border-muted-700 dark:bg-muted-800';
        case 'contrast':
          return 'border-muted-200 bg-white dark:border-muted-800 dark:bg-muted-950';
        case 'muted':
          return 'border-muted-200 bg-white dark:border-muted-700 dark:bg-muted-800';
        case 'mutedContrast':
          return 'border-muted-200 bg-white dark:border-muted-800 dark:bg-muted-950';
        default:
          return '';
      }
    }, [color]);

    return (
      <div className={cn('relative w-full', className)}>
        <Combobox value={selected} onChange={setSelected}>
          <div className="relative mt-1">
            {!!label && <label className="font-sans text-[.85rem] text-muted-400">{label}</label>}
            <div className="relative z-0 w-full font-sans">
              <Combobox.Input
                className={comboBoxVariants({
                  size,
                  color,
                  shape,
                  hasLeftElement: !!(selected?.icon || selected?.image),
                  leftElementType: selected?.icon ? 'icon' : selected?.image ? 'image' : 'none',
                  className: cn(
                    'peer relative text-start flex items-center',
                    error && '!border-danger-500',
                    disabled && '!pointer-events-none !cursor-not-allowed !opacity-50',
                    loading &&
                      'pointer-events-none !text-transparent !shadow-none placeholder:!text-transparent !select-none'
                  ),
                })}
                displayValue={(item: any) => item?.name || ''}
                onChange={handleQueryChange}
                {...props}
              />
              <div
                className={cn(
                  'absolute start-0 top-1/2 -translate-y-1/2 z-0 flex items-center justify-center text-muted-400 transition-colors duration-300 peer-focus-visible:text-primary-500 dark:text-muted-500',
                  sizeClasses
                )}
              >
                {!!selected?.icon && !selected?.image && (
                  <Icon
                    icon={selected?.icon}
                    className={cn(iconSizeClasses, error && '!text-danger-500')}
                  />
                )}
                {!!selected?.image && !selected?.icon && (
                  <Avatar
                    src={selected?.image}
                    text={selected?.name.substring(0, 1)}
                    size={avatarSize}
                  />
                )}
              </div>
              {!!loading && (
                <div
                  className={cn(
                    'absolute end-0 top-1/2 -translate-y-1/2 z-0 flex items-center justify-center text-muted-400 transition-colors duration-300 peer-focus-visible:text-primary-500 dark:text-muted-500',
                    sizeClasses
                  )}
                >
                  <Loader
                    classNames={cn('dark:text-muted-200', loaderColorClasses)}
                    size="lg"
                    thickness="xs"
                    color={'default'}
                  />
                </div>
              )}
              <Combobox.Button
                className={cn(
                  'peer:focus-visible:[&>svg]:rotate-180 absolute end-0 top-0 flex items-center',
                  sizeClasses,
                  loading && '!pointer-events-none !text-transparent !opacity-0 !select-none'
                )}
              >
                <Icon
                  icon="lucide:chevrons-up-down"
                  className="h-4 w-4 text-muted-400 transition-transform duration-300"
                  aria-hidden="true"
                />
              </Combobox.Button>
            </div>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              afterLeave={() => setQuery('')}
            >
              <Combobox.Options
                className={cn(
                  'slimscroll absolute z-50 mt-1 w-full overflow-auto border bg-white dark:bg-slate-900 dark:text-white !p-2 text-base shadow-lg shadow-muted-300/30 ring-1 ring-primary-500 ring-opacity-5 focus:outline-none dark:shadow-muted-800/20 sm:text-sm',
                  shapeClasses,
                  borderColorClasses
                )}
              >
                {filteredItems.length === 0 && query !== '' ? (
                  <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                    {noResultText}
                  </div>
                ) : (
                  filteredItems.map(item => (
                    <Combobox.Option
                      key={item.id}
                      className={({ active }) =>
                        cn(
                          'relative flex cursor-default select-none items-center gap-2 p-2 transition-colors duration-300',
                          shapeClasses,
                          active
                            ? 'bg-primary-500/10 text-primary-700 dark:bg-primary-500/20'
                            : 'text-muted-600 dark:text-muted-400'
                        )
                      }
                      value={item}
                    >
                      {({ selected }) => (
                        <>
                          {!!item?.icon && !item?.image && (
                            <span className="pointer-events-none flex items-center justify-center">
                              <Icon
                                icon={item?.icon}
                                className="h-5 w-5 text-muted-400 transition-colors duration-300"
                                aria-hidden="true"
                              />
                            </span>
                          )}
                          {!!item?.image && !item?.icon && (
                            <Avatar
                              src={item?.image}
                              text={item?.name.substring(0, 1)}
                              size="xxs"
                            />
                          )}
                          <span
                            className={cn(
                              'block truncate',
                              selected ? 'font-medium' : 'font-normal'
                            )}
                          >
                            {item.name}
                          </span>
                          {selected && (
                            <span className="relative z-0 ms-auto flex items-center pe-2 text-primary-600">
                              <Icon icon="lucide:check" className="h-4 w-4" aria-hidden="true" />
                            </span>
                          )}
                        </>
                      )}
                    </Combobox.Option>
                  ))
                )}
              </Combobox.Options>
            </Transition>
          </div>
        </Combobox>
        {error && <p className="mt-1 text-sm text-danger-500 dark:text-danger-400">{error}</p>}
      </div>
    );
  }
);

ComboBox.displayName = 'ComboBox';

export { ComboBox };
