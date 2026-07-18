import { CountriesSelectView } from './countries-select-view';
import { CountriesSelectProps } from './countries-select.types';
import { useCountriesSelect } from './use-countries-select';

const CountriesSelect = (props: CountriesSelectProps) => {
    const hookArgs = useCountriesSelect();

    return <CountriesSelectView {...props} {...hookArgs} />;
};

export default CountriesSelect;
