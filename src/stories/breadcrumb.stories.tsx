import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Home, Folder, FileText } from "lucide-react";
import { Breadcrumb } from "ui-components";

export default {
  title: "UI/Breadcrumb",
  component: Breadcrumb,
  argTypes: {
    separator: {
      control: "radio",
      options: ["slash", "chevron", "arrow", "dot"],
    },
    color:{
        control: "select",
        options: [
            'default',
            'contrast',
            'muted',
            'primary',
            'info',
            'success',
            'warning',
            'danger',
          ],
    }
  },
} as Meta<typeof Breadcrumb>;

const BreadcrumbTemplate: StoryFn<typeof Breadcrumb> = (args) => <Breadcrumb {...args} />;

export const Basic = BreadcrumbTemplate.bind({});

const breadcrumbItems = [
  { title: "Home", href: "#", icon: Home },
  { title: "Projects", href: "#", icon: Folder },
  { title: "Document", icon: FileText },
];

export const Default = () => <Breadcrumb items={breadcrumbItems} color="default" separator="slash" />;
export const ChevronSeparator = () => <Breadcrumb items={breadcrumbItems} color="primary" separator="chevron" />;
export const ArrowSeparator = () => <Breadcrumb items={breadcrumbItems} color="violet" separator="arrow" />;
export const DotSeparator = () => <Breadcrumb items={breadcrumbItems} color="success" separator="dot" />;