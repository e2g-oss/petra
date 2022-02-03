import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import MaterialPicker, { Material } from './MaterialPicker'

export default {
  title: 'Components/MaterialPicker',
  component: MaterialPicker,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof MaterialPicker>

const Template: ComponentStory<typeof MaterialPicker> = (args) => <MaterialPicker {...args} />

export const Steel = Template.bind({})
Steel.args = {
  material: Material.steel,
}

export const Beaver = Template.bind({})
Beaver.args = {
  material: Material.beaver,
}

