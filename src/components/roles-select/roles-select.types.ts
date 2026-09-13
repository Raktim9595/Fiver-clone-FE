import { AutocompleteProps } from '@mui/material';
import { Role } from '../../types/info.types';

export type UseRolesSelect = () => {
    roles: Role[];
    isLoading: boolean;
};

export type RolesSelectProps = Pick<
    AutocompleteProps<Role, false, false, false>,
    'onChange' | 'value'
> & {
    error?: boolean;
    helperText?: string;
};

export type RolesSelectViewProps = ReturnType<UseRolesSelect> & RolesSelectProps;
