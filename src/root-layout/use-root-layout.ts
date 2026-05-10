import { useQuery } from '@tanstack/react-query';
import { getAuthToken } from '../utils/auth-storage';
import { QUERY_CONSTANT } from '../utils/query-constants';
import { getCurrentUSer } from '../services/user';
import { type UseRootLayout } from './root-layout.types';
import { useMemo } from 'react';

export const useRootLayout: UseRootLayout = () => {
    const authToken = useMemo(() => getAuthToken(), []);

    const { data, isLoading } = useQuery({
        queryKey: [QUERY_CONSTANT.GET_LOGGED_IN_USER],
        queryFn: getCurrentUSer,
        enabled: !!authToken,
    });

    return { data, isLoading };
};
