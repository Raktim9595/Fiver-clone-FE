import { type Control, type FieldError, type FieldValues, type Path } from 'react-hook-form';

export type FormInputProps<T extends FieldValues> = {
    name: Path<T>;
    control: Control<T>;
    label: string;
    placeholder?: string;
    type?: string;
    icon?: React.ReactNode;
    error?: FieldError;
};
