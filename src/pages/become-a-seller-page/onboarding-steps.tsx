import { Box, Stack, Typography } from '@mui/material';

import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { OnBoardingStepProps, SELLER_COLORS } from './become-a-seller-page.types';

const OnboardingStep = ({
    title,
    description,
    icon: Icon,
    hasNextStep,
}: {
    title: string;
    description: string;
    icon: React.ElementType;
    hasNextStep?: boolean;
}) => {
    return (
        <Box
            component="li"
            sx={{
                position: 'relative',

                minWidth: 0,

                display: 'flex',
                justifyContent: 'center',

                listStyle: 'none',
            }}
        >
            <Stack
                sx={{
                    width: '100%',
                    textAlign: 'center',
                    alignItems: 'center',
                }}
            >
                <Box
                    aria-hidden="true"
                    sx={{
                        width: {
                            xs: '4.25rem',
                            md: '4.5rem',
                            lg: '4.75rem',
                            xl: '5rem',
                        },

                        height: {
                            xs: '4.25rem',
                            md: '4.5rem',
                            lg: '4.75rem',
                            xl: '5rem',
                        },

                        mb: '0.8rem',

                        display: 'grid',
                        placeItems: 'center',

                        borderRadius: '50%',

                        bgcolor: SELLER_COLORS.softGreen,
                    }}
                >
                    <Icon
                        sx={{
                            fontSize: {
                                xs: '1.8rem',
                                lg: '2rem',
                                xl: '2.15rem',
                            },

                            color: SELLER_COLORS.primary,
                        }}
                    />
                </Box>

                <Typography
                    component="h3"
                    sx={{
                        m: 0,

                        color: SELLER_COLORS.textPrimary,

                        fontSize: {
                            xs: '1rem',
                            lg: '1.03rem',
                            xl: '1.08rem',
                        },

                        lineHeight: 1.35,

                        fontWeight: 700,

                        letterSpacing: '-0.015em',
                    }}
                >
                    {title}
                </Typography>

                <Typography
                    component="p"
                    sx={{
                        m: 0,

                        mt: '0.35rem',

                        maxWidth: '13rem',

                        color: SELLER_COLORS.textMuted,

                        fontSize: {
                            xs: '0.9rem',
                            lg: '0.96rem',
                            xl: '1rem',
                        },

                        lineHeight: 1.45,

                        fontWeight: 400,
                    }}
                >
                    {description}
                </Typography>
            </Stack>

            {hasNextStep && (
                <ArrowForwardRoundedIcon
                    aria-hidden="true"
                    sx={{
                        /*
                         * The arrow is purely decorative and is only shown when
                         * the steps are rendered in their four-column desktop
                         * layout. The ordered list communicates sequence on
                         * smaller screens without needing arrows.
                         */
                        display: {
                            xs: 'none',
                            lg: 'block',
                        },

                        position: 'absolute',

                        top: '1.75rem',
                        right: 'clamp(-2rem, -1.7dvw, -1.2rem)',

                        fontSize: '2rem',

                        color: SELLER_COLORS.arrow,
                    }}
                />
            )}
        </Box>
    );
};

export const OnboardingSteps = ({ steps }: OnBoardingStepProps) => {
    return (
        <Box
            component="ol"
            sx={{
                p: 0,
                m: 0,

                mt: {
                    xs: '1.75rem',
                    lg: '0.1rem',
                },

                display: 'grid',

                gridTemplateColumns: {
                    xs: 'minmax(0, 1fr)',
                    sm: 'repeat(2, minmax(0, 1fr))',
                    lg: 'repeat(4, minmax(0, 1fr))',
                },

                columnGap: {
                    sm: '3rem',
                    lg: 'clamp(4rem, 6dvw, 7rem)',
                },

                rowGap: {
                    xs: '2.5rem',
                    sm: '3rem',
                },

                alignItems: 'start',
            }}
        >
            {steps.map((step, index) => (
                <OnboardingStep
                    key={step.id}
                    title={step.title}
                    description={step.description}
                    icon={step.icon}
                    hasNextStep={index < steps.length - 1}
                />
            ))}
        </Box>
    );
};
