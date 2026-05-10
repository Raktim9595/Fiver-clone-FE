import { Menu, MenuItem, Button, IconButton, ListItemIcon, ListItemText } from '@mui/material';
import { type CustomMenuViewProps } from './custom-menu-view.types';
import { KeyboardArrowDown } from '@mui/icons-material';

export const CustomMenuView = (props: CustomMenuViewProps) => {
    const { actions, handleOpen, handleClose, handleActionClick, anchorEl, open } = props;

    return (
        <>
            {props.iconButton ? (
                <IconButton {...props} onClick={handleOpen}>
                    {props.icon}
                </IconButton>
            ) : (
                <Button
                    {...props}
                    onClick={handleOpen}
                    endIcon={<KeyboardArrowDown />}
                    sx={{
                        textTransform: 'capitalize',
                    }}
                >
                    {props.buttonLabel}
                </Button>
            )}

            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                {actions.map((action, index) => (
                    <MenuItem
                        key={index + action.label}
                        onClick={() => handleActionClick(action)}
                        disabled={action.disabled}
                    >
                        {action.icon && <ListItemIcon>{action.icon}</ListItemIcon>}
                        <ListItemText>{action.label}</ListItemText>
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
};
