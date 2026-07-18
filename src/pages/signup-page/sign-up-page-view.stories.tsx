import type { Meta, StoryObj } from '@storybook/react-vite';

import SignupPageView from './signup-page-view';
import { NotificationProvider } from '../../providers/notification-provider';
import { MemoryRouter } from 'react-router';
import { QueryClientProvider } from '@tanstack/react-query';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { getCountriesHandler } from '../../__mocks__/handlers/countries.handlers';
import { queryClient } from '../../utils/query-client';

const meta = {
    title: 'Pages/SignupPage',
    component: SignupPageView,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
        msw: {
            handlers: [getCountriesHandler],
        },
    },
    decorators: [
        (Story) => {
            return (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <MemoryRouter>
                        <NotificationProvider>
                            <QueryClientProvider client={queryClient}>
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
