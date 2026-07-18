import { TimezoneSelectView } from './timezone-select-view';
import { TimezoneSelectProps } from './timezone-select.types';
import { useTimezoneSelect } from './use-timezone-select';

const TimezoneSelect = (props: TimezoneSelectProps) => {
    const hookArgs = useTimezoneSelect();
    return <TimezoneSelectView {...props} {...hookArgs} />;
};

export default TimezoneSelect;
