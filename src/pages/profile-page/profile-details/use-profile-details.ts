import { Resolver, useForm } from 'react-hook-form';
import {
    profileDetailsFormInitialValues,
    UseProfileDetails,
    type ProfileDetailsFormType,
} from './profile-detils.types';
import { zodResolver } from '@hookform/resolvers/zod';
import { profileDetailsValidationSchema } from './profile-detaila-validation-schema';
import { QUERY_CONSTANT } from '../../../utils/query-constants';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getCurrentUser, updateUser } from '../../../services/user';
import { GetCurrentUserApiResponse, User } from '../../../types/user.types';
import { ApiErrorResponse } from '../../../types/response.types';
import { Country, Language, Timezone } from '../../../types/info.types';
import { useNotification } from '../../../providers/notification-provider';

export const useProfileDetails: UseProfileDetails = () => {
    const { data: currentUser, refetch } = useQuery({
        queryKey: [QUERY_CONSTANT.GET_LOGGED_IN_USER],
        queryFn: getCurrentUser,
    });

    const { showNotification } = useNotification();

    const {
        handleSubmit,
        control,
        formState: { errors, isSubmitting, isDirty },
    } = useForm<ProfileDetailsFormType>({
        defaultValues: profileDetailsFormInitialValues,
        values: currentUser
            ? {
                  address: currentUser.data.address,
                  dateOfBirth: currentUser.data.dateOfBirth,
                  email: currentUser.data.email,
                  phoneNumber: currentUser.data.phoneNumber,
                  username: currentUser.data.username,
                  country: {
                      name: currentUser.data.country,
                  } as Country,
                  language: {
                      language: currentUser.data.language,
                  } as Language,
                  timeZone: {
                      code: currentUser.data.timeZone,
                  } as Timezone,
              }
            : profileDetailsFormInitialValues,
        resolver: zodResolver(profileDetailsValidationSchema) as Resolver<ProfileDetailsFormType>,
    });

    const updateUserMutation = useMutation<GetCurrentUserApiResponse, ApiErrorResponse, User>({
        mutationFn: updateUser,
        onSuccess: () => {
            showNotification('User details updated successfully', 'success');
            refetch();
        },
        onError: ({ response: errrorResonse }) => {
            showNotification(errrorResonse?.data.message ?? 'Something went wrong', 'error');
        },
    });

    const onSubmit = (formData: ProfileDetailsFormType) => {
        updateUserMutation.mutate({
            ...currentUser?.data!,
            ...formData,
            id: currentUser?.data.id!,
            country: formData.country?.name ?? '',
            language: formData.language?.language ?? '',
            timeZone: formData.timeZone?.code ?? '',
        });
    };

    return {
        onSubmit,
        control,
        errors,
        isSubmitting,
        handleSubmit,
        isDirty,
    };
};
