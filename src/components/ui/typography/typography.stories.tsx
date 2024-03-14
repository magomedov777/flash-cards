import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from '@/components/ui/typography/typography'

const meta = {
  component: Typography,
} satisfies Meta<typeof Typography>

export default meta

type Story = StoryObj<typeof meta>

export const Typography_H1: Story = {
  args: {
    children: 'Header1',
    disabled: false,
    variant: 'h1',
  },
}

export const Typography_H2: Story = {
  args: {
    children: 'Header2',
    disabled: false,
    variant: 'h2',
  },
}
export const Typography_H3: Story = {
  args: {
    children: 'Header3',
    disabled: false,
    variant: 'h3',
  },
}
export const Typography_H4: Story = {
  args: {
    children: 'Header4',
    disabled: false,
    variant: 'h4',
  },
}

export const Typography_Body1: Story = {
  args: {
    children: 'Body1',
    disabled: false,
    variant: 'body1',
  },
}
export const Typography_Body2: Story = {
  args: {
    children: 'Body2',
    disabled: false,
    variant: 'body2',
  },
}

export const Typography_Link1: Story = {
  args: {
    children: 'Link1',
    disabled: false,
    variant: 'link1',
  },
}
export const Typography_Link2: Story = {
  args: {
    children: 'Link2',
    disabled: false,
    variant: 'link2',
  },
}
export const Typography_Subtitle1: Story = {
  args: {
    children: 'Subtitle1',
    disabled: false,
    variant: 'subtitle1',
  },
}
export const Typography_Subtitle2: Story = {
  args: {
    children: 'Subtitle2',
    disabled: false,
    variant: 'subtitle2',
  },
}
export const Typography_Overline: Story = {
  args: {
    children: 'Overline',
    disabled: false,
    variant: 'overline',
  },
}

export const Typography_Error: Story = {
  args: {
    children: 'Error',
    disabled: false,
    variant: 'caption',
  },
}
export const Typography_Label: Story = {
  args: {
    children: 'Label',
    disabled: false,
    variant: 'label',
  },
}
