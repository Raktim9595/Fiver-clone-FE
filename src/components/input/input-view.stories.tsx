import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box } from '@mui/material';

import InputView from './input-view';
import { Person2Outlined } from '@mui/icons-material';

const meta = {
    title: 'Components/InputView',
    component: InputView,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    args: {
        label: 'Name',
        value: '',
        onChange: () => {},
    },
    decorators: [
        (Story) => (
            <Box
                sx={{
                    width: '20rem',
                    marginTop: '10rem',
                    marginLeft: '10rem',
                }}
            >
                <Story />
            </Box>
        ),
    ],
} satisfies Meta<typeof InputView>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CustomInputView: Story = {};

export const CustomInoutWithPlaceholder: Story = {
    args: {
        ...CustomInputView.args,
        placeholder: 'Enter your name',
    },
};

export const CustomInputFilled: Story = {
    args: {
        ...CustomInputView.args,
        value: 'John Doe',
    },
};

export const CustomInputWithIconOnStart: Story = {
    args: {
        ...CustomInputFilled.args,
        icon: <Person2Outlined />,
    },
};

export const CustomInputWithIconOnEnd: Story = {
    args: {
        ...CustomInputFilled.args,
        icon: <Person2Outlined />,
        iconposition: 'end',
    },
};
