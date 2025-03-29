"use client";

import { avatarVariants } from "variants";
import { ReactNode } from "react";
import { VariantProps } from "class-variance-authority";
import clsx from "clsx";
import Image from "next/image";

interface AvatarProps extends VariantProps<typeof avatarVariants> {
  src?: string;
  text?: string;
  alt?: string;
  color?: string;
  children?: ReactNode;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  text,
  alt,
  size,
  shape,
  mask,
  color = "bg-gray-200 text-gray-700",
  children,
}) => {
  return (
    <div
      className={clsx(avatarVariants({ size, shape, mask }), color, "overflow-hidden")}
    >
      {src ? (
        <Image src={src} alt={alt || "Avatar"} fill className="object-cover" />
      ) : text ? (
        <span>{text}</span>
      ) : (
        children
      )}
    </div>
  );
};

export const AvatarGroup: React.FC<{ avatars: AvatarProps[] }> = ({ avatars }) => {
  return (
    <div className="flex -space-x-2">
      {avatars.map((avatar, index) => (
        <Avatar key={index} {...avatar} />
      ))}
    </div>
  );
};