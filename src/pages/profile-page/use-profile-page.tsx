import { useOutletContext } from 'react-router';
import { type GetCurrentUserApiResponse } from '../../types/user.types';
import { useQuery } from '@tanstack/react-query';
import { QUERY_CONSTANT } from '../../utils/query-constants';
import { getUserById } from '../../services/user';
import { type UseProfilePage } from './profile-page.types';

export const useProfilePage: UseProfilePage = () => {
    const { user } = useOutletContext<{
        user: GetCurrentUserApiResponse;
    }>();

    const { data, isLoading } = useQuery({
        queryKey: [QUERY_CONSTANT.GET_LOGGED_IN_USER, user?.data.id],
        queryFn: () => getUserById(user?.data.id),
        enabled: !!user?.data.id,
        initialData: user,
    });

    return {
        user: data?.data,
        isLoading,
    };
};
