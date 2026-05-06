import {
    signUpFormInitialValues,
    type SignUpFormType,
    type UseSignupForm,
} from './sign-up-form.types';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signupFormSchema } from './validaton-schema';
import { useMutation } from '@tanstack/react-query';
import { signUp } from '../../../services/auth';

export const useSignupForm: UseSignupForm = () => {
    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<SignUpFormType>({
        resolver: zodResolver(signupFormSchema),
        defaultValues: signUpFormInitialValues,
    });

    const signupMutation = useMutation({
        mutationFn: signUp,
        onSuccess: () => {
            console.log('success');
            reset(signUpFormInitialValues);
        },
        onError: () => {
            console.log('error');
        },
    });

    const onSubmit = (data: SignUpFormType) => {
        console.log(data);
        signupMutation.mutate(data);
    };

    return {
        control,
        handleSubmit,
        errors,
        isSubmitting,
        onSubmit,
    };
};
