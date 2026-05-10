import { type GetCurrentUserApiResponse } from '../types/user.types';

export type UseRootLayout = () => {
    data?: GetCurrentUserApiResponse;
    isLoading: boolean;
};

export type RootLayoutViewProps = ReturnType<UseRootLayout>;
