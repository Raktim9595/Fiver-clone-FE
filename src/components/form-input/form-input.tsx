import { Controller, type FieldValues } from 'react-hook-form';
import { type FormInputProps } from './form-input.types';
import { CustomInput } from '../input';

const FormInput = <T extends FieldValues>({
    name,
    control,
    label,
    placeholder,
    type = 'text',
    icon,
    error,
}: FormInputProps<T>) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <CustomInput
                    {...field}
                    label={label}
                    placeholder={placeholder}
                    type={type}
                    icon={icon}
                    error={!!error}
                    helperText={error?.message}
                />
            )}
        />
    );
};

export default FormInput;
