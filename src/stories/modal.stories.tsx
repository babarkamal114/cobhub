import React, { useState } from 'react';

import { ModalProps } from 'types';
import { Button, Modal, Typography } from 'ui-components';

export default {
  title: 'UI/Modal',
  component: Modal,
};

const Template = ({ title, description, children, size, onBackdropClick }: ModalProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="outlined" onClick={() => setOpen(true)}>
        Open Modal
      </Button>
      <Modal
        title={title}
        description={description}
        size={size}
        open={open}
        onClose={() => setOpen(false)}
        onBackdropClick={onBackdropClick}
      >
        {children}
      </Modal>
    </>
  );
};

export const Default = {
  render: Template,
  args: {
    title: 'Modal Title',
    description: 'This is a description for the modal.',
    children: (
      <>
        <Typography variant="h4" className="text-slate-700 dark:text-slate-200">
          Welcome to Cobhub!
        </Typography>
        <Typography variant="text-base" className="text-slate-700 dark:text-slate-200">
          This is the content of the modal. You can put any content here.
        </Typography>
      </>
    ),
  },
};

export const WithBackdropClick = {
  render: Template,
  args: {
    title: 'Modal Title',
    description: 'This is a description for the modal.',
    children: (
      <>
        <Typography variant="h4" className="text-slate-700 dark:text-slate-200">
          Welcome to Cobhub!
        </Typography>
        <Typography variant="text-base" className="text-slate-700 dark:text-slate-200">
          This is the content of the modal. You can put any content here.
        </Typography>
      </>
    ),
    onBackdropClick: () => alert('Backdrop clicked!'),
  },
};

export const LargeModal = {
  render: Template,
  args: {
    title: 'Modal Title',
    description: 'This is a description for the modal.',
    children: (
      <>
        <Typography variant="h4" className="text-slate-700 dark:text-slate-200">
          Welcome to Cobhub!
        </Typography>
        <Typography variant="text-base" className="text-slate-700 dark:text-slate-200">
          This is the content of the modal. You can put any content here.
        </Typography>
      </>
    ),
    size: 'lg',
  },
};
