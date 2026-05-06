import type { Meta, StoryObj } from '@storybook/react-vite';

import SelectView from './select-view';
import { PersonAddAltOutlined } from '@mui/icons-material';

const meta = {
    title: 'Components/SelectView',
    component: SelectView,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        icon: null,
        label: 'Label',
        onChange: () => {},
        options: [
            {
                label: 'Option 1',
                value: '1',
            },
            {
                label: 'Option 2',
                value: '2',
            },
            {
                label: 'Option 3',
                value: '3',
            },
        ],
        value: '',
    },
} satisfies Meta<typeof SelectView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Select: Story = {};

export const SelectWithIcon: Story = {
    args: {
        ...Select.args,
        icon: <PersonAddAltOutlined />,
    },
};

export const SelectWithDefaultValue: Story = {
    args: {
        ...SelectWithIcon.args,
        value: '3',
    },
};
