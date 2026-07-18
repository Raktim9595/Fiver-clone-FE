import { AutocompleteProps } from '@mui/material';
import { Timezone } from '../../types/info.types';

export type UseTimeZoneSelect = () => {
    timezones: Timezone[];
    isLoading: boolean;
};

export type TimezoneSelectProps = Pick<
    AutocompleteProps<Timezone, false, false, false>,
    'onChange' | 'value'
> & {
    error?: boolean;
    helperText?: string;
};

export type TimezoneSelectViewProps = ReturnType<UseTimeZoneSelect> & TimezoneSelectProps;
