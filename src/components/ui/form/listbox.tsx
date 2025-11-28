import { Listbox, ListboxOption, ListboxOptions, Transition } from '@headlessui/react';
import { Icon } from '@iconify/react';
import { Loader } from 'lucide-react';
import React, { FC, Fragment, useMemo } from 'react';

import { listBoxVarients } from '@/components/variants/listbox-varients';
import { cn, SIZE_CLASSES, SHAPE_CLASSES } from 'lib';
import { ListBoxProps } from 'types';
import { Avatar } from 'ui-components';

// Size mappings for cleaner code

const ListBox: FC<ListBoxProps> = ({
  variant,
  bordered,
  shape,
  label,
  selected,
  setSelected,
  items = [],
  size,
  error,
  disabled = false,
  loading = false,
  multiple = false,
  classNames,
  ...props
}) => {
  // Handler for selection changes
  const handleChange = (value: any) => {
    if (setSelected) {
      setSelected(value);
    }
  };

  // Determine the variant based on state
  const computedVariant = loading ? 'loading' : disabled ? 'disabled' : variant;

  // Compute classes once using useMemo
  const containerSize = useMemo(
    () => SIZE_CLASSES[size || 'md']?.container || SIZE_CLASSES.md.container,
    [size]
  );
  const iconSize = useMemo(() => SIZE_CLASSES[size || 'md']?.icon || SIZE_CLASSES.md.icon, [size]);
  const shapeClass = useMemo(
    () => SHAPE_CLASSES[shape || 'smooth'] || SHAPE_CLASSES.smooth,
    [shape]
  );

  return (
    <div className={cn('w-full', classNames)}>
      <Listbox
        value={selected}
        onChange={handleChange}
        disabled={disabled || loading}
        multiple={multiple}
      >
        <div className="relative z-0 w-full font-sans flex flex-col space-y-2">
          {/* Label */}
          {!!label && (
            <label className="text-sm font-medium text-muted-700 dark:text-muted-300">
              {label}
            </label>
          )}

          {/* Button wrapper with relative positioning */}
          <div className="relative">
            <Listbox.Button
              className={cn(
                listBoxVarients({
                  variant: computedVariant,
                  size,
                  shape,
                  bordered,
                  hasLeftElement: !!(selected?.icon || selected?.image),
                  leftElementType: selected?.icon ? 'icon' : selected?.image ? 'image' : 'none',
                  hasError: !!error,
                })
              )}
              {...props}
            >
              {/* Selected item text */}
              <span className="block truncate text-left">
                {selected?.name || 'Select an option'}
              </span>

              {/* Chevron icon on the right */}
              <div className="pointer-events-none">
                {!!loading ? (
                  <Loader className="animate-spin" />
                ) : (
                  <Icon
                    icon="lucide:chevrons-up-down"
                    className="h-4 w-4 text-muted-400 transition-transform duration-300 group-focus/listbox-button:rotate-180"
                    aria-hidden="true"
                  />
                )}
              </div>
            </Listbox.Button>

            {/* Left icon/image - absolutely positioned */}
            <div
              className={cn(
                'absolute start-0 top-1/2 -translate-y-1/2 z-0 flex items-center justify-center',
                'text-muted-400 transition-colors duration-300 peer-focus-visible:text-primary-500',
                'dark:text-muted-500 pointer-events-none',
                containerSize
              )}
            >
              {!!selected?.icon && !selected?.image && (
                <Icon icon={selected.icon} className={cn(iconSize, error && '!text-danger-500')} />
              )}
              {!!selected?.image && !selected?.icon && (
                <Avatar
                  src={selected.image}
                  text={selected.name ? selected.name.substring(0, 1) : '?'}
                  size={size === 'lg' ? 'xxs' : 'xxxs'}
                />
              )}
            </div>

            {/* Options dropdown */}
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <ListboxOptions
                className={cn(
                  'absolute z-50 mt-2 w-full max-h-60 overflow-auto',
                  'bg-white dark:bg-muted-900 border border-muted-200 dark:border-muted-700',
                  'shadow-lg p-2 focus:outline-none',
                  shapeClass
                )}
              >
                {items && items.length > 0 ? (
                  items.map(item => (
                    <ListboxOption
                      key={item.id}
                      value={item}
                      className={({ active, selected }) =>
                        cn(
                          'relative cursor-pointer select-none py-2 px-3 transition-colors duration-150',
                          'flex items-center gap-2',
                          active
                            ? 'bg-primary-500 text-white'
                            : 'text-muted-900 dark:text-muted-100',
                          selected ? 'font-semibold' : 'font-normal',
                          shapeClass
                        )
                      }
                    >
                      {({ selected }) => (
                        <>
                          {/* Item icon/image */}
                          {!!item.icon && !item.image && (
                            <Icon icon={item.icon} className="h-4 w-4 flex-shrink-0" />
                          )}
                          {!!item.image && !item.icon && (
                            <Avatar
                              src={item.image}
                              text={item.name?.substring(0, 1) || '?'}
                              size="xxxs"
                            />
                          )}
                          {/* Item name */}
                          <span
                            className={cn(
                              'block truncate',
                              selected ? 'font-semibold' : 'font-normal'
                            )}
                          >
                            {item.name}
                          </span>
                        </>
                      )}
                    </ListboxOption>
                  ))
                ) : (
                  <div className="py-2 px-3 text-sm text-muted-400">No options available</div>
                )}
              </ListboxOptions>
            </Transition>
          </div>

          {/* Error message */}
          {error && <p className="text-sm text-danger-500 dark:text-danger-400">{error}</p>}
        </div>
      </Listbox>
    </div>
  );
};

ListBox.displayName = 'ListBox';

export { ListBox };
