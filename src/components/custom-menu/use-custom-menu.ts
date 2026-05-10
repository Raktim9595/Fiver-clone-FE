import { useState } from 'react';
import { type CustomMenuAction, type UseCustomMenu } from './custom-menu-view.types';

export const useCustomMenu: UseCustomMenu = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);

    const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleActionClick = (action: CustomMenuAction) => {
        action.onClick();
        handleClose();
    };

    return {
        open,
        anchorEl,
        handleOpen,
        handleClose,
        handleActionClick,
    };
};
