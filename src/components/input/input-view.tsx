import { InputAdornment, TextField } from '@mui/material';
import type { InputViewProps } from './input.types';

const InputView = (props: InputViewProps) => {
    const {
        label,
        value,
        onChange,
        icon,
        iconPosition = 'start',
        variant = 'outlined',
        placeholder,
    } = props;

    const adornment = icon && <InputAdornment position={iconPosition}>{icon}</InputAdornment>;

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
                    ...(iconPosition === 'start'
                        ? { startAdornment: adornment }
                        : { endAdornment: adornment }),
                },
            }}
            {...props}
        />
    );
};

export default InputView;
