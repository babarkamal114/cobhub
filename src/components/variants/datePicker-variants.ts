import { cva } from 'class-variance-authority';

export const pickerVariants = cva('mx-auto flex w-full py-2 items-center justify-center text-xs', {
  variants: {
    isToday: { true: '', false: '' },
    isSelected: { true: '', false: '' },
    isSameMonth: {
      true: '',
      false: '',
    },
    shape: {
      straight: '',
      rounded: 'rounded-md',
      smooth: 'rounded-lg',
      curved: 'rounded-xl',
      full: 'rounded-full',
    },
    color: {
      default: 'text-muted-600 dark:text-muted-300',
      contrast: 'text-default-200 dark:text-default-300',
      muted: 'text-muted-700 dark:text-muted-400',
      primary: 'text-primary-600 dark:text-primary-400',
      info: 'text-info-600 dark:text-info-400',
      success: 'text-success-600 dark:text-success-400',
      warning: 'text-warning-600 dark:text-warning-400',
      danger: 'text-danger-600 dark:text-danger-400',
    },
  },
  compoundVariants: [
    {
      isSelected: true,
      className: 'font-medium',
    },
    {
      isToday: true,
      className: 'font-medium bg-primary-500 text-white',
    },
    {
      isSelected: true,
      isToday: true,
      className: 'bg-primary-500 text-white',
    },
    // Color variants for when both selected and today are true
    {
      isSelected: true,
      isToday: true,
      color: 'default',
      className: 'bg-primary-500 text-white',
    },
    {
      isSelected: true,
      isToday: true,
      color: 'primary',
      className: 'bg-primary-500 text-white',
    },
    {
      isSelected: true,
      isToday: true,
      color: 'info',
      className: 'bg-info-500 text-white',
    },
    {
      isSelected: true,
      isToday: true,
      color: 'success',
      className: 'bg-success-500 text-white',
    },
    {
      isSelected: true,
      isToday: true,
      color: 'warning',
      className: 'bg-warning-500 text-white',
    },
    {
      isSelected: true,
      isToday: true,
      color: 'danger',
      className: 'bg-danger-500 text-white',
    },
    {
      isSelected: true,
      isToday: true,
      color: 'muted',
      className: 'bg-muted-500 text-white dark:bg-muted-600',
    },
    {
      isSelected: true,
      isToday: true,
      color: 'contrast',
      className: 'bg-default-800 text-white dark:bg-default-700',
    },
    {
      isSelected: false,
      isToday: false,
      isSameMonth: true,
      className:
        'text-center hover:bg-muted-100 hover:text-primary-500 dark:hover:bg-muted-800 disabled:dark:hover:bg-transparent disabled:text-muted-300 dark:disabled:text-muted-700 disabled:cursor-not-allowed',
    },
    {
      isSelected: false,
      isToday: false,
      isSameMonth: false,
      className:
        'text-muted-300 dark:hover:bg-muted-800 disabled:dark:hover:bg-transparent disabled:cursor-not-allowed',
    },
    {
      isSelected: true,
      isToday: false,
      className: 'bg-primary-500 text-white',
    },
    // Color variants for selected state
    {
      isSelected: true,
      isToday: false,
      color: 'default',
      className: 'bg-primary-500 text-white',
    },
    {
      isSelected: true,
      isToday: false,
      color: 'primary',
      className: 'bg-primary-500 text-white',
    },
    {
      isSelected: true,
      isToday: false,
      color: 'info',
      className: 'bg-info-500 text-white',
    },
    {
      isSelected: true,
      isToday: false,
      color: 'success',
      className: 'bg-success-500 text-white',
    },
    {
      isSelected: true,
      isToday: false,
      color: 'warning',
      className: 'bg-warning-500 text-white',
    },
    {
      isSelected: true,
      isToday: false,
      color: 'danger',
      className: 'bg-danger-500 text-white',
    },
    {
      isSelected: true,
      isToday: false,
      color: 'muted',
      className: 'bg-muted-500 text-white dark:bg-muted-600',
    },
    {
      isSelected: true,
      isToday: false,
      color: 'contrast',
      className: 'bg-default-800 text-white dark:bg-default-700',
    },
    // Color variants for today state
    {
      isToday: true,
      isSelected: false,
      color: 'default',
      className: 'bg-primary-500 text-white',
    },
    {
      isToday: true,
      isSelected: false,
      color: 'primary',
      className: 'bg-primary-500 text-white',
    },
    {
      isToday: true,
      isSelected: false,
      color: 'info',
      className: 'bg-info-500 text-white',
    },
    {
      isToday: true,
      isSelected: false,
      color: 'success',
      className: 'bg-success-500 text-white',
    },
    {
      isToday: true,
      isSelected: false,
      color: 'warning',
      className: 'bg-warning-500 text-white',
    },
    {
      isToday: true,
      isSelected: false,
      color: 'danger',
      className: 'bg-danger-500 text-white',
    },
    {
      isToday: true,
      isSelected: false,
      color: 'muted',
      className: 'bg-muted-500 text-white dark:bg-muted-600',
    },
    {
      isToday: true,
      isSelected: false,
      color: 'contrast',
      className: 'bg-default-800 text-white dark:bg-default-700',
    },
    // Color variants for hover state (same month, not selected, not today)
    {
      isSelected: false,
      isToday: false,
      isSameMonth: true,
      color: 'primary',
      className:
        'hover:bg-primary-100 hover:text-primary-700 dark:hover:bg-primary-900/30 dark:hover:text-primary-300',
    },
    {
      isSelected: false,
      isToday: false,
      isSameMonth: true,
      color: 'info',
      className:
        'hover:bg-info-100 hover:text-info-700 dark:hover:bg-info-900/30 dark:hover:text-info-300',
    },
    {
      isSelected: false,
      isToday: false,
      isSameMonth: true,
      color: 'success',
      className:
        'hover:bg-success-100 hover:text-success-700 dark:hover:bg-success-900/30 dark:hover:text-success-300',
    },
    {
      isSelected: false,
      isToday: false,
      isSameMonth: true,
      color: 'warning',
      className:
        'hover:bg-warning-100 hover:text-warning-700 dark:hover:bg-warning-900/30 dark:hover:text-warning-300',
    },
    {
      isSelected: false,
      isToday: false,
      isSameMonth: true,
      color: 'danger',
      className:
        'hover:bg-danger-100 hover:text-danger-700 dark:hover:bg-danger-900/30 dark:hover:text-danger-300',
    },
    {
      isSelected: false,
      isToday: false,
      isSameMonth: true,
      color: 'default',
      className: 'hover:bg-muted-100 hover:text-primary-500 dark:hover:bg-muted-800',
    },
    {
      isSelected: false,
      isToday: false,
      isSameMonth: true,
      color: 'muted',
      className:
        'hover:bg-muted-200 hover:text-muted-700 dark:hover:bg-muted-700 dark:hover:text-muted-300',
    },
    {
      isSelected: false,
      isToday: false,
      isSameMonth: true,
      color: 'contrast',
      className:
        'hover:bg-default-200 hover:text-default-800 dark:hover:bg-default-800 dark:hover:text-default-200',
    },
  ],
  defaultVariants: {
    shape: 'full',
    color: 'default',
    isToday: false,
    isSelected: false,
    isSameMonth: true,
  },
});

export const colStartClasses = [
  '',
  'col-start-2',
  'col-start-3',
  'col-start-4',
  'col-start-5',
  'col-start-6',
  'col-start-7',
];

export const dayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
export const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
export const numberRegex = /^-?\d*\.?\d+$/;
