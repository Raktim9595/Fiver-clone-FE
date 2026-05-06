import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import { useForm, type FieldErrors } from 'react-hook-form';
import SignUpFormView from './sign-up-form-view';
import { type SignUpFormType, UserRole } from './sign-up-form.types';

const meta: Meta<typeof SignUpFormView> = {
    title: 'Forms/SignUpForm',
    component: SignUpFormView,
};

export default meta;

type Story = StoryObj<typeof SignUpFormView>;

type StoryWrapperProps = {
    defaultValues?: Partial<SignUpFormType>;
    isSubmitting?: boolean;
    errors?: FieldErrors<SignUpFormType>;
};

const baseValues: SignUpFormType = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    age: 0,
    phoneNumber: '',
    address: '',
    role: UserRole.BUYER,
};

const defaultValues: SignUpFormType = {
    firstName: 'Raktim',
    lastName: 'Thapa',
    username: 'raktimthapa',
    email: 'raktim@example.com',
    password: 'random',
    age: 22,
    phoneNumber: '0412345678',
    address: 'Melbourne, Australia',
    role: UserRole.BUYER,
};

const StoryWrapper = ({
    defaultValues,
    isSubmitting,
    errors: errorsOverride,
}: StoryWrapperProps) => {
    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitting: formIsSubmitting },
    } = useForm<SignUpFormType>({
        defaultValues: {
            ...baseValues,
            ...defaultValues,
        },
    });

    return (
        <SignUpFormView
            control={control}
            errors={errorsOverride ?? errors}
            handleSubmit={handleSubmit}
            isSubmitting={isSubmitting ?? formIsSubmitting}
            onSubmit={fn()}
        />
    );
};

export const SignupForm: Story = {
    render: () => <StoryWrapper />,
};

export const SignupFormFilled: Story = {
    render: () => <StoryWrapper defaultValues={defaultValues} />,
};

export const SignupFormSubmitting: Story = {
    render: () => <StoryWrapper defaultValues={defaultValues} isSubmitting />,
};

export const SignupFormWithErrors: Story = {
    render: () => (
        <StoryWrapper
            errors={{
                firstName: {
                    type: 'required',
                    message: 'First name is required',
                },
                lastName: {
                    type: 'required',
                    message: 'Last name is required',
                },
                username: {
                    type: 'required',
                    message: 'Username is required',
                },
                email: {
                    type: 'pattern',
                    message: 'Invalid email',
                },
                age: {
                    type: 'min',
                    message: 'Age must be greater than 0',
                },
                phoneNumber: {
                    type: 'required',
                    message: 'Phone number is required',
                },
                address: {
                    type: 'required',
                    message: 'Address is required',
                },
                password: {
                    type: 'required',
                    message: 'Password is required',
                },
            }}
        />
    ),
};
