import { useForm } from 'react-hook-form';
import { loginFormInitialValues, type LoginFormType } from './login-form.types';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginFormSchema } from './validation-schema';
import { useMutation } from '@tanstack/react-query';
import { type SigninApiResponse } from '../../../types/auth.types';
import { type ApiErrorResponse } from '../../../types/response.types';
import { signin } from '../../../services/auth';
import { useNotification } from '../../../providers/notification-provider';

export const useLoginForm = () => {
    const { showNotification } = useNotification();

    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginFormType>({
        mode: 'onSubmit',
        defaultValues: loginFormInitialValues,
        resolver: zodResolver(loginFormSchema),
    });

    const loginMutation = useMutation<SigninApiResponse, ApiErrorResponse, LoginFormType>({
        mutationFn: signin,
        onSuccess: ({ data }) => {
            showNotification('Successfully signed in', 'success');
        },
        onError: (error) => {
            const errorMessage: string = error.response?.data.message ?? 'Something went wrong';
            showNotification(errorMessage, 'error');
        },
    });

    const onSubmit = (data: LoginFormType) => {
        loginMutation.mutate(data);
    };

    return {
        control,
        handleSubmit,
        errors,
        isSubmitting,
        onSubmit,
    };
};
