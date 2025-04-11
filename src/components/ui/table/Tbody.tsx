import { type FC } from 'react';

interface TbodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: React.ReactNode;
}

const Tbody: FC<TbodyProps> = ({ className: classes = '', children, ...props }) => (
  <tbody className={`divide-y divide-muted-200 dark:divide-muted-800 ${classes}`} {...props}>
    {children}
  </tbody>
);

export { Tbody };
