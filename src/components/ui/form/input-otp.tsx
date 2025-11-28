import React, { FC, useCallback, useMemo, useRef } from 'react';

import { inputOTPVariants } from '@/components/variants/input-otp-variants';
import { cn } from '@/lib/utils';
import { RE_DIGIT } from '@/lib/utils/strings';
import { InputOTPProps } from '@/types/components';

import { Input } from './input';

const InputOTP: FC<InputOTPProps> = ({
  onChange,
  shape,
  value,
  valueLength,
  variant,
  disabled,
  loading,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const valueItems = useMemo(() => {
    const valueArray = value?.split('') || [];
    const items: Array<string> = [];
    const length = valueLength ?? (valueArray.length || 4);

    for (let i = 0; i < length; i++) {
      const char = valueArray[i] || '';
      if (char && RE_DIGIT.test(char)) {
        items.push(char);
      } else {
        items.push('');
      }
    }
    return items;
  }, [value, valueLength]);

  const getAllInputs = (): HTMLInputElement[] => {
    if (!containerRef.current) return [];
    return Array.from(containerRef.current.querySelectorAll('input')) as HTMLInputElement[];
  };

  const focusToNextInput = useCallback(
    (currentIndex: number) => {
      const inputs = getAllInputs();
      if (currentIndex < inputs.length - 1) {
        inputs[currentIndex + 1]?.focus();
      }
    },
    [getAllInputs]
  );

  const focusToPrevInput = useCallback(
    (currentIndex: number) => {
      const inputs = getAllInputs();
      if (currentIndex > 0) {
        inputs[currentIndex - 1]?.focus();
      }
    },
    [getAllInputs]
  );

  const inputOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
      if (disabled || loading) return;

      let targetUserValue = e.target.value.trim();

      // Get only the last character if multiple characters pasted
      if (targetUserValue.length > 1) {
        targetUserValue = targetUserValue.slice(-1);
      }

      const isTargetValueDigit = RE_DIGIT.test(targetUserValue);

      if (!isTargetValueDigit && targetUserValue !== '') {
        return;
      }

      targetUserValue = isTargetValueDigit ? targetUserValue : '';

      // Build new value
      const currentValue = value || '';
      const newValue =
        currentValue.substring(0, idx) + targetUserValue + currentValue.substring(idx + 1);

      if (onChange) {
        onChange(newValue);
      }

      // Move to next input if digit entered
      if (isTargetValueDigit && targetUserValue.length === 1) {
        focusToNextInput(idx);
      }
    },
    [disabled, loading, value, onChange, focusToNextInput]
  );

  const inputOnKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>, idx: number) => {
      const { key } = e;
      const target = e.target as HTMLInputElement;

      if (key === 'ArrowRight' || key === 'ArrowDown') {
        e.preventDefault();
        focusToNextInput(idx);
        return;
      }

      if (key === 'ArrowLeft' || key === 'ArrowUp') {
        e.preventDefault();
        focusToPrevInput(idx);
        return;
      }

      // Handle backspace
      if (key === 'Backspace') {
        if (target.value === '') {
          e.preventDefault();
          // Clear current and move to previous
          const currentValue = value || '';
          const newValue = currentValue.substring(0, idx) + '' + currentValue.substring(idx + 1);
          if (onChange) {
            onChange(newValue);
          }
          focusToPrevInput(idx);
        } else {
          // Clear current input
          const currentValue = value || '';
          const newValue = currentValue.substring(0, idx) + '' + currentValue.substring(idx + 1);
          if (onChange) {
            onChange(newValue);
          }
        }
      }
    },
    [value, onChange, focusToNextInput, focusToPrevInput]
  );

  const inputOnFocus = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    const { target } = e;
    target.setSelectionRange(0, target.value.length);
  }, []);

  const inputOnPaste = useCallback(
    (e: React.ClipboardEvent<HTMLInputElement>) => {
      e.preventDefault();
      if (disabled || loading) return;

      const pastedData = e.clipboardData.getData('text/plain').trim();
      const digits = pastedData.split('').filter(char => RE_DIGIT.test(char));

      if (digits.length > 0 && onChange) {
        const length = valueLength || 4;
        const newValue = digits.slice(0, length).join('');
        onChange(newValue);

        // Focus the last filled input or next empty one
        const focusIndex = Math.min(newValue.length, length - 1);
        setTimeout(() => {
          const inputs = getAllInputs();
          inputs[focusIndex]?.focus();
        }, 0);
      }
    },
    [disabled, loading, onChange, valueLength, getAllInputs]
  );

  return (
    <div ref={containerRef} className="flex gap-2 w-full items-center justify-center">
      {valueItems.map((digit, index) => (
        <Input
          key={index}
          variant={variant}
          shape={shape}
          value={digit}
          placeholder="0"
          maxLength={1}
          disabled={!!(disabled || loading)}
          onChange={e => inputOnChange(e, index)}
          onKeyDown={e => inputOnKeyDown(e, index)}
          onFocus={inputOnFocus}
          onPaste={inputOnPaste}
          className={cn(
            inputOTPVariants({
              loading,
              disabled,
            }),
            ''
          )}
        />
      ))}
    </div>
  );
};

InputOTP.displayName = 'InputOTP';
export { InputOTP };
