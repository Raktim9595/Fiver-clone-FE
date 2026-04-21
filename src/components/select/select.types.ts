import type { SelectProps } from '@mui/material';

export type SelectViewProps = {
    options: {
        label: string;
        value: string;
    }[];
    icon?: React.ReactNode;
    label: string;
} & Pick<SelectProps, 'onChange' | 'value'>;
