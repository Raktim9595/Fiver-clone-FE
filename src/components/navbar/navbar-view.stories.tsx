import type { Meta, StoryObj } from '@storybook/react-vite';
import NavbarView from './navbar-view';

const meta = {
    title: 'Components/Navbar',
    component: NavbarView,
    tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Navbar: Story = {};
