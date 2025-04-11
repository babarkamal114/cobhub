import { type FC } from 'react';

interface TableHeadProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode;
}

const TH: FC<TableHeadProps> = ({ className: classes = '', children, ...props }) => (
  <th
    className={`bg-transparent text-default-600 dark:text-default-200 py-4 px-3 text-start text-xs font-semibold uppercase tracking-wide ${classes}`}
    {...props}
  >
    {children}
  </th>
);

export { TH };
