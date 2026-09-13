import { RolesSelectView } from './roles-select-view';
import { RolesSelectProps } from './roles-select.types';
import { useRolesSelect } from './use-roles-select';

const RolesSelect = (props: RolesSelectProps) => {
    const hookArgs = useRolesSelect();
    return <RolesSelectView {...props} {...hookArgs} />;
};

export default RolesSelect;
