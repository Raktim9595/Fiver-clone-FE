import { type Control, type FieldErrors, type UseFormHandleSubmit } from 'react-hook-form';

export type ProfileDetailsFormType = {
    username: string;
    email: string;
    phoneNumber: string;
    address: string;
    dateOfBirth: string;
    country: string;
    language: string;
    timeZone: string;
};

export const profileDetailsFormInitialValues: ProfileDetailsFormType = {
    username: '',
    email: '',
    phoneNumber: '',
    address: '',
    dateOfBirth: '',
    country: '',
    language: '',
    timeZone: '',
};

export type UseProfileDetails = () => {
    onSubmit: (data: ProfileDetailsFormType) => void;
    control: Control<ProfileDetailsFormType, any, ProfileDetailsFormType>;
    errors: FieldErrors<ProfileDetailsFormType>;
    isSubmitting: boolean;
    handleSubmit: UseFormHandleSubmit<ProfileDetailsFormType, ProfileDetailsFormType>;
};

export type ProfileDetailsViewProps = ReturnType<UseProfileDetails>;
