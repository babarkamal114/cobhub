import { cva } from "class-variance-authority";

const avatarVariants = cva("flex items-center justify-center font-medium", {
  variants: {
    size: {
      xxxs: "w-6 h-6 text-xs",
      xxs: "w-8 h-8 text-sm",
      xs: "w-10 h-10 text-base",
      sm: "w-12 h-12 text-lg",
      md: "w-16 h-16 text-xl",
      lg: "w-20 h-20 text-2xl",
      xl: "w-24 h-24 text-3xl",
    },
    shape: {
      straight: "rounded-none",
      rounded: "rounded-md",
      smooth: "rounded-lg",
      curved: "rounded-xl",
      full: "rounded-full",
    },
    mask: {
      hex: "clip-path-[polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)]",
      hexed: "clip-path-[polygon(20%_0%,80%_0%,100%_50%,80%_100%,20%_100%,0%_50%)]",
      blob: "clip-path-[url(#blob)]",
      deca: "clip-path-[polygon(10%_0%,90%_0%,100%_40%,80%_100%,20%_100%,0%_40%)]",
      diamond: "clip-path-[polygon(50%_0%,100%_50%,50%_100%,0%_50%)]",
    },
  },
  defaultVariants: {
    size: "md",
    shape: "smooth",
  },
});

export default avatarVariants;
