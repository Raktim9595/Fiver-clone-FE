import { useQuery } from '@tanstack/react-query';
import { useOutletContext } from 'react-router';
import { GetCurrentUserApiResponse } from '../../../types/user.types';
import { QUERY_CONSTANT } from '../../query-constants';
import { getCurrentUser } from '../../../services/user';

const useCurrentUser = () => {
    const { user: initialUser } = useOutletContext<{
        user: GetCurrentUserApiResponse;
    }>();

    const userId = initialUser?.data?.id;

    const { data: user, ...rest } = useQuery({
        queryKey: [QUERY_CONSTANT.GET_LOGGED_IN_USER, userId],
        queryFn: getCurrentUser,
        enabled: !userId,
        initialData: initialUser,
    });

    return {
        user: user.data,
        ...rest,
    };
};

export default useCurrentUser;
