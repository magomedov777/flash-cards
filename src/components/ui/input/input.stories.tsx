import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './input'

const meta = {
  component: Input,
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    disabled: false,
    label: 'input',
    placeholder: 'Input',
    type: 'text',
  },
}

export const Password: Story = {
  args: {
    disabled: false,
    label: 'input',
    placeholder: 'Input',
    type: 'password',
  },
}

export const Search: Story = {
  args: {
    disabled: false,
    label: 'input',
    placeholder: 'Input search',
    search: true,
  },
}
export const Error: Story = {
  args: {
    disabled: false,
    errorMessage: 'Error',
    placeholder: 'Input search',
  },
}
