import { type AutocompleteProps } from '@mui/material';
import { type HTMLAttributes, type ReactElement } from 'react';
import { type ListImperativeAPI } from 'react-window';

export type VirtualizedAutoCompleteViewProps<T> = {
    label?: string;
    options: T[];
    getOptionLabel: (option: T) => string;
    error?: boolean;
    isLoading?: boolean;
    helperText?: string;
} & Pick<AutocompleteProps<T, false, false, false>, 'onChange' | 'value'>;

export const LISTBOX_PADDING = 8; // px

export type OptionRow<T> = [ReactElement, T, number];

export type GroupRow<T> = {
    key: number;
    group: string;
    children: Array<OptionRow<T>>;
};

export type ItemData<T> = Array<OptionRow<T> | GroupRow<T>>;

export type ListboxComponentProps<T> = HTMLAttributes<HTMLElement> & {
    internalListRef: React.Ref<ListImperativeAPI>;
    onItemsBuilt: (optionIndexMap: Map<string, number>) => void;
    getOptionLabel: (option: T) => string;
};
