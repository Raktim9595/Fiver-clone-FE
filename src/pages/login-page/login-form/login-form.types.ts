import { type Control, type FieldErrors, type UseFormHandleSubmit } from 'react-hook-form';

export type LoginFormType = {
    username: string;
    password: string;
};

export const loginFormInitialValues: LoginFormType = {
    password: '',
    username: '',
};

export type UseLoginForm = () => {
    control: Control<LoginFormType, any, LoginFormType>;
    handleSubmit: UseFormHandleSubmit<LoginFormType, LoginFormType>;
    errors: FieldErrors<LoginFormType>;
    isSubmitting: boolean;
    onSubmit: (data: LoginFormType) => void;
};

export type LoginFormViewProps = ReturnType<UseLoginForm>;
