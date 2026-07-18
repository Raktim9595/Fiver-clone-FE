import { useQuery } from '@tanstack/react-query';
import { UseLangugageSelect } from './language-select.types';
import { LanguagesApiResponse } from '../../types/info.types';
import { QUERY_CONSTANT } from '../../utils/query-constants';
import { getLanguages } from '../../services/info';

export const useLanguageSelect: UseLangugageSelect = () => {
    const { data, isLoading } = useQuery<LanguagesApiResponse>({
        queryKey: [QUERY_CONSTANT.GET_LANGUAGES],
        queryFn: getLanguages,
    });

    return {
        languages: data?.data ?? [],
        isLoading,
    };
};
