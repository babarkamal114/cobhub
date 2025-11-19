import clsx from 'clsx';

import { LoaderProps } from '@/types/components';

import { loaderVariants } from '../variants/loader-variants';

const Loader: React.FC<LoaderProps> = ({ size, classNames, thickness, color, ...props }) => {
  return (
    <span
      className={clsx(loaderVariants({ color, size }), classNames)}
      role="status"
      aria-label="Loading"
      {...props}
    >
      <svg className="loader" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle
          className="opacity-25"
          cx="25"
          cy="25"
          r="20"
          stroke="currentColor"
          strokeWidth={thickness}
        />
        <circle
          className="opacity-75"
          cx="25"
          cy="25"
          r="20"
          stroke="currentColor"
          strokeWidth={thickness}
          strokeDasharray="80"
          strokeDashoffset="60"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
};

Loader.displayName = 'Loader';

export default Loader;
