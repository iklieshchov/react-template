import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FC } from 'react';
import { Post } from '../../app/interfaces/posts';
import { PostCard } from '../../app/components/post-card';

export default {
  title: 'Cards',
  component: PostCard,
  argTypes: {
    id: { control: 'number', name: 'post[\'id\']' },
    userId: { control: 'number', name: 'post[\'useId\']' },
    title: { control: 'text', name: 'post[\'title\']' },
    body: { control: 'text', name: 'post[\'body\']' },
    post: { table: { disable: true } },
  },
} as ComponentMeta<FC<Post>>;

const Template: ComponentStory<FC<Post>> = (args) => <PostCard post={args} />;

export const Card = Template.bind({});
Card.args = {
  id: 42,
  userId: 1,
  title: 'Post Title',
  body: 'Post body',
};
