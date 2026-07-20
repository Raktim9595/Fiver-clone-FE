import { type Control, type FieldErrors, type UseFormHandleSubmit } from 'react-hook-form';
import { Country, Language, Timezone } from '../../../types/info.types';

export type ProfileDetailsFormType = {
    username: string;
    email: string;
    phoneNumber: string;
    address: string;
    dateOfBirth: string;
    country: Country | null;
    language: Language | null;
    timeZone: Timezone | null;
};

export const profileDetailsFormInitialValues: ProfileDetailsFormType = {
    username: '',
    email: '',
    phoneNumber: '',
    address: '',
    dateOfBirth: '',
    country: null,
    language: null,
    timeZone: null,
};

export type UseProfileDetails = () => {
    onSubmit: (data: ProfileDetailsFormType) => void;
    control: Control<ProfileDetailsFormType, any, ProfileDetailsFormType>;
    errors: FieldErrors<ProfileDetailsFormType>;
    isSubmitting: boolean;
    handleSubmit: UseFormHandleSubmit<ProfileDetailsFormType, ProfileDetailsFormType>;
    isDirty: boolean;
};

export type ProfileDetailsViewProps = ReturnType<UseProfileDetails>;
