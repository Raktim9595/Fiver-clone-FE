import { AutocompleteProps } from '@mui/material';
import { Language } from '../../types/info.types';

export type UseLangugageSelect = () => {
    languages: Language[];
    isLoading: boolean;
};

export type LanguageSelectProps = Pick<
    AutocompleteProps<Language, false, false, false>,
    'onChange' | 'value'
> & {
    error?: boolean;
    helperText?: string;
};

export type LanguageSelectViewProps = ReturnType<UseLangugageSelect> & LanguageSelectProps;
