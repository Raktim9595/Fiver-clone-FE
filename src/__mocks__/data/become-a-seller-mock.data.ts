import {
    ExperienceLevel,
    SellerApplication,
    SellerApplicationStatus,
    SellerOccupation,
    SellerOnBoardingSteps,
    SellerPersonalProfile,
    SellerProfessionalProfile,
} from '../../types/seller-application.types';
import { v7 as uuid } from 'uuid';
import { mockUserDataFromServer } from './user-mock.data';
import { mockLanguagesList } from './info-mock.data';

export const mockSellerOccupationData = (data?: Partial<SellerOccupation>): SellerOccupation => ({
    id: uuid(),
    name: 'Software Engineer',
    category: 'IT',
    ...data,
});

export const mockSellerPersonalProfile = (
    data?: Partial<SellerPersonalProfile>,
): SellerPersonalProfile => {
    return {
        id: uuid(),
        application: uuid(),
        displayName: 'John Doe',
        professionalHeadline: 'Software Engineer',
        description: 'I am a software engineer',
        country: 'Australia',
        phoneNumber: '0412345678',
        languages: mockLanguagesList(),
        createdAt: new Date().toISOString(),
        ...data,
    };
};

export const mockSellerProfessionalProfile = (
    data?: Partial<SellerProfessionalProfile>,
): SellerProfessionalProfile => {
    return {
        id: uuid(),
        application: uuid(),
        createdAt: new Date().toISOString(),
        yearsOfExperience: 5,
        active: true,
        professionalLevel: ExperienceLevel.INTERMEDIATE,
        skills: [],
        occupation: mockSellerOccupationData(data?.occupation),
        ...data,
    };
};

export const mockSellerApplicationData = (data?: Partial<SellerApplication>): SellerApplication => {
    return {
        id: uuid(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        status: SellerApplicationStatus.DRAFT,
        completionPercentage: 0,
        currentStep: SellerOnBoardingSteps.PERSONAL_PROFILE,
        user: mockUserDataFromServer(),
        personalProfile: mockSellerPersonalProfile(data?.personalProfile),
        professionalProfile: mockSellerProfessionalProfile(data?.professionalProfile),
        ...data,
    };
};
