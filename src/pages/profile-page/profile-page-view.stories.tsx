import type { StoryObj, Meta } from '@storybook/react';
import { ProfilePageView } from './profile-page-view';
import { NotificationProvider } from '../../providers/notification-provider';
import { mockUserDataFromServer } from '../../__mocks__/user-mock-data';

const user = mockUserDataFromServer();

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
    args: {
        isLoading: false,
        user,
    },
};

export default meta;
type Story = StoryObj<typeof ProfilePageView>;

export const ProfilePage: Story = {};

export const ProfilePageLoading: Story = {
    args: {
        ...ProfilePage.args,
        isLoading: true,
    },
};
