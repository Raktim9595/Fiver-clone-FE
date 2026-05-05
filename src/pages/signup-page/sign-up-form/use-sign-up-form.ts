import {
    signUpFormInitialValues,
    type SignUpFormType,
    type UseSignupForm,
} from './sign-up-form.types';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signupFormSchema } from './validaton-schema';

export const useSignupForm: UseSignupForm = () => {
    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<SignUpFormType>({
        resolver: zodResolver(signupFormSchema),
        defaultValues: signUpFormInitialValues,
    });

    const onSubmit = async (data: SignUpFormType) => {
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
