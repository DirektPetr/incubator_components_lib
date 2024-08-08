import { Meta, StoryObj } from '@storybook/react'
import { Select, SelectGroup, SelectItem, SelectLabel } from './select'
import { SelectSeparator } from '@radix-ui/react-select'

const meta = {
  component: Select,
  title: 'Components/Select',
  tags: ['autodocs'],
} satisfies Meta<typeof Select>

export default meta

type Story = StoryObj<typeof meta>
export const Primary: Story = {
  args: {
    placeholder: 'Primary Select',
    children: (
      <>
        <SelectItem value={'1'}>First option</SelectItem>
        <SelectItem value={'2'}>Second option</SelectItem>
        <SelectItem value={'3'}>Third option</SelectItem>
        <SelectItem value={'4'}>Fourth option</SelectItem>
        <SelectItem value={'5'}>Fifth option</SelectItem>
      </>
    ),
  },
}

const options = [
  {
    label: 'Option 1',
    value: '1',
  },
  {
    label: 'Option 2',
    value: '2',
  },
  {
    label: 'Option 3',
    value: '3',
  },
]

export const Alt: Story = {
  args: {
    placeholder: 'Alt Select',
    children: (
      <>
        {options.map(({ label, value }) => {
          return <SelectItem value={value}>{label}</SelectItem>
        })}
      </>
    ),
  },
}

export const WithGroups: Story = {
  args: {
    placeholder: 'Select a theme',
    children: (
      <>
        <SelectGroup>
          <SelectLabel>Group 1</SelectLabel>
          <SelectItem value={'1'}>1</SelectItem>
          <SelectSeparator />
          <SelectItem value={'2'}>2</SelectItem>
          <SelectItem value={'3'}>3</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Group 2</SelectLabel>
          <SelectItem value={'4'}>4</SelectItem>
          <SelectItem value={'5'}>5</SelectItem>
          <SelectItem value={'6'}>6</SelectItem>
        </SelectGroup>
      </>
    ),
  },
}
