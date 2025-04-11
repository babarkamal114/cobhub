import { type FC } from 'react';

interface TheadProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: React.ReactNode;
}

const Thead: FC<TheadProps> = ({ className: classes = '', children, ...props }) => (
  <thead className={`bg-muted-50 dark:bg-muted-800/30 ${classes}`} {...props}>
    {children}
  </thead>
);

export { Thead };
