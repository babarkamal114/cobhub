import type { Meta, StoryObj } from '@storybook/react';

import { Tooltip, Button } from 'ui-components';

const meta: Meta<typeof Tooltip> = {
  title: 'UI/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    position: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'start', 'end'],
    },
    content: {
      control: { type: 'text' },
    },
    className: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tooltipContent: 'This is a default tooltip',
    children: <Button>Hover me</Button>,
    position: 'top',
  },
};

export const Positions: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-12 p-12">
      <div className="flex flex-row gap-16 items-center">
        <Tooltip tooltipContent="Top position tooltip" position="top">
          <Button>Top</Button>
        </Tooltip>
        <Tooltip tooltipContent="Bottom position tooltip" position="bottom">
          <Button>Bottom</Button>
        </Tooltip>
      </div>
      <div className="flex flex-row gap-16 items-center">
        <Tooltip tooltipContent="Start position tooltip" position="start">
          <Button>Start</Button>
        </Tooltip>
        <Tooltip tooltipContent="End position tooltip" position="end">
          <Button>End</Button>
        </Tooltip>
      </div>
    </div>
  ),
};

export const StyleVariants: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-8 p-8">
      <div className="flex flex-row flex-wrap gap-6 items-center justify-center">
        <Tooltip tooltipContent="Default style tooltip" position="top">
          <Button variant="solid" color="default">
            Default
          </Button>
        </Tooltip>

        <Tooltip
          tooltipContent="Primary color tooltip"
          position="top"
          className="bg-primary-500 border-primary-600"
        >
          <Button variant="solid" color="primary">
            Primary
          </Button>
        </Tooltip>

        <Tooltip
          tooltipContent="Success color tooltip"
          position="top"
          className="bg-success-500 border-success-600"
        >
          <Button variant="solid" color="success">
            Success
          </Button>
        </Tooltip>

        <Tooltip
          tooltipContent="Warning color tooltip"
          position="top"
          className="bg-warning-500 border-warning-600"
        >
          <Button variant="solid" color="warning">
            Warning
          </Button>
        </Tooltip>

        <Tooltip
          tooltipContent="Danger color tooltip"
          position="top"
          className="bg-danger-500 border-danger-600"
        >
          <Button variant="solid" color="danger">
            Danger
          </Button>
        </Tooltip>
      </div>

      <div className="flex flex-row flex-wrap gap-6 items-center justify-center mt-6">
        <Tooltip
          tooltipContent="Pastel success tooltip"
          position="bottom"
          className="bg-success-100 text-success-800 border-success-300"
        >
          <Button variant="pastel" color="success">
            Pastel Success
          </Button>
        </Tooltip>

        <Tooltip
          tooltipContent="Dark theme tooltip"
          position="bottom"
          className="bg-gray-800 text-white border-gray-700 dark:bg-gray-800"
        >
          <Button variant="solid" color="contrast">
            Dark Theme
          </Button>
        </Tooltip>
      </div>
    </div>
  ),
};

export const ContentTypes: Story = {
  render: () => (
    <div className="flex flex-row flex-wrap gap-6 items-center justify-center p-8">
      <Tooltip tooltipContent="Simple text tooltip">
        <Button>Simple Text</Button>
      </Tooltip>

      <Tooltip tooltipContent="This is a longer tooltip content that might wrap to multiple lines to show how the tooltip handles text overflow">
        <Button>Long Content</Button>
      </Tooltip>

      <Tooltip
        tooltipContent={
          <div className="space-y-2">
            <div className=" font-bold text-white">Rich Content</div>
            <ul className="list-disc list-inside text-white text-xs space-y-1">
              <li>Multiple lines</li>
              <li>Custom formatting</li>
              <li>Structured layout</li>
            </ul>
          </div>
        }
      >
        <Button>Rich Content</Button>
      </Tooltip>

      <Tooltip tooltipContent="Tooltip with icon → ✅">
        <Button>With Icon</Button>
      </Tooltip>
    </div>
  ),
};

export const TriggerElements: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-8 p-8">
      <div className="flex flex-row flex-wrap gap-6 items-center justify-center">
        <Tooltip tooltipContent="Button tooltip">
          <Button>Button</Button>
        </Tooltip>

        <Tooltip tooltipContent="Text link tooltip">
          <span className="text-blue-500 cursor-help underline decoration-dashed">Text Link</span>
        </Tooltip>

        <Tooltip tooltipContent="Icon tooltip">
          <div className="w-10 h-10 bg-gray-200 rounded-lg cursor-help flex items-center justify-center hover:bg-gray-300 transition-colors">
            <span className="text-lg">ℹ️</span>
          </div>
        </Tooltip>
      </div>

      <div className="flex flex-row flex-wrap gap-6 items-center justify-center">
        <Tooltip tooltipContent="Disabled element tooltip">
          <Button isDisabled={true}>Disabled Button</Button>
        </Tooltip>

        <Tooltip tooltipContent="Small icon tooltip">
          <div className="w-6 h-6 bg-primary-500 rounded-full cursor-help flex items-center justify-center">
            <span className="text-white text-xs">i</span>
          </div>
        </Tooltip>

        <Tooltip tooltipContent="Custom styled element">
          <div className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg cursor-help font-medium">
            Gradient
          </div>
        </Tooltip>
      </div>
    </div>
  ),
};
