import { type ReactNode } from 'react';
import { type NavigateFunction } from 'react-router';

export type SideBarItems = {
    name: string;
    icon: ReactNode;
    onClick: () => void;
    active: boolean;
};

export type UseSideBar = () => {
    currentPage: string;
    navigate: NavigateFunction;
};

export type SidebarViewProps = ReturnType<UseSideBar>;
