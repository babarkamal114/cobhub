import { VariantProps } from 'class-variance-authority';
import { LucideIcon } from 'lucide-react';
import { ButtonHTMLAttributes, ReactNode } from 'react';

import { avatarVariants, buttonVariants, inputVariants } from 'variants';

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

export type Color =
  | 'default'
  | 'contrast'
  | 'muted'
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'violet'
  | 'yellow';
export type Shape = 'straight' | 'rounded' | 'smooth' | 'curved' | 'full';
export type Variant = 'solid' | 'pastel' | 'outlined';
export type Size = 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'xxs' | 'xxxs';
