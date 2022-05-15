import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button, PrimaryButton, DangerButton } from '../../app/components/button';

export default {
  title: 'Buttons',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof PrimaryButton> = (args) => <PrimaryButton {...args} />;
Primary.args = {
  children: 'Primary',
  disabled: false,
};

export const Default: ComponentStory<typeof Button> = (args) => <Button {...args} />;
Default.args = {
  children: 'Default',
  disabled: false,
};

export const Danger: ComponentStory<typeof DangerButton> = (args) => <DangerButton {...args} />;
Danger.args = {
  children: 'Danger',
  disabled: false,
};
