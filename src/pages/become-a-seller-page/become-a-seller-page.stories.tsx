import type { Meta, StoryObj } from '@storybook/react-vite';
import { BecomeASellerPageView } from './become-a-seller-view';
import { fn } from 'storybook/test';

const meta = {
    title: 'Pages/BecomeASellerPage',
    component: BecomeASellerPageView,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        handleSaveForLater: fn(),
        handleStartOnboarding: fn(),
    },
} satisfies Meta<typeof BecomeASellerPageView>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefailtBecomeASellerPage: Story = {};
