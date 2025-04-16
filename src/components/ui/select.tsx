// components/ui/select.tsx
'use client';

import { LucideIcon, Loader2 } from 'lucide-react';
import React, { useState } from 'react';

export type Option = {
  label: string;
  value: string;
};

type SelectProps = {
  label?: string;
  options: Option[];
  placeholder?: string;
  icon?: LucideIcon;
  error?: string;
  loading?: boolean;
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'danger';
  multiple?: boolean;
  onChange: (selected: Option | Option[] | null) => void;
};

export const Select: React.FC<SelectProps> = ({
  label,
  options,
  placeholder = 'Select...',
  icon: Icon,
  error,
  loading = false,
  size = 'md',
  color = 'primary',
  multiple = false,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selected, setSelected] = useState<Option[] | Option | null>(multiple ? [] : null);

  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (option: Option) => {
    if (multiple) {
      const newSelection = Array.isArray(selected)
        ? selected.some(o => o.value === option.value)
          ? selected.filter(o => o.value !== option.value)
          : [...selected, option]
        : [option];
      setSelected(newSelection);
      onChange(newSelection);
    } else {
      setSelected(option);
      setIsOpen(false);
      onChange(option);
    }
  };

  const isSelected = (option: Option) => {
    if (multiple && Array.isArray(selected)) {
      return selected.some(o => o.value === option.value);
    }
    return !multiple && (selected as Option | null)?.value === option.value;
  };

  const sizeClasses = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-3 py-2 text-base',
    lg: 'px-4 py-2 text-lg',
  }[size];

  const colorClasses = {
    primary: 'border-blue-500 focus:ring-blue-500',
    secondary: 'border-gray-500 focus:ring-gray-500',
    danger: 'border-red-500 focus:ring-red-500',
  }[color];

  return (
    <div className="w-full max-w-sm">
      {label && <label className="mb-1 block text-sm font-medium text-gray-700">{label}</label>}

      <div
        className={`relative border rounded-md ${sizeClasses} ${colorClasses} ${error ? 'border-red-500' : ''}`}
      >
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => !loading && setIsOpen(prev => !prev)}
        >
          {Icon && <Icon className="w-4 h-4 text-gray-500" />}
          <span className="flex-1 truncate">
            {multiple && Array.isArray(selected) && selected.length > 0
              ? selected.map(s => s.label).join(', ')
              : !multiple && (selected as Option)?.label
                ? (selected as Option).label
                : placeholder}
          </span>
          {loading ? <Loader2 className="animate-spin w-4 h-4" /> : <span>▼</span>}
        </div>

        {isOpen && !loading && (
          <div className="absolute left-0 right-0 z-10 mt-1 max-h-60 overflow-auto rounded-md border bg-white shadow-lg">
            <input
              type="text"
              className="w-full border-b px-3 py-2 text-sm outline-none"
              placeholder="Search..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
            {filteredOptions.map(option => (
              <div
                key={option.value}
                className={`cursor-pointer px-4 py-2 hover:bg-blue-100 ${
                  isSelected(option) ? 'bg-blue-50 font-semibold' : ''
                }`}
                onClick={() => handleSelect(option)}
              >
                {option.label}
              </div>
            ))}
            {filteredOptions.length === 0 && (
              <div className="px-4 py-2 text-sm text-gray-500">No options found</div>
            )}
          </div>
        )}
      </div>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};
export default Select;
