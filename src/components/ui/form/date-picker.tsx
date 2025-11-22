'use client';

import { Icon } from '@iconify/react';
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  getDay,
  isBefore,
  isEqual,
  isSameMonth,
  isToday,
  parse,
  startOfToday,
  startOfWeek,
} from 'date-fns';
import React, { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { cn } from '@/lib/utils';
import { useOnClickOutside } from 'hooks';
import { Shape, DatePickerProps } from 'types';
import { colStartClasses, dayLabels, months, numberRegex, pickerVariants } from 'variants';

import { Button } from '../button';

import { Input } from './input';

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

const DatePicker: FC<DatePickerProps> = React.memo(
  ({
    value,
    valueFormat = 'yyyy-MM-dd', //MMM dd
    shape,
    icon,
    color,
    inputSize,
    label,
    placeholder,
    variant,
    minDate,
    disabled,
    ...props
  }) => {
    const [pickerOpen, setPickerOpen] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [overlayInput, setOverlayInput] = useState('');

    const pickerRef = useRef<HTMLDivElement>(null);
    useOnClickOutside(pickerRef, () => setPickerOpen(false));

    const today = useMemo(() => startOfToday(), []);
    const [selectedDay, setSelectedDay] = useState(value || today);
    const [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'));
    const firstDayCurrentMonth = useMemo(
      () => parse(currentMonth, 'MMM-yyyy', new Date()),
      [currentMonth]
    );

    const { onChange } = props;
    useEffect(() => {
      if (onChange) {
        onChange({
          target: {
            value: selectedDay,
          },
        } as any);
      }
    }, [onChange, selectedDay]);

    const displayValue = useMemo(
      () => (clicked ? format(selectedDay, valueFormat) : ''),
      [selectedDay, valueFormat, clicked]
    );

    const days = useMemo(
      () =>
        eachDayOfInterval({
          start: startOfWeek(firstDayCurrentMonth),
          end: endOfWeek(endOfMonth(firstDayCurrentMonth)),
        }),
      [firstDayCurrentMonth]
    );

    const previousMonth = useCallback(() => {
      const firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
      setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
    }, [firstDayCurrentMonth]);

    const nextMonth = useCallback(() => {
      const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
      setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
    }, [firstDayCurrentMonth]);

    const handleFocused = useCallback(() => {
      setPickerOpen(true);
      setClicked(true);
    }, []);

    const handleOverlayYear = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      if ((value !== '' && !numberRegex.test(value)) || value.length > 4) {
        return;
      }

      setOverlayInput(value);
    }, []);

    const handleConfirm = useCallback(() => {
      const newDate = new Date().setFullYear(+overlayInput);

      setCurrentMonth(format(newDate, 'MMM-yyyy'));

      setShowOverlay(false);
    }, [overlayInput]);

    const handleGotoMonth = useCallback(
      (month: number) => {
        const year =
          numberRegex.test(overlayInput) && overlayInput.length === 4
            ? +overlayInput
            : today.getFullYear();

        const newDate = new Date().setFullYear(year, month);

        setCurrentMonth(format(newDate, 'MMM-yyyy'));

        setShowOverlay(false);
      },
      [overlayInput, today]
    );

    const isdisabled = useCallback(
      (date: Date) => {
        if (minDate) {
          return isBefore(date, minDate);
        }

        return false;
      },
      [minDate]
    );

    const shapeClasses = useMemo(() => getShapeClasses(shape), [shape]);

    return (
      <div ref={pickerRef} className="relative w-full font-sans">
        <Input
          variant={variant}
          type="text"
          label={label}
          rightIcon={icon}
          leftIcon={icon}
          inputSize={inputSize}
          shape={shape ?? undefined}
          placeholder={placeholder}
          onFocus={handleFocused}
          value={displayValue}
          disabled={disabled}
          {...props}
        />
        <div
          className={cn(
            'absolute start-0 top-full isolate z-10 mt-2 w-full border border-muted-200 bg-white p-5 shadow-lg shadow-muted-300/30 dark:border-muted-800 dark:bg-muted-950 dark:shadow-muted-800/20',
            shapeClasses,
            pickerOpen ? 'block' : 'hidden'
          )}
        >
          <div className="w-full text-xs text-muted-800 dark:text-muted-100">
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={previousMonth}
                className="flex flex-none items-center justify-center p-1.5 text-muted-500 hover:text-muted-400"
              >
                <span className="sr-only">Previous month</span>
                <Icon icon="lucide:chevron-left" className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => setShowOverlay(true)}
                className="text-sm font-medium text-muted-800 hover:underline dark:text-muted-100"
              >
                {format(firstDayCurrentMonth, 'MMMM yyyy')}
              </button>
              <button
                onClick={nextMonth}
                type="button"
                className="text-muted-500 flex flex-none items-center justify-center p-1.5 hover:text-muted-400"
              >
                <span className="sr-only">Next month</span>
                <Icon icon="lucide:chevron-right" className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-3 grid grid-cols-7">
              {dayLabels.map((dayLabel, index) => (
                <div
                  key={index}
                  className="py-2 text-center text-[0.65rem] font-normal uppercase text-muted-400"
                >
                  {dayLabel}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 text-sm">
              {days.map((day: Date, dayIdx: number) => (
                <div
                  key={day.toString()}
                  className={cn(dayIdx === 0 && colStartClasses[getDay(day)])}
                >
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedDay(day);
                      setPickerOpen(false);
                    }}
                    disabled={isdisabled(day)}
                    className={cn(
                      pickerVariants({
                        isSelected: isEqual(day, selectedDay),
                        isToday: isToday(day),
                        isSameMonth: isSameMonth(day, firstDayCurrentMonth),
                        color,
                      }),
                      shapeClasses
                    )}
                  >
                    <time dateTime={format(day, 'yyyy-MM-dd')}>{format(day, 'd')}</time>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div
            className={cn(
              'absolute inset-0 flex flex-col justify-between rounded-lg bg-white p-5 text-white transition-all duration-300 dark:bg-muted-950',
              showOverlay ? 'z-[2] opacity-100' : '-z-[1] opacity-0'
            )}
          >
            <div>
              <input
                type="text"
                pattern="(^\\d{4}$)|(^\\d{4}-\\d{2}-\\d{2}$)"
                placeholder="4-digit year"
                value={overlayInput}
                onChange={handleOverlayYear}
                className="mx-auto block w-4/5 border-b border-muted-200 bg-transparent py-1 text-center text-base text-muted-800 focus:outline-none dark:border-muted-800 dark:text-muted-100"
              />

              <button
                type="button"
                onClick={() => setShowOverlay(false)}
                className="absolute end-2 top-0 p-2 text-2xl opacity-70"
              >
                &times;
              </button>
            </div>

            <div className="grid grid-cols-3">
              {months.map((month, index) => (
                <button
                  key={index}
                  type="button"
                  data-month={index + 1}
                  onClick={() => handleGotoMonth(index)}
                  className={cn(
                    'py-2 text-sm text-muted-800/70 hover:bg-muted-100 hover:text-muted-800 dark:text-muted-400 dark:hover:bg-muted-800 dark:hover:text-white',
                    shapeClasses
                  )}
                >
                  {month}
                </button>
              ))}
            </div>

            <Button
              type="button"
              color="primary"
              shape={shape ?? undefined}
              onClick={handleConfirm}
              disabled={overlayInput.length !== 4}
              className="mx-auto !h-auto !px-3 !py-[.35rem]"
            >
              Confirm
            </Button>
          </div>
        </div>
      </div>
    );
  }
);

DatePicker.displayName = 'DatePicker';

export default DatePicker;
