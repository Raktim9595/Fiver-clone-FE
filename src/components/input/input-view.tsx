import { InputAdornment, TextField } from '@mui/material';
import type { InputViewProps } from './input.types';

const InputView = (props: InputViewProps) => {
    const {
        label,
        value,
        onChange,
        icon,
        iconposition = 'start',
        variant = 'outlined',
        placeholder,
        ...rest
    } = props;

    const adornment = icon && <InputAdornment position={iconposition}>{icon}</InputAdornment>;

    return (
        <TextField
            id="outlined-basic"
            label={label}
            variant={variant}
            fullWidth
            size="small"
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            slotProps={{
                input: {
                    ...(iconposition === 'start'
                        ? { startAdornment: adornment }
                        : { endAdornment: adornment }),
                },
            }}
            {...rest}
        />
    );
};

export default InputView;
