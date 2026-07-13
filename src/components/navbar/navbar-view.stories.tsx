import type { Meta, StoryObj } from '@storybook/react-vite';
import { NavbarView } from './navbar-view';
import { fn } from 'storybook/test';
import { mockUserDataFromServer } from '../../__mocks__/user-mock.data';

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

const user = mockUserDataFromServer();

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOutNavbar: Story = {};

export const LoggedInNavbar: Story = {
    args: {
        isLoggedin: true,
        user,
    },
};

export const LoggedInNavbarWithoutUser: Story = {
    args: {
        isLoggedin: true,
        user: undefined,
    },
};
