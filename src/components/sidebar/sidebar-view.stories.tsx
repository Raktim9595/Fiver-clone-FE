import type { Meta, StoryObj } from '@storybook/react';
import { SidebarView } from './sidebar-view';
import { fn } from 'storybook/test';
import { Box } from '@mui/material';

const meta: Meta<typeof SidebarView> = {
    component: SidebarView,
    title: 'Components/Sidebar',
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        currentPage: '/login',
        navigate: fn(),
    },
    render: (args) => (
        <Box
            sx={{
                width: '10rem',
            }}
        >
            <SidebarView {...args} />
        </Box>
    ),
};

export default meta;

type Story = StoryObj<typeof SidebarView>;

export const DefaultSidebar: Story = {};

export const SideBarWithSelectedItem: Story = {
    args: {
        ...DefaultSidebar.args,
        currentPage: 'profile',
    },
};
