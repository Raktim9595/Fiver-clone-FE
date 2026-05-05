import type { Meta, StoryObj } from '@storybook/react-vite';

import SignupPageView from './signup-page-view';

const meta = {
    title: 'SgnupPage',
    component: SignupPageView,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof SignupPageView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SignupPage: Story = {};
