import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import { RootLayoutView } from './root-layout-view';
import { setAuthToken } from '../utils/auth-storage';

const meta: Meta<typeof RootLayoutView> = {
    title: 'Layouts/RootLayoutView',
    component: RootLayoutView,
    decorators: [
        (Story) => {
            return (
                <MemoryRouter>
                    <Story />
                </MemoryRouter>
            );
        },
    ],
};

export default meta;

type Story = StoryObj<typeof RootLayoutView>;

export const LoadingRootLayout: Story = {
    args: {
        isLoading: true,
        data: undefined,
    },
};

export const LoggedOutRootLayout: Story = {
    args: {
        isLoading: false,
        data: undefined,
    },
};

export const LoggedInRootLayout: Story = {
    args: {
        isLoading: false,
        data: {
            data: {
                id: '1',
                firstName: 'Raktim',
                lastName: 'Thapa',
                email: 'raktim@example.com',
                username: 'raktimthapa',
                role: 'BUYER',
            },
        } as any,
    },
};
