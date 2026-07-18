import { AutocompleteProps } from '@mui/material';
import { Country } from '../../types/info.types';

export type UseCountriesSelect = () => {
    countries: Country[];
    isLoading: boolean;
};

export type CountriesSelectProps = Pick<
    AutocompleteProps<Country, false, false, false>,
    'onChange' | 'value'
> & {
    error?: boolean;
    helperText?: string;
};

export type CountriesSelectViewProps = ReturnType<UseCountriesSelect> & CountriesSelectProps;
