import { AppBar, Box, Toolbar } from '@mui/material';
import logo from '../../assets/fiver-main.png';
import { CustomInput } from '../input';
import { AccountCircle, SearchOutlined } from '@mui/icons-material';
import { type CustomMenuAction } from '../custom-menu/custom-menu-view.types';
import { CustomMenu } from '../custom-menu';

const NavbarView = () => {
    const actions: CustomMenuAction[] = [
        {
            label: 'Login',
            onClick: () => {},
        },
        {
            label: 'Sign Up',
            onClick: () => {},
        },
    ];
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
                    <CustomMenu actions={actions} iconButton icon={<AccountCircle />} />
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default NavbarView;
