import React, { type FC } from 'react';
import ReactSlider from 'react-slider';

import { RangeSliderProps } from 'types';

const RangeSlider: FC<RangeSliderProps> = ({
  value,
  min = 0,
  max = 100,
  steps,
  valuePrefix,
  valueSuffix,
  legend,
  color = 'primary',
  orientation = 'horizontal',
  invert = false,
  tooltip = true,
  handleHover = false,
  onSliderChange,
}) => {
  const getColorClass = (base: string) => {
    return (
      {
        default: `${base}-default-600`,
        contrast: `${base}-muted-800`,
        muted: `${base}-muted-600`,
        primary: `${base}-primary-600`,
        info: `${base}-info-600`,
        success: `${base}-success-600`,
        warning: `${base}-warning-600`,
        danger: `${base}-danger-600`,
      }[color] || ''
    );
  };

  return (
    <div
      className={`flex items-center text-sm text-muted-500
        ${legend ? 'justify-between gap-5' : ''}
        ${orientation === 'vertical' ? 'min-h-[200px] w-6 flex-col' : 'w-full'}
      `}
    >
      {legend && (
        <span className="relative start-2 top-0.5 font-sans text-sm leading-none text-muted-500 dark:text-muted-400">
          <span className="pe-1">
            {valuePrefix}
            {min}
          </span>
          {valueSuffix}
        </span>
      )}
      <ReactSlider
        className={`relative 
          ${orientation === 'vertical' ? 'min-h-[200px]' : 'w-full'}
        `}
        value={value}
        min={min}
        max={max}
        marks={steps}
        orientation={orientation}
        invert={invert}
        markClassName={`-top-1 start-1 h-3 w-3 border-2 bg-white dark:bg-muted-100 rounded-full ${getColorClass('border')}`}
        onChange={(value: number | readonly number[]) => onSliderChange?.(value as number)}
        thumbActiveClassName="[&>div>div]:opacity-100 [&>div>div>div]:translate-y-0 [&>div]:ring-1"
        trackClassName={`rounded-full even:border-muted-300 dark:even:border-muted-700 ${getColorClass('odd:border')} ${
          orientation === 'vertical' ? 'border-s-4 start-1' : 'border-t-4'
        }`}
        renderThumb={(props: React.HTMLAttributes<HTMLElement>, state: { valueNow: number }) => (
          <div
            className={`absolute -top-1 start-0 rounded-full ${getColorClass('border')} ${
              orientation === 'vertical' ? 'border-s-4' : 'border-t-4'
            }`}
            {...props}
          >
            <div
              tabIndex={0}
              className={`absolute -end-4 bottom-0 top-0.5 my-auto h-5 w-5 cursor-pointer rounded-full ring-offset-2 ring-offset-white dark:ring-offset-muted-950
                ${getColorClass('bg')} ${getColorClass('ring')}
                ${
                  handleHover
                    ? 'scale-0 opacity-0 transition-all duration-300 group-hover/react-slider:scale-100 group-hover/react-slider:opacity-100'
                    : ''
                }
              `}
            >
              {tooltip && (
                <div className="relative h-full w-full opacity-0 transition-opacity duration-200">
                  <div className="absolute start-[0.15rem] top-[-1.30rem] h-3 w-3 translate-y-2 rotate-45 bg-muted-900 transition-all duration-300 ease-in-out dark:bg-muted-700"></div>
                  <div className="absolute -top-11 start-[-0.5rem] flex h-8 w-8 translate-y-2 items-center justify-center rounded-full bg-muted-900 text-center font-sans text-[0.65rem] font-medium text-white transition-all duration-300 ease-in-out dark:bg-muted-700">
                    <span className="select-none leading-none">{state.valueNow}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      />
      {legend && (
        <span className="relative top-0.5 font-sans text-sm leading-none text-muted-500 dark:text-muted-400">
          <span className={`relative ${orientation === 'horizontal' ? 'pe-1' : 'start-2 pe-3'}`}>
            {valuePrefix}
            {max}
          </span>
          {valueSuffix}
        </span>
      )}
    </div>
  );
};

RangeSlider.displayName = 'RangeSlider';

export { RangeSlider };
