import { Language } from './info.types';
import { BaseApiResponse, BaseCommonResponse } from './response.types';
import { User } from './user.types';

export const SellerApplicationStatus = {
    DRAFT: 'DRAFT',
    SUBMITTED: 'SUBMITTED',
    UNDER_REVIEW: 'UNDER_REVIEW',
    CHANGES_REQUIRED: 'CHANGES_REQUIRED',
    APPROVED: 'APPROVED',
    REJECTED: 'REJECTED',
    WITHDRAWN: 'WITHDRAWN',
};

export type SellerApplicationStatus =
    (typeof SellerApplicationStatus)[keyof typeof SellerApplicationStatus];

export const SellerOnBoardingSteps = {
    PERSONAL_PROFILE: 'PERSONAL_PROFILE',
    PROFESSIONAL_PROFILE: 'PROFESSIONAL_PROFILE',
    REVIEW: 'REVIEW',
    ONBOARDING_COMPLETE: 'ONBOARDING_COMPLETE',
};

export type SellerOnBoardingSteps =
    (typeof SellerOnBoardingSteps)[keyof typeof SellerOnBoardingSteps];

export const ExperienceLevel = {
    BEGINER: 'BEGINER',
    INTERMEDIATE: 'INTERMEDIATE',
    PR0: 'PRO',
};

export type ExperienceLevel = (typeof ExperienceLevel)[keyof typeof ExperienceLevel];

export type SellerOccupation = {
    id: string;
    name: string;
    category: string;
};

export type SellerSkill = {
    id: string;
    skill: string;
};

export type StartSellerApplicationRequestBody = {
    userId: string;
};

export type SellerPersonalProfile = BaseCommonResponse & {
    application: string;
    displayName: string;
    professionalHeadline: string;
    description: string;
    country: string;
    phoneNumber: string;
    languages: Language[];
};

export type SellerProfessionalProfile = BaseCommonResponse & {
    application: string;
    yearsOfExperience: number;
    active: boolean;
    professionalLevel: ExperienceLevel;
    occupation: SellerOccupation;
    skills: SellerSkill[];
};

export type SellerApplication = BaseCommonResponse & {
    status: SellerApplicationStatus;
    currentStep: SellerOnBoardingSteps;
    completionPercentage: number;
    submittedAt?: string;
    reviewStartedAt?: string;
    approvedAt?: string;
    rejectedAt?: string;
    user: User;
    personalProfile: SellerPersonalProfile;
    professionalProfile: SellerProfessionalProfile;
};

export type StartSellerApplicationApiResponse = BaseApiResponse<SellerApplication>;
