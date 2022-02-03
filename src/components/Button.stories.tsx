import { Stack } from '@mui/material'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import Button from './Button'

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Button</Button>

const VariantSmatteringTemplate: ComponentStory<typeof Button> = (args) => (
  <Stack spacing={2} sx={{ maxWidth: 300 }}>
    <Button {...args}>Button</Button>
    <Button variant="outlined" {...args}>Button</Button>
    <Button variant="contained" {...args}>Button</Button>
    <Button variant="contained" color="secondary" {...args}>Button</Button>
  </Stack>
)

export const VariantSmattering = VariantSmatteringTemplate.bind({})

export const Default = Template.bind({})

