import { Meta, StoryObj } from '@storybook/react'
import Recaptcha from './recaptcha'

const meta = {
  component: Recaptcha,
  title: 'Components/Recaptcha',
} satisfies Meta<typeof Recaptcha>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'I’m not a robot',
  },
}

export const Checked: Story = {
  args: {
    label: 'I’m not a robot',
  },
}

export const Loading: Story = {
  args: {
    label: 'I’m not a robot',
  },
}

export const Error: Story = {
  args: {
    label: 'I’m not a robot',
    errorMsg: 'Please verify that you are not a robot',
  },
}

export const Expired: Story = {
  args: {
    label: 'I’m not a robot',
    expiredMsg: 'Verifiction expired. Check the checkbox again.',
  },
}
