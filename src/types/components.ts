import { ReactNode } from "react";
import { avatarVariants, buttonVariants, inputVariants } from "variants";
import { VariantProps } from "class-variance-authority";

export interface AvatarProps extends VariantProps<typeof avatarVariants> {
    src?: string;
    alt?: string;
    text?: string;
    className?: string;
    children?: ReactNode;
    size?: Size;
    color?: Color
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

export type Color = "default" | "contrast" | "muted" | "primary" | "info" | "success" | "warning" | "danger" | "violet" | "yellow";
export type Shape = "straight" | "rounded" | "smooth" | "curved" | "full";
export type Variant = "solid" | "pastel" | "outlined";
export type Size = 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'xxs' | 'xxxs';