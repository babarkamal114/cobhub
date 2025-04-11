import { type FC } from 'react';

interface TRProps extends React.HTMLAttributes<HTMLTableRowElement> {
  children: React.ReactNode;
}

const TR: FC<TRProps> = ({ className: classes = '', children, ...props }) => (
  <tr
    className={`hover:bg-muted-100 text-default-600 dark:text-contrast dark:hover:bg-muted-800/20 ${classes}`}
    {...props}
  >
    {children}
  </tr>
);

export { TR };
