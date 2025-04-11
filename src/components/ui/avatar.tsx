'use client';

import clsx from 'clsx';
import Image from 'next/image';

import { sizes, spacing } from '@/lib/utils/constants';
import { Size, Shape, AvatarProps } from 'types';
import { avatarVariants } from 'variants';

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = '',
  text = '?',
  size = 'md',
  shape = 'full',
  color = 'default',
  overlaps = false,
  className = '',
  children,
}) => {
  const hasImage = !!src;
  const imageSize = sizes[size as Size] || sizes.md;

  return (
    <div
      className={clsx(
        avatarVariants({ size, shape, color, overlaps }),
        hasImage ? 'block' : 'flex items-center justify-center',
        className
      )}
    >
      {hasImage ? (
        <Image
          src={src}
          alt={alt}
          width={imageSize}
          height={imageSize}
          className={clsx(
            'block w-full',
            shape === 'rounded' && 'rounded-md',
            shape === 'smooth' && 'rounded-lg',
            shape === 'curved' && size !== 'xxxs' && 'rounded-xl',
            shape === 'curved' && size === 'xxxs' && 'rounded-lg',
            shape === 'full' && 'rounded-full'
          )}
        />
      ) : (
        <span className="relative font-sans font-normal">{text}</span>
      )}
      {children}
    </div>
  );
};

export const AvatarGroup: React.FC<{
  avatars: AvatarProps[];
  size?: Size;
  shape?: Shape;
}> = ({ avatars, size = 'md', shape = 'full' }) => {
  return (
    <div className={`flex ${spacing[size] || spacing.sm}`}>
      {avatars.map((avatar, index) => (
        <Avatar
          key={index}
          {...avatar}
          size={avatar.size || size}
          shape={avatar.shape || shape}
          overlaps={true}
        />
      ))}
    </div>
  );
};

AvatarGroup.displayName = 'AvatarGroup';
Avatar.displayName = 'Avatar';

export default Avatar;
