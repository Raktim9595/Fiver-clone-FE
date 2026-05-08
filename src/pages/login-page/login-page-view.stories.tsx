import type { Meta, StoryObj } from '@storybook/react-vite';

import { NotificationProvider } from '../../providers/notification-provider';
import { MemoryRouter } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LoginPageView } from './login-page-view';

const meta = {
    title: 'Pages/LoginPage',
    component: LoginPageView,
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
} satisfies Meta<typeof LoginPageView>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LoginPage: Story = {};
