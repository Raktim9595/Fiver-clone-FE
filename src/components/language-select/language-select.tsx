import { LanguageSelectView } from './language-select-view';
import { LanguageSelectProps } from './language-select.types';
import { useLanguageSelect } from './use-language-select';

const LanguageSelect = (props: LanguageSelectProps) => {
    const hookArgs = useLanguageSelect();
    return <LanguageSelectView {...props} {...hookArgs} />;
};

export default LanguageSelect;
