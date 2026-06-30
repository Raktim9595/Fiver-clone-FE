import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProfileDetailsView } from './profile-details-view';
import {
    profileDetailsFormInitialValues,
    type ProfileDetailsFormType,
} from './profile-detils.types';
import { type FieldErrors, useForm } from 'react-hook-form';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { fn } from 'storybook/test';

type StoryWrapperProps = {
    defaultValues?: Partial<ProfileDetailsFormType>;
    isSubmitting?: boolean;
    errors?: FieldErrors<ProfileDetailsFormType>;
};

const baseValues: ProfileDetailsFormType = profileDetailsFormInitialValues;
const defaultValues: ProfileDetailsFormType = {
    address: 'Melbourne, Victoria',
    country: 'Australia',
    dateOfBirth: '2001-02-25',
    email: 'bXOyO@example.com',
    language: 'English',
    phoneNumber: '0412345678',
    timeZone: 'Australia/Melbourne',
    username: 'JohnDoe',
};

const meta = {
    component: ProfileDetailsView,
    title: 'Pages/ProfilePage/ProfileDetails',
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof ProfileDetailsView>;

export default meta;

type Story = StoryObj<typeof ProfileDetailsView>;

const StoryWrapper = ({
    defaultValues,
    errors: errorsOverride,
    isSubmitting,
}: StoryWrapperProps) => {
    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitting: formIsSubmitting },
    } = useForm<ProfileDetailsFormType>({
        defaultValues: {
            ...baseValues,
            ...defaultValues,
        },
    });

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <ProfileDetailsView
                control={control}
                errors={errorsOverride ?? errors}
                handleSubmit={handleSubmit}
                isSubmitting={isSubmitting ?? formIsSubmitting}
                onSubmit={fn()}
            />
        </LocalizationProvider>
    );
};

export const ProfileDetailsForm: Story = {
    render: (args) => <StoryWrapper {...args} />,
};

export const ProfileDetailsFormFilled: Story = {
    render: (args) => <StoryWrapper {...args} defaultValues={defaultValues} />,
};

export const ProfileDetailsFormSubmitting: Story = {
    render: (args) => <StoryWrapper {...args} defaultValues={defaultValues} isSubmitting />,
};

export const ProfileDetailsFormWithErrors: Story = {
    render: (args) => (
        <StoryWrapper
            {...args}
            errors={{
                address: {
                    type: 'required',
                    message: 'Address is required',
                },
                country: {
                    type: 'required',
                    message: 'Country is required',
                },
                dateOfBirth: {
                    type: 'required',
                    message: 'Date of birth is required',
                },
                email: {
                    type: 'required',
                    message: 'Email is required',
                },
                language: {
                    type: 'required',
                    message: 'Language is required',
                },
                phoneNumber: {
                    type: 'required',
                    message: 'Phone number is required',
                },
                timeZone: {
                    type: 'required',
                    message: 'Time zone is required',
                },
                username: {
                    type: 'required',
                    message: 'Username is required',
                },
            }}
        />
    ),
};
