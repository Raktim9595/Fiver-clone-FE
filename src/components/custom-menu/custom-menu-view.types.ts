import { type ButtonProps, type IconButtonProps } from '@mui/material';
import { type MouseEvent, type ReactNode } from 'react';

export type CustomMenuAction = {
    label: string;
    icon?: ReactNode;
    onClick: () => void;
    disabled?: boolean;
};

type BaseMenuProps = {
    actions: CustomMenuAction[];
};

type IconMenuProps = BaseMenuProps &
    Omit<IconButtonProps, 'onClick'> & {
        iconButton: true;
        icon: React.ReactNode;
    };

type ButtonMenuProps = BaseMenuProps &
    Omit<ButtonProps, 'onClick'> & {
        iconButton?: false;
        buttonLabel: string;
    };

export type CustomMenuProps = IconMenuProps | ButtonMenuProps;

export type UseCustomMenu = () => {
    open: boolean;
    anchorEl: HTMLElement | null;
    handleOpen: (event: MouseEvent<HTMLElement>) => void;
    handleClose: () => void;
    handleActionClick: (action: CustomMenuAction) => void;
};

export type CustomMenuViewProps = ReturnType<UseCustomMenu> & CustomMenuProps;
