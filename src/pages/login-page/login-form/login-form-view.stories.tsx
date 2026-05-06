import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import { LoginFormView } from './login-form-view';
import { loginFormInitialValues, type LoginFormType } from './login-form.types';
import { type FieldErrors, useForm } from 'react-hook-form';

const meta: Meta<typeof LoginFormView> = {
    title: 'Forms/LoginForm',
    component: LoginFormView,
};

export default meta;
type Story = StoryObj<typeof LoginFormView>;

type StoryWrapperProps = {
    defaultValues?: Partial<LoginFormType>;
    isSubmitting?: boolean;
    errors?: FieldErrors<LoginFormType>;
};

const defaultValues: Partial<LoginFormType> = {
    username: 'JohnDoe',
    password: '12345',
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
    } = useForm<LoginFormType>({
        defaultValues: {
            ...loginFormInitialValues,
            ...defaultValues,
        },
    });

    return (
        <LoginFormView
            control={control}
            errors={errorsOverride ?? errors}
            handleSubmit={handleSubmit}
            isSubmitting={isSubmitting ?? formIsSubmitting}
            onSubmit={fn()}
        />
    );
};

export const LoginForm: Story = {
    render: () => <StoryWrapper />,
};

export const LoginFormFilled: Story = {
    render: () => <StoryWrapper defaultValues={defaultValues} />,
};

export const LoginFormSubmitting: Story = {
    render: () => <StoryWrapper defaultValues={defaultValues} isSubmitting />,
};

export const LoginFormWithErrors: Story = {
    render: () => (
        <StoryWrapper
            defaultValues={defaultValues}
            errors={{
                username: {
                    type: 'required',
                    message: 'Username is required',
                },
                password: {
                    type: 'required',
                    message: 'Password is required',
                },
            }}
        />
    ),
};
