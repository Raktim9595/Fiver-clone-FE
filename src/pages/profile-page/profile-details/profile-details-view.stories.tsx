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
import {
    mockCountryData,
    mockLanguageData,
    mockTimezonedata,
} from '../../../__mocks__/data/info-mock.data';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '../../../utils/query-client';
import { getCountriesHandler } from '../../../__mocks__/handlers/countries.handlers';
import { getTimeZonesHandler } from '../../../__mocks__/handlers/timezones.handlers';
import { getLanguagesHandler } from '../../../__mocks__/handlers/language.handlers';

type StoryWrapperProps = {
    defaultValues?: Partial<ProfileDetailsFormType>;
    isSubmitting?: boolean;
    errors?: FieldErrors<ProfileDetailsFormType>;
    isDirty?: boolean;
};

const baseValues: ProfileDetailsFormType = profileDetailsFormInitialValues;
const defaultValues: ProfileDetailsFormType = {
    address: 'Melbourne, Victoria',
    country: mockCountryData(),
    dateOfBirth: '2001-02-25',
    email: 'bXOyO@example.com',
    language: mockLanguageData(),
    phoneNumber: '0412345678',
    timeZone: mockTimezonedata(),
    username: 'JohnDoe',
    bio: 'I am a software developer',
};

const meta = {
    component: ProfileDetailsView,
    title: 'Pages/ProfilePage/ProfileDetails',
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
        msw: {
            handlers: [getCountriesHandler, getTimeZonesHandler, getLanguagesHandler],
        },
    },
} satisfies Meta<typeof ProfileDetailsView>;

export default meta;

type Story = StoryObj<typeof ProfileDetailsView>;

const StoryWrapper = ({
    defaultValues,
    errors: errorsOverride,
    isSubmitting,
    isDirty = false,
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
            <QueryClientProvider client={queryClient}>
                <ProfileDetailsView
                    control={control}
                    errors={errorsOverride ?? errors}
                    handleSubmit={handleSubmit}
                    isSubmitting={isSubmitting ?? formIsSubmitting}
                    onSubmit={fn()}
                    isDirty={isDirty}
                />
            </QueryClientProvider>
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

export const ProfileDetailsFormDirty: Story = {
    render: (args) => <StoryWrapper {...args} defaultValues={defaultValues} isDirty />,
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
