import type { Meta, StoryObj } from '@storybook/react';

import { CustomMenuView } from './custom-menu-view';
import { fn } from 'storybook/test';
import { Avatar } from '@mui/material';

const meta = {
    title: 'Components/CustomMenu',
    component: CustomMenuView,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof CustomMenuView>;

export default meta;

type Story = StoryObj<typeof meta>;
const actions = [
    {
        label: 'Action 1',
        onClick: fn(),
    },
    {
        label: 'Action 2',
        onClick: fn(),
        icon: (
            <Avatar
                sx={{
                    height: '1.5rem',
                    width: '1.5rem',
                }}
            />
        ),
    },
    {
        label: 'Action 3',
        onClick: fn(),
        disabled: true,
    },
];

export const ButtonMenu: Story = {
    args: {
        actions,
        handleOpen: fn(),
        handleClose: fn(),
        handleActionClick: fn(),
        anchorEl: document.body,
        open: false,
        iconButton: false,
        buttonLabel: 'Menu',
    },
};

export const ButtonMenuOpen: Story = {
    args: {
        ...ButtonMenu.args,
        open: true,
    },
};

export const IconButtonMenu: Story = {
    args: {
        ...ButtonMenu.args,
        iconButton: true,
        icon: <Avatar />,
    },
};

export const IconButtonMenuOpen: Story = {
    args: {
        ...IconButtonMenu.args,
        open: true,
    },
};
