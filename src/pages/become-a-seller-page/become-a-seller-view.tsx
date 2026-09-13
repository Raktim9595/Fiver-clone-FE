import { Box, Button, Typography } from '@mui/material';

import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
    BecomeASellerPageViewProps,
    ONBOARDING_STEPS,
    SELLER_BENEFITS,
    SELLER_COLORS,
} from './become-a-seller-page.types';
import { BenefitList } from './benifit-list';
import { InformationBadge } from './information-badge';
import { SellerIllustration } from './seller-illustration';
import { OnboardingSteps } from './onboarding-steps';
import sellerIllustrationUrl from '../../assets/create-seller-application-image-1.png';

export const BecomeASellerPageView = ({
    handleSaveForLater,
    handleStartOnboarding,
}: BecomeASellerPageViewProps) => {
    return (
        <Box
            component="main"
            sx={{
                width: '100%',
                minWidth: 0,

                overflowX: 'hidden',

                color: SELLER_COLORS.textPrimary,
                bgcolor: SELLER_COLORS.background,

                /*
                 * At the 1788px reference viewport this resolves to roughly
                 * the 70px outer margin visible in the supplied screenshot.
                 *
                 * Viewport sizing is bounded with clamp() so the page remains
                 * usable on smaller laptops and large external displays.
                 */
                px: {
                    xs: '1rem',
                    sm: 'clamp(1.5rem, 3dvw, 3rem)',
                    lg: 'clamp(3rem, 3.92dvw, 4.5rem)',
                },

                pt: {
                    xs: '2rem',
                    md: 'clamp(2.25rem, 4.7dvh, 3.1rem)',
                },

                pb: {
                    xs: '2rem',
                    lg: 'clamp(1rem, 2dvh, 1.5rem)',
                },
            }}
        >
            <HeroSection
                onStartOnboarding={handleStartOnboarding}
                onSaveForLater={handleSaveForLater}
            />

            <HowItWorksSection />
        </Box>
    );
};

const HeroSection = ({
    onStartOnboarding,
    onSaveForLater,
}: {
    onStartOnboarding: () => void;
    onSaveForLater: () => void;
}) => {
    return (
        <Box
            component="section"
            aria-labelledby="seller-onboarding-title"
            sx={{
                /*
                 * The additional desktop inset positions the heading close to
                 * x≈142px on the supplied reference image.
                 */
                px: {
                    xs: 0,
                    md: 'clamp(1rem, 2dvw, 2rem)',
                    lg: 'clamp(2rem, 4dvw, 4.5rem)',
                },

                /*
                 * min-height is intentional. A fixed height would make the
                 * content fragile when browser zoom, font settings or copy
                 * changes increase the required vertical space.
                 */
                minHeight: {
                    lg: 'clamp(31rem, 57dvh, 36rem)',
                },

                pb: {
                    xs: '3rem',
                    md: '2.5rem',
                    lg: 'clamp(2rem, 3.3dvh, 2.5rem)',
                },

                display: 'grid',

                gridTemplateColumns: {
                    xs: 'minmax(0, 1fr)',
                    md: 'minmax(0, 0.9fr) minmax(0, 1.1fr)',
                },

                columnGap: {
                    md: 'clamp(2rem, 4dvw, 5rem)',
                },

                alignItems: {
                    xs: 'start',
                    md: 'center',
                },
            }}
        >
            <Box
                component="header"
                sx={{
                    minWidth: 0,

                    maxWidth: {
                        md: '35rem',
                        xl: '36rem',
                    },
                }}
            >
                <Typography
                    id="seller-onboarding-title"
                    component="h1"
                    sx={{
                        m: 0,

                        maxWidth: '35rem',

                        color: SELLER_COLORS.textPrimary,

                        /*
                         * Typography uses rem-based sizing. We avoid scaling
                         * text directly with dvw because that produces poor
                         * readability on very narrow or very wide viewports.
                         */
                        fontSize: {
                            xs: 'clamp(2.35rem, 9dvw, 3rem)',
                            md: 'clamp(2.8rem, 3.5dvw, 3.45rem)',
                            xl: '3.45rem',
                        },

                        lineHeight: 1.02,

                        fontWeight: 700,

                        letterSpacing: '-0.035em',
                    }}
                >
                    Become a
                    <br />
                    successful seller
                </Typography>

                <Typography
                    component="p"
                    sx={{
                        m: 0,

                        mt: {
                            xs: '1.15rem',
                            lg: '1.3rem',
                        },

                        maxWidth: '34rem',

                        color: SELLER_COLORS.textSecondary,

                        fontSize: {
                            xs: '1.05rem',
                            sm: '1.15rem',
                            lg: '1.3rem',
                            xl: '1.42rem',
                        },

                        lineHeight: 1.32,

                        fontWeight: 400,

                        letterSpacing: '-0.01em',
                    }}
                >
                    Turn your skills into services and reach
                    {/*
                     * The reference design uses a deliberate two-line desktop
                     * composition. On smaller displays we return to natural
                     * inline wrapping instead of forcing an awkward break.
                     */}
                    <Box
                        component="span"
                        sx={{
                            display: {
                                xs: 'inline',
                                lg: 'block',
                            },
                        }}
                    >
                        {' '}
                        clients worldwide.
                    </Box>
                </Typography>

                <BenefitList benefits={SELLER_BENEFITS} />

                <Box
                    aria-label="Onboarding information"
                    sx={{
                        mt: {
                            xs: '1.5rem',
                            lg: '1.75rem',
                        },

                        display: 'flex',
                        flexWrap: 'wrap',

                        gap: {
                            xs: '0.7rem',
                            lg: '1.15rem',
                        },
                    }}
                >
                    <InformationBadge icon={AccessTimeOutlinedIcon}>
                        About 5-10 minutes
                    </InformationBadge>

                    <InformationBadge icon={LockOutlinedIcon}>
                        Information is secure and private
                    </InformationBadge>
                </Box>

                <Box
                    sx={{
                        mt: {
                            xs: '1.3rem',
                            lg: '1.4rem',
                        },

                        width: {
                            xs: '100%',
                            sm: '20.75rem',
                            lg: '21rem',
                            xl: '22rem',
                        },

                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Button
                        type="button"
                        variant="contained"
                        disableElevation
                        onClick={onStartOnboarding}
                        sx={{
                            minHeight: {
                                xs: '3.2rem',
                                lg: '3.35rem',
                            },

                            px: '1.5rem',

                            borderRadius: '0.4rem',

                            color: '#FFFFFF',

                            bgcolor: SELLER_COLORS.primary,

                            backgroundImage: 'linear-gradient(180deg, #18C860 0%, #08AC4C 100%)',

                            textTransform: 'none',

                            fontSize: {
                                xs: '1rem',
                                lg: '1.08rem',
                                xl: '1.12rem',
                            },

                            lineHeight: 1.2,

                            fontWeight: 700,

                            boxShadow: 'none',

                            transition: 'background-color 160ms ease',

                            '&:hover': {
                                bgcolor: SELLER_COLORS.primaryHover,

                                backgroundImage:
                                    'linear-gradient(180deg, #12B958 0%, #079B44 100%)',

                                boxShadow: 'none',
                            },

                            /*
                             * Do not remove keyboard focus simply because
                             * the visual design does not explicitly show it.
                             */
                            '&:focus-visible': {
                                outline: '0.1875rem solid rgba(16, 185, 87, 0.25)',

                                outlineOffset: '0.125rem',
                            },
                        }}
                    >
                        Start Seller Onboarding
                    </Button>

                    <Button
                        type="button"
                        variant="text"
                        onClick={onSaveForLater}
                        sx={{
                            alignSelf: 'center',

                            minHeight: '2.3rem',

                            mt: '0.15rem',

                            px: '0.75rem',
                            py: 0,

                            color: '#536075',

                            textTransform: 'none',

                            fontSize: {
                                xs: '0.93rem',
                                lg: '0.98rem',
                            },

                            lineHeight: 1.3,

                            fontWeight: 400,

                            '&:hover': {
                                bgcolor: 'transparent',
                                textDecoration: 'underline',
                            },

                            '&:focus-visible': {
                                outline: `0.125rem solid ${SELLER_COLORS.primary}`,

                                outlineOffset: '0.125rem',
                            },
                        }}
                    >
                        Save and continue later
                    </Button>
                </Box>
            </Box>

            <Box
                sx={{
                    minWidth: 0,

                    mt: {
                        xs: '3rem',
                        md: 0,
                    },

                    alignSelf: 'center',
                }}
            >
                <SellerIllustration src={sellerIllustrationUrl} />
            </Box>
        </Box>
    );
};

const HowItWorksSection = () => {
    return (
        <Box
            component="section"
            aria-labelledby="how-it-works-title"
            sx={{
                width: '100%',

                border: `0.0625rem solid ${SELLER_COLORS.border}`,

                borderRadius: '0.65rem',

                bgcolor: SELLER_COLORS.background,

                px: {
                    xs: '1.25rem',
                    sm: '2rem',
                    md: 'clamp(2.5rem, 4dvw, 4.75rem)',
                },

                pt: {
                    xs: '1.25rem',
                    lg: '1.05rem',
                },

                pb: {
                    xs: '1.75rem',
                    lg: 'clamp(1.4rem, 2.5dvh, 1.7rem)',
                },

                /*
                 * The card can expand naturally if text wraps due to browser
                 * zoom or localization; min-height only preserves the desktop
                 * composition seen in the reference.
                 */
                minHeight: {
                    lg: 'clamp(13.5rem, 23dvh, 14.5rem)',
                },
            }}
        >
            <Typography
                component="h2"
                id="how-it-works-title"
                sx={{
                    m: 0,

                    color: SELLER_COLORS.textPrimary,

                    fontSize: {
                        xs: '1.2rem',
                        lg: '1.25rem',
                        xl: '1.3rem',
                    },

                    lineHeight: 1.3,

                    fontWeight: 700,

                    letterSpacing: '-0.02em',
                }}
            >
                How it works
            </Typography>

            <OnboardingSteps steps={ONBOARDING_STEPS} />
        </Box>
    );
};
