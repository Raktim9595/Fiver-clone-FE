import type { Meta, StoryObj } from '@storybook/react-vite';

import { SignUpFormView } from './sign-up-form-view';
import { signUpFormInitialValues } from './sign-up-form.types';

const meta = {
    title: 'SignUpFormView',
    component: SignUpFormView,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    args: signUpFormInitialValues,
} satisfies Meta<typeof SignUpFormView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SignUpForm: Story = {};

export const SignUpFormFilled: Story = {
    args: {
        username: 'username',
        email: 'email',
        password: 'password',
        firstname: 'firstname',
        lastname: 'lastname',
        age: 20,
        address: 'address',
        phoneNumber: '1234567890',
        role: 'BUYER',
    },
};
