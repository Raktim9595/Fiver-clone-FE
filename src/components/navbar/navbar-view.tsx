import { AppBar, Avatar, Box, Toolbar } from '@mui/material';
import logo from '../../assets/fiver-main.png';
import { CustomInput } from '../input';
import { SearchOutlined } from '@mui/icons-material';
import { type CustomMenuAction } from '../custom-menu/custom-menu-view.types';
import { CustomMenu } from '../custom-menu';
import { type NavbarViewProps } from './navbar.types';
import { PATH } from '../../utils/routing/paths';
import { stringAvatar } from './helpers';

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

    const actions: CustomMenuAction[] = isLoggedin && user ? loggedInActions : loggedOutActions;

    return (
        <Box
            sx={{
                flexGrow: 1,
            }}
        >
            <AppBar
                position="static"
                sx={{
                    padding: 0,
                    margin: 0,
                    backgroundColor: 'white',
                }}
            >
                <Toolbar
                    sx={{
                        padding: 0,
                        margin: 0,
                        gap: '2rem',
                    }}
                >
                    <Box
                        sx={{
                            height: '4rem',
                            width: '6rem',
                        }}
                    >
                        <img src={logo} alt="fiver-logo" width="100%" height="100%" />
                    </Box>

                    <CustomInput
                        icon={<SearchOutlined />}
                        iconposition="end"
                        placeholder="Search..."
                    />
                    <CustomMenu
                        actions={actions}
                        iconButton
                        icon={
                            isLoggedin && user ? (
                                <Avatar {...stringAvatar(`${user?.firstName} ${user?.lastName}`)} />
                            ) : (
                                <Avatar />
                            )
                        }
                    />
                </Toolbar>
            </AppBar>
        </Box>
    );
};
