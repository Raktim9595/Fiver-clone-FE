import type { Meta, StoryObj } from '@storybook/react-vite';

import SignupPageView from './signup-page-view';
import { NotificationProvider } from '../../providers/notification-provider';
import { MemoryRouter } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

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
                <MemoryRouter>
                    <NotificationProvider>
                        <QueryClientProvider client={client}>
                            <Story />
                        </QueryClientProvider>
                    </NotificationProvider>
                </MemoryRouter>
            );
        },
    ],
} satisfies Meta<typeof SignupPageView>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
