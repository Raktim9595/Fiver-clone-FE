import {
    signUpFormInitialValues,
    type SignUpFormType,
    type UseSignupForm,
} from './sign-up-form.types';
import { Resolver, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signupFormSchema } from './validaton-schema';
import { useMutation } from '@tanstack/react-query';
import { signUp } from '../../../services/auth';
import { useNotification } from '../../../providers/notification-provider';
import { SignupRequestBody, type SignupApiResponse } from '../../../types/auth.types';
import { type ApiErrorResponse } from '../../../types/response.types';
import { useNavigate } from 'react-router';
import { PATH } from '../../../utils/routing/paths';

export const useSignupForm: UseSignupForm = () => {
    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<SignUpFormType>({
        resolver: zodResolver(signupFormSchema) as Resolver<SignUpFormType>,
        defaultValues: signUpFormInitialValues,
    });

    const { showNotification } = useNotification();
    const navigate = useNavigate();

    const signupMutation = useMutation<SignupApiResponse, ApiErrorResponse, SignupRequestBody>({
        mutationFn: signUp,
        onSuccess: async () => {
            showNotification('Successfully signed up', 'success');
            reset(signUpFormInitialValues);
            await navigate(PATH.LOGIN);
        },
        onError: (error) => {
            const errorMessage: string = error.response?.data.message ?? 'Something went wrong';
            showNotification(errorMessage, 'error');
        },
    });

    const onSubmit = (data: SignUpFormType) => {
        signupMutation.mutate({
            ...data,
            language: data.language?.language,
            timeZone: data.timeZone?.code,
            country: data.country?.name,
        });
    };

    return {
        control,
        handleSubmit,
        errors,
        isSubmitting,
        onSubmit,
    };
};
