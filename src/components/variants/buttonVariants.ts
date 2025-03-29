import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-70 cursor-pointer",
  {
    variants: {
      variant: {
        solid: "border border-transparent",
        pastel: "border border-transparent",
        outlined: "bg-transparent border",
      },
      size: {
        sm: "h-8 px-3 text-xs min-w-[4rem]",
        md: "h-10 px-4 text-sm min-w-[5rem]",
        lg: "h-12 px-6 text-base min-w-[6rem]",
        icon: "h-10 w-10", 
      },
      shape: {
        straight: "rounded-none",
        rounded: "rounded-md",
        smooth: "rounded-lg",
        curved: "rounded-xl",
        full: "rounded-full",
      },
      color: {
        default: "",
        contrast: "",
        muted: "",
        primary: "",
        info: "",
        success: "",
        warning: "",
        danger: "",
      },
      isDisabled: {
        true: "opacity-70 cursor-not-allowed",
      },
      isLoading: {
        true: "opacity-80 cursor-wait",
      },
    },
    compoundVariants: [
      {
        variant: "solid",
        color: "default",
        className: "bg-gray-700 text-white hover:bg-gray-800 focus-visible:ring-gray-500",
      },
      {
        variant: "solid",
        color: "contrast",
        className: "bg-black text-white hover:bg-gray-900 focus-visible:ring-gray-800",
      },
      {
        variant: "solid",
        color: "muted",
        className: "bg-gray-500 text-white hover:bg-gray-600 focus-visible:ring-gray-400",
      },
      {
        variant: "solid",
        color: "primary",
        className: "bg-blue-600 text-white hover:bg-blue-800 focus-visible:ring-blue-500",
      },
      {
        variant: "solid",
        color: "info",
        className: "bg-sky-600 text-white hover:bg-sky-800 focus-visible:ring-sky-500",
      },
      {
        variant: "solid",
        color: "success",
        className: "bg-green-600 text-white hover:bg-green-800 focus-visible:ring-green-500",
      },
      {
        variant: "solid",
        color: "warning",
        className: "bg-amber-600 text-white hover:bg-amber-800 focus-visible:ring-amber-500",
      },
      {
        variant: "solid",
        color: "danger",
        className: "bg-red-600 text-white hover:bg-red-800 focus-visible:ring-red-500",
      },
      {
        variant: "pastel",
        color: "default",
        className: "bg-gray-200 text-gray-900 hover:bg-gray-300 focus-visible:ring-gray-400",
      },
      {
        variant: "pastel",
        color: "contrast",
        className: "bg-gray-300 text-gray-900 hover:bg-gray-400 focus-visible:ring-gray-500",
      },
      {
        variant: "pastel",
        color: "muted",
        className: "bg-gray-100 text-gray-800 hover:bg-gray-200 focus-visible:ring-gray-300",
      },
      {
        variant: "pastel",
        color: "primary",
        className: "bg-blue-100 text-blue-900 hover:bg-blue-200 focus-visible:ring-blue-400",
      },
      {
        variant: "pastel",
        color: "info",
        className: "bg-sky-100 text-sky-900 hover:bg-sky-200 focus-visible:ring-sky-400",
      },
      {
        variant: "pastel",
        color: "success",
        className: "bg-green-100 text-green-900 hover:bg-green-200 focus-visible:ring-green-400",
      },
      {
        variant: "pastel",
        color: "warning",
        className: "bg-amber-100 text-amber-900 hover:bg-amber-200 focus-visible:ring-amber-400",
      },
      {
        variant: "pastel",
        color: "danger",
        className: "bg-red-100 text-red-900 hover:bg-red-200 focus-visible:ring-red-400",
      },
      {
        variant: "outlined",
        color: "default",
        className: "border-gray-500 text-gray-600 hover:bg-gray-50 focus-visible:ring-gray-400",
      },
      {
        variant: "outlined",
        color: "contrast",
        className: "border-gray-600 text-gray-600 hover:bg-gray-50 focus-visible:ring-gray-500",
      },
      {
        variant: "outlined",
        color: "muted",
        className: "border-gray-400 text-gray-600 hover:bg-gray-50 focus-visible:ring-gray-300",
      },
      {
        variant: "outlined",
        color: "primary",
        className: "border-blue-600 text-blue-600 hover:bg-blue-50 focus-visible:ring-blue-400",
      },
      {
        variant: "outlined",
        color: "info",
        className: "border-sky-600 text-sky-600 hover:bg-sky-50 focus-visible:ring-sky-400",
      },
      {
        variant: "outlined",
        color: "success",
        className: "border-green-600 text-green-600 hover:bg-green-50 focus-visible:ring-green-400",
      },
      {
        variant: "outlined",
        color: "warning",
        className: "border-amber-600 text-amber-600 hover:bg-amber-50 focus-visible:ring-amber-400",
      },
      {
        variant: "outlined",
        color: "danger",
        className: "border-red-600 text-red-600 hover:bg-red-50 focus-visible:ring-red-400",
      },
    ],
    defaultVariants: {
      variant: "solid",
      size: "md",
      shape: "rounded",
      color: "primary",
    },
  }
);