import * as React from "react";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { BreadcrumbProps } from "types";
import { breadcrumbVariants } from "variants";

const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  ({ asChild = false, className, color = "default", items, separator = "slash", ...props }, ref) => {
    const Comp = asChild ? Slot : "nav";
    const separators: Record<string, string> = {
      slash: "/",
      chevron: ">",
      arrow: "→",
      dot: "•",
    };

    return (
      <Comp className={cn("flex", className)} ref={ref} aria-label="Breadcrumb" {...props}>
        <ol className="flex items-center space-x-2">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <li key={index} className={cn(breadcrumbVariants({ color }))}>
                {item.href ? (
                  <a href={item.href} className="flex items-center hover:text-current focus:text-current focus:outline-none focus:ring-2">
                    {Icon && <Icon className="me-1 h-4 w-4" />}
                    <span>{item.title}</span>
                  </a>
                ) : (
                  <span className="flex items-center font-semibold">
                    {Icon && <Icon className="me-1 h-4 w-4" />}
                    {item.title}
                  </span>
                )}
                {index < items.length - 1 && <span className="mx-2" aria-hidden="true">{separators[separator]}</span>}
              </li>
            );
          })}
        </ol>
      </Comp>
    );
  }
);

Breadcrumb.displayName = "Breadcrumb";

export { Breadcrumb, breadcrumbVariants };
