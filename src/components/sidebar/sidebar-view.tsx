import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { type SideBarItems, type SidebarViewProps } from './sidebar.types';
import { Person2Outlined } from '@mui/icons-material';
import { PATH } from '../../utils/routing/paths';

export const SidebarView = ({ currentPage, navigate }: SidebarViewProps) => {
    const sideBarItems: SideBarItems[] = [
        {
            name: 'Profile',
            icon: <Person2Outlined />,
            onClick: () => navigate(PATH.PROFILE),
            active: currentPage === 'profile',
        },
    ];

    return (
        <Box
            sx={{
                width: '100%',
                role: 'presentation',
            }}
        >
            <List>
                {sideBarItems.map(({ icon, name, onClick, active }) => (
                    <ListItem key={name} disablePadding>
                        <ListItemButton
                            selected={active}
                            sx={{
                                borderRadius: '0.5rem',
                                '&:hover': {
                                    bgcolor: '#E8F5E9',
                                    color: 'green',
                                },
                                '&:hover .MuiListItemIcon-root': {
                                    color: 'green',
                                },
                                '&.Mui-selected': {
                                    bgcolor: '#DCE5E0',
                                    color: 'green',
                                    fontWeight: 600,
                                },
                                '&.Mui-selected .MuiListItemIcon-root': {
                                    color: 'green',
                                },
                                '&.Mui-selected:hover': {
                                    bgcolor: '#C8D6CE',
                                },
                                height: '2.5rem',
                            }}
                            onClick={onClick}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: '1.5rem',
                                    marginRight: '1rem',
                                }}
                            >
                                {icon}
                            </ListItemIcon>
                            <ListItemText
                                primary={name}
                                sx={{
                                    fontSize: '0.875rem',
                                }}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};
