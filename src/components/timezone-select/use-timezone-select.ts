import { useQuery } from '@tanstack/react-query';
import { UseTimeZoneSelect } from './timezone-select.types';
import { QUERY_CONSTANT } from '../../utils/query-constants';
import { getTimezones } from '../../services/info';
import { TimezonesApiResponse } from '../../types/info.types';

export const useTimezoneSelect: UseTimeZoneSelect = () => {
    const { data, isLoading } = useQuery<TimezonesApiResponse>({
        queryKey: [QUERY_CONSTANT.GET_TIMEZONES],
        queryFn: getTimezones,
    });

    return {
        timezones: data?.data ?? [],
        isLoading,
    };
};
