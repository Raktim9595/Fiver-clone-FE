import type { TextFieldProps } from '@mui/material';
import type { ReactNode } from 'react';

export type InputViewProps = {
    icon?: ReactNode;
    iconposition?: 'start' | 'end';
} & Omit<TextFieldProps, 'slotProps' | 'slot' | 'slots' | 'small'>;
