import type { Meta, StoryObj } from '@storybook/react-vite';
import { NavbarView } from './navbar-view';
import { fn } from 'storybook/test';

const meta = {
    title: 'Components/Navbar',
    component: NavbarView,
    tags: ['autodocs'],
    args: {
        isLoggedin: false,
        logOut: fn(),
        navigate: fn(),
    },
} satisfies Meta<typeof NavbarView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOutNavbar: Story = {};

export const LoggedInNavbar: Story = {
    args: {
        isLoggedin: true,
    },
};
