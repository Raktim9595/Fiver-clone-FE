import PropTypes from 'prop-types';

import { Box, Typography } from '@mui/material';

import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import { SELLER_COLORS } from './become-a-seller-page.types';
import { ReactNode } from 'react';

const BenefitItem = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        <Box
            component="li"
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.9rem',
                listStyle: 'none',
            }}
        >
            {/*
             * The circle is decorative because the list semantics already
             * communicate that each line represents a benefit.
             */}
            <Box
                aria-hidden="true"
                sx={{
                    width: '1.55rem',
                    height: '1.55rem',
                    flex: '0 0 1.55rem',

                    display: 'grid',
                    placeItems: 'center',

                    borderRadius: '50%',
                    bgcolor: SELLER_COLORS.softGreen,
                }}
            >
                <CheckRoundedIcon
                    sx={{
                        fontSize: '1.15rem',
                        color: SELLER_COLORS.primary,
                    }}
                />
            </Box>

            <Typography
                component="span"
                sx={{
                    color: '#425168',

                    fontSize: {
                        xs: '1rem',
                        md: '1.05rem',
                        lg: '1.125rem',
                        xl: '1.18rem',
                    },

                    lineHeight: 1.45,
                    fontWeight: 500,
                    letterSpacing: '-0.005em',
                }}
            >
                {children}
            </Typography>
        </Box>
    );
};

export const BenefitList = ({ benefits }: Readonly<{ benefits: string[] }>) => {
    return (
        <Box
            component="ul"
            sx={{
                p: 0,
                m: 0,

                mt: {
                    xs: '1.25rem',
                    lg: '1.35rem',
                },

                display: 'flex',
                flexDirection: 'column',

                gap: {
                    xs: '0.5rem',
                    lg: '0.58rem',
                },
            }}
        >
            {benefits.map((benefit) => (
                <BenefitItem key={benefit}>{benefit}</BenefitItem>
            ))}
        </Box>
    );
};
