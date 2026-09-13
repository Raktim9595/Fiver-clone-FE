import { useQuery } from '@tanstack/react-query';
import { UseRolesSelect } from './roles-select.types';
import { RolesApiResponse } from '../../types/info.types';
import { QUERY_CONSTANT } from '../../utils/query-constants';
import { getUserRoles } from '../../services/info';

export const useRolesSelect: UseRolesSelect = () => {
    const { data, isLoading } = useQuery<RolesApiResponse>({
        queryKey: [QUERY_CONSTANT.GET_ROLES],
        queryFn: getUserRoles,
    });

    return {
        isLoading,
        roles: data?.data ?? [],
    };
};
