import React, { type ButtonHTMLAttributes, type FC } from "react";
import { cn } from "@/lib/utils";
import type { VariantProps } from "class-variance-authority";
import { buttonIconVariants } from "variants";
import { LoaderCircle } from "lucide-react";

interface IconButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    VariantProps<typeof buttonIconVariants> {
  children?: React.ReactNode;
  loading?: boolean;
}

const IconButton: FC<IconButtonProps> = ({
  variant,
  color,
  shape,
  size = "md",
  className: classes,
  children,
  loading = false,
  ...props
}) => {
  const isButtonDisabled = loading;

  const loaderColorClass = buttonIconVariants({
    color,
    variant,
    size,
    shape,
  })
    .split(" ")
    .find((cls) => cls.includes("text-") || cls.includes("bg-"));

  return (
    <button
      className={cn(
        buttonIconVariants({
          variant,
          shape,
          color,
          size,
        }),
        `shrink-0 ${
          loading ? "pointer-events-none relative !text-transparent" : ""
        }`,
        classes
      )}
      disabled={isButtonDisabled}
      aria-disabled={isButtonDisabled}
      {...props}
    >
      {loading ? (
        <LoaderCircle className={`animate-spin absolute ${loaderColorClass}`} />
      ) : (
        children
      )}
    </button>
  );
};

export default IconButton;
