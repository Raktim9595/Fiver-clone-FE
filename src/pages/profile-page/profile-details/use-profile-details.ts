import { useForm } from 'react-hook-form';
import {
    profileDetailsFormInitialValues,
    type ProfileDetailsFormType,
} from './profile-detils.types';
import { zodResolver } from '@hookform/resolvers/zod';
import { profileDetailsValidationSchema } from './profile-detaila-validation-schema';

export const useProfileDetails = () => {
    const {
        handleSubmit,
        control,
        formState: { errors, isSubmitting },
    } = useForm<ProfileDetailsFormType>({
        defaultValues: profileDetailsFormInitialValues,
        resolver: zodResolver(profileDetailsValidationSchema),
    });

    const onSubmit = (data: ProfileDetailsFormType) => {
        console.log(data);
    };

    return {
        onSubmit,
        control,
        errors,
        isSubmitting,
        handleSubmit,
    };
};
