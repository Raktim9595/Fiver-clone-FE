import { Country } from '../../types/info.types';
import VirtualizedAutoComplete from '../virtualized-autocomplete/virtualized-autocomplete';
import { CountriesSelectViewProps } from './countries-select.types';

export const CountriesSelectView = ({
    countries,
    isLoading,
    error,
    helperText,
    onChange,
    value,
}: CountriesSelectViewProps) => {
    return (
        <VirtualizedAutoComplete<Country>
            options={countries}
            getOptionLabel={(option) => option.name}
            label="Select Countries"
            isLoading={isLoading}
            value={value}
            error={error}
            helperText={helperText}
            onChange={onChange}
        />
    );
};
