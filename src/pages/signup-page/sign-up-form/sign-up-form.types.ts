import { type Control, type FieldErrors, type UseFormHandleSubmit } from 'react-hook-form';

export const UserRole = {
    ADMIN: 'ADMIN',
    BUYER: 'BUYER',
    SELLER: 'SELLER',
} as const;

export type UserRole = (typeof UserRole)[keyof typeof UserRole];

export type SignUpFormType = {
    firstname: string;
    lastname: string;
    username: string;
    email: string;
    password: string;
    age: number;
    address: string;
    phoneNumber: string;
    role: UserRole;
};

export const signUpFormInitialValues: SignUpFormType = {
    address: '',
    age: 0,
    email: '',
    firstname: '',
    lastname: '',
    password: '',
    phoneNumber: '',
    username: '',
    role: UserRole.BUYER,
};

export type UseSignupForm = () => {
    control: Control<SignUpFormType, any, SignUpFormType>;
    handleSubmit: UseFormHandleSubmit<SignUpFormType, SignUpFormType>;
    errors: FieldErrors<SignUpFormType>;
    isSubmitting: boolean;
    onSubmit: (data: SignUpFormType) => Promise<void>;
};

export type SignupFormViewProps = ReturnType<UseSignupForm>;
