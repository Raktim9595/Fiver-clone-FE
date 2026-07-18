import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import { useForm, type FieldErrors } from 'react-hook-form';
import SignUpFormView from './sign-up-form-view';
import { signUpFormInitialValues, type SignUpFormType } from './sign-up-form.types';
import { MemoryRouter } from 'react-router';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { mockUserFormData } from '../../../__mocks__/data/user-mock.data';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { getCountriesHandler } from '../../../__mocks__/handlers/countries.handlers';
import { getTimeZonesHandler } from '../../../__mocks__/handlers/timezones.handlers';
import { getLanguagesHandler } from '../../../__mocks__/handlers/language.handlers';

const meta: Meta<typeof SignUpFormView> = {
    title: 'Forms/SignUpForm',
    component: SignUpFormView,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
        msw: {
            handlers: [getCountriesHandler, getTimeZonesHandler, getLanguagesHandler],
        },
    },
};

export default meta;

type Story = StoryObj<typeof SignUpFormView>;

type StoryWrapperProps = {
    defaultValues?: Partial<SignUpFormType>;
    isSubmitting?: boolean;
    errors?: FieldErrors<SignUpFormType>;
};

const baseValues: SignUpFormType = signUpFormInitialValues;

const defaultValues: SignUpFormType = mockUserFormData();

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

    const query = new QueryClient();

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MemoryRouter>
                <QueryClientProvider client={query}>
                    <SignUpFormView
                        control={control}
                        errors={errorsOverride ?? errors}
                        handleSubmit={handleSubmit}
                        isSubmitting={isSubmitting ?? formIsSubmitting}
                        onSubmit={fn()}
                    />
                </QueryClientProvider>
            </MemoryRouter>
        </LocalizationProvider>
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
                dateOfBirth: {
                    type: 'required',
                    message: 'Date of birth is required',
                },
                timeZone: {
                    type: 'required',
                    message: 'Time zone is required',
                },
                language: {
                    type: 'required',
                    message: 'Language is required',
                },
                country: {
                    type: 'required',
                    message: 'Country is required',
                },
            }}
        />
    ),
};
