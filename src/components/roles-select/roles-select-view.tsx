import { Role } from '../../types/info.types';
import VirtualizedAutoComplete from '../virtualized-autocomplete/virtualized-autocomplete';
import { RolesSelectViewProps } from './roles-select.types';

export const RolesSelectView = ({
    roles,
    isLoading,
    error,
    helperText,
    onChange,
    value,
}: RolesSelectViewProps) => {
    return (
        <VirtualizedAutoComplete<Role>
            options={roles}
            getOptionLabel={(option) => option.name}
            label="Select Role"
            isLoading={isLoading}
            value={value}
            error={error}
            helperText={helperText}
            onChange={onChange}
        />
    );
};
