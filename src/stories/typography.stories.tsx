import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "../components/ui/typography";

const meta: Meta<typeof Typography> = {
  title: "UI/Typography",
  component: Typography,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    children: "Default Typography",
  },
};

export const Headings: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography variant="h1">Heading 1 - 60px Bold</Typography>
      <Typography variant="h2">Heading 2 - 48px Bold</Typography>
      <Typography variant="h3">Heading 3 - 40px Bold</Typography>
      <Typography variant="h4">Heading 4 - 30px Bold</Typography>
      <Typography variant="h5">Heading 5 - 28px Semibold</Typography>
      <Typography variant="h6">Heading 6 - 24px Semibold</Typography>
    </div>
  ),
};

export const BodyText: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography variant="body">Body - 18px Regular</Typography>
      <Typography variant="bodyMedium">Body Medium - 18px Medium</Typography>
      <Typography variant="bodyLargeSemibold">Body Large Semibold - 18px Semibold</Typography>
      <Typography variant="bodyLargeBold">Body Large Bold - 18px Bold</Typography>
    </div>
  ),
};

export const MediumBody: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography variant="bodyMediumRegular">Medium Body Regular - 16px Regular</Typography>
      <Typography variant="bodyMediumMedium">Medium Body Medium - 16px Medium</Typography>
      <Typography variant="bodyMediumSemibold">Medium Body Semibold - 16px Semibold</Typography>
      <Typography variant="bodyMediumBold">Medium Body Bold - 16px Bold</Typography>
    </div>
  ),
};

export const SmallText: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography variant="smallRegular">Small Regular - 14px Regular</Typography>
      <Typography variant="smallMedium">Small Medium - 14px Medium</Typography>
      <Typography variant="smallSemibold">Small Semibold - 14px Semibold</Typography>
      <Typography variant="smallBold">Small Bold - 14px Bold</Typography>
    </div>
  ),
};

export const ExtraSmall: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography variant="xsRegular">Extra Small Regular - 12px Regular</Typography>
      <Typography variant="xsMedium">Extra Small Medium - 12px Medium</Typography>
      <Typography variant="xsSemibold">Extra Small Semibold - 12px Semibold</Typography>
      <Typography variant="xsBold">Extra Small Bold - 12px Bold</Typography>
    </div>
  ),
}; 