import { Box, Typography } from '@mui/material';
import { InformationBadgeProps, SELLER_COLORS } from './become-a-seller-page.types';

export const InformationBadge = ({ icon: Icon, children }: InformationBadgeProps) => {
    return (
        <Box
            sx={{
                minHeight: '2.75rem',

                px: '0.9rem',

                display: 'flex',
                alignItems: 'center',
                gap: '0.55rem',
                border: `0.0625rem solid ${SELLER_COLORS.border}`,
                borderRadius: '0.5rem',

                bgcolor: SELLER_COLORS.background,
            }}
        >
            <Icon
                aria-hidden="true"
                sx={{
                    flexShrink: 0,

                    fontSize: '1.2rem',

                    color: '#617084',
                }}
            />

            <Typography
                component="span"
                sx={{
                    whiteSpace: 'nowrap',

                    color: '#48566B',

                    fontSize: {
                        xs: '0.9rem',
                        lg: '0.96rem',
                        xl: '1rem',
                    },

                    lineHeight: 1.2,
                    fontWeight: 500,
                }}
            >
                {children}
            </Typography>
        </Box>
    );
};
