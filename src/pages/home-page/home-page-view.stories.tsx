import type { Meta, StoryObj } from '@storybook/react-vite';
import HomePageView from './home-page-view';

const meta = {
    title: 'Pages/HomePage',
    component: HomePageView,
    tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const HomePage: Story = {};
