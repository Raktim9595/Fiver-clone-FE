import { AppBar, Avatar, Box, Toolbar, Typography } from '@mui/material';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import { Link } from 'react-router';

import logo from '../../assets/fiver-main.png';

import { CustomInput } from '../input';
import { CustomMenu } from '../custom-menu';

import { PATH } from '../../utils/routing/paths';

import { stringAvatar } from './helpers';

import type { CustomMenuAction } from '../custom-menu/custom-menu-view.types';
import type { NavbarViewProps } from './navbar.types';

export const NavbarView = ({ isLoggedin, navigate, logOut, user }: NavbarViewProps) => {
    const loggedInActions: CustomMenuAction[] = [
        {
            label: 'Profile',
            onClick: () => navigate(PATH.PROFILE),
        },
        {
            label: 'Logout',
            onClick: logOut,
        },
    ];

    const loggedOutActions: CustomMenuAction[] = [
        {
            label: 'Login',
            onClick: () => navigate(PATH.LOGIN),
        },
        {
            label: 'Sign Up',
            onClick: () => navigate(PATH.SIGNUP),
        },
    ];

    const actions = isLoggedin && user ? loggedInActions : loggedOutActions;

    return (
        <AppBar
            component="header"
            position="sticky"
            elevation={0}
            sx={{
                top: 0,

                width: '100%',

                bgcolor: 'background.paper',
                color: 'text.primary',

                borderBottom: '0.0625rem solid',
                borderColor: 'divider',

                zIndex: (theme) => theme.zIndex.appBar,
            }}
        >
            <Toolbar
                component="nav"
                aria-label="Primary navigation"
                sx={{
                    minHeight: {
                        xs: '4rem',
                        md: '4.5rem',
                    },

                    px: {
                        xs: '1rem',
                        sm: '1.5rem',
                        md: '2rem',
                    },

                    gap: {
                        xs: '1rem',
                        md: '2rem',
                    },
                }}
            >
                <Link
                    to={PATH.HOME}
                    aria-label="Go to homepage"
                    style={{
                        display: 'inline-flex',
                        flexShrink: 0,
                        textDecoration: 'none',
                    }}
                >
                    <Box
                        component="img"
                        src={logo}
                        alt="Fiverr"
                        sx={{
                            display: 'block',
                            width: '6rem',
                            height: 'auto',
                        }}
                    />
                </Link>

                <Box
                    sx={{
                        flex: 1,
                        minWidth: 0,
                    }}
                >
                    <CustomInput
                        icon={<SearchOutlinedIcon />}
                        iconposition="end"
                        placeholder="Search..."
                    />
                </Box>

                <Link
                    to={PATH.SELLER_APPLICATION.ROOT}
                    style={{
                        textDecoration: 'none',
                    }}
                >
                    <Typography
                        component="span"
                        sx={{
                            whiteSpace: 'nowrap',

                            color: 'success.main',

                            fontSize: '1rem',
                            fontWeight: 600,

                            '&:hover': {
                                textDecoration: 'underline',
                            },
                        }}
                    >
                        Become a Seller
                    </Typography>
                </Link>

                <CustomMenu
                    actions={actions}
                    iconButton
                    icon={
                        isLoggedin && user ? (
                            <Avatar {...stringAvatar(`${user.firstName} ${user.lastName}`)} />
                        ) : (
                            <Avatar />
                        )
                    }
                />
            </Toolbar>
        </AppBar>
    );
};
