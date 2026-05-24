import type { StoryObj, Meta } from '@storybook/react';
import { ProfilePageView } from './profile-page-view';

const meta: Meta<typeof ProfilePageView> = {
    title: 'Pages/ProfilePage',
    component: ProfilePageView,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof ProfilePageView>;

export const ProfilePage: Story = {};
