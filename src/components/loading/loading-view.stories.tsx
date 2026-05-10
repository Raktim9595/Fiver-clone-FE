import { StoryFn, type Meta, type StoryObj } from '@storybook/react-vite';

import LoadingView from './loading-view';

const meta = {
    title: 'Components/Loading',
    component: LoadingView,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof LoadingView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoadingComponent: Story = {};

export const LoadingWithContent: Story = {
    args: {
        content: 'Loading content',
    },
};
