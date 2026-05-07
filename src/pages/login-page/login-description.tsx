import { Avatar, Box, Stack, Typography } from '@mui/material';
import logo from '../../assets/fiver-logo.png';
import { GppGoodOutlined, Group, RocketLaunchOutlined } from '@mui/icons-material';
import { green } from '@mui/material/colors';
import { type ReactNode } from 'react';

import referenceSigninImage from '../../assets/sign-in-helper.png';

export const LoginDescription = () => {
    return (
        <>
            <Box
                sx={{
                    width: '20rem',
                    height: '10rem',
                }}
            >
                <img src={logo} alt="fiver-logo" width="100%" height="100%" />
            </Box>

            <Stack
                spacing={2}
                sx={{
                    paddingLeft: '4.5rem',
                    width: '70%',
                }}
            >
                <Stack>
                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: 700,
                        }}
                    >
                        Welcome
                    </Typography>
                    <Typography
                        variant="h5"
                        color="success"
                        sx={{
                            fontWeight: 700,
                        }}
                    >
                        back!
                    </Typography>
                </Stack>
                <Typography
                    sx={{
                        color: 'gray',
                    }}
                >
                    Login to your account and start growing your freelance journey
                </Typography>
                <Helper
                    icon={<Group />}
                    heading="Connect with Clients"
                    content="Find new opportunities and grow your business"
                />
                <Helper
                    icon={<GppGoodOutlined />}
                    heading="Secure & Trusted"
                    content="Your data is safe with top industry standards"
                />
                <Helper
                    icon={<RocketLaunchOutlined />}
                    heading="Tools to succed"
                    content="Access everything you need to deliver and earn more"
                />
                <Box
                    component="div"
                    sx={{
                        width: '25rem',
                        height: '15rem',
                    }}
                >
                    <img
                        src={referenceSigninImage}
                        alt="reference-image"
                        width="100%"
                        height="100%"
                    />
                </Box>
            </Stack>
        </>
    );
};

const Helper = ({
    icon,
    content,
    heading,
}: {
    icon: ReactNode;
    content: string;
    heading: string;
}) => {
    return (
        <Stack direction="row" spacing={2}>
            <Avatar
                sx={{
                    bgcolor: green[500],
                }}
            >
                {icon}
            </Avatar>
            <Stack component="div">
                <Typography
                    sx={{
                        fontWeight: 500,
                    }}
                >
                    {heading}
                </Typography>
                <Typography
                    sx={{
                        color: 'gray',
                    }}
                >
                    {content}
                </Typography>
            </Stack>
        </Stack>
    );
};
