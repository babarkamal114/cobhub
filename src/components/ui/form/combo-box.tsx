import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Transition,
} from '@headlessui/react';
import { Icon } from '@iconify/react';
import React, { type FC, Fragment, useState } from 'react';

import { cn } from '@/lib/utils';
import { ComboBoxProps } from 'types';
import { Avatar } from 'ui-components';
import { inputVariants } from 'variants';

// TODO: Need to improve the types and component structure, and enhancement

const ComboBox: FC<ComboBoxProps> = ({
  selected,
  setSelected,
  label,
  size = 'md',
  color = 'default',
  shape = 'smooth',
  disabled,
  loading = false,
  items = [],
  classNames,
  error,
  ...props
}) => {
  const [query, setQuery] = useState('');
  const inputId = 'combobox-input';
  const optionsId = 'combobox-options';

  const filteredItems =
    query === ''
      ? items
      : items.filter(item =>
          item.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        );

  return (
    <div className={`relative w-full ${classNames}`}>
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          {!!label && (
            <label
              htmlFor={inputId}
              id={`${inputId}-label`}
              className="font-sans text-[.85rem] text-muted-400"
            >
              {label}
            </label>
          )}
          <div className="relative z-0 w-full font-sans">
            <ComboboxInput
              id={inputId}
              aria-labelledby={`${inputId}-label`}
              aria-autocomplete="list"
              aria-expanded={filteredItems.length > 0}
              aria-controls={optionsId}
              aria-invalid={!!error}
              aria-describedby={error ? `${inputId}-error` : undefined}
              className={cn(
                inputVariants({
                  inputSize,
                  color,
                  shape,
                  className: `
                    peer relative text-start
                    ${selected?.icon || selected?.image ? `ps-${size === 'sm' ? 8 : size === 'md' ? 11 : 12}` : ''}
                    ${error ? '!border-danger-500' : ''}
                    ${disabled ? '!pointer-events-none !cursor-not-allowed !opacity-50' : ''}
                    ${loading ? 'pointer-events-none !text-transparent !shadow-none placeholder:!text-transparent !select-none' : ''}
                  `,
                })
              )}
              displayValue={(item: any) => item?.name ?? ''}
              onChange={event => setQuery(event.target.value)}
              disabled={disabled}
              {...props}
            />
            {(selected?.icon || selected?.image) && (
              <div
                className={`absolute start-0 top-0 flex items-center justify-center text-muted-400 transition-colors duration-300 peer-focus-visible:text-primary-500 dark:text-muted-500
                    ${size === 'sm' ? 'h-8 w-8' : size === 'md' ? 'h-10 w-10' : 'h-12 w-12'}`}
              >
                {selected?.icon && (
                  <Icon
                    icon={selected.icon}
                    className={`${
                      size === 'sm' ? 'h-3 w-3' : size === 'md' ? 'h-4 w-4' : 'h-5 w-5'
                    } ${error ? '!text-danger-500' : ''}`}
                  />
                )}
                {selected?.image && (
                  <Avatar
                    src={selected.image}
                    text={selected.name?.substring(0, 1)}
                    size={size === 'lg' ? 'xxs' : 'xxxs'}
                  />
                )}
              </div>
            )}
            {loading && (
              <div
                className={`absolute end-0 top-0 flex items-center justify-center
                    ${size === 'sm' ? 'h-8 w-8' : size === 'md' ? 'h-10 w-10' : 'h-12 w-12'}`}
              >
                <Icon
                  icon="line-md:loading-twotone-loop"
                  className="animate-spin"
                  width={24}
                  height={24}
                />
              </div>
            )}
            <ComboboxButton
              className={`absolute end-0 top-0 flex items-center justify-center peer:focus-visible:[&>svg]:rotate-180
                  ${size === 'sm' ? 'h-8 w-8' : size === 'md' ? 'h-10 w-10' : 'h-12 w-12'}
                  ${loading ? '!pointer-events-none !text-transparent !opacity-0 !select-none' : ''}
                `}
            >
              <Icon
                icon="lucide:chevrons-up-down"
                className="h-4 w-4 text-muted-400 transition-transform duration-300"
                aria-hidden="true"
              />
            </ComboboxButton>
          </div>
          {error && (
            <p id={`${inputId}-error`} className="mt-1 text-sm text-danger-500">
              {error}
            </p>
          )}
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <ComboboxOptions
              id={optionsId}
              className={`slimscroll absolute z-10 mt-1 w-full overflow-auto border !p-2 text-base shadow-lg shadow-muted-300/30 ring-1 ring-primary-500 ring-opacity-5 focus:outline-none dark:shadow-muted-800/20 sm:text-sm
                  ${shape === 'rounded' ? 'rounded-md' : ''}
                  ${shape === 'smooth' ? 'rounded-lg' : ''}
                  ${shape === 'curved' || shape === 'full' ? 'rounded-xl' : ''}
                  ${color === 'default' || color === 'muted' ? 'border-muted-200 bg-white dark:border-muted-700 dark:bg-muted-800' : ''}
                  ${color === 'contrast' ? 'border-muted-200 bg-white dark:border-muted-800 dark:bg-muted-950' : ''}
                `}
            >
              {filteredItems.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredItems.map(item => (
                  <ComboboxOption
                    key={item.id}
                    id={`combobox-option-${item.id}`}
                    className={({ active }) =>
                      `relative flex cursor-default select-none items-center gap-2 p-2 transition-colors duration-300 
                        ${
                          active
                            ? 'bg-primary-500/10 text-primary-700 dark:bg-primary-500/20'
                            : 'text-muted-600 dark:text-muted-400'
                        }
                        ${shape === 'rounded' ? 'rounded-md' : ''}
                        ${shape === 'smooth' ? 'rounded-lg' : ''}
                        ${shape === 'curved' || shape === 'full' ? 'rounded-xl' : ''}
                      `
                    }
                    value={item}
                    aria-selected={item.id === selected?.id}
                  >
                    {item.icon && !item.image && (
                      <span className="pointer-events-none flex items-center justify-center">
                        <Icon
                          icon={item.icon}
                          className="h-5 w-5 text-muted-400 transition-colors duration-300"
                          aria-hidden="true"
                        />
                      </span>
                    )}
                    {item.image && !item.icon && (
                      <Avatar src={item.image} text={item.name?.substring(0, 1)} size="xxs" />
                    )}
                    <span
                      className={`block truncate ${
                        item.id === selected?.id ? 'font-medium' : 'font-normal'
                      }`}
                    >
                      {item.name}
                    </span>
                    {item.id === selected?.id && (
                      <span className="relative z-0 ms-auto flex items-center pe-2 text-primary-600">
                        <Icon icon="lucide:check" className="h-4 w-4" aria-hidden="true" />
                      </span>
                    )}
                  </ComboboxOption>
                ))
              )}
            </ComboboxOptions>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

ComboBox.displayName = 'ComboBox';

export { ComboBox };
