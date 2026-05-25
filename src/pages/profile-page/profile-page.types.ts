import { type User } from '../../types/user.types';

export type UseProfilePage = () => {
    user?: User;
    isLoading: boolean;
};

export type ProfilePageViewProps = ReturnType<UseProfilePage>;
