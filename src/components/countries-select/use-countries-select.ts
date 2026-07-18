import { useQuery } from '@tanstack/react-query';
import { QUERY_CONSTANT } from '../../utils/query-constants';
import { getCountries } from '../../services/info';
import { CountriesApiResponse } from '../../types/info.types';
import { UseCountriesSelect } from './countries-select.types';

export const useCountriesSelect: UseCountriesSelect = () => {
    const { data, isLoading } = useQuery<CountriesApiResponse>({
        queryKey: [QUERY_CONSTANT.GET_COUNTRIES],
        queryFn: getCountries,
    });

    return {
        countries: data?.data ?? [],
        isLoading,
    };
};
