import { cva } from "class-variance-authority";

export const breadcrumbVariants = cva("flex items-center text-sm", {
    variants: {
      color: {
          default: "text-gray-700 dark:text-gray-300",
          contrast: "text-black dark:text-white",
          muted: "text-gray-500 dark:text-gray-400",
          primary: "text-blue-600 dark:text-blue-400",
          info: "text-sky-600 dark:text-sky-400",
          success: "text-green-600 dark:text-green-400",
          warning: "text-amber-600 dark:text-amber-400",
          danger: "text-red-600 dark:text-red-400",
          yellow: "text-yellow-600 dark:text-yellow-400",
          violet: "text-violet-600 dark:text-violet-400",
      },
    },
    defaultVariants: {
      color: "default",
    },
  });