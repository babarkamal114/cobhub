import type { IconifyIcon } from '@iconify/react';
import { VariantProps } from 'class-variance-authority';
import { LucideIcon } from 'lucide-react';
import { ButtonHTMLAttributes, HTMLAttributes, ReactNode, TextareaHTMLAttributes } from 'react';

import {
  avatarVariants,
  buttonVariants,
  iconboxVariants,
  inputVariants,
  radioVariants,
  textareaVariants,
  toggleSwitchVariants,
} from 'variants';

export interface AvatarProps extends VariantProps<typeof avatarVariants> {
  src?: string;
  alt?: string;
  text?: string;
  className?: string;
  children?: ReactNode;
  size?: Size;
  color?: Color;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  color?: Color;
  isDisabled?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  loadingText?: string;
  rightIcon?: React.ReactNode;
  shape?: Shape;
  size?: Size;
  variant?: Variant;
}

export interface ButtonLinkProps
  extends Omit<ButtonHTMLAttributes<HTMLAnchorElement>, 'color'>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  children?: React.ReactNode;
  href: string;
  loading?: boolean;
  color?: Color;
  shape?: Shape;
  size?: Size;
  variant?: Variant;
}

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  error?: string;
  success?: string;
  showPasswordToggle?: boolean;
  onClear?: () => void;
  showClearButton?: boolean;
  label?: string;
  labelFor?: string;
}

export interface BreadcrumbItem {
  title: string;
  href?: string;
  icon?: LucideIcon;
}

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[];
  separator?: 'slash' | 'chevron' | 'arrow' | 'dot';
  color?: Color;
  asChild?: boolean;
}

export interface ModalProps {
  open?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  classes?: {
    wrapper?: string | string[];
    backdrop?: string | string[];
    dialog?: string | string[];
  };
  children?: React.ReactNode;
  onBackdropClick?: () => void;
  onClose?: () => void;
  title?: string;
  description?: string;
}

export interface MessageProps {
  children?: React.ReactNode;
  icon?: string | IconifyIcon;
  label?: string;
  variant?: Color;
  shape?: Shape;
  dismissible?: boolean;
  onClose?: () => void;
  className?: string;
}

export interface AlertProps {
  children?: React.ReactNode;
  icon?: string;
  label?: string;
  color?: Color;
  shape?: Shape;
  dismissible?: boolean;
  onDismiss?: () => void;
  className?: string;
  autoClose?: boolean;
  autoCloseDelay?: number;
}

export interface ToggleBoxProps {
  isToggle?: boolean;
  open?: boolean;
  title?: string;
  shape?: Shape;
  color?: Color;
  growOnExpand?: boolean;
  spaced?: boolean;
  header?: React.ReactNode;
  children: React.ReactNode;
}

export interface TrackTabsProps<T> {
  categories: {
    [key: string]: T[];
  };
  renderItem: (item: T, index: number) => ReactNode;
  keyExtractor: (item: T) => string | number;
  shape?: 'straight' | 'rounded' | 'smooth' | 'curved' | 'full';
  aria?: {
    label?: string;
    getItemLabel?: (item: T) => string;
  };
}

export interface ProgressProps {
  color?: Color;
  contrast?: 'default' | 'contrast';
  shape?: Shape;
  size?: Size;
  strockSize?: number;
  value?: number;
  max?: number;
  thickness?: number;
  classNames?: string | string[];
  label?: string;
}

export interface SelectProps {
  label?: string;
  options: Array<string | { label: string; value: string; disabled?: boolean }>;
  icon?: string;
  color?: Color;
  shape?: Shape;
  size?: 'sm' | 'md' | 'lg';
  error?: string;
  loading?: boolean;
  className?: string;
  containerClasses?: string;
  id?: string;
  'aria-label'?: string;
  'aria-describedby'?: string;
  required?: boolean;
  disabled?: boolean;
}

export interface IconBoxProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>,
    VariantProps<typeof iconboxVariants> {
  icon: IconifyIcon | string;
  iconClasses?: string;
  mask?: Mask;
  label?: string;
}

export interface RangeSliderProps {
  value: number;
  min?: number;
  max?: number;
  steps?: boolean | number[];
  valuePrefix?: string;
  valueSuffix?: string;
  legend?: boolean;
  color?: Color;
  orientation?: 'horizontal' | 'vertical';
  invert?: boolean;
  tooltip?: boolean;
  handleHover?: boolean;
  onSliderChange: (value: number) => void;
}

export interface ToggleSwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'color'>,
    VariantProps<typeof toggleSwitchVariants> {
  checked?: boolean;
  startIcon?: string | IconifyIcon;
  endIcon?: string | IconifyIcon;
  startColor?: Color;
  endColor?: Color;
  label?: string;
}

export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'color'>,
    VariantProps<typeof radioVariants> {
  label: string;
  color?: Color;
}

export interface TextAreaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'color'>,
    VariantProps<typeof textareaVariants> {
  label?: string;
  error?: string;
  resize?: boolean;
  loading?: boolean;
  color?: Color;
  shape?: Shape;
}

export type Color =
  | 'default'
  | 'contrast'
  | 'muted'
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger';
export type Shape = 'straight' | 'rounded' | 'smooth' | 'curved' | 'full';
export type Variant = 'solid' | 'pastel' | 'outlined';
export type Size = 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'xxs' | 'xxxs';
export type Mask = 'hex' | 'hexed' | 'blob' | 'deca' | 'diamond';
