import { Meta, StoryObj } from '@storybook/react'
import { Recaptcha } from './recaptcha'

const meta = {
  component: Recaptcha,
  title: 'Components/Recaptcha',
  tags: ['autodocs'],
} satisfies Meta<typeof Recaptcha>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'default',
    label: 'I’m not a robot',
  },
}

export const Error: Story = {
  args: {
    variant: 'error',
    label: 'I’m not a robot',
  },
}
