import type { StoryObj, Meta } from '@storybook/react';
import { ProfilePageView } from './profile-page-view';
import { NotificationProvider } from '../../providers/notification-provider';
import { mockUserDataFromServer } from '../../__mocks__/data/user-mock.data';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { getCountriesHandler } from '../../__mocks__/handlers/countries.handlers';
import { getTimeZonesHandler } from '../../__mocks__/handlers/timezones.handlers';
import { getLanguagesHandler } from '../../__mocks__/handlers/language.handlers';
import { getLoggedinUserHandler } from '../../__mocks__/handlers/user.handlers';
import { filesSearchHandler } from '../../__mocks__/handlers/file.handlers';

const user = mockUserDataFromServer({
    createdAt: '2025-01-01T00:00:00.000Z',
    updatedAt: '2025-01-01T00:00:00.000Z',
});

const meta: Meta<typeof ProfilePageView> = {
    title: 'Pages/ProfilePage',
    component: ProfilePageView,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
        msw: {
            handlers: [
                getCountriesHandler,
                getTimeZonesHandler,
                getLanguagesHandler,
                getLoggedinUserHandler,
                filesSearchHandler,
            ],
        },
    },
    decorators: [
        (Story) => {
            const client = new QueryClient();
            return (
                <NotificationProvider>
                    <QueryClientProvider client={client}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <Story />
                        </LocalizationProvider>
                    </QueryClientProvider>
                </NotificationProvider>
            );
        },
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
