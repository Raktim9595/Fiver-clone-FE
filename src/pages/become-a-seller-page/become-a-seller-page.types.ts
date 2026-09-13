import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import VerifiedUserRoundedIcon from '@mui/icons-material/VerifiedUserRounded';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';

/**
 * Content is kept outside the rendering components so the UI remains
 * declarative and future copy changes do not require editing component markup.
 */
export const SELLER_BENEFITS = [
    'Create and publish gigs',
    'Receive and manage orders',
    'Communicate with buyers',
    'Track earnings and performance',
];

export const ONBOARDING_STEPS = [
    {
        id: 'profile',
        title: 'Build your profile',
        description: 'Tell us about yourself',
        icon: AssignmentOutlinedIcon,
    },
    {
        id: 'professional-details',
        title: 'Add professional details',
        description: 'Share your skills and experience',
        icon: PersonRoundedIcon,
    },
    {
        id: 'identity',
        title: 'Verify your identity',
        description: 'Help us keep our community safe',
        icon: VerifiedUserRoundedIcon,
    },
    {
        id: 'review',
        title: 'Submit for review',
        description: 'Our team will review your application',
        icon: FactCheckOutlinedIcon,
    },
];

/**
 * These colors are scoped to this feature for now.
 *
 * If the application uses the same values elsewhere, move them into the
 * application's MUI theme instead of maintaining a second token system here.
 */
export const SELLER_COLORS = {
    textPrimary: '#111827',
    textSecondary: '#526075',
    textMuted: '#5A687D',

    primary: '#10B957',
    primaryHover: '#079B44',

    softGreen: '#E8F8EF',

    border: '#DDE4EB',
    arrow: '#E4EAF0',

    background: '#FFFFFF',
};

export type InformationBadgeProps = {
    icon: React.ElementType;
    children: React.ReactNode;
};

export type SellerIllustrationProps = {
    src: string;
};

export type OnBoardingStepType = {
    id: string;
    title: string;
    description: string;
    icon: React.ElementType;
};

export type OnBoardingStepProps = {
    steps: OnBoardingStepType[];
};

export type UseBecomeASeller = () => {
    handleStartOnboarding: () => void;
    handleSaveForLater: () => void;
};

export type BecomeASellerPageViewProps = ReturnType<UseBecomeASeller>;
