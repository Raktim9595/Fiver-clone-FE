import { Avatar, Box, Stack, Typography } from '@mui/material';
import logo from '../../assets/fiver-logo.png';
import { GppGoodOutlined, Group, RocketLaunchOutlined } from '@mui/icons-material';
import { green } from '@mui/material/colors';
import { type ReactNode } from 'react';

import referenceSigninImage from '../../assets/sign-in-helper.png';

export const SignUpDescription = () => {
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
                        Create a new
                    </Typography>
                    <Typography
                        variant="h5"
                        color="success"
                        sx={{
                            fontWeight: 700,
                        }}
                    >
                        account
                    </Typography>
                </Stack>
                <Typography
                    sx={{
                        color: 'gray',
                    }}
                >
                    Join millions of people who use fiverr to get things done
                </Typography>
                <Helper
                    icon={<Group />}
                    content="Connect with talented freelancers and business worldwide"
                    heading="Join a global community"
                />
                <Helper
                    icon={<GppGoodOutlined />}
                    content="Your data is safe with enterprise-grade security"
                    heading="Secure & Trusted"
                />
                <Helper
                    icon={<RocketLaunchOutlined />}
                    content="Find work, offer services and grow your career"
                    heading="Unlimited Opportunities"
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
