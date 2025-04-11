import { type FC } from 'react';

interface TableDataProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  children: React.ReactNode;
}
const TD: FC<TableDataProps> = ({ className: classes = '', children, ...props }) => (
  <td
    className={`border-t border-muted-200 py-4 px-3 text-sm dark:border-muted-800 ${classes}`}
    valign="middle"
    {...props}
  >
    {children}
  </td>
);

export { TD };
