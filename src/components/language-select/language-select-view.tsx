import { Language } from '../../types/info.types';
import VirtualizedAutoComplete from '../virtualized-autocomplete/virtualized-autocomplete';
import { LanguageSelectViewProps } from './language-select.types';

export const LanguageSelectView = ({
    isLoading,
    languages,
    error,
    helperText,
    onChange,
    value,
}: LanguageSelectViewProps) => {
    return (
        <VirtualizedAutoComplete<Language>
            options={languages}
            getOptionLabel={(option) => option.language}
            error={error}
            helperText={helperText}
            label="Select Language"
            isLoading={isLoading}
            value={value}
            onChange={onChange}
        />
    );
};
