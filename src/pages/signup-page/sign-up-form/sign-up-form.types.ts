import type { Control, FieldErrors, UseFormHandleSubmit } from 'react-hook-form';
import { UserStatus } from '../../../types/user.types';
import { Country, Language, Timezone } from '../../../types/info.types';

export const UserRole = {
    ADMIN: 'ADMIN',
    BUYER: 'BUYER',
    SELLER: 'SELLER',
} as const;

export type UserRole = (typeof UserRole)[keyof typeof UserRole];

export type SignUpFormType = {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    dateOfBirth: string;
    address: string;
    phoneNumber: string;
    role: UserRole;
    status: UserStatus;
    timeZone: Timezone | null;
    language: Language | null;
    country: Country | null;
};

export const signUpFormInitialValues: SignUpFormType = {
    address: '',
    dateOfBirth: '',
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    phoneNumber: '',
    username: '',
    role: UserRole.BUYER,
    status: UserStatus.ACTIVE,
    country: null,
    language: null,
    timeZone: null,
};

export type UseSignupForm = () => {
    control: Control<SignUpFormType, any, SignUpFormType>;
    handleSubmit: UseFormHandleSubmit<SignUpFormType, SignUpFormType>;
    errors: FieldErrors<SignUpFormType>;
    isSubmitting: boolean;
    onSubmit: (data: SignUpFormType) => void;
};

export type SignupFormViewProps = ReturnType<UseSignupForm>;
