/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable perfectionist/sort-objects */
import type { Meta, StoryObj } from '@storybook/react'

import { Card } from './Card'

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const ShowCard: Story = {
  args: {
    children: (
      <>
        <a href="">Ссылка</a>
      </>
    ),
  },
}
