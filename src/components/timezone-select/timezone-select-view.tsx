import { Timezone } from '../../types/info.types';
import VirtualizedAutoComplete from '../virtualized-autocomplete/virtualized-autocomplete';
import { TimezoneSelectViewProps } from './timezone-select.types';

export const TimezoneSelectView = ({
    timezones,
    isLoading,
    error,
    helperText,
    onChange,
    value,
}: TimezoneSelectViewProps) => {
    return (
        <VirtualizedAutoComplete<Timezone>
            options={timezones}
            getOptionLabel={(option) => option.code}
            label="Select Timezone"
            isLoading={isLoading}
            value={value}
            error={error}
            helperText={helperText}
            onChange={onChange}
        />
    );
};
