import { useForm } from 'react-hook-form';
import { loginFormInitialValues, type LoginFormType } from './login-form.types';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginFormSchema } from './validation-schema';

export const useLoginForm = () => {
    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginFormType>({
        mode: 'onSubmit',
        defaultValues: loginFormInitialValues,
        resolver: zodResolver(loginFormSchema),
    });

    const onSubmit = (data: LoginFormType) => {
        console.log(data);
    };

    return {
        control,
        handleSubmit,
        errors,
        isSubmitting,
        onSubmit,
    };
};

// TODO: Add tests for this file later on when we add api requests over here
