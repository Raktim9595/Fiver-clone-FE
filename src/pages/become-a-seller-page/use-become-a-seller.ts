import { useMutation } from '@tanstack/react-query';
import { UseBecomeASeller } from './become-a-seller-page.types';
import {
    StartSellerApplicationApiResponse,
    StartSellerApplicationRequestBody,
} from '../../types/seller-application.types';
import { ApiErrorResponse } from '../../types/response.types';
import { startSellerApplication } from '../../services/become-a-seller/become-a-seller.service';
import { useCurrentUser } from '../../utils/hooks';
import { useNavigate } from 'react-router';
import { PATH } from '../../utils/routing/paths';

export const useBecomeASeller: UseBecomeASeller = () => {
    const { user } = useCurrentUser();
    const navigate = useNavigate();

    const { mutate } = useMutation<
        StartSellerApplicationApiResponse,
        ApiErrorResponse,
        StartSellerApplicationRequestBody
    >({
        mutationFn: startSellerApplication,
    });

    const startApplication = (redirectTo: string) => {
        mutate(
            {
                userId: user.id,
            },
            {
                onSuccess: () => {
                    navigate(redirectTo);
                },
                onError: (err) => {
                    // TODO: if error code is of application already exists then fetch the application and redirect to onboarding
                    // TODO: otherwise show the error message
                },
            },
        );
    };

    const handleStartOnboarding = () => {
        startApplication(PATH.SELLER_APPLICATION.ONBOARDING);
    };

    return {
        handleStartOnboarding,
        handleSaveForLater: () => {},
    };
};
