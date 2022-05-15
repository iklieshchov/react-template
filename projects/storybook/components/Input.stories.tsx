import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Input } from '../../app/components/input';

export default {
  title: 'Inputs',
  component: Input,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: [
          'text',
          'password',
          'number',
        ],
      },
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Text = Template.bind({});
Text.args = {
  type: 'text',
  value: '',
  placeholder: 'Text',
  disabled: false,
  error: '',
};

export const Password = Template.bind({});
Password.args = {
  type: 'password',
  value: '123',
  placeholder: 'Password',
  disabled: false,
  error: '',
};

export const Number = Template.bind({});
Number.args = {
  type: 'number',
  value: 42,
  placeholder: 'Numeric',
  disabled: false,
  error: '',
};
