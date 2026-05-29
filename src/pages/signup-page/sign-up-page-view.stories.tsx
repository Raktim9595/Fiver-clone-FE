import type { Meta, StoryObj } from '@storybook/react-vite';

import SignupPageView from './signup-page-view';
import { NotificationProvider } from '../../providers/notification-provider';
import { MemoryRouter } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const meta = {
    title: 'Pages/SignupPage',
    component: SignupPageView,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    decorators: [
        (Story) => {
            const client = new QueryClient();

            return (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <MemoryRouter>
                        <NotificationProvider>
                            <QueryClientProvider client={client}>
                                <Story />
                            </QueryClientProvider>
                        </NotificationProvider>
                    </MemoryRouter>
                </LocalizationProvider>
            );
        },
    ],
} satisfies Meta<typeof SignupPageView>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SignupPage: Story = {};
