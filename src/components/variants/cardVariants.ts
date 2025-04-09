import { cva } from "class-variance-authority";

export const cardVariants = cva(
  "relative w-full transition-all duration-300 p-4",
  {
    variants: {
      color: {
        default:
          "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700",
        primary:
          "bg-blue-100 text-blue-700 dark:text-blue-400 border border-blue-300",
        secondary:
          "bg-purple-100 text-purple-700 dark:text-purple-400 border border-purple-300",
        info: "bg-cyan-100 text-cyan-700 dark:text-cyan-400 border border-cyan-300",
        success:
          "bg-emerald-100 text-emerald-700 dark:text-emerald-400 border border-emerald-300",
        warning:
          "bg-amber-100 text-amber-700 dark:text-amber-400 border border-amber-300",
        danger:
          "bg-red-100 text-red-700 dark:text-red-400 border border-red-300",
      },
      shape: {
        straight: "",
        rounded: "rounded-md",
        smooth: "rounded-lg",
        curved: "rounded-xl",
      },
      shadow: {
        flat: "shadow-xl shadow-zinc-300/30 dark:shadow-zinc-800/20",
        hover:
          "hover:shadow-xl hover:shadow-zinc-300/30 dark:hover:shadow-zinc-900/20",
        none: "",
      },
    },
    defaultVariants: {
      color: "default",
      shape: "smooth",
      shadow: "none",
    },
  }
);
