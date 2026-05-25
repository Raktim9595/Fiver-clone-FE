import type { StoryObj, Meta } from '@storybook/react';
import { ProfilePageView } from './profile-page-view';
import { NotificationProvider } from '../../providers/notification-provider';

const meta: Meta<typeof ProfilePageView> = {
    title: 'Pages/ProfilePage',
    component: ProfilePageView,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    decorators: [
        (Story) => (
            <NotificationProvider>
                <Story />
            </NotificationProvider>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof ProfilePageView>;

export const ProfilePage: Story = {};
