import { FormControl, InputAdornment, InputLabel, MenuItem, Select } from '@mui/material';
import type { SelectViewProps } from './select.types';

const SelectView = (props: SelectViewProps) => {
    const { label, onChange, options, value, icon } = props;
    return (
        <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
            <InputLabel id="demo-simple-select-autowidth-label">{label}</InputLabel>
            <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={value}
                onChange={onChange}
                fullWidth
                label={label}
                aria-placeholder={label}
                startAdornment={<InputAdornment position="start">{icon}</InputAdornment>}
            >
                {options.map(({ label, value }, index) => (
                    <MenuItem key={label + index} value={value}>
                        {label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default SelectView;
